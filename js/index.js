

$(".banner").banner({
items:$(".banner .imgbox").children(),
left:$(".banner #left"),
right:$(".banner #right"),
list:false,
autoPlay:true
});

$(".item").on("mouseover",function(){
    $(this).find(".categorys-items-layer").css({display:"block"}).siblings().find(".categorys-items-layer").css({display:"none"})
})
$(".item").on("mouseout",function(){
    $(this).find(".categorys-items-layer").css({display:"none"})
})

$(".lc").find("ul").children("li").click(function(){
	console.log($(this))
    
    $("html").animate({
    	
        scrollTop:$("#techan").children("div").eq($(this).index()).offset().top
    })
 
})
   console.log($("#techan"));