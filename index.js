const categories = {
    home :[],
    school :[]
}
const addTask = (name,category,completed=false)=>{
    var newTask ={
       task:name,
       completed:completed
    }
   
        if(categories[category]){

            categories[category].push(newTask);
            
        }
        if(!categories[category]){
            console.log("invalid category")
        }
       
  

}
addTask('read','school')
addTask('mop','home')

// console.log(categories)




// //mark as complete function

const markComplete = (category,taskName) =>{
    if(categories.hasOwnProperty(category)){
        if(taskName>=0 && taskName<categories[category].length){
categories[category][taskName].completed=true;
        }
}
}
markComplete('home',0);
console.log(categories)


//remove task

const removeTask = ()=>{
    
}





