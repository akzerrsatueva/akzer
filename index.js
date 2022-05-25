function animateText(id, text, i) {
     document.getElementById(id).innerHTML = text.substring(0, i);
     i++;
     if (i > text.length) i = 1;
     setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
     setTimeout(function(){
         $('#dynamic').replaceWith('<h2 class="text-center welcome text-white">Welcome to our site!</h2>');
     }, 2100);
 }

for(let i = 1; i <= 3; i++)
{
     $(`#txt${i}`).hide();
     $(`#card${i}`).mouseenter(function(){
          $(`#txt${i}`).show(300);
          $(`#image${i}`).hide(300);
     });
     $(`#card${i}`).mouseleave(function(){
          $(`#txt${i}`).hide(300);
          $(`#image${i}`).show(300);
     });

}