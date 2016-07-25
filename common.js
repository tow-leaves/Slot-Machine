function runSlots() {
    var slotOne;
    var slotTwo;
    var slotThree;
    
    var images = ["http://gb.cri.cn/mmsource/images/2005/07/19/pa050719111.jpg", "http://a2.att.hudong.com/68/74/05300439213381133523747871500.jpg", "http://www.2565cn.com/Uploads/Goods/20140712/thumb_s_53c08b78c4379.jpg"];
    
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    $($('.slot')[0]).html('<img src = "'+images[slotOne-1]+'">');
    $($('.slot')[1]).html('<img src = "'+images[slotTwo-1]+'">');
    $($('.slot')[2]).html('<img src = "'+images[slotThree-1]+'">');
  
  if (slotOne === slotTwo && slotTwo === slotThree) {
      $('.logger').html("It's A Win");
      return null;
    }
    
    if (slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
      $(".logger").html(slotOne + " " + slotTwo + " " + slotThree);
    }
    
    $('.logger').append(" Not A Win");
    
    return [slotOne, slotTwo, slotThree];
  }

  $(document).ready(function() {
     $('.go').click(function() {
       runSlots();
     });
   });
