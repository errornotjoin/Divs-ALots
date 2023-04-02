var Main_body = document.getElementById("Start_loading_item")
var Mew_Main_body = document.getElementById("Main_body")
var submit = document.getElementById("submit")
 var x = 0
 var y = 0 
 var update_arry = []
 var error_arry = ""
 
var chees = true
 // this will say how long it will take to make the new divs 
 var timeing = 1;
 var many_div = 299;
 var k = 0 
 
makeing_the_new_div()
function makeing_the_new_div()
{
    var time =  setTimeout(makeing_the_new_div, timeing)
        // the max of div this will make 
        if (x == many_div)
        {
            clearTimeout(time)
        }
        x++
        //makeing the divs
        var New_div = document.createElement("div")
        New_div.className = "New_div"
        New_div.id = x
        New_div.textContent = x.toString()
        New_div.style.animation = "2s Ligt_to_dark"
        Main_body.appendChild(New_div)
        //giveing the corn there roundness
        switch(x)
        {
            case 2:
                var id_one = document.getElementById("1")
                id_one.style.borderTopLeftRadius = "10%"
                break;
            case 20:
                var id_one = document.getElementById("20")
                id_one.style.borderTopRightRadius = "10%"
            break;
        }
}
function getting_ids()
{

}
submit.addEventListener("click", function what_colour_is_that()
{ 
    //re making the var 
    var cheese = true
    var how_many_divs = 0 
    var  f = 0 
    
    //getting all the info Here
    var How_many_div = document.getElementById("How_many_div")
    var How_fast_div = document.getElementById("How_Fast")
    var Show_numbers = document.getElementById("Show_numbers")
    var colour_of_div = document.getElementById("colour_of_div")
    var colour_of_hover = document.getElementById("colour_of_hover")
    var colour_start_animation = document.getElementById("colour_start_animation")
    var colour_end_animation = document.getElementById("colour_end_animation")
    var test1 = document.getElementById("Make_stly")
    var colour_of_ever_secend_div  = document.getElementById("colour_of_ever_secend_div")
    var colour_of_text = document.getElementById("colour_of_text")
    var width_div = document.getElementById("THE_width_of_the_div");
    var hight_div = document.getElementById("The_hight_of_the_div")
    var background_color_body = document.getElementById("colour_of_body")
    error_arry = colour_of_text.value

    

    Mew_Main_body.removeChild(Mew_Main_body.children[0])

    how_many_divs = How_many_div.value
    var dog  = How_fast_div.value
    var Main_body_y = document.createElement("div")
    Mew_Main_body.appendChild(Main_body_y)
    make_div()
    function make_div()
    {
        if(f == how_many_divs - 1)
        {
            clearTimeout(New_timer)
        }
        else
        {
            var New_timer = setTimeout(make_div, dog )
        }
        f++
                //makeing the divs
                var New_div = document.createElement("div")
                //make / then into class name to 1 or 2 if they = 2 they get new colour if t
                //the user whats to 
                switch(cheese)
                {
                    case true:
                        New_div.className = "New_div"
                        New_div.style.animation = "2s Ligt_to_darks"
                        cheese = false
                       //error testing: console.log(cheese);
                        break;
                    case false:
                        New_div.className = "New_div1"
                        New_div.style.animation = "2s Ligt_to_darks_one"
                        cheese = true
                        //error testing: console.log(cheese);
                        break;
                }
                //showing the numbers any time that it loading the divs 
                if(Show_numbers.checked == true)
                {
                    New_div.textContent = f.toString()
                }
                // doing_this_onece 
                if(f == 1 )
                {
                    var test2 = document.createElement("style")
                    test2.textContent = ".body_man{background-color:"+background_color_body.value+"}.New_div1{background-color:"+colour_of_ever_secend_div.value+ ";color:"+colour_of_text.value+"; width:"+width_div.value+"%;  height:"+hight_div.value+"px;}.New_div{background-color:"+ colour_of_div.value+"; color:"+colour_of_text.value+"; width:"+width_div.value+"%;  height:"+hight_div.value+"px;}"+".New_div:hover, .New_div1:hover{background-color: "+colour_of_hover.value+"; Border-Radius:10px; }  @keyframes Ligt_to_darks{0%{background-color:"+colour_start_animation.value + ";} 50%{background-color:"+colour_end_animation.value+";} 100%{background-color:"+colour_of_div.value+";}} @keyframes Ligt_to_darks_one{0%{background-color:"+colour_start_animation.value + ";} 50%{background-color:"+colour_end_animation.value+";} 100%{background-color:" +colour_of_ever_secend_div.value+";}}" 
                    test1.appendChild(test2)
                }
                New_div.id = f
                // add event listtener to all new divs  
                Main_body_y.appendChild(New_div)
                // just add some round to the corner of divs 
                switch(y)
                {
                    case 1:
                        var id_one = document.getElementById("1")
                        id_one.style.borderTopLeftRadius = "10%"
                        break;
                    case 20:
                        var id_one = document.getElementById("20")
                        id_one.style.borderTopRightRadius = "10%"
                    break;
                }
    }
    testing_one(colour_of_div.value, background_color_body.value, colour_start_animation.value, colour_end_animation.value, colour_of_hover.value, colour_of_text.value, How_many_div.value, How_fast_div.value,width_div.value, hight_div.value  )

})
var itesm_arry = []
var cat_arry = ["#151418", "#040405", "#194ff1", "#020613", "#1B1B1B", "#dfdfdf","246" , "1" ,"100%", "50px" ]
function testing_one(test_item_one, colour_of_body, colour_start_animation_one, colour_end_animation, colour_of_hover,colour_of_text,how_many_divs, How_fast, Widht, Height )
{    
    //Key:
    //cat_arry[0] = Div Colour
    //cat_arry[1] = Background Colour
    //cat_arry[2] = Start Animation Colour
    //cat_arry[3] = End Animation Colour
    //cat_arry[4] = Hover Colour
    //cat_arry[5] = Text Colour
    //cat_arry[6] = How Many Divs 
    //cat_arry[7] = How Long It Takes
    //cat_arry[8] = The Width of the divs
    //cat_arry[9] = The height of the divs

    if(test_item_one != cat_arry[0])
    {
        cat_arry[0]  = test_item_one
        itesm_arry[0] = "Div Colour Has Been changh To: " + cat_arry[0] 
    }
    else
    {
        itesm_arry[0] = "Div Colour Staying: " + cat_arry[0]
    }
    if(colour_of_body != cat_arry[1])
    {
        cat_arry[1]  = colour_of_body
        itesm_arry[1] = "Background Colour Has Been changh To: " + cat_arry[1] 
    }
    else
    {
        itesm_arry[1] = "Background Colour Staying: " + cat_arry[1] 
    }
    if(colour_start_animation_one != cat_arry[2])
    {
        cat_arry[2]  = colour_start_animation_one
        itesm_arry[2] = "Start Animation Colour Has Been changh To: " + cat_arry[2] 
    }
    else
    {
        itesm_arry[2] = "Start Animation Colour Staying: " + cat_arry[2]
    }
    if(colour_end_animation != cat_arry[3])
    {
        cat_arry[3]  = colour_end_animation
        itesm_arry[3] = "End Animation Colour Has Been Changh To: " + cat_arry[3] 
    }
    else
    {
        itesm_arry[3] = "End Animation Colour staying: " + cat_arry[3] 
    }
    if(colour_of_hover != cat_arry[4])
    {
        cat_arry[4]  = colour_of_hover
        itesm_arry[4] = "Hover Colour Has Been changh To: " + cat_arry[4] 
    }
    else
    {
        itesm_arry[4] = "Hover Colour Staying: " + cat_arry[4]
    }
    if(colour_of_text != cat_arry[5])
    {
        cat_arry[5]  = colour_of_text
        itesm_arry[5] = "Text Colour Has Been Changh To: " + cat_arry[5] 
    }
    else
    {
        itesm_arry[5] = "Text Colour staying: " + cat_arry[5] 
    }
    if(how_many_divs != cat_arry[6])
    {
        cat_arry[6]  = how_many_divs
        itesm_arry[6] = "How Div Has Been changh To: " + cat_arry[6] 
    }
    else
    {
        itesm_arry[6] = "Div count Staying as same : " + cat_arry[6]
    }
    if(How_fast != cat_arry[7])
    {
        cat_arry[7]  = How_fast
        itesm_arry[7] = "The Div is fast/slower : " + cat_arry[7] 
    }
    else
    {
        itesm_arry[7] = "Website Make Speed is  Staying the same : " + cat_arry[7] 
    }
    if(Widht != cat_arry[8])
    {
        cat_arry[8]  = Widht
        itesm_arry[8] = "The Div Widht  Has Been changh To: " + cat_arry[8]  +"%"
    }
    else
    {
        itesm_arry[8] = "the divs width Staying The Same : " + cat_arry[8] + "%"
    }
    if(Height != cat_arry[9])
    {
        cat_arry[9]  = Height
        itesm_arry[9] = "The Divs Height Has Been Changh To: " + cat_arry[9] + "px"
    }
    else
    {
        itesm_arry[9] = "The Divs Height is staying The Same Height: " + cat_arry[9]  + "px"
    }
    var Main_text  = document.getElementById("Main_text")
    var New_ul = document.createElement("ul")
    Main_text.appendChild(New_ul)
    for(var x = 0; x <= itesm_arry.length; x++)
    {
        var New_line = document.createElement("li")
        New_line.textContent = itesm_arry[x]
        New_ul.appendChild(New_line)
    }
}

