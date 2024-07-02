
const mybut = document.getElementById("mybut");
console.log(mybut)
const sideb = document.getElementById("sideb");
const light = document.querySelectorAll(".lightlight");
console.log(light)
const logo2 = document.querySelectorAll(".logo2");
const logo1 = document.querySelectorAll(".logo1");
const navbar = document.getElementById("navbar")
console.log(navbar)
const dark = document.querySelectorAll(".darkdark");
const sidelight = document.getElementById("sidelight");
console.log(sidelight)
// =====================================================
if (localStorage.getItem("isSmall") === "yes") {
  sideb.classList.add("smallside");
} else {
  sideb.classList.remove("smallside");
}
const toggleside = function toggleside() {
  if (localStorage.getItem("isSmall") === "yes") {
    localStorage.setItem("isSmall", "no");
    sideb.classList.remove("smallside");
  } else {
    localStorage.setItem("isSmall", "yes");
    sideb.classList.add("smallside");
  }
};
mybut.addEventListener("click", toggleside);
// ============================================================



// ==========================================
//                 Is Logo ?
// ==========================================
if (localStorage.getItem("isLogo") === "1") {
  navbar.classList.remove("light");
  sidelight.classList.remove("light");
  
    logo1.forEach( (item)=> {
      item.classList.add("show");
      item.classList.remove("hide");
    });
    logo2.forEach(
      (item) => {
        item.classList.remove("show");
      item.classList.add("hide");
      }
    )
} else {
  if(localStorage.getItem("isLogo") === "2"){
    navbar.classList.add("light");
    sidelight.classList.add("light");

    logo1.forEach( (item)=> {
      item.classList.remove("show");
      item.classList.add("hide");
    });
    logo2.forEach(
      (item) => {
        item.classList.add("show");
      item.classList.remove("hide");

      }
    )
  }
  else{
    localStorage.setItem("isLogo","1");
  }
}

light.forEach(
  (light) => {

    light.addEventListener("click",(eo) => {
      sidelight.classList.add("light");
      navbar.classList.add("light");
      localStorage.setItem("isLogo","2")

      logo2.forEach(
        (item) => {
          item.classList.add("show");
          item.classList.remove("hide");
        }
      )

      logo1.forEach(

        (item) => {
          item.classList.remove("show");
          item.classList.add("hide");
        }

      )

    })

  }
)

dark.forEach(
  (dark) => {
    dark.addEventListener("click",() => {
      navbar.classList.remove("light");
      sidelight.classList.remove("light");
      localStorage.setItem("isLogo","1")
      logo2.forEach(
        (item) => {
          item.classList.add("hide");
          item.classList.remove("show");
        }
      )
      logo1.forEach(
        (item) => {
          item.classList.remove("hide");
          item.classList.add("show");
        }
      )
    })
  }
)
// ===================================================


