// =================================================================
// ==                                                             ==
// ==      你的連結資料庫！未來所有修改都在這個檔案完成。           ==
// ==                                                             ==
// =================================================================
const linkData = [
    // ... (此處的 linkData 內容與您原有的相同，故省略) ...
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


// --- 以下是自動化腳本 ---
document.addEventListener('DOMContentLoaded', function() {
    
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
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    }

    // 4. 處理手機版懸浮面板點擊展開/收合的功能 (已修正邏輯)
    const floatingPanel = document.querySelector('.floating-panel');
    if (floatingPanel) {
        floatingPanel.addEventListener('click', function(event) {
            // 此功能只在手機寬度下作用
            if (window.innerWidth > 767) {
                return;
            }

            // 檢查點擊的是否為按鈕
            const clickedButton = event.target.closest('a.panel-button');

            // 如果面板是收合狀態
            if (!floatingPanel.classList.contains('is-expanded')) {
                // 阻止任何預設行為 (例如點擊到按鈕時的跳轉)
                event.preventDefault();
                // 為面板加上 'is-expanded' class 來展開它
                floatingPanel.classList.add('is-expanded');
            } 
            // 如果面板是展開狀態，且點擊的不是按鈕 (即點擊了面板的空白背景處)
            else if (!clickedButton) {
                 // 則收合面板
                floatingPanel.classList.remove('is-expanded');
            }
            // 如果面板是展開狀態，且點擊的是按鈕，則此處不做任何事，讓連結正常跳轉
        });
    }
});