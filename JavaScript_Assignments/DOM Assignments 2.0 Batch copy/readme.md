# JavaScript DOM Assignment 2

## Project 1:

### Task 1

#### The user has to change "Contacts" to "Projects" and add "Hire Me" in the navbar

![After Update](./DOM%20Assignment%202.0%201,2,3/firstAssignmentImage/task1Output.png)

### solution:
```
let list= document.querySelector("ul");
let last=list.lastElementChild;
last.innerText="Projects";

new_item=document.createElement("li");
new_item.innerText="Hire Me";
list.appendChild(new_item)
```

### Task 2

#### The user has to change "Contacts" to "Projects" and changing the placeholder.

![After Update](./DOM%20Assignment%202.0%201,2,3/firstAssignmentImage/task2Output.png)

### solution:
```
let list= document.querySelector("ul");
let last=list.lastElementChild;
last.innerText="Projects";

let placeholder=document.querySelector("input")
let new_placeholder=placeholder.placeholder="Search My Project"
```

### Task 3

#### The user has to change "Contacts" to "Projects" and changing the paragraph by adding "ineuron"

![After Update](./DOM%20Assignment%202.0%201,2,3/firstAssignmentImage/task3Output.png)

### solution:
```
let list= document.querySelector("ul");
let last=list.lastElementChild;
last.innerText="Projects";

let para=document.querySelectorAll("section div p span");
para[1]="an Employee"
para[2].innerText="iNeuron Intelligence Pvt Ltd";
```

### Task 4

#### The user has to change "Contacts" to "Projects" and changing image

![After Update](./DOM%20Assignment%202.0%201,2,3/firstAssignmentImage/task4Output.png)

### solution:
```
let list= document.querySelector("ul");
let last=list.lastElementChild;
last.innerText="Projects";


```

### Task 5

#### The user has to change "Contacts" to "Projects" and adding "Support Me" button in the bottom

![After Update](./DOM%20Assignment%202.0%201,2,3/firstAssignmentImage/task5Output.png)

```
let btn=document.querySelector(".hero-right-section-btns");
let btn2=document.createElement('Button');
btn2.innerText="Support Me";
btn.append(btn2);
```


## Project 2:

### Task 1

#### The user has to change "Contacts" to "Projects"

![After Update](./DOM%20Assignment%202.0%201,2,3/secondAssignmentImage/task1Output.png)

```
let item = document.querySelectorAll("ul li")
item[2].innerText ="Projects"
```

### Task 2

#### The user has to change "Contacts" to "Projects" and add "Skills" in the dropdown along with a small description.

![After Update](./DOM%20Assignment%202.0%201,2,3/secondAssignmentImage/task2Output.png)

```

let nav = document.querySelectorAll("ul li")
nav[2].innerText ="Projects"

let drop = document.querySelector(".accordian-wrapper")
let div1 = document.createElement("div")

let heading1 = document.createElement("h3")
heading1.innerText = "Skills"
let para = document.createElement("p")
para.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."

div1.className = "accordian"
drop.appendChild(div1)

div1.appendChild(heading1);
div1.appendChild(para);

```

## Project 3:

### Task 1:

#### The user has to add placeholder for input and output board

![After Update](./DOM%20Assignment%202.0%201,2,3/thirdAssignmentImage/task1Output.png)


```
// Output Board
let new_entername=document.querySelector(".enterName");
new_entername.placeholder="FSJS 2.0";
let new_enter_email=document.querySelector(".enterMail");
new_enter_email.placeholder="fsjs@ineuron.ai";
new_enter_msg=document.querySelector(".enterMessage");
new_enter_msg.placeholder="Hello World";

//Input Board
let new_username=document.querySelector(".userName");
new_username.placeholder="FSJS 2.0";
let new_useremail=document.querySelector(".userEmail");
new_useremail.placeholder="fsjs@ineuron.ai";
let new_usermsg=document.querySelector(".userMessage");
new_usermsg.placeholder="Hello World";

```


## Project 4:

### Task 1:

#### The user has to add color in the card, change texts and make font color white.

![After Update](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

```
<!-- bg1 -->
let bg1=document.querySelector(".clash-card__unit-stats--barbarian");
bg1.style.backgroundColor="#EC9B3B";

// for all text in bg colored 
let values = document.querySelectorAll(".clash-card__unit-stats .one-third")
for(i=0; i < values.length;i++){
    values[i].style.color = "#ffffff"
}

<!-- bg2 -->
let bg2=document.querySelector(".clash-card__unit-stats--archer");
bg2.style.backgroundColor="#EE5487";

let name=document.querySelector(".archer div:nth-child(3)");
name.innerText="Archer";

<!-- bg3 -->
let bg3=document.querySelector(".clash-card__unit-stats--giant");
bg3.style.backgroundColor="#F6901A";

<!-- bg4 -->
let bg4=document.querySelector(".clash-card__unit-stats--goblin");
bg4.style.backgroundColor="#82BB30";

let name1=document.querySelectorAll(".goblin div");
name1[2].innerText="The Goblin";

<!-- bg5 -->
let bg5=document.querySelector(".clash-card__unit-stats--wizard");
bg5.style.backgroundColor="#4FACFF";

```

## Project 5:

### Task 1:

#### The user has to change the reciepe color, add card to it and add a "Pro Subscription" button in the top.

![After Update](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

```
// change color of text in cards
let name1=document.querySelectorAll(".recipe-gallery .card .recipe-text ");
for (let i = 0; i <name1.length; i++) {
    name1[i].style.color="#551AA0";
}

// add button
let btn2=document.querySelector(".navbar .nav-center div:nth-child(3) ");
new_a=document.createElement("a");
new_a.className="btn";
new_a.href="index.html";
new_a.innerText="Pro Subscription";
btn2.append(new_a);

// Adding menu at last
let menu=document.querySelector(".tags-container div");
let last_menu=document.createElement("a");
last_menu.href="#";
last_menu.innerText="Chinese (7)";
menu.append(last_menu);

// add last card
let new_card=document.querySelector(".recipe-gallery");
let card_6=document.createElement("div");
card_6.className="card";

card_6.innerText="add 6th card here";
card_6.style.fontSize="30px";
card_6.style.fontWeight="bold";
new_card.append(card_6);

```

## Project 6:

### Task 1:

#### The user has to add iNeuron logo.

![After Update](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

```
let new_logo=document.querySelector(".logo");
new_logo.src="./assets/ineuron-logo.png";

```

### Task 1:

#### The user has to change the price value and a linkedin social media icon in the footer.

![After Update](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)


#### Solution:
```
// price changing
let price=document.querySelector(".app_price >span");
price.innerText="$10";

let icon=document.querySelector(".footer_social");
let div_tag=document.createElement("div");
let new_I_tag=document.createElement("i");
div_tag.className="footer_social_ico";
new_I_tag.className="fa-brands fa-linkedin";
div_tag.appendChild(new_I_tag);
icon.appendChild(div_tag);

```

## Project 7:

### Task 1:

#### The user has to remove from courses offered which has "2.0" in it.

![Before Update](./DOM%20P7/DOM%20P7/ass7.1-before.png)

![After Update](./DOM%20P7/DOM%20P7/ass7.1-after.png)

#### Solution:
```
let list=document.querySelectorAll(" .main__languages a");
for (let i = 1; i < list.length; i += 2){
    list[i].remove();
}

```

### Task 2:

#### The user has to write something in the input and submit the form.

![Before Update](./DOM%20P7/DOM%20P7/ass7.2-before.png)

![After Update](./DOM%20P7/DOM%20P7/ass7.2-after.png)

#### Solution:

```
let list=document.querySelectorAll(" .main__languages a");
for (let i = 1; i < list.length; i += 2){
    list[i].remove();
}

let text=document.querySelector(".main__form-input");
text.setAttribute("placeholder","iNeuron");
let btn=document.querySelector(".main__form-btn");
btn.disabled=false;

let new_list=document.querySelector(".main__languages");
let change=btn.addEventListener("click",c=()=>{
    for(let i=0; i<list.length;i++){
        new_list.append(list[i]);
    }
})
btn.onclick=c;
btn.onclick=change;


```

## Project 8:

### Task 1:

#### The user has to add scroll in the sidebar highlighted.

![Before Update](./DOM%20P8/DOM%20P8/ass8.1-before.png)

![After Update](./DOM%20P8/DOM%20P8/ass8.1-after.png)

#### Solution:
```
let aside=document.querySelector(".new");
let line=document.createElement("hr");
line.className="hr-line";

aside.appendChild(line);
let heading=document.createElement("h2");
heading.className="new-head";
aside.appendChild(heading);
let new_p=document.createElement("p");
new_p.className="new-p";
aside.appendChild(new_p);
heading.innerText="This is my custom heading";
aside.style.overflow="scroll";


```

### Task 2:

#### The user has to remove background image.

![Before Update](./DOM%20P8/DOM%20P8/ass8.2-before.png)

![After Update](./DOM%20P8/DOM%20P8/ass8.2-after.png)

#### Solution:

```
let bg1=document.querySelector("body");
bg1.style.backgroundImage="none";

```

### Task 3:

#### The user has to add toggle for the navbar for small screen.

![Before Update](./DOM%20P8/DOM%20P8/ass8.3-before.png)

![After Update](./DOM%20P8/DOM%20P8/ass8.3-after.png)

#### Solution:

```
let  navbar= document.querySelector(".navbar-toggler")
navbar.addEventListener("click", () => {
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse")
})

```

## Project 9:

### Task 1:

#### The user has to change the color of heading text.

![Before Update](./DOM%20P9/DOM%20P9/ass9.1-before.png)

![After Update](./DOM%20P9/DOM%20P9/ass9.1-after.png)

#### Solution:

```
heading=document.querySelector(".caption h1");
heading.style.color="red";

```

### Task 2:

#### The user has to add change of the color of add to cart button on hovering on it.

![Before Update](./DOM%20P9/DOM%20P9/ass9.1-before.png)

![After Update](./DOM%20P9/DOM%20P9/ass9.1-after.png)

#### Solution:

```
let bg1=document.querySelector(".add-to-cart");
bg1.addEventListener("mouseover",()=>{
    bg1.style.backgroundColor="#DC143C";
})
bg1.addEventListener("mouseout",()=>{
    bg1.style.backgroundColor="#3C8067";
})


```