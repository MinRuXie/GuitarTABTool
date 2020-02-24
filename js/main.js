// 等 HTML 載入完成
$(function(){

    /* 預先載入圖片 */
    function preloadImg(image) {
        let img = new Image();
        img.src = image;
    }

    let pics = [
        '../PianoNotationConversionTool/image/lg.rainy-preloader.gif',
        '../PianoNotationConversionTool/image/lg.rotating-squares-preloader-gif.gif',
    ];

    for(let i=0;i<pics.length;i++){
        preloadImg(pics[i]);
    }
    
    
    // 等資源載入完成後才顯示畫面
    // window.onload = function(){
    //     $('.loading').hide();
    // };

    // 載入動畫 1 秒
    setTimeout(function(){
        $('.loading').fadeOut();
    }, 1000);


    // 變數準備
    let $guitar = $('.guitar');
    let $text = $('.text');
    let $text_tabs = $text.find('.tabs-panel');
    let $toolbox = $('.toolbox');
    let $toolbox_btn = $('#toolbox-btn');

    $('.toolbutton').eq(3).css('display', 'none'); // 開啟

    //-------------------
    // 吉他面板控制
    //-------------------
    function controlPianoLayout(kind){
        switch(kind){
            case "close": {
                $text.stop().animate({'height': '100%'}, 300);
                $toolbox.stop().animate({'height': '100%'}, 300);
                $guitar.stop().animate({'bottom': '-35%'}, 300)
                
                $('.toolbutton').eq(3).css('display', 'block'); // 開啟吉他按鈕
                $('.toolbutton').eq(4).css('display', 'none'); // 關閉吉他按鈕
                break;
            }
            case "open": {
                $text.stop().animate({'height': '65%'}, 300);
                $toolbox.stop().animate({'height': '65%'}, 300);
                $guitar.stop().animate({'bottom': '0'}, 300);
                
                $('.toolbutton').eq(3).css('display', 'none'); // 開啟吉他按鈕
                $('.toolbutton').eq(4).css('display', 'block'); // 關閉吉他按鈕
                break;
            }
        }
    }

    //-------------------
    // 修改歌名
    //-------------------
    $('.title').on('dblclick', function(event){
        var pre_name = $('.title').html(); // 預設值為上次輸入的歌名
        var decodeHtml = htmlDecode(pre_name); //用浏览器内部转换器实现html解码
        var song_name = prompt('請輸入歌名：', decodeHtml);
        
        if(song_name == null){
            song_name = decodeHtml;
        }
        $('.title').text(song_name); // 顯示新歌名
    });

    //-------------------
    // 工具箱收合控制
    //-------------------
    $toolbox_btn.on('click', function(event){
        $toolbox.toggleClass('closed');
        $text.toggleClass('full');
    });

    //-------------------
    // 行動裝置
    //-------------------
    if(isMobile.phone){
        $('.toolbutton').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).addClass('selected');

                switch(index){
                    case 0: { // 刪除
                        // 刪除簡譜
                        
                        break;
                    }
                    case 1: { // 空格
                        // 紀錄簡譜
                        
                        break;
                    }
                    case 2: { // 換行
                        // 新增簡譜軌道
                        
                        break;
                    }
                    case 3: { // 開啟鋼琴
                        controlPianoLayout('open');
                        break;
                    }
                    case 4: { // 關閉鋼琴
                        controlPianoLayout('close');
                        break;
                    }
                }
            })
            .on('touchend', function(event){
                $(this).removeClass('selected');
            });
        });
	//-------------------
    // 電腦
    //-------------------
    }else{
        $('.toolbutton').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).addClass('selected');

                switch(index){
                    case 0: { // 刪除
                        // 刪除簡譜
                        
                        break;
                    }
                    case 1: { // 空格
                        // 紀錄簡譜
                        
                        break;
                    }
                    case 2: { // 換行
                        // 新增簡譜軌道
                        
                        break;
                    }
                    case 3: { // 開啟鋼琴
                        controlPianoLayout('open');
                        break;
                    }
                    case 4: { // 關閉鋼琴
                        controlPianoLayout('close');
                        break;
                    }
                }
            })
            .on('mouseup', function(event){
                $(this).removeClass('selected');
            });
        });
    }

});