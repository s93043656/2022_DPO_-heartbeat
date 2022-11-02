var _html = "";
let _value = {
    day:['第1天','第2天','第3天','第4天','第5天','第6天','第7天','第8天','第9天','第10天','第11天','第12天','第13天','第14天','第15天','第16天','第17天','第18天','第19天','第20天','第21天','第22天','第23天','第24天','第25天','第26天','第27天','第28天'],

    img:[
        'img/icon/001.jpg','img/icon/002.jpg','img/icon/003.png','img/icon/004.jpg','img/icon/005.jpg',

        'img/icon/006.jpg','img/icon/007.jpg','img/icon/008.png','img/icon/009.jpg','img/icon/010.jpg',

        'img/icon/011.jpg','img/icon/012.jpg','img/icon/013.jpg','img/icon/014.jpg','img/icon/015.jpg',

        'img/icon/016.jpg','img/icon/017.jpg','img/icon/018.jpg','img/icon/019.jpg','img/icon/020.jpg',

        'img/icon/021.jpg','img/icon/022.png','img/icon/023.jpg','img/icon/024.jpg','img/icon/025.jpg',

        'img/icon/026.jpg','img/icon/027.jpg','img/icon/028.png'
    ],

    iconName:[
        '背包擴充卡','傳送符文','極化卷軸-赩(3日)','魔界商人之笛','角色屬性重置魔粉',
        '愛的訓練鞭','龍棚擴增支架','極化卷軸-翠(3日)','魔界商人之笛','世界頻道廣播器',
        '溫暖孵育燈','角色天賦重置卷軸','觸媒','龍巢獸欄鑰匙','強效時裝轉化液',
        '傳送符文','愛的訓練鞭','世界頻道廣播器','龍獸技能遺忘魔水','龍獸休憩券',
        '龍獸技能遺忘魔水','極化卷軸-靛(3日)','1天幸運藥水','魔界商人之笛','家具背包擴充卡',
        '觸媒','愛的訓練鞭','稱號：榮耀的奧賽拉人'
    ],

    number:[
        '1','3','1','2','1',
        '1','1','1','2','1',
        '1','1','2','1','1',
        '3','1','1','1','1',
        '1','1','1','2','1',
        '2','1','1'
    ],

    content:[
        '使用後，可擴充一排（8格）背包欄位。','可以將禱詞傳達給阿蒂烏斯，將祈禱者傳送到指定地點。','使用後會有紅色電流般的視覺效果流竄全身，並且全屬性增加5%。','使用後可隨機召喚一個存在五分鐘的魔界商人進行交易。','將角色屬性回歸到未分配狀態。',

        '強制野放所需要的物品。於龍巢介面內的龍獸訓練中使用。','擴充龍棚欄位所需要的物品。 （擴充龍棚欄位時，此物品可以抵扣所需消耗的晶鑽〉','使用後會有綠色電流視覺效果流串全身，獲得戰鬥經驗值加成30%。','使用後可隨機召喚一個存在五分鐘的魔界商人進行交易。','對同一伺服器的玩家發話，必須消耗此物品。',

        '在龍蛋孵育介面中，使用"立刻孵化"功能時所需的物品，可使龍蛋孵育的培育時間縮短。','將角色天賦回歸到未分配狀態。','製作過程加入觸媒，將增加成品品質提昇的機率。','擴充龍巢欄位所需要的物品。','使用後可將一般裝備轉化成時裝，並隨機獲得3%~7%的時裝轉化率。',

        '可以將禱詞傳達給阿蒂烏斯，將祈禱者傳送到指定地點。','強制野放所需要的物品。於龍巢介面內的龍獸訓練中使用。','對同一伺服器的玩家發話，必須消耗此物品。','讓龍獸遺忘技能所需要的物品。','擴充龍獸憩所空間所需要的物品。',

        '讓龍獸遺忘技能所需要的物品。','使用後會有藍色電流般的視覺效果，並提高行動、體力值恢復速度20%。','效果期間(含下線期間)增加50%綠色稀有度戰利品的掉落率。','使用後可隨機召喚一個存在五分鐘的魔界商人進行交易。','使用後，可擴充一排（5格）家具背包欄位。',
        
        '製作過程加入觸媒，將增加成品品質提昇的機率。','強制野放所需要的物品。於龍巢介面內的龍獸訓練中使用。','用以紀念參與龍心神殿版本的奧賽拉人的稱號。'
    ]

};

for (var i = 0; i <= 27 ; i++) {
    _html += '<tr><td>'+_value.day[i]+'</td><td><div class="td_h7 td_left"><img src="'+_value.img[i]+'"><p>'+_value.iconName[i]+'</p></div></td><td>'+_value.number[i]+'</td><td class="td_left">'+_value.content[i]+'</td></tr>';

}
$(".tb_content").html(_html);

$(function(){
    // nav bar--tab控制
	var _showTab = 0;
	$('ul.nav_bar_box li').eq(_showTab).addClass('active');
	$('.tab_content').hide().eq(_showTab).show();
	$('ul.nav_bar_box li').click(function() {
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		$this.addClass('active').siblings('.active').removeClass('active');
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
		return false;
	}).find('a').focus(function(){
		this.blur();
	});

    // btn top
    $('.btntop').click(
        function (){
            $('body,html').animate({scrollTop:'0px'},800)}
    );
    $(window).scroll(function() {
		if ( $(this).scrollTop() > 300){
			$('.btntop').fadeIn("fadeIn"),800;
		} else {
			$('.btntop').fadeOut("fadeOut"),800;
		}
	});
    // item1--menu
    $(function(){
        $('.item1_box').hide();
        $('.item1').click(function (){
            $('.item1_box').slideToggle(500);
        });
    });

    // item2--menu
    $(function(){
        $('.item2_box').hide();
        $('.item2').click(function (){
            $('.item2_box').slideToggle(500);
        });
    });
    // item2--menu展開內容
    $('.SUB2-1').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab2").offset().top},800)}
    );
    $('.SUB2-2').click(
        function (){
            $('body,html').animate({scrollTop:$("#map1").offset().top},800)}
    );
    $('.SUB2-3').click(
        function (){
        $('body,html').animate({ scrollTop: $("#map2").offset().top }, 800);
    }
    );
    $('.SUB2-4').click(
        function (){
            $('body,html').animate({scrollTop:$("#map3").offset().top},800)}
    );
    $('.SUB2-5').click(
        function (){
            $('body,html').animate({scrollTop:$("#map4").offset().top},800)}
    );

    
    $('.item3').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab3").offset().top},800);
            $('.item1_box').slideUp(500);
        }
    );
    $('.item4').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab4").offset().top},800);
            $('.item1_box').slideUp(500);
        }
    );
    $('.item5').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab5").offset().top},800);
            $('.item1_box').slideUp(500);
        }
    );

    // item1展開內容
    $('.SUB1').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab1_s1").offset().top},800)}
    );
    $('.SUB2').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab1_s2").offset().top},800)}
    );
    $('.SUB3').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab1_s3").offset().top},800)}
    );

    // item2展開內容
    $('.SUB4').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab2_s1").offset().top},800)}
    );
    $('.SUB5').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab2_s2").offset().top},800)}
    );
    $('.SUB6').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab2_s3").offset().top},800)}
    );
    $('.SUB7').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab2_s4").offset().top},800)}
    );
    $('.SUB8').click(
        function (){
            $('body,html').animate({scrollTop:$("#tab2_s5").offset().top},800)}
    );

});

// nav_bar收合
$('#XX, .topmenu').click(function () {
    $('.nav_bar').toggleClass('open');
});
$(window).on("load resize",function(){
    if ($(window).width() < 1025){
        $('.nav_bar').removeClass('open');
        $('.nav_bar_box a').click(function () {
            $('.nav_bar').removeClass('open');
        });
        $('.item1').click(function () {
            $('.nav_bar').addClass('open');
        });
    }else{
        $('.nav_bar').addClass('open');
        $('.nav_bar_box a').click(function () {
            $('.nav_bar').addClass('open');
        });
    }
});

// lightbox //
$(".popclose, .mask").click(function() {
    $('.popup').fadeOut(500);
    $("html").css("overflow", "scroll");
});
$(".pop_btn").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(500);
    $("html").css("overflow", "hidden");
});

// 尚未開放系統窗--開啟後，網頁新開視窗
function he(){
    alert('敬請期待!!');
};


particlesJS("particles-js", {"particles":{"number":{"value":101,"density":{"enable":true,"value_area":561.194221302933}},"color":{"value":"#ff7f4a"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":10,"height":20}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":320.6824121731046,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":12,"direction":"top","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":0,"rotateY":5371.430403899501}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});