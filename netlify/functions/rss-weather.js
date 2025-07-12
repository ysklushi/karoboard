const Parser = require('rss-parser');
const parser = new Parser();

// 輔助函式...
function parseWeatherSegment(segment) {
    if (!segment) return null;
    let temperature = 'N/A', pop = 'N/A';
    const tempMatch = segment.match(/溫度: (\d+\s*~\s*\d+)/);
    if (tempMatch) temperature = tempMatch[1] + ' °C';
    const popMatch = segment.match(/降雨機率: (\d+%)/);
    if (popMatch) pop = popMatch[1];
    let description = segment;
    if (tempMatch) description = description.replace(tempMatch[0], '');
    if (popMatch) description = description.replace(popMatch[0], '');
    return { description: description.trim(), temperature, pop };
}

exports.handler = async function (event, context) {
    const { cityId } = event.queryStringParameters;
    if (!cityId) {
        return { statusCode: 400, body: JSON.stringify({ error: '缺少 cityId 參數' }) };
    }
    try {
        const rssUrl = `https://www.cwa.gov.tw/rss/forecast/36_${cityId}.xml`;
        const feed = await parser.parseURL(rssUrl);
        if (!feed.items || feed.items.length === 0) throw new Error('RSS feed 中沒有項目');
        
        const content = feed.items[0].content;
        const cityName = feed.title.split(' ')[0];
        const contentWithoutCity = content.replace(cityName, '').trim();
        const segments = contentWithoutCity.split(/(明日|今晚)/).filter(Boolean);
        
        const forecasts = [];
        for (let i = 0; i < segments.length; i += 2) {
            if (segments[i] && segments[i+1]) {
                const fullSegment = segments[i] + segments[i+1];
                const weatherData = parseWeatherSegment(fullSegment);
                if (weatherData) forecasts.push(weatherData);
            }
        }
        return { statusCode: 200, body: JSON.stringify(forecasts) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};