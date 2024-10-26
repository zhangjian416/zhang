$(document).ready(function() {  
    const $links = $('.menu ul li');  
    const $mainDivs = $('.main > div');  
    const $menuManage = $('#menu_manage');  
    const $menuList = $('#menu_list');  
  
    $menuManage.click(function() {  
        // 切换菜单列表的显示状态  
        if ($menuList.css('display') === 'none') {  
            $menuList.css('display', 'block');  
        } else {  
            $menuList.css('display', 'none');  
            $mainDivs.css('display', 'none');  
            $links.css({  
                'background-color': '',  
                'color': ''  
            });  
        }  
    });  
  
    $links.click(function() {  
        $links.css({  
            'background-color': '',  
            'color': ''  
        });  
  
        // 隐藏所有main中的div  
        $mainDivs.css('display', 'none');  
  
        // 设置当前点击的链接的背景色和字体颜色  
        $(this).css({  
            'background-color': '#00ffff',  
            'color': '#ffffff'  
        });  
  
        // 根据点击的li获取对应的div并显示   
        const divToShowClass = this.id.replace('Link', '');  
        const $divToShow = $(`.${divToShowClass}`);  
        if ($divToShow.length) {  
            $divToShow.css('display', 'block');  
        }  
    });  
});