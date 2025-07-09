// =================================================================
// ==                                                             ==
// ==      你的連結資料庫！未來所有修改都在這個檔案完成。           ==
// ==                                                             ==
// =================================================================
const linkData = [
    {
        groupName: "第一群組：常用網站",
        links: [
            { name: "Google", url: "https://www.google.com", icon: "fa-brands fa-google" },
            { name: "YouTube", url: "https://www.youtube.com", icon: "fa-brands fa-youtube" },
            { name: "Facebook", url: "https://www.facebook.com", icon: "fa-brands fa-facebook" },
            { name: "GitHub", url: "https://github.com/", icon: "fa-brands fa-github" },
            { name: "Gmail", url: "https://mail.google.com", icon: "fa-solid fa-envelope" },
            { name: "雲端硬碟", url: "https://drive.google.com", icon: "fa-brands fa-google-drive" },
            { name: "翻譯", url: "https://translate.google.com", icon: "fa-solid fa-language" },
            { name: "地圖", url: "https://maps.google.com", icon: "fa-solid fa-map-location-dot" },
            { name: "自訂名稱 9", url: "#", icon: "fa-solid fa-star" }, { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-star" }, { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-star" }, { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-star" }, { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-star" }, { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-star" }, { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-star" }, { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-star" },
        ]
    },
    {
        groupName: "第二群組：工具與學習",
        links: [
            { name: "ChatGPT", url: "https://chat.openai.com", icon: "fa-solid fa-robot" },
            { name: "VS Code", url: "https://code.visualstudio.com/", icon: "fa-solid fa-code" },
            { name: "Figma", url: "https://www.figma.com", icon: "fa-brands fa-figma" },
            { name: "Canva", url: "https://www.canva.com", icon: "fa-solid fa-palette" },
            { name: "MDN Docs", url: "https://developer.mozilla.org/", icon: "fa-solid fa-book-atlas" },
            { name: "Stack Overflow", url: "https://stackoverflow.com/", icon: "fa-brands fa-stack-overflow" },
            { name: "Trello", url: "https://trello.com/", icon: "fa-brands fa-trello" },
            { name: "Notion", url: "https://www.notion.so/", icon: "fa-solid fa-file-signature" },
            { name: "自訂名稱 9", url: "#", icon: "fa-solid fa-link" }, { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-link" }, { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-link" }, { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-link" }, { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-link" }, { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-link" }, { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-link" }, { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-link" },
        ]
    },
    {
        groupName: "第三群組：影音娛樂",
        links: [
            { name: "自訂名稱 1", url: "#", icon: "fa-solid fa-film" }, { name: "自訂名稱 2", url: "#", icon: "fa-solid fa-music" }, { name: "自訂名稱 3", url: "#", icon: "fa-solid fa-gamepad" }, { name: "自訂名稱 4", url: "#", icon: "fa-solid fa-podcast" }, { name: "自訂名稱 5", url: "#", icon: "fa-solid fa-tv" }, { name: "自訂名稱 6", url: "#", icon: "fa-solid fa-headphones" }, { name: "自訂名稱 7", url: "#", icon: "fa-solid fa-ticket" }, { name: "自訂名稱 8", url: "#", icon: "fa-solid fa-video" },
            { name: "自訂名稱 9", url: "#", icon: "fa-solid fa-clapperboard" }, { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-microphone" }, { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-guitar" }, { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-record-vinyl" }, { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-compact-disc" }, { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-book" }, { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-book-open" }, { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-play" },
        ]
    },
    {
        groupName: "第四群組：購物與生活",
        links: [
            { name: "自訂名稱 1", url: "#", icon: "fa-solid fa-cart-shopping" }, { name: "自訂名稱 2", url: "#", icon: "fa-solid fa-tag" }, { name: "自訂名稱 3", url: "#", icon: "fa-solid fa-store" }, { name: "自訂名稱 4", url: "#", icon: "fa-solid fa-credit-card" }, { name: "自訂名稱 5", url: "#", icon: "fa-solid fa-receipt" }, { name: "自訂名稱 6", url: "#", icon: "fa-solid fa-utensils" }, { name: "自訂名稱 7", url: "#", icon: "fa-solid fa-plane" }, { name: "自訂名稱 8", url: "#", icon: "fa-solid fa-bed" },
            { name: "自訂名稱 9", url: "#", icon: "fa-solid fa-pills" }, { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-house" }, { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-car" }, { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-gas-pump" }, { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-briefcase" }, { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-gift" }, { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-heart" }, { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-mug-hot" },
        ]
    },
    {
        groupName: "第五群組：新聞與資訊",
        links: [
            { name: "自訂名稱 1", url: "#", icon: "fa-solid fa-newspaper" }, { name: "自訂名稱 2", url: "#", icon: "fa-solid fa-globe" }, { name: "自訂名稱 3", url: "#", icon: "fa-solid fa-cloud-sun" }, { name: "自訂名稱 4", url: "#", icon: "fa-solid fa-chart-line" }, { name: "自訂名稱 5", url: "#", icon: "fa-solid fa-magnifying-glass-chart" }, { name: "自訂名稱 6", url: "#", icon: "fa-solid fa-bullhorn" }, { name: "自訂名稱 7", url: "#", icon: "fa-solid fa-rss" }, { name: "自訂名稱 8", url: "#", icon: "fa-regular fa-comments" },
            { name: "自訂名稱 9", url: "#", icon: "fa-solid fa-at" }, { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-hashtag" }, { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-fire" }, { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-calendar-days" }, { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-clock" }, { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-lightbulb" }, { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-circle-info" }, { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-question" },
        ]
    },
    {
        groupName: "第六群組：社群與交流",
        links: [
            { name: "自訂名稱 1", url: "#", icon: "fa-brands fa-twitter" }, { name: "自訂名稱 2", url: "#", icon: "fa-brands fa-instagram" }, { name: "自訂名稱 3", url: "#", icon: "fa-brands fa-linkedin" }, { name: "自訂名稱 4", url: "#", icon: "fa-brands fa-discord" }, { name: "自訂名稱 5", url: "#", icon: "fa-brands fa-telegram" }, { name: "自訂名稱 6", url: "#", icon: "fa-brands fa-reddit" }, { name: "自訂名稱 7", url: "#", icon: "fa-brands fa-tiktok" }, { name: "自訂名稱 8", url: "#", icon: "fa-solid fa-users" },
            { name: "自訂名稱 9", url: "#", icon: "fa-solid fa-user-group" }, { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-user-plus" }, { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-comment" }, { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-share" }, { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-thumbs-up" }, { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-bell" }, { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-message" }, { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-camera" },
        ]
    },
    {
        groupName: "第七群組：其它",
        links: [
            { name: "自訂名稱 1", url: "#", icon: "fa-solid fa-folder-open" }, { name: "自訂名稱 2", url: "#", icon: "fa-solid fa-box-archive" }, { name: "自訂名稱 3", url: "#", icon: "fa-solid fa-download" }, { name: "自訂名稱 4", url: "#", icon: "fa-solid fa-upload" }, { name: "自訂名稱 5", url: "#", icon: "fa-solid fa-floppy-disk" }, { name: "自訂名稱 6", url: "#", icon: "fa-solid fa-print" }, { name: "自訂名稱 7", url: "#", icon: "fa-solid fa-file" }, { name: "自訂名稱 8", url: "#", icon: "fa-solid fa-image" },
            { name: "自訂名稱 9", url: "#", icon: "fa-solid fa-trash" }, { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-gear" }, { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-sliders" }, { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-wrench" }, { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-key" }, { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-lock" }, { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-lock-open" }, { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-plus" },
        ]
    }
];


// --- 以下是自動化腳本，您通常不需要修改它 ---
// 我們將所有操作都放在 DOMContentLoaded 事件中，確保頁面完全載入後才執行腳本
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 處理搜尋框功能
    const searchForm = document.getElementById('google-search-form');
    const searchInput = document.getElementById('search-input');
    
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const query = searchInput.value.trim();
        if (query === '') return;
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchURL, '_blank');
    });

    // 2. 處理連結卡片生成
    const container = document.getElementById('link-container');
    let finalHTML = '';
    
    linkData.forEach(group => {
        let groupHTML = `<section class="link-group"><h2>${group.groupName}</h2><div class="grid-container">`;
        group.links.forEach(link => {
            groupHTML += `<a href="${link.url}" target="_blank" class="link-card"><div class="icon-container"><i class="${link.icon}"></i></div><p class="title">${link.name}</p></a>`;
        });
        groupHTML += `</div></section>`;
        finalHTML += groupHTML;
    });

    container.innerHTML = finalHTML;
});