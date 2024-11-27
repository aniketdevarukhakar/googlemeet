let myPanelMute = document.querySelector(".my-panel .fa-microphone");
let notificationON = document.querySelector(".notification .whenON");
let notificationOFF = document.querySelector(".notification .whenOFF");
let muteBtn = document.querySelector(".mute");
let accordBtn = document.querySelector(".btn-popup");
let actionPanal = document.querySelector(".action-panel");
let moreOptionBtn = document.querySelector(".moreOptionBtn");
let moreOptionPanel = document.querySelector(".moreOptions"); 

let checkPeoples = document.querySelector(".peoples-items");

let divToggle = document.getElementById("action-toggle");
let crossBtn = document.querySelectorAll(".cross");

let actionBTN = document.querySelectorAll(".btn-action");
let middleActionBtn = document.querySelectorAll(".btn-mdl");

let peopleName = document.querySelectorAll(".people-name");
let ownerName = document.querySelector(".ownerName");
let assignInitial = document.querySelectorAll(".assignInitial");


actionBTN.forEach((item) => {
    item.addEventListener("click", (e) => {
        let findDiv = document.querySelector("." + e.target.id);
        document.querySelectorAll(".action-toggle .active, .action-panel .active").forEach((activeClass) => {
            if (activeClass !== divToggle && activeClass !== findDiv && activeClass !== item) {
                activeClass.classList.remove("active");
                divToggle.classList.remove("active");
                item.classList.remove("active");
            }
        });

        actionPanal.classList.remove("active");
        moreOptionPanel.classList.remove("active");
        item.classList.toggle("active");
        divToggle.classList.toggle("active");
        findDiv.classList.toggle("active");

        crossBtn.forEach((btn, idx) => {
            btn.addEventListener("click", function () {
                this.closest(".commonClass").classList.remove("active");
                this.closest(".action-toggle").classList.remove("active");
                item.classList.remove("active");
                console.log(item);
            })
        });
    })
});



assignInitial.forEach((initial, index) => {
    let fullName = peopleName[index].innerText; 
    let firstLetters = fullName.split(" ")
        .map(word => word.charAt(0).toUpperCase()) 
        .join(""); 

    initial.innerText = firstLetters; 

});

middleActionBtn.forEach((items) => {
    items.addEventListener("click", (e, idx)=> {
        e.target.classList.toggle("active");
    })
})

        
muteBtn.addEventListener("click", (e) => {
    myPanelMute.classList.toggle("active");
    if(e.target.classList.contains("active")) {
        notificationOFF.classList.add("active");
        setTimeout(() => {
            notificationOFF.classList.remove("active");
        }, 2000);
    } else {
        notificationON.classList.add("active");
        setTimeout(()=> {
            notificationON.classList.remove("active");
        }, 2000);
    }
})

accordBtn.addEventListener("click", () => {
    actionPanal.classList.toggle("active");    
})

moreOptionBtn.addEventListener("click", ()=> {
    moreOptionPanel.classList.toggle("active");
})


const draggable = document.getElementById('myPanel');


if(!checkPeoples.children.length) {
    draggable.style.cssText = "position: unset; width: 100%; max-height: 100%; height: calc(100vh - 95px); display:grid; background:transparent; box-shadow: unset;";
    ownerName.style.cssText = "display: inline-flex; align-items: end;";
}

const parent = document.getElementById('peoples');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

draggable.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggable.offsetLeft;
    offsetY = e.clientY - draggable.offsetTop;
    draggable.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const parentRect = parent.getBoundingClientRect();
        const draggableRect = draggable.getBoundingClientRect();

        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x + draggableRect.width > parentRect.width) {
            x = parentRect.width - draggableRect.width;
        }
        if (y + draggableRect.height > parentRect.height) {
            y = parentRect.height - draggableRect.height;
        }

        draggable.style.left = `${x}px`;
        draggable.style.top = `${y}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggable.style.cursor = 'grab';
});
