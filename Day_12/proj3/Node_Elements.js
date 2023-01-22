// Elements inside <>
// Text Node : Simple Text written in HTML

const courses = [
    {
        name: "Complete ReactJS Course",
        price: "199"
    },

    {
        name: "Complete AngularJS Course",
        price: "299"
    },

    {
        name: "Complete MERN  Course",
        price: "201"
    },

    {
        name: "Complete MEAN Course",
        price: "199"
    },
];


// challenge is to grab  ( line 16-20 )
// 1 ) Construct the list item 
// 2 ) inject class into li 
// 3 ) injecting Text Nodes and another element having class in the list item
// 4 ) inject the list item into unordered list


function generateLIST() {
    // grabbing the unordered list from  HTML
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {

        // creating a LIST ITEM using CREATE ELEMENT
        // <x> </x> is what is created ...
        const li = document.createElement("li");
        // <li></li> is created right now

        // adding class to it using CLASSLIST (methods include add , remove , toggle the class name)
        li.classList.add("list-group-item");
        // <li class = "list-group-item"></li>

        // lets create Text Node using createTextNode
        // since we have direct access to the course , we can 
        // just access the name property
        const name = document.createTextNode(course.name);
        li.appendChild(name);
        // <li class = "list-group-item" > Complete ReactJS Course </li>  is created

        // to add span 
        const span = document.createElement("span");
        span.classList.add("float-right");
        // <li class = "list-group-item" > Complete ReactJS Course <span class = "float-right"></span></li> 

        // adding Text Node inside span
        const price = document.createTextNode("Rs " + course.price);
        span.appendChild(price);

        // <li class = "list-group-item" > Complete ReactJS Course </li> 
        // <span class= " float-right">$299</span> is created and we need to span into List Item

        li.appendChild(span);
        // <li class = "list-group-item">
        //     Complete ReactJS Course <span class = "float-right">Rs 299</span>
        // </li>

        // injecting li into ul
        ul.appendChild(li);
        // <ul class="list-group">
        //     <li class="list-group-item">
        //         Complete ReactJS Course <span class="float-right">Rs 299</span>
        //     </li>
        // </ul>

    });
};

// load is an event , we pass a reference of generateLIST 
window.addEventListener("load", generateLIST);

// Lets sort courses according to their prices

const button = document.querySelector(".sort-btn");
const button2 = document.querySelector(".btn-primary");

// // this will sort in ascending order
function sortAscend(a, b) {
    return a.price - b.price;
}
function sortDescend(a, b) {
    return b.price - a.price;
}


button.addEventListener("click", () => {
    courses.sort(sortAscend)
    generateLIST();
})

button2.addEventListener("click" , ()=>
{
    courses.sort(sortDescend);
    generateLIST();
})