// var Hide = document.getElementById("Hide")
// Hide.addEventListener("click", function all()
// {
//     var Main_things_2 = document.getElementById("Main_things_2")
//     var Main_text = document.getElementById("Main_text")
//     var Main_body_of_things = document.getElementById("Main_body_of_things")
//     var Main_test =document.getElementById("Main_test")
//     Main_things_2.style.visibility = "hidden"
//     Main_text.style.visibility = "hidden"
//     Main_body_of_things.style.width = "5%"
//     Main_body_of_things.style.height = "50px"
//     Main_body_of_things.style.animation = "2s Moveing_to_the_left "
//     Main_test.style.visibility = "visible"
//     setTimeout(moveing, 2000)
//     function moveing()
//     {
//         Main_body_of_things.style.position = "fixed"
//         Main_body_of_things.style.left = "95%"
//         Main_body_of_things.style.bottom = "910px"
//     }

// })
// var Main_test = document.getElementById("Main_test")
// Main_test.addEventListener("click", function moveing_back()
// {
//     var Main_things_2 = document.getElementById("Main_things_2")
//     var Main_text = document.getElementById("Main_text")
//     var Main_body_of_things = document.getElementById("Main_body_of_things")
//     var Main_test =document.getElementById("Main_test")
//     Main_things_2.style.visibility = "visible"
//     Main_text.style.visibility = "visible"
//     Main_body_of_things.style.width = "100%"
//     Main_body_of_things.style.height = "250px"
//     Main_body_of_things.style.animation = "2s Going_back "
//     Main_test.style.visibility = "hidden"
//     setTimeout(moveing, 2000)
//     function moveing()
//     {
//         Main_body_of_things.style.position = "fixed"
//         Main_body_of_things.style.left = "-1%"
//         Main_body_of_things.style.bottom = "100px"
//     }

// })