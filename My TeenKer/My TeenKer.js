/**
 * Created by root on 2017/2/19.
 */
$(document).ready(function(){
    var w_height=$(window).height()/2;
    var e_height=$('.edge-wrapper').height()/2;
    var o_height=$('.edge-wrapper')[0].offsetTop;

    $(document).scroll(function(){
        var s_height=$('body').scrollTop();
        if(o_height-s_height<w_height-e_height){
            $('.edge-wrapper').addClass('fixed');
        }else{
            $('.edge-wrapper').removeClass('fixed');
        }
    });




    $('.small-box').click(function(){
        $(this).addClass('hidden1').siblings().removeClass('hidden2');
    });
    $('.close').click(function(){
       $('.big-box').addClass('hidden2').siblings().removeClass('hidden1');
    });

    $('.close').mouseover(function(){
        $(this).animate({rotate:'180deg'},1000)
    });
    $('.close').mouseout(function(){
        $(this).animate({rotate:'-180deg'},1000)
    });

    var data1=[
        {
            categoryName:'公众号专区',
            childCategoryList:[{
                categoryName:'日常推送'
            },{
                categoryName:'精品原创'
            },{
                categoryName:'深度爆款'
            },{
                categoryName:'润色与修改'
            },{
                categoryName:'排版（十篇）'
            },{
                categoryName:'公众号注册'
            },{
                categoryName:'原创插画'
            }]
        },{
            categoryName:'写作与翻译',
            childCategoryList:[{
                categoryName:'软文新闻稿'
            },{
                categoryName:'产品描述'
            },{
                categoryName:'中英翻译'
            }]
        },{
            categoryName:'设计',
            childCategoryList:[{
                categoryName:'LOGO'
            },{
                categoryName:'高阶版LOGO'
            },{
                categoryName:'海报'
            },{
                categoryName:'图标/按钮'
            },{
                categoryName:'Banner/广告'
            },{
                categoryName:'专题页面'
            },{
                categoryName:'全站设计'
            },{
                categoryName:'PPT'
            }]
        },{
            categoryName:'营销推广',
            childCategoryList:[{
                categoryName:'战略与执行'
            },{
                categoryName:'APP搜索优化'
            }]
        },{
            categoryName:'资深撰稿人'
        }
    ];

    var html1=juicer($('#nav-template').html().toString(),data1);
    // console.log(html1);
    $('.nav-item').append(html1);

    var data2=[
        {
            categoryName:'公众号专区',
            childCategoryList:[{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/richangtuisong.png',
                categoryName:'日常推送'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/jingpin.png',
                categoryName:'精品原创'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/shendu.png',
                categoryName:'深度爆款'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/wenan22.png',
                categoryName:'润色与修改'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/peitu.png',
                categoryName:'排版（十篇）'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/zhuce.png',
                categoryName:'公众号注册'
            }],
            serviceList:[{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/backupm.jpg',
                serviceName:'公众号产品软文，我帮你写出气势',
                headUrl:'http://wx.qlogo.cn/mmopen/9GQH9Wic7ibHrcREdTfFiaGibXn2B768TjSXiaH1RibbDbnyjrWvpBibPVGhFPB96uq' +
                'pl6CzialPn6ZzyZl3BSgJhI7bxfGwxU1EPPOt/0',
                nickname:'Vivian Lin',
                price:'￥299.00'
            },{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/tiny.jpg',
                serviceName:'日常类稿件，附原创排版（公众号）',
                headUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/1602261138553560011456982031000.jpg',
                nickname:'陶若素',
                price:'￥299.00'
            },{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/edit.jpg',
                serviceName:'让文字飞：给你的文案润色',
                headUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/1602261138553560011456982031000.jpg',
                nickname:'Vivian Lin',
                price:'￥259.00'
            }]
        },{
            categoryName:'写作与翻译',
            childCategoryList:[{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/xinwen22.png',
                categoryName:'软文新闻稿'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/chanpin.png',
                categoryName:'产品描述'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/fanyi22.png',
                categoryName:'中英翻译'
            }],
            serviceList:[{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/backupk.jpg',
                serviceName:'让记者来帮你写新闻稿或软文',
                headUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/16042909543800100114619857474621461985699582.jpg',
                nickname:'清河',
                price:'￥299.00'
            },{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/backupr.jpg',
                serviceName:'帮你写恰到好处的行业软文',
                headUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/ITEENKERTIANDOU1506051640541880011456898283000.jpg',
                nickname:'丁一',
                price:'￥299.00'
            },{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/manworkingb.jpg',
                serviceName:'新闻稿-体育类',
                headUrl:'http://wx.qlogo.cn/mmopen/9GQH9Wic7ibHoMU4JcBEM7kwZibicePZMLQkEY9VeV6rU1JW4ANI9M717MaYziaHATKyb' +
                'zGWnUicRFfvxsNSX37L9dnWMuiaQt7D5Sd/0',
                nickname:'张浩勋',
                price:'￥229.00'
            }]
        },{
            categoryName:'设计',
            childCategoryList:[{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/LOGO11.png',
                categoryName:'LOGO'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/LOGO11.png',
                categoryName:'LOGO'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/haibao11.png',
                categoryName:'LOGO'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/anniu11.png',
                categoryName:'LOGO'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/Banner11.png',
                categoryName:'LOGO'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/zhuanti111.png',
                categoryName:'LOGO'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/quanzhan1111.png',
                categoryName:'LOGO'
            }],
            serviceList:[{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/backupm.jpg',
                serviceName:'主题类的网页/APP的图标设计',
                headUrl:'http://wx.qlogo.cn/mmopen/9GQH9Wic7ibHrcREdTfFiaGibXn2B768TjSXiaH1RibbDbnyjrWvpBibPVGhFPB96uq' +
                'pl6CzialPn6ZzyZl3BSgJhI7bxfGwxU1EPPOt/0',
                nickname:'丁霞飞',
                price:'￥299.00'
            },{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/tiny.jpg',
                serviceName:'网页/APP全站设计',
                headUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/1602261138553560011456982031000.jpg',
                nickname:'胡志龙',
                price:'￥2399.00'
            },{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/edit.jpg',
                serviceName:'为你设计一张有气势的海报',
                headUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/1602261138553560011456982031000.jpg',
                nickname:'宝宝',
                price:'￥559.00'
            }]
        },{
            categoryName:'营销推广',
            childCategoryList:[{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/zhanlvzhanlv.png',
                categoryName:'战略与执行'
            },{
                iconUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/sousuosousuo.png',
                categoryName:'APP搜索优化'
            }],
            serviceList:[{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/backupm.jpg',
                serviceName:'ASO苹果应用市场搜索优化',
                headUrl:'http://wx.qlogo.cn/mmopen/9GQH9Wic7ibHrcREdTfFiaGibXn2B768TjSXiaH1RibbDbnyjrWvpBibPVGhFPB96uq' +
                'pl6CzialPn6ZzyZl3BSgJhI7bxfGwxU1EPPOt/0',
                nickname:'孙伟-ASO',
                price:'￥2399.00'
            },{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/tiny.jpg',
                serviceName:'市场营销战略咨询或代理执行',
                headUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/1602261138553560011456982031000.jpg',
                nickname:'Lydia',
                price:'￥389.00'
            }]
        },{
            categoryName:'资深撰稿人',
            serviceList:[{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/backupm.jpg',
                serviceName:'用产品思维帮你写脱俗软文',
                headUrl:'http://wx.qlogo.cn/mmopen/9GQH9Wic7ibHrcREdTfFiaGibXn2B768TjSXiaH1RibbDbnyjrWvpBibPVGhFPB96uq' +
                'pl6CzialPn6ZzyZl3BSgJhI7bxfGwxU1EPPOt/0',
                nickname:'Shawn',
                price:'￥2459.00'
            },{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/tiny.jpg',
                serviceName:'写一篇看了就想转的品牌故事',
                headUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/1602261138553560011456982031000.jpg',
                nickname:'丹',
                price:'￥4299.00'
            },{
                url: 'http://7xj5dd.com2.z0.glb.qiniucdn.com/edit.jpg',
                serviceName:'捕捉你的创业故事和商业模式',
                headUrl:'http://7xj5dd.com2.z0.glb.qiniucdn.com/1602261138553560011456982031000.jpg',
                nickname:'UncleMoss',
                price:'￥2231.00'
            }]
        }
    ];

    var html2=juicer($('#page-template').html().toString(),data2);
    console.log(html2);
    $(html2).insertBefore($('.service-wrapper'));
});