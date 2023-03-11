var Main_body = document.getElementById("Start_loading_item")
var Mew_Main_body = document.getElementById("Main_body")
var submit = document.getElementById("submit")
 var x = 0
 var y = 0 
 var error_arry = []
var chees = false
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
            case 361:
                var id_one = document.getElementById("361")
                id_one.style.borderBottomLeftRadius = "10%"
            break;
            case 380:
                var id_one = document.getElementById("380")
                id_one.style.borderBottomRightRadius = "10%"
            break;
        }
}
function getting_ids()
{

}
submit.addEventListener("click", function what_colour_is_that()
{ 
    var How_many_div = document.getElementById("How_many_div")
    var How_fast_div = document.getElementById("How_Fast")
    var Show_numbers = document.getElementById("Show_numbers")
    var colour_of_div = document.getElementById("colour_of_div")
    var colour_of_hover = document.getElementById("colour_of_hover")
    var colour_start_animation = document.getElementById("colour_start_animation")
    var colour_end_animation = document.getElementById("colour_end_animation")
    var test1 = document.getElementById("Make_stly")
    var Main_text = document.getElementById("Main_text")
    var colour_of_text = document.getElementById("colour_of_text")
    var width_div = document.getElementById("THE_width_of_the_div");
    var hight_div = document.getElementById("The_hight_of_the_div")
    var background_color_body = document.getElementById("colour_of_body")

    var  f = 0 
    k = 0 

    Mew_Main_body.removeChild(Mew_Main_body.children[0])
    many_div = 0 
    if(k > 0)
    {
        test1.removeChild(test1.children[0])
    }
    many_div = How_many_div.value
    var dog  = How_fast_div.value
    var Main_body_y = document.createElement("div")
    Mew_Main_body.appendChild(Main_body_y)
    make_div()
    function make_div()
    {
        if(f == many_div)
        {
            clearTimeout(New_timer)
            console.log(f)
            for(x = 0; x <=f; x++)
            {
                New_div.style.animation = "2s null"
            }
            f = 0 
        }
        else
        {
            var New_timer = setTimeout(make_div, dog )
            
        }
        f++
                //makeing the divs
                var New_div = document.createElement("div")
                New_div.className = "New_div"
                if(Show_numbers.checked == true)
                {
                    New_div.textContent = f.toString()
                }
                if(f <= 1 )
                {
                    var updates_arry = [
                                        "changeing the background of the body to:"+ background_color_body.value.toString(),
                                        "changeing the background of the div to: "+ colour_of_div.value.toString(),
                                        "changeing the start of the animation colour to: "+ colour_start_animation.value.toString(),
                                        "changeing the End of The Animation colour to: "+ colour_end_animation.value.toString(),
                                        "changeing the Hover background colour of the div to: "+ colour_of_hover.value.toString(),
                                        "changeing how many divs to: "+ How_many_div.value.toString(),
                                        "changeing the how long it will take to make more divs: "+ How_Fast.value.toString(),
                                        "changeing the Showing numbers = "+ Show_numbers.checked
                                    ]
                    k++
                    var test2 = document.createElement("style")
                    //makeing the text that 
                        var New_testss = document.createElement("ul")
                        for(var p = 0; p < updates_arry.length; p++)
                        {
                            var New_line = document.createElement("li")
                            New_line.textContent = updates_arry[p]
                            New_testss.appendChild(New_line)
                        }
                        Main_body_y.appendChild(New_div)
                    test2.textContent = ".body_man{background-color:"+background_color_body.value+"}.New_div{background-color:"+ colour_of_div.value+"; color:"+colour_of_text.value+"; width:"+width_div.value+"%;  height:"+hight_div.value+"px;}"+".New_div:hover{background-color: "+colour_of_hover.value+";}  @keyframes Ligt_to_darks{0%{background-color:"+colour_start_animation.value + ";} 50%{background-color:"+colour_end_animation.value+";} 100%{background-color:"+colour_of_div.value+"}}" 
                    test1.appendChild(test2)
                    Main_text.appendChild(New_testss)

                }
                New_div.id = f
                New_div.style.animation = "2s Ligt_to_darks"
                Main_body_y.appendChild(New_div)
                switch(y)
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



})
var Hide = document.getElementById("Hide")
Hide.addEventListener("click", function all()
{
    var Main_things_2 = document.getElementById("Main_things_2")
    var Main_text = document.getElementById("Main_text")
    var Main_body_of_things = document.getElementById("Main_body_of_things")
    var Main_test =document.getElementById("Main_test")
    Main_things_2.style.visibility = "hidden"
    Main_text.style.visibility = "hidden"
    Main_body_of_things.style.width = "5%"
    Main_body_of_things.style.height = "50px"
    Main_body_of_things.style.animation = "2s Moveing_to_the_left "
    Main_test.style.visibility = "visible"
    setTimeout(moveing, 2000)
    function moveing()
    {
        Main_body_of_things.style.position = "fixed"
        Main_body_of_things.style.left = "95%"
        Main_body_of_things.style.bottom = "910px"
    }

})
var Main_test = document.getElementById("Main_test")
Main_test.addEventListener("click", function moveing_back()
{
    var Main_things_2 = document.getElementById("Main_things_2")
    var Main_text = document.getElementById("Main_text")
    var Main_body_of_things = document.getElementById("Main_body_of_things")
    var Main_test =document.getElementById("Main_test")
    Main_things_2.style.visibility = "visible"
    Main_text.style.visibility = "visible"
    Main_body_of_things.style.width = "100%"
    Main_body_of_things.style.height = "250px"
    Main_body_of_things.style.animation = "2s Going_back "
    Main_test.style.visibility = "hidden"
    setTimeout(moveing, 2000)
    function moveing()
    {
        Main_body_of_things.style.position = "fixed"
        Main_body_of_things.style.left = "-1%"
        Main_body_of_things.style.bottom = "100px"
    }

})