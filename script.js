const txtinput = document.querySelector(".inputs input");
let infotxt=document.querySelector(".infotxt");
let filterinput;
checkbtn=document.querySelector(".inputs button")

checkbtn.addEventListener("click",()=>{
    let reverseinput=filterinput.split("").reverse().join("");
    infotxt.style.display="block";
    if(reverseinput!=filterinput){
        return infotxt.innerHTML=`No,<span>'${filterinput}'</span> is not a palindrome`
    }
    infotxt.innerHTML=`Yes,<span>'${filterinput}'</span> is a palindrome`
})
txtinput.addEventListener("keyup", () => {
    filterinput=txtinput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    if(filterinput){
        return checkbtn.classList.add("active")
    }
    checkbtn.classList.remove("active")
});