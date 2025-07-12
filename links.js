// =================================================================
// ==                                                             ==
// ==      你的連結資料庫！未來所有修改都在這個檔案完成。           ==
// ==                                                             ==
// =================================================================
const linkData = [
    // ... (您原有的 linkData 內容，此處省略以保持簡潔) ...
    {
        groupName: "第一群組：律師常用",
        links: [
            { name: "司法院裁判書查詢", url: "https://judgment.judicial.gov.tw/FJUD/default.aspx", icon: "fa-solid fa-scale-balanced" },
            { name: "法源六法", url: "https://six.lawbank.com.tw/", icon: "fa-solid fa-book-atlas" },
            { name: "法源法律網", url: "https://www.lawbank.com.tw/", icon: "fa-solid fa-landmark" },
            { name: "Lawsnote", url: "https://www.lawsnote.com/", icon: "fa-solid fa-magnifying-glass-chart" },
            { name: "立法院法律系統", url: "https://lis.ly.gov.tw/lglawc/lglawkm", icon: "fa-solid fa-building-columns" },
            { name: "司法院法學資料檢索", url: "https://lawsearch.judicial.gov.tw/", icon: "fa-solid fa-database" },
            { name: "檢察書類查詢", url: "https://psue.moj.gov.tw/psiqs/", icon: "fa-solid fa-folder-open" },
            { name: "司法院書状範例", url: "https://www.judicial.gov.tw/tw/lp-1361-1.html", icon: "fa-solid fa-file-import" },
            { name: "裁判費試算", url: "https://gdgt.judicial.gov.tw/judtool/wkc/GDGT23.htm", icon: "fa-solid fa-calculator" },
            { name: "公司登記查詢", url: "https://findbiz.nat.gov.tw/fts/query/QueryBar/queryInit.do", icon: "fa-solid fa-address-card" },
            { name: "判決主文查詢", url: "https://csdi3.judicial.gov.tw/judbp/wkw/WHD1A01.htm", icon: "fa-solid fa-file-contract" },
            { name: "庭期表查詢", url: "https://csdi3.judicial.gov.tw/judbp/wkw/WHD1A03.htm", icon: "fa-solid fa-calendar-days" },
            { name: "電子筆錄調閱", url: "https://www.ezlawyer.com.tw/", icon: "fa-solid fa-file-pen" },
            { name: "線上起訴單一登入", url: "https://portal.ezlawyer.com.tw/Login.do", icon: "fa-solid fa-paper-plane" },
            { name: "法扶律師系統", url: "https://lawyer.laf.org.tw/lafcsp/", icon: "fa-solid fa-hands-holding-child" },
            { name: "大法官解釋", url: "https://cons.judicial.gov.tw/judcurrent.aspx?fid=2195", icon: "fa-solid fa-gavel" },
            { name: "憲法法庭判決", url: "https://cons.judicial.gov.tw/judcurrentNew1.aspx?fid=38", icon: "fa-solid fa-scroll" },
            { name: "大法庭裁定統一見解", url: "https://tps.judicial.gov.tw/tw/lp-1110-011.html", icon: "fa-solid fa-handshake" },
            { name: "全國地政電子謄本", url: "https://ep.land.nat.gov.tw/Home/EpaperManual1", icon: "fa-solid fa-map" },
            { name: "強制險投保查詢", url: "https://ecard.cali.org.tw/PPCP_QRY/", icon: "fa-solid fa-shield-halved" },
        ]
    },
    {
        groupName: "第二群組：AI工具",
        links: [
            { name: "ChatGPT (多元)", url: "https://chatgpt.com/", icon: "fa-solid fa-robot" },
            { name: "Gemini (多元)", url: "https://aistudio.google.com/prompts/new_chat", icon: "fa-solid fa-brain" },
            { name: "Grok (多元)", url: "https://grok.com/", icon: "fa-solid fa-microchip" },
            { name: "NotebookLM (筆記)", url: "https://notebooklm.google.com/", icon: "fa-solid fa-book-open" },
            { name: "Perplexity (搜尋)", url: "https://www.perplexity.ai/", icon: "fa-solid fa-magnifying-glass" },
            { name: "XAnswer (搜尋)", url: "https://www.xanswer.com/", icon: "fa-solid fa-magnifying-glass-plus" },
            { name: "GAMMA (簡報)", url: "https://gamma.app/zh-tw", icon: "fa-solid fa-display" },
            { name: "Claude (寫程式)", url: "https://claude.ai/", icon: "fa-solid fa-code" },
            { name: "Liner (寫作風格)", url: "https://getliner.com/zh", icon: "fa-solid fa-highlighter" },
            { name: "Felo (心智圖)", url: "https://felo.ai/search", icon: "fa-solid fa-diagram-project" },
            { name: "Elevenlabs (讀稿)", url: "https://elevenlabs.io/", icon: "fa-solid fa-microphone" },
            { name: "KlingAI (影片)", url: "https://app.klingai.com/global/", icon: "fa-solid fa-film" },
            { name: "Hailuoai (影片)", url: "https://hailuoai.video/", icon: "fa-solid fa-video" },
            { name: "SONO (音樂)", url: "https://suno.com/home", icon: "fa-solid fa-music" },
            { name: "Deepseek (計算)", url: "https://www.deepseek.com/", icon: "fa-solid fa-calculator" },
            { name: "Sora (影片)", url: "https://sora.chatgpt.com/explore/videos", icon: "fa-solid fa-clapperboard" },
            { name: "Photoroom (照片)", url: "https://www.photoroom.com/zh-tw", icon: "fa-solid fa-image" },
            { name: "Bing (產圖)", url: "https://www.bing.com/images/create", icon: "fa-solid fa-palette" },
            { name: "Voicenotes (語音)", url: "https://voicenotes.com/", icon: "fa-solid fa-microphone" },
            { name: "Gitmind (心智圖)", url: "https://gitmind.com/tw/", icon: "fa-solid fa-sitemap" },
        ]
    },
    {
        groupName: "第三群組：網路資源",
        links: [
            { name: "律師學院(全律會)", url: "https://www.attorneys-academy.com/", icon: "fa-solid fa-graduation-cap" },
            { name: "台中律師學院", url: "https://www.tcbar-elearning.com/", icon: "fa-solid fa-school" },
            { name: "司法院電子出版品", url: "https://jirs.judicial.gov.tw/judlib/Default.asp", icon: "fa-solid fa-book-bookmark" },
            { name: "司法周刊", url: "https://www.judicial.gov.tw/tw/lp-1429-1.html", icon: "fa-solid fa-newspaper" },
            { name: "司法新聲", url: "https://ja.lawbank.com.tw/journal.aspx?page=1", icon: "fa-regular fa-newspaper" },
            { name: "檢察新論", url: "https://www.tph.moj.gov.tw/4421/4663/771344/Lpsimplelist", icon: "fa-solid fa-file-lines" },
            { name: "檢協會訊", url: "http://www.prosecutors.org.tw/Periodical.aspx", icon: "fa-regular fa-file-lines" },
            { name: "萬國法律雜誌", url: "https://www.taiwanlaw.com/cht/bim_detial.php?serial=139", icon: "fa-solid fa-globe" },
            { name: "刑事政策與犯罪研究", url: "https://www.cprc.moj.gov.tw/1563/1590/1591/Lpsimplelist", icon: "fa-solid fa-user-secret" },
            { name: "全國律師雜誌", url: "https://www.twba.org.tw/publication/articles", icon: "fa-solid fa-users" },
            { name: "台灣碩博士論文", url: "https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dwebmge", icon: "fa-solid fa-file-pdf" },
            { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 17", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 18", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 19", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 20", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
        ]
    },
    {
        groupName: "第四群組：線上課程",
        links: [
            { name: "臺大開放式課程", url: "https://ocw.aca.ntu.edu.tw/", icon: "fa-solid fa-laptop-code" },
            { name: "陽明交大開放課程", url: "https://ocw.nycu.edu.tw/", icon: "fa-solid fa-laptop-code" },
            { name: "清大開放式課程", url: "https://ocw.nthu.edu.tw/ocw/", icon: "fa-solid fa-laptop-code" },
            { name: "政大開放式課程", url: "https://ctld.video.nccu.edu.tw/", icon: "fa-solid fa-laptop-code" },
            { name: "民法債總(孫森焱)", url: "https://www.angle.com.tw/media/Web/Video/GroupDetail.aspx?1=1&iC=7805&iMG=4610", icon: "fa-solid fa-person-chalkboard" },
            { name: "MIT Open Course Ware", url: "https://ocw.mit.edu/", icon: "fa-solid fa-building-columns" },
            { name: "Harvard Online", url: "https://online.hbs.edu/", icon: "fa-solid fa-building-columns" },
            { name: "Stanford Online", url: "https://online.stanford.edu/", icon: "fa-solid fa-building-columns"},
            { name: "EWANT教育平台", url: "https://www.ewant.org/?redirect=0", icon: "fa-solid fa-network-wired" },
            { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 17", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 18", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 19", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 20", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
        ]
    },
    {
        groupName: "第五群組：待新增",
        links: [
            { name: "自訂名稱 1", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 2", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 3", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 4", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 5", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 6", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 7", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 8", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 9", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 17", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 18", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 19", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' }, { name: "自訂名稱 20", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
        ]
    },
    {
        groupName: "第六群組：臉書",
        links: [
            { name: "司法院", url: "https://www.facebook.com/judicial.gov.tw/?locale=zh_TW", icon: "fa-brands fa-facebook" },
            { name: "勞動部", url: "https://www.facebook.com/mol.labor", icon: "fa-brands fa-facebook" },
            { name: "勞保局", url: "https://www.facebook.com/ImLabor", icon: "fa-brands fa-facebook" },
            { name: "財政部賦稅署", url: "https://www.facebook.com/dot.gov.tw", icon: "fa-brands fa-facebook" },
            { name: "臺北市政府勞動局", url: "https://www.facebook.com/taipeilabornews", icon: "fa-brands fa-facebook" },
            { name: "新北勞動雲", url: "https://www.facebook.com/ilaborntpc", icon: "fa-brands fa-facebook" },
            { name: "勞動in台中", url: "https://www.facebook.com/workintaichung", icon: "fa-brands fa-facebook" },
            { name: "小勞向前行", url: "https://www.facebook.com/laborboy.kcg", icon: "fa-brands fa-facebook" },
            { name: "桃園市政府勞動局", url: "https://www.facebook.com/lhrb.tycg", icon: "fa-brands fa-facebook" },
            { name: "自訂名稱 10", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 11", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 12", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 13", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 14", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 17", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 18", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 19", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 20", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
        ]
    },
    {
        groupName: "第七群組：律師公會",
        links: [
            { name: "全國律師聯合會", url: "https://www.twba.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "基隆律師公會", url: "http://www.klbar.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "臺北律師公會", url: "https://www.tba.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "桃園律師公會", url: "https://www.tybar.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "新竹律師公會", url: "https://www.hcbara.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "臺中律師公會", url: "https://www.tcbar.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "彰化律師公會", url: "https://chbar.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "南投律師公會", url: "http://www.ntbar.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "雲林律師公會", url: "http://www.ylba.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "嘉義律師公會", url: "http://www.chyba.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "高雄律師公會", url: "http://www.kba.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "屏東律師公會", url: "http://www.ptba.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "花蓮律師公會", url: "https://hualienbar-association.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "宜蘭律師公會", url: "https://ilanbar.org.tw/", icon: "fa-solid fa-building-user" },
            { name: "自訂名稱 15", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 16", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 17", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 18", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 19", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
            { name: "自訂名稱 20", url: "#", icon: "fa-solid fa-screwdriver-wrench", status: 'placeholder' },
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 原有的儀表板功能 (搜尋、連結生成、回到頂部、懸浮面板) ---
    // (此處省略您原有的程式碼，只顯示整合後的結果)

    // 1a. 處理 Google 搜尋框功能
    const searchForm = document.getElementById('google-search-form');
    const searchInput = document.getElementById('search-input');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const query = searchInput.value.trim();
            if (query === '') return;
            const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(googleSearchURL, '_blank');
        });
    }

    // 1b. 處理法源六法搜尋框功能
    const lawbankSearchForm = document.getElementById('lawbank-search-form');
    const lawbankSearchInput = document.getElementById('lawbank-search-input');

    if (lawbankSearchForm) {
        lawbankSearchForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const query = lawbankSearchInput.value.trim();
            if (query === '') return;
            const lawbankSearchURL = `https://six.lawbank.com.tw/Search/Result?keywords=${encodeURIComponent(query)}`;
            window.open(lawbankSearchURL, '_blank');
        });
    }

    // 2. 處理導航標籤和連結卡片的生成
    const quickNavContainer = document.getElementById('quick-nav');
    const linkContainer = document.getElementById('link-container');
    
    if (quickNavContainer && linkContainer) {
        let quickNavHTML = '';
        let linksHTML = '';
        
        linkData.forEach((group, index) => {
            const groupId = `group-${index}`;
            quickNavHTML += `<a href="#${groupId}" class="quick-nav-tag">${group.groupName}</a>`;
            linksHTML += `<section id="${groupId}" class="link-group"><h2>${group.groupName}</h2><div class="grid-container">`;
            group.links.forEach(link => {
                const placeholderClass = link.status === 'placeholder' ? ' is-placeholder' : '';
                const formattedName = link.name.replace('(', '<br>(');
                linksHTML += `<a href="${link.url}" target="_blank" class="link-card${placeholderClass}" title="${link.name}"><div class="icon-container"><i class="${link.icon}"></i></div><p class="title">${formattedName}</p></a>`;
            });
            linksHTML += `</div></section>`;
        });

        quickNavContainer.innerHTML = quickNavHTML;
        linkContainer.innerHTML = linksHTML;
    }

    // 3. 處理回到最上層按鈕的邏輯
    const backToTopButton = document.getElementById('back-to-top-btn');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            backToTopButton.classList.toggle('show', window.scrollY > 300);
        });
        backToTopButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 4. 處理手機版懸浮面板的展開與收合
    const floatingPanel = document.querySelector('.floating-panel');
    if (floatingPanel) {
        document.addEventListener('click', function(event) {
            if (window.innerWidth > 767) return;
            const isClickInsidePanel = floatingPanel.contains(event.target);
            const isPanelExpanded = floatingPanel.classList.contains('is-expanded');
            if (!isPanelExpanded && isClickInsidePanel) {
                event.preventDefault();
                floatingPanel.classList.add('is-expanded');
            } else if (isPanelExpanded && !isClickInsidePanel) {
                floatingPanel.classList.remove('is-expanded');
            }
        });
    }

    // =================================================================
    // ==== 天氣查詢小工具的程式碼開始 ====
    // =================================================================

    const locationSelect = document.getElementById('location-select');
    const weatherDisplay = document.getElementById('weather-display');
    const dayToggleButton = document.getElementById('day-toggle-btn');
    const todayLabel = dayToggleButton.querySelector('.toggle-label.today');
    const tomorrowLabel = dayToggleButton.querySelector('.toggle-label.tomorrow');

    // 確保這些天氣相關的元素都存在才執行後續程式碼
    if (locationSelect && weatherDisplay && dayToggleButton) {

        const ICONS = {
            sun: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
            cloud: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
            cloudy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`,
            'cloud-rain': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path><path d="M8 19v1"></path><path d="M8 14v1"></path><path d="M16 19v1"></path><path d="M16 14v1"></path><path d="M12 21v1"></path><path d="M12 16v1"></path></svg>`,
            'cloud-lightning': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path><path d="m13 12-3 5h4l-3 5"></path></svg>`,
            snowflake: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>`,
        };

        function getWeatherIcon(description) {
            if (description.includes('雷')) return ICONS['cloud-lightning'];
            if (description.includes('雨')) return ICONS['cloud-rain'];
            if (description.includes('雪')) return ICONS.snowflake;
            if (description.includes('多雲')) return ICONS.cloudy;
            if (description.includes('晴')) return ICONS.sun;
            if (description.includes('陰') || description.includes('雲')) return ICONS.cloud;
            return ICONS.cloud;
        }

        let allForecasts = [];
        let currentDayIndex = 0;

        function renderWeather(dayIndex) {
            if (!allForecasts[dayIndex]) return;
            const forecast = allForecasts[dayIndex];
            const iconSvg = getWeatherIcon(forecast.description);
            const html = `
                <div class="weather-row">
                    <span class="weather-icon">${iconSvg}</span>
                    <span class="description">${forecast.description}</span>
                    <span class="temperature">溫度: ${forecast.temperature}</span>
                    <span class="pop">降雨機率: ${forecast.pop}</span>
                </div>
            `;
            weatherDisplay.innerHTML = html;
        }

        function updateToggleVisuals() {
            dayToggleButton.classList.toggle('toggled', currentDayIndex === 1);
            todayLabel.classList.toggle('active', currentDayIndex === 0);
            tomorrowLabel.classList.toggle('active', currentDayIndex === 1);
        }
        
        async function fetchAndDisplayWeather(cityId) {
            weatherDisplay.innerHTML = `<p class="loading">查詢中...</p>`;
            dayToggleButton.classList.add('disabled');
            allForecasts = [];
            currentDayIndex = 0;
            updateToggleVisuals();
            
            const apiEndpoint = `/api/rss-weather?cityId=${cityId}`;

            try {
                const response = await fetch(apiEndpoint);
                if (!response.ok) throw new Error('伺服器回應錯誤');
                
                allForecasts = await response.json();
                if (!Array.isArray(allForecasts) || allForecasts.length === 0) {
                    throw new Error('資料格式不正確');
                }
                renderWeather(0);
                if (allForecasts.length > 1) {
                    dayToggleButton.classList.remove('disabled');
                }
            } catch (error) {
                weatherDisplay.innerHTML = `<p class="error">查詢失敗：${error.message}</p>`;
            }
        }

        dayToggleButton.addEventListener('click', () => {
            if (dayToggleButton.classList.contains('disabled')) return;
            currentDayIndex = 1 - currentDayIndex;
            renderWeather(currentDayIndex);
            updateToggleVisuals();
        });

        locationSelect.addEventListener('change', (event) => {
            fetchAndDisplayWeather(event.target.value);
        });

        fetchAndDisplayWeather(locationSelect.value);
    }
});