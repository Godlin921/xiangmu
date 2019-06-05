

$(".banner").banner({
items:$(".banner .imgbox").children(),
left:$(".banner #left"),
right:$(".banner #right"),
list:false,
autoPlay:true
});
console.log($(".categorys-items-layer"))
$(".item").on("mouseover",function(){
    $(this).find(".categorys-items-layer").css({display:"block"}).siblings().find(".categorys-items-layer").css({display:"none"})
})
$(".item").on("mouseout",function(){
    $(this).find(".categorys-items-layer").css({display:"none"})
})