var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
         document.title = 'Σ(っ °Д °;)っ喔呦,别走阿！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
        // document.title = 'φ(゜▽゜*)♪咦,又回来了！' + OriginTitle;
		 document.title = 'φ(゜▽゜*)♪咦,又回来了！';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });