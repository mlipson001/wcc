var code=[
    38,
    38,
    40,
    40,
    37,
    39,
    37,
    39,
    66,
    65
    ];

var i = 0;
var buildingaddress;

function mapit(building){
            switch (building) {
                case "empire":
                    buildingaddress="Empire State Building, 350 5th Ave, New York, NY 10118"
                    break;
                case "transamerica":
                    buildingaddress="Transamerica Pyramid,600 Montgomery St, San Francisco, CA 94111"
                    break;
                case "willis":
                    buildingaddress="Willis Tower, 233 S Wacker Dr, Chicago, IL 60606"
                    break;
                case "flatiron":
                    buildingaddress="Flatiron Building, New York, NY 10010"
                    break;
                case "suntrust":
                    buildingaddress="Suntrust Plaza, 303 Peachtree St NE, Atlanta, GA 30308"
                    break;
                case "twocalifornia":
                    buildingaddress="Two California Plaza, 350 S Grand Ave, Los Angeles, CA 90071"
                    break;
                default:
                    buildingaddress="Empire State Building, 350 5th Ave, New York, NY 10118"

            }        
    $('#portfoliomap').attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCmnOZpyCVEipAkfCFmO0JLPzd_ZSGpzs8&q='+buildingaddress);

}

function graphdisplay(bol){
    if (bol){
        document.getElementById("graphcontainer").style.display = "block";

        
    }
    else{
        document.getElementById("graphcontainer").style.display = "none";
    }
}

function displayit(className){
    

    $("#portfolio").parent().removeClass("active");    
    $("#east").parent().removeClass("active");    
    $("#west").parent().removeClass("active");    
    $("#central").parent().removeClass("active");    
    $("#south").parent().removeClass("active");    
    $("#"+className).parent().addClass("active");    
    
    $("div .img-thumbnail").each(function(){
        console.log(className);
        console.log(this);
        if ($(this).hasClass(className)) {
            $(this).show();
        }
       else {
           $(this).slideUp(1000, function(){});

        }
    });    
}

function sendform() {
    if($("#emailaddress").val()!=="") {
        alert ('Hello there '+$("input:text").val()+', we will send a copy of the privacy policy to '+$("#emailaddress").val()+'.');
        $("input:text").val("");
        $("#emailaddress").val("");
        
        
    }
    else{
        alert ('Please Enter an Email Address');
    }
    
}
$(document).ready(function() {
    // make the menu static before leaving screen
    var menu = $('#menu');
    var menutop = menu.offset().top;
    var submenuexists=false;
    if ($("#submenu").length > 0) {
        var submenu = $('#submenu');
        var submenutop = submenu.offset().top-50;
        submenuexists=true;
    }

    



    function scroll() {
        if ($(window).scrollTop() > menutop) {
            $('#menu').addClass('navbar-fixed-top');
            $('#menu').removeClass('navbar-padding');
            if (submenuexists===false) {
                $('#navbar-spacer-top').addClass('spacer-padding');
            }


        }
        else {
            $('#menu').removeClass('navbar-fixed-top');
            $('#menu').addClass('navbar-padding');
            if (submenuexists===false) {
                $('#navbar-spacer-top').removeClass('spacer-padding');
            }


        }
        if (submenuexists) {
        
                if ($(window).scrollTop() > submenutop) {
                    $('#submenu').addClass('navbar-fixed-top');
                    $('#navbar-spacer').addClass('spacer-padding-submenu');
                    $('#submenu').addClass('pillbar-padding');
                    $('#menu').addClass('navbar-fixed-top');
        
                }
                else {
                    $('#submenu').removeClass('navbar-fixed-top');
                    $('#navbar-spacer').removeClass('spacer-padding-submenu');
                    $('#submenu').removeClass('pillbar-padding');
                }
        }


    }
    

    document.onscroll = scroll;
   
   $(".variation_form_section .select div").click(function() { 
      $('.variation_form_section .select div').removeClass('active');
      $(this).addClass('active');
    }); 


   
    
    // toggle hamburger menu to an x    
    $('#hamburger').click(function() {
        $(this).toggleClass('open');
    })
    
    $(document).keydown(function(e) {
        if (e.which === code[i]) {
            i=i+1;
            if (i === 10) {
                $("#tsribbon").removeClass("noopacity");
                i=0;
            }           
        }
        else{
            i=0;
        }
    });
});    