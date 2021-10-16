canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1_img="https://i.postimg.cc/9rqYz9HM/car1.png";

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;
car2_img="https://i.postimg.cc/tnnW1Kff/car2.png";

background_img="https://i.postimg.cc/bv5d35nK/racing.jpg";
finish_img="tempsnip.png";
f_x=600;
f_y=0;
f_width=60;
f_height=500;
function add(){
    background_tag=new Image();
    background_tag.src=background_img;
    background_tag.onload=uploadbackground;
    
    car1_tag=new Image();
    car1_tag.src=car1_img;
    car1_tag.onload=uploadcar1;

    car2_tag=new Image();
    car2_tag.src=car2_img;
    car2_tag.onload=uploadcar2;

    finish_tag=new Image();
    finish_tag.src=finsh_img;
    finish_tag.onload=uploadfinish;
}

function uploadfinish(){
    ctx.drawImage(finish_tag,f_x,f_y,f_width,f_height);
}

function uploadcar1(){
    ctx.drawImage(car1_tag,car1_x,car1_y,car1_width,car1_height);
}

function uploadbackground(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height);
}

function uploadcar2(){
    ctx.drawImage(car2_tag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) 
{
   console.log(e);
   keypressed=e.keyCode;
   if(keypressed=='38')
   {
       car1_up();
   }
   if(keypressed=='39')
   {
       car1_right();
   }
   if(keypressed=='37')
   {
       car1_left();
   }
   if(keypressed=='40')
   {
       car1_down();
   }
   if(keypressed=='87')
   {
       car2_up();
   }
   if(keypressed=='83')
   {
       car2_down();
   }
   if(keypressed=='65')
   {
       car2_left();
   }
   if(keypressed=='68')
   {
       car2_right();
   }
   if(car1_x > 650)
   {
       document.getElementById("status").innerHTML="car1 has won the game";
   }
   if(car2_x > 650)
   {
       document.getElementById("status").innerHTML="car2 has won the game";
   }
}
function car1_up()
{
    if(car1_y >= 0)
    {
        car1_y = car1_y - 7;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down()
{
    if(car1_y <= 510)
    {
        car1_y = car1_y + 7;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left()
{
    if(car1_x >= 0)
    {
        car1_x = car1_x - 7;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right()
{
    if(car1_x <= 700)
    {
        car1_x = car1_x + 7;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right()
{
    if(car2_x <= 700)
    {
        car2_x = car2_x + 7;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left()
{
    if(car2_x >= 0)
    {
        car2_x = car2_x - 7;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down()
{
    if(car2_y <= 510)
    {
        car2_y = car2_y + 7;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up()
{
    if(car2_y >= 0)
    {
        car2_y = car2_y - 7;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}