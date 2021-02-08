// 等 HTML 載入完成
$(function(){
    
    // 載入動畫 1 秒
    setTimeout(function(){
        $('.loading').fadeOut();
    }, 1000);

    // 音符 (空弦 + 21 格)
    let notes_array = [
        ['3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2'], // 第一弦
        ['7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6'], // 第二弦
        ['5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3'], // 第三弦
        ['2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7' ,'7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7'], // 第四弦
        ['6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5'], // 第五弦
        ['3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2']  // 第六弦
    ]

    //  C  D  E  F  G  A  B
    // do re mi fa sol la si
    //  1  2  3  4  5  6  7
    let notes_array_2 = [
        ['E5', 'F5', '#F5/bG5', 'G5', '#G5/bA5', 'A5', '#A5/bB5', 'B5', 'C6', '#C6/bD6', 'D6', '#D6/bE6', 'E6', 'F6', '#F6/bG6', 'G6', '#G6/bA6', 'A6', '#A6/bB6', 'B6', 'C7', '#C7/bD7'], // 第一弦
        ['B4', 'C5', '#C5/bD5', 'D5', '#D5/bE5', 'E5', 'F5', '#F5/bG5', 'G5', '#G5/bA5', 'A5', '#A5/bB5', 'B5', 'C6', '#C6/bD6', 'D6', '#D6/bE6', 'E6', 'F6', '#F6/bG6', 'G6', '#G6/bA6'], // 第二弦
        ['G4', '#G4/bA4', 'A4', '#A4/bB4', 'B4', 'C5', '#C5/bD5', 'D5', '#D5/bE5', 'E5', 'F5', '#F54/bG5', 'G5', '#G5/bA5', 'A5', '#A5/bB5', 'B5', 'C6', '#C6/bD6', 'D6', '#D6/bE6', 'E6'], // 第三弦
        ['D4', '#D4/bE4', 'E4', 'F4', '#F4/bG4', 'G4', '#G4/bA4', 'A4', '#A4/bB4' ,'B4', 'C5', '#C5/bD5', 'D5', '#D5/bE5', 'E5', 'F5', '#F5/bG5', 'G5', '#G5/bA5', 'A5', '#A5/bB5', 'B5'], // 第四弦
        ['A3', '#A3/bB3', 'B3', 'C4', '#C4/bD4', 'D4', '#D4/bE4', 'E4', 'F4', '#F4/bG4', 'G4', '#G4/bA4', 'A4', '#A4/bB4', 'B4', 'C5', '#C5/bD5', 'D5', '#D5/bE5', 'E5', 'F5', '#F5/bG5'], // 第五弦
        ['E3', 'F3', '#F3/bG3', 'G3', '#G3/bA3', 'A3', '#A3/bB3', 'B3', 'C4', '#C4/bD4', 'D4', '#D4/bE4', 'E4', 'F4', '#F4/bG4', 'G4', '#G4/bA4', 'A4', '#A4/bB4', 'B4', 'C5', '#C5/bD5']  // 第六弦
    ]

    let notes_array_3 = [
        ['5', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '7', '7'], // 第一弦
        ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6'], // 第二弦
        ['4', '4', '4', '4', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6'], // 第三弦
        ['4', '4', '4', '4', '4', '4', '4', '4', '4' ,'4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'], // 第四弦
        ['3', '3', '3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5', '5', '5'], // 第五弦
        ['3', '3', '3', '3', '3', '3', '3', '3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5', '5']  // 第六弦
    ]

    // 變數準備
    let $guitar = $('.guitar');
    let $text = $('.text');
    let $text_tabs = $text.find('.tabs-panel');
    let $toolbox = $('.toolbox');
    let $toolbox_btn = $('#toolbox-btn');
    let $intro = $('.intro-wrap');
    let $intro_closed_btn = $('.intro-wrap .ctr-btn');

    $('.toolbutton').eq(3).css('display', 'none'); // 開啟

    // 弦
    let chord_count = 6;
    let chord_bass = `<div class="chord bass"></div>`; // 低音弦
    let chord_treble = `<div class="chord treble"></div>`; // 高音弦

    // 格子
    let grid_count = 22; // 空弦 + 21 格

    // 軌道
    let line_html = `
        <div class="line selected">
            <span></span><span></span><span></span><span></span><span></span><span></span>
            <div class="del">X</div>
        </div>`

    // 建立琴弦 (6條)
    for (let i=0; i <= chord_count - 1; i++) {
        if (i < 3) {
            $guitar.append(chord_treble);
        }else {
            $guitar.append(chord_bass);
        }
    }

    // 建立格子 (6*22格)
    $('.chord').each(function(index){
        for (let i=0; i <= grid_count - 1; i++) {
            let grid = `
                <div class="grid" data-chord="${index+1}" data-grid="${i}" data-note="${notes_array_2[index][i]}" value="${notes_array[index][i]}">
                    <span class="note-${notes_array_3[index][i]}">${notes_array[index][i]}</span>
                </div>`;
            $(this).append(grid);
        }
    });

    // 建立軌道
    addLine();


    //-------------------
    // 新增軌道
    //-------------------
    function addLine() {
        if($text_tabs.find('.line').length >= 1){
            // 檢查最後一行軌道有無音符
            if($text_tabs.find('.line').last().children('.note').length !== 0){
                // 刪除所有軌道焦點
                $('.line').removeClass('selected');
                
                // 新增軌道至面板中
                $text_tabs.append(line_html);
            }
        }else{
            // 新增軌道至面板中
            $text_tabs.append(line_html);
        }
    
        let $line = $text_tabs.find('.line.selected');
        let $line_del_btn = $line.find('.del');
        
        // 裝上 刪除軌道事件
        $line_del_btn.on('click', function(event){
            // 刪除一行簡譜軌道
            delLine($line);
        });
    }

    //-------------------
    // 刪除軌道
    //-------------------
    function delLine(line) {
         // 檢查軌道數量
         if($text_tabs.find('.line').length > 1) {
            // 檢查軌道中是否有焦點
            // if (line.find('.selected').length != 0) {
                let $prevLine = line.prev('.line');
                let $nextLine = line.next('.line');

                // 移除所有焦點
                $text_tabs.find('.line').removeClass('selected');
                $text_tabs.find('.note').removeClass('selected'); 
                
                // 移動焦點置上或下一軌道的最後一個音符 (如果有)
                if ($prevLine.length != 0) {
                    $prevLine.find('.note').last().addClass('selected');
                    $prevLine.addClass('selected');
                } else if ($nextLine.length != 0) {
                    $nextLine.find('.note').last().addClass('selected');
                    $nextLine.addClass('selected');
                }

                console.log('hello');
            // }            

            // 移除軌道
            line.remove();
        } else {
            // 移除所有焦點
            $text_tabs.find('.line').removeClass('selected');
            $text_tabs.find('.note').removeClass('selected'); 
            
            // 刪除該軌道的音符
            line.children().not('.del').not('span').remove();
            
            // 增加軌道焦點
            line.addClass('selected');
        }
    }

    //-------------------
    // 新增音符
    //-------------------
    function addTABNote(note_color, chord, grid) {
        let tab_note = `
            <div class="note selected">
                <span class="${note_color} chord-${chord}">${grid}</span>
            </div>`;
        
        // 刪除所有音符焦點
        $('.note.selected').removeClass('selected');
        
        // 新增音符至焦點軌道
        $('.line.selected').append(tab_note);
    }

    //-------------------
    // 刪除音符
    //-------------------
    function delTABNote() {
        // 目前焦點音符
        let $focuseNote = $text_tabs.find(".note.selected");

        // 將焦點移置前一個或後一個音符 (如果有)
        let $prevNote = $focuseNote.prev('.note');
        let $nextNote = $focuseNote.next('.note');
        
        if ($prevNote.length != 0) {
            $prevNote.addClass('selected');
        } else if ($nextNote.length != 0) {
            $nextNote.addClass('selected');
        }

        // 移除目前焦點音符
        $focuseNote.remove();
    }
    
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
    // 關閉功能說明
    //-------------------
    $intro_closed_btn.on('click', function(event) {
        $intro.removeClass('active');
        $('.toolbutton').eq(6).removeClass('selected');
    });

    //-------------------
    // 行動裝置
    //-------------------
    if(isMobile.phone){
        $('.line').each(function(index){
            $('.grid').each(function(index2){
                $(this).on('touchstart', function(event){
                    let note_color = $(this).find('span').attr('class');
                    let chord = $(this).attr('data-chord');
                    let grid = $(this).attr('data-grid');
                    
                    // 產生 TAB
                    addTABNote(note_color, chord, grid);
                });
            });
        });

        $('.toolbutton').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).addClass('selected');

                switch(index){
                    case 0: { // 刪除
                        // 刪除簡譜
                        delTABNote();
                        break;
                    }
                    case 1: { // 空格
                        // 紀錄簡譜
                        addTABNote('note-space', 0, '');
                        break;
                    }
                    case 2: { // 換行
                        // 新增簡譜軌道
                        addLine();
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
                    case 5: { // 開啟 功能說明
                        $intro.addClass('active');
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
        $('.line').each(function(index){
            $('.grid').each(function(index2){
                $(this).on('mousedown', function(event){
                    let note_color = $(this).find('span').attr('class');
                    let chord = $(this).attr('data-chord');
                    let grid = $(this).attr('data-grid');
                    
                    // 紀錄簡譜
                    addTABNote(note_color, chord, grid);
                });
            });
        });
        
        $('.toolbutton').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).addClass('selected');

                switch(index){
                    case 0: { // 刪除
                        // 刪除簡譜
                        delTABNote();
                        break;
                    }
                    case 1: { // 空格
                        // 紀錄簡譜
                        addTABNote('note-space', 0, '');
                        break;
                    }
                    case 2: { // 換行
                        // 新增簡譜軌道
                        addLine();
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
                    case 5: { // 開啟 功能說明
                        $intro.addClass('active');
                        break;
                    }
                }
            })
            .on('mouseup', function(event){
                $(this).removeClass('selected');
            });
        });
    }

    //---------------------------------------------
    // 用浏览器内部转换器实现html解码
    // 來源: https://www.cnblogs.com/xdp-gacl/p/3722642.html
    //---------------------------------------------
    function htmlDecode(text){
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement("div");
        //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
        temp.innerHTML = text;
        //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }
});