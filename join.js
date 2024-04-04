document.querySelector(".btn-form").addEventListener("click" , (e)=>{

    let nameValue = document.querySelector(".inputs1").value;
    let lastnameValue = document.querySelector(".inputs2").value;
    let passwordValue = document.querySelector(".inputs3").value;
    localStorage.setItem('username' , nameValue);
    localStorage.setItem('lastname' , lastnameValue);
    localStorage.setItem('password' , passwordValue);

        if (nameValue){
        Swal.fire({
            icon: "success",
            title: "success ...",
            text: "ثبت نام با موفقیت انجام شد "
        });
        
    }else{
        Swal.fire({
            icon: "oops",
            title: "oopss ...",
            text: "ثبت نام با موفقیت انجام نشد "
        });
        
    }
    
})
