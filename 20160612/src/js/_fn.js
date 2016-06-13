/**
 * 工具方法
 */

// 判断操作系统
function detectOS() { 
    var sUserAgent = navigator.userAgent; 
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows"); 
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel"); 
    if (isMac) return "Mac"; 
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac; 
    if (isUnix) return "Unix"; 
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1); 
    var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == "android";
    if (isLinux) {
    if(bIsAndroid) return "Android";
    else return "Linux"; 
    }
    if (isWin) { 
    var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1; 
    if (isWin2K) return "Win2000"; 
    var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || 
    sUserAgent.indexOf("Windows XP") > -1; 
    if (isWinXP) return "WinXP"; 
    var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1; 
    if (isWin2003) return "Win2003"; 
    var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1; 
    if (isWinVista) return "WinVista"; 
    var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1; 
    if (isWin7) return "Win7"; 
    } 
    return "other"; 
} 

 
function APPDown(){
    var ios = 'https://ad.apps.fm/GNZfabs7arqCu1oRxT3gDvE7og6fuV2oOMeOQdRqrE2nBK5AVcI9-S-10UZoq7P_urjYv6TX1wm8e-coWvUlas00Sjy-9REIf-KqzixCY4U';
    var Android = 'https://ad.apps.fm/tkfd04r4dxcGudYs0BPY2q5px440Px0vtrw1ww5B54zLvIIEY2TL1pcyA09eK7cfiGoUv6ck5zsybPsRVqKMKw';

    var downUrl = ios;


    if(detectOS() == 'Android'){
            downUrl = Android;
      } 


    $(".down-btn").attr("href",downUrl)

}