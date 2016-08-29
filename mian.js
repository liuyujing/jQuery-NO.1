/**
 * Created by liuyujing on 16/8/28.
 */
$(function () {
    // window.console.log($("div"));
    // window.console.log($("#div1"));
    // window.console.log($(".myDiv"));
    // window.console.log($("*"));
    // // window.console.log($(this));
    // window.console.log($("p.myDiv"));
    // window.console.log($("p:first"));
    // window.console.log($("ul li:first"));
    // window.console.log($("body p:first"));
    // window.console.log($("[style]"));
    // window.console.log($("[href = '#']"));
    // window.console.log($("[href != '#']"));
    // window.console.log($(":text"));
    // window.console.log($("li:even"));
    // window.console.log($("li:odd"));
    // window.console.log($("li:odd")[0]);
    // window.console.log($($("li:odd")[0]));


    // setTimeout(function () {
    //     $("input").addClass("myDiv");
    //     $("#div1").after("<p>erwerwee</p>");
    //     // $("#div1").append("neirong");
    //     $("<p>qqqqq</p>").appendTo("p");
    //     $("img").attr("width",300);
    // },2000);

    // $("#hidden").click(function () {
    //    // $("p").hide();
    //     $("#animation").fadeOut("slow");
    // });
    // $("#show").click(function () {
    //     // $("p").show();
    //     $("#animation").fadeIn(3000);
    // });

    // $("#hidden").click(function () {
    //     $("#animation").slideUp();
    // });
    // $("#show").click(function () {
    //     // $("p").show();
    //     $("#animation").slideDown();
    // });


    // $("#hidden").click(function () {
    //     $("#animation").animate({height:"50px"});
    // });
    //
    // $("#show").click(function () {
    //     $("#animation").animate({height:"500px"});
    // });
    // $("#div1").bind("click",function () {
    //     alert("你好啊!");
    //     window.console.log($(this));
    //     window.console.log(this);
    // });
    // $("#div1").hover(function () {
    //     alert("鼠标移入");
    // },function () {
    //     alert("鼠标移出");
    // });
    // $("#div1").toggle(function () {
    //     $("#div1").css({"color":"red"});
    // },function () {
    //     $("#div1").click(function () {
    //         alert("22222");
    //     });
    // },function () {
    //     $("#div1").click(function () {
    //         alert("33333");
    //     });
    // });

//    Dom操作向匹配的元素添加指定的类名。
//     $("#userName").addClass("myDiv");
    // after()	在匹配的元素《之后》插入内容
    // $("#userName").after("11111");
    // append()	向匹配的元素《内部》追加内容。
    // $("#userName").append("11111");
    //要追加的内容 appendTo()目的位置	向匹配的元素内部追加内容（标签）
    // $("<p>11112</p>").appendTo($("div"));
    //attr()	设置或返回匹配元素的属性和值。
    // $("img").attr("width",300);
//    在每个匹配的元素之前插入内容
//     $("div").after("在每个匹配的元素之前插入内容");
//    clone()	创建匹配元素集合的副本
//     $("body").append($("p").clone());
    //detach()从 DOM 中移除匹配元素集合。
    // $("p").detach();
    //删除匹配的元素集合中所有的子节点。
    // $("div").empty();
    //hasClass()检查匹配的元素是否拥有指定的类。
    // window.console.log($("div").hasClass());
//    html()	设置或返回匹配的元素集合中的HTML 内容
//     $("p").html("<p>设置HTML 内容</p>");
//    insertAfter()	把匹配的元素插入到另一个指定的元素集合的后面。
//     $("<p>插入到另一个指定的元素集合的后面</p>").insertAfter("#userName");
//    insertBefore()	把匹配的元素插入到另一个指定的元素集合的前面
//     $("<p>插入到另一个指定的元素集合的后面</p>").insertBefore("#userName");
//    prepend()	向每个匹配的元素内部前置内容
//     $("<p>在他前面插入内容</p>").prepend("#userName");
    // prependTo()向每个匹配的元素内部前置内容。
    // $("#div1").append("neirong");
//    prependTo()	向每个匹配的元素内部前置内容
//     $("<p>qqqqq</p>").appendTo("p");
//    remove()	移除所有匹配的元素
//     $("body").remove();
//    removeClass() 从所有匹配的元素中删除全部或者指定的类
//     $("div").removeClass("p");
//    replaceAll()	用匹配的元素替换所有匹配到的元素
//     $("input").replaceAll("<p></p>");
//    replaceWith()	用新内容替换匹配的元素
//     $("input").replaceWith("<p></p>");
//    text()	设置或返回匹配元素的内容
//     $("p").text("ssssssss");
//  toggleClass()	从匹配的元素中添加或删除一个类（类的开关）。
//     $("p").toggleClass("myDiv");
    // unwrap()	移除并替换指定元素的父元素。
    // $("p").unwrap();
//    val()	设置或返回匹配元素的值。
//     $("input").val("newValue");
//    wrap()	把匹配的元素用指定的内容或元素包裹起来
//     $("p").wrap("<div></div>");
//    wrapAll()	把所有匹配的元素用指定的内容或元素包裹起来。
//     $("p").wrapAll("<div></div>");
//    wrapinner()	将每一个匹配的元素的子内容用指定的内容或元素包裹起来。
//     $("p").wrapinner("<div></div>");


    //事件常用方法
    //绑定事件
    $("#div1").bind("click",function () {
        alert("你好啊!");
    });
    /*
    $("#message").delegate("button","click",function () {
        alert("111");
    });
    */
});
