const fs = require("fs");

//writing file using sync method
const writeToFile  = fs.writeFileSync("sandesh.txt", "India is my country! \n", 'utf-8');

console.log("File created and written into it Successfully...");

//readding file using sync method
const readFile = fs.readFileSync('./sandesh.txt', 'utf-8');
console.log(readFile);


//creating folder using mkdir method
fs.mkdir("./Folder1", ()=>{
    console.log("Foolder created successfuullly....");
})

//creating folder inside folder using mkdir method
fs.mkdir("./Folder1/insiderFolder", ()=>{
    console.log("insider folder created suuccessfully...");
})

//creating file in folders created using mkdir method
var createdFileInFolder = fs.writeFileSync("./Folder1/insiderFolder/India.txt", "India is my country", 'utf-8');
console.log(createdFileInFolder);


//reading folders using readdirsync method
const readDir = fs.readdirSync("./Folder1", 'utf-8');
console.log(readDir);

//reading folder data asnyn
const readFolder = fs.readdir("./Folder1/", 'utf-8', (err,data)=>{
    console.log("Folders: ", data);

})


//creating folder and deleting it

// fs.mkdirSync("./DemoFolder");

//deleting that folder

// fs.rmdirSync("./DemoFolder",()=>{
//     console.log("Deleted Successfuully");
// });