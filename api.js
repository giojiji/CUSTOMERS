let arr = []

    let name = document.getElementById("name")
    let lastname = document.getElementById("lastname")
    let age = document.getElementById("age")
    let key;
    let person;
    
    class newperson {
      constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
      }
    }
   
    
    function saving() {
    person = new newperson(name.value, lastname.value, age.value);
    if(person.name.length > 0 && person.lastname.length > 0 && person.age.length > 0){
    arr.push(person)
    document.getElementById("main").innerHTML = 
    arr.map((item, index) => `<div id=person${index+1} key=${index+1}>
    id: <span class="que"> ${index + 1} </span>
    სახელი: <input class="infomation" value=${item.name} disabled/> 
    გვარი: <input class="infomation"  value=${item.lastname} disabled/>
    ასაკი: <input class="infomation" value=${item.age} disabled/>
    <button id="edit-btn" onclick="edit(this)">რედაქტირება</button>
    <button onclick="del(this)">წაშლა</button>
    </div>`).join("");
} else {
        alert("no info")
    }
    document.getElementById("name").value = ""
    document.getElementById("lastname").value = ""
    document.getElementById("age").value = ""

    }

  
        
    
    // // თუ ერეიში გვაქვს რაიმე და გვედრის ჩატვირთვის დროს გვინდა გამოჩნდეს ეს უნდა გავააქტიურო
    // document.getElementById("main").innerHTML = 
    // arr.map((item, index) => `<div id=person${index+1} key=${index+1}>
    // id: ${index + 1} 
    // სახელი: <input class="infomation" value=${item.name} disabled /> 
    // გვარი: <input class="infomation" value=${item.lastname} disabled /> 
    // ასაკი: <input class="infomation" value=${item.age} disabled /> 
    // ტესტი: <input class="infomation" value=${storedNames[index].name} disabled/>
    // <button onclick="edit(this)">რედაქტირება</button>
    // <button onclick="del(this)">წაშლა</button>
    // </div>`).join("");

    let edition = true
    function edit(element) {
        if(edition == true){
        let parent = element.parentElement 
        for(let i = 1 ; i < 4; i++){
        parent.children[i].disabled  = false;}
        parent.children[4].innerText = "შენახვა"
        edition = false
    }
        else if(edition !== true) {
        let parent = element.parentElement 
        key = (element.parentElement.getAttribute("key")) - 1
        for(let i = 1 ; i < 4; i++){
        parent.children[i].disabled  = true;}
        parent.children[4].innerText = "რედაქტირება"
        arr[key].name = parent.children[1].value
        arr[key].lastname = parent.children[2].value
        arr[key].age = parent.children[3].value
        edition = true
        }
    }

    function del(element) {
        let parent = element.parentElement 
        parent.remove();
        key = (element.parentElement.getAttribute("key")) - 1
        arr.splice(key,1); 
        console.log(key)
        CHEKICN ()
    }

   
    function CHEKICN (){
        document.getElementById("main").innerHTML = 
    arr.map((item, index) => `<div id=person${index+1} key=${index+1}>
    id: <span class="que"> ${index + 1} </span>
    სახელი: <input class="infomation" value=${item.name} disabled/> 
    გვარი: <input class="infomation"  value=${item.lastname} disabled/>
    ასაკი: <input class="infomation" value=${item.age} disabled/>
    <button id="edit-btn" onclick="edit(this)">რედაქტირება</button>
    <button onclick="del(this)">წაშლა</button>
    </div>`).join("");
    }
    



    
//     localStorage.names = JSON.stringify(arr);
// var storedNames = JSON.parse(localStorage.arr);