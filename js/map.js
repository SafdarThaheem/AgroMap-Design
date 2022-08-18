var tog=true;
function openNav() {
    if(tog==true){
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        // jQuery('body').removeClass("left-sidebar-exp");
        tog=false;
    }else{
        document.getElementById("mySidebar").style.width = "100px";
        document.getElementById("main").style.marginLeft = "100px";
        // jQuery('body').addClass("left-sidebar-exp");
        tog=true;
    } 
  }

  var righttog = true;
  openrightbar = () =>{
    if(righttog == true) {
        document.getElementById("right-sidebar").style.width = "300px";
        document.getElementById("main").style.marginRight = "300px";
        righttog = false;
    }else{
        document.getElementById("right-sidebar").style.width = "0px";
        document.getElementById("main").style.marginRight = "0px";
        righttog = true;
    }
  }