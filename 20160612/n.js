//实际上就是新建一个iframe的生成器
var createIframe = (function() {
    var iframe;
    return function() {
        if (iframe) {
            return iframe;
        } else {
            iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            return iframe;
        }
    }
})()


var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isFirefox = navigator.userAgent.toUpperCase().indexOf("Firefox") ? true : false;
var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;

var baseScheme = "panliapp://";
var createScheme = function(options) {
    var urlScheme = baseScheme;
    for (var item in options) {
        urlScheme = urlScheme + item + '=' + encodeURIComponent(options[item]) + "&";
    }
    urlScheme = urlScheme.substring(0, urlScheme.length - 1);
    return encodeURIComponent(urlScheme);
}

function isGreaterThan9() {

    var agent = navigator.userAgent.toLowerCase();
    var version;
    if (agent.indexOf("like mac os x") > 0) {
        //ios
        var regStr_saf = /os [\d._]*/gi;
        var verinfo = agent.match(regStr_saf);
        version = (verinfo + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".");
    }

    var version_str = version + "";
    if (version_str != "undefined" && version_str.length > 0) {
        version = version.substring(0, 1);
        if (version >= 9) {
            return true;

        } else {
            return false;
        }
    }


}

var openApp = function() {
    //生成你的scheme你也可以选择外部传入
    var localUrl = createScheme({
        type: 1,
        id: "taobao://openapp"
    });
    var openIframe = createIframe();
    if (isiOS) {
        //判断是否是ios,具体的判断函数自行百度
        if (isGreaterThan9()) {
            //判断是否为ios9以上的版本,跟其他判断一样navigator.userAgent判断,ios会有带版本号
            localUrl = createScheme({
                type: 1,
                id: "taobao://openapp"
            }, true); //代码还可以优化一下
            alert("s")
            location.href = localUrl; //实际上不少产品会选择一开始将链接写入到用户需要点击的a标签里
            return;
        }
        window.location.href = localUrl;
        // var loadDateTime = Date.now();
        // setTimeout(function() {
        //     var timeOutDateTime = Date.now();
        //     if (timeOutDateTime - loadDateTime < 1000) {
        //         window.location.href = "你的下载页面";
        //     }
        // }, 25);
    } else if (isAndroid) {
        //判断是否是android，具体的判断函数自行百度
        if (isChrome) {
            //chrome浏览器用iframe打不开得直接去打开，算一个坑
            window.location.href = localUrl;
        } else {
            //抛出你的scheme
            openIframe.src = localUrl;
        }
        setTimeout(function() {
            window.location.href = "你的下载页面";
        }, 500);
    } else {
        //主要是给winphone的用户准备的,实际都没测过，现在winphone不好找啊
        openIframe.src = localUrl;
        setTimeout(function() {
            window.location.href = "你的下载页面";
        }, 500);
    }
}

openApp()