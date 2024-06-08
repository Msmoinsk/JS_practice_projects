

// function generate_password(length,include_lowercase,inclue_uppercase,include_numbers,include_symbols){
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
//     const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const numberChars = "0123456789"
//     const symbolChar = "!@#$%^&*(){}[]_-+=<>?:'',.;"

//     let allowedchars = ""
//     let password = ""
    
//     allowedchars += include_lowercase ? lowercaseChars : ""
//     allowedchars += inclue_uppercase ? uppercaseChar : ""
//     allowedchars += include_numbers ? numberChars : ""
//     allowedchars += include_symbols ? symbolChar : ""

//     if(length <= 0){
//         return `(passwrod length must be at least 1)`
//     }
//     if(allowedchars.length === 0){
//         return `(at least one set of character need ot be selected)`
//     }

//     for(let i = 0;i < length; i++){
//         const randomindex = Math.floor(Math.random()*allowedchars.length)
//         password += allowedchars[randomindex]
//     }

//     return password;
// }

// const password_length = 12
// const include_lowercase = true
// const inclue_uppercase = true
// const include_numbers = true
// const include_symbols = true

// const passWord = generate_password(
//     password_length,
//     include_lowercase,
//     inclue_uppercase,
//     include_numbers,
//     include_symbols
// )

// console.log(`Generated password : ${passWord}`);



/* Async/Await + Promises */
function test1(){
    return new Promise((resolve,reject) => {
        setInterval(() => {
            const boo = true    
            if(boo){
                resolve("Test 1 Successful")
            }else{
                reject("Test 1 Failed")
            }
        }, 2000);
        
    })
}
function test2(){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            const boo = true
            if(boo){
                resolve("Test 2 Successful")
            }else{
                reject("Test 1 Failed")
            }
        },4000)
    })
}

async function alltest(){
    try{
        let test_2 = await test2()
        console.log(test_2)
        let test_1 = await test1()
        console.log(test_1)
        
    }
    catch(error){
        console.error(error)
    }
}

alltest()

// test1().then((value)=>{
//     console.log(value);
//     return test2()
// }).then((value)=>{
//     console.log(value)
// }).catch((value)=>{
//     console.log(value)
// })