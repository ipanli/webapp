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
    
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if(detectOS() == 'Android'){
            downUrl = Android;
      } 

    $("a[href^='panliapp://']").on('click',function(e){
        e.preventDefault();
        if(isWeixinBrowser() || isQQBrowser()){
            window.open(downUrl)
            PL.open({
                content: '正在为您跳转...',
                time: 5
            });
        }else{
             if(isAndroid){
                //android
                //唤醒app并阻止接下来的js执行
                $('body').append("<iframe src='panliapp://openapp' style='display:none' target='' ></iframe>");
                // window.open('panliapp://openapp', "_self");
                // 没有安装应用会跳转下载地址
                
                setTimeout(function(){window.location = Android},1000);
            }else{
                //ios
                //唤醒app
                window.open('panliapp://openapp', "_self");


                //没有安装应用会跳到 appStore
                setTimeout(function(){
                    window.open('itms-apps://itunes.apple.com/app/id590216292')
                 },2000);
            }
        }
    })
    // $(".down-btn").attr("href",downUrl)

}



function loadImage(id,src,callback){

    var imgloader= new window.Image();
    //当图片成功加载到浏览器缓存
    imgloader.onload =function(evt)  
    {
        if(typeof(imgloader.readyState)=='undefined')
        {
        imgloader.readyState = 'undefined';
        }
                //在IE8以及以下版本中需要判断readyState而不是complete
        if ((imgloader.readyState=='complete'||imgloader.readyState=="loaded")||imgloader.complete){ 
            callback({'msg':'ok','src':src,'id':id});
        }else{
            imgloader.onreadystatechange(evt);
        }
    };
    //当加载出错或者图片不存在
    imgloader.onerror = function(evt){
        callback({'msg':'error','id':id});
    }
    //当加载状态改变                       
    imgloader.onreadystatechange = function(e) { 
        //此方法只有IE8以及一下版本会调用		
    } 

    imgloader.src=src;
   
}

function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}


function isWeixinBrowser() {
    var ua = window.navigator.userAgent.toLowerCase();
        return (/micromessenger/.test(ua)) ? true : false;
}

function isQQBrowser() {
    var ua = window.navigator.userAgent.toLowerCase();
    return (ua.match(/QQ/i) == "qq") ? true : false;
}