var fs = require('fs/promises')
var input = require('readline-sync')
const path = require('path')
const dirPath = path.join(__dirname,'data')
// record = {}
// function getFileName(userName) {
    
// }
console.log(dirPath)
function search(email) {
    var email = input.question("Enter the email: ")

    // var json =  JSON.parse(fs.readFileSync(`data/${filename}.json`))
    // console.log(json)
    // console.log(dirPath) //dirpath is working

    // console.log(__dirname)
    debugger;
    // console.log(filename)
    var filenames = fs.readdirSync(dirPath)
    
    filenames.forEach((filename)=>{
            // var path = path.join(__dirname,filename)
            // var content = JSON.parse(filename)
            var content =  JSON.parse(fs.readFileSync(`data/${filename}`))
            // console.log(content)
            if (content.email == email) {
                console.log(content)
            }

    })
    // fs.readdirSync(dirPath,(err,files)=>{
    //     console.log(__dirname)
    //     console.log(files)
    //     if (err) {
    //         console.log("error")
    //     }
    //     else{
    //         files.forEach((item)=>{
    //             console.log("hello")
    //         })

    //     }
       
    // })

    
}       

async function addPassenger() {
    var id = input.question("Enter the id: ")
    var name = input.question("Enter the name:")
    var userName = input.question("Enter the user name:")
    var age = input.question("Enter the age: ")
    var email = input.question("Enter the email: ")
    
   
    var ph_no = input.question("Enter the  phone number: ")
    var addSecondPhoneNumber = input.question("Do you want to add another phone number? (y/n)")
    if(addSecondPhoneNumber == 'y'){
        var ph_no2 = input.question("Enter the phone number: ")
    }
    else{
        console.log("")
    }

   var passenger={
        'id' :  id,
        'name' : name,
        'age' : age,
        'Phno' : ph_no,
        'ph_no2' : ph_no2,
        
        'userName' : userName,
        'email' : email
        
   }
//    record[id] = passenger 
//    console.log(record)
   let filename =`${userName}.json`
   var json =JSON.stringify(passenger)
   fs.writeFileSync(`data/${filename}`,json)


//    await fs.writeFile(`data/${filename}`,"json",{encoding : "utf-8", flag : "w"},(err)=>{
//     console.log("data saved successfuly")
//    })

   
//    fs.appendFileSync()
//    console.log(passenger)
}

var  flag = true

function deletePassenger(){
    var name = input.question('Enter the user name: ')
    try {
        fs.unlinkSync(`data/${name}.json`)
        console.log("File deleted successfully!")
        
    } catch (error) {
        console.error(error)
    }
    
}

function modifyPassenger() {
    var name_mod = input.question("Enter the name to be modified: ")
    var json =  JSON.parse(fs.readFileSync(`data/${name_mod}.json`))
    addPassenger()
    console.log(json)
}
while (flag) {
    process.stdout.write("1.Insert passeger details\n2.Modify\n3.Delete\n4.Search\n5.exit")
    let n = input.question("\nEnter your choice: ")
    // console.log(typeof(n))

    switch (n) {
        case '1':
            // console.log("hello")

            addPassenger()
            break;
        case '2':
            modifyPassenger()
            break
        case '3':
            deletePassenger() 
            break
        case '4':


            search()
            // console.log("hello")
            break
        case '5':
            flag=false
    }
    
}


