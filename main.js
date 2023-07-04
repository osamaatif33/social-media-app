//SIDEBAR//
let menuItems=document.querySelectorAll('.menu-item');
let momNotification=document.querySelector('#notifications');
let removeCount=document.querySelector('.notification-count');
let showPopup=document.querySelector('.notification-popup');
//MESSAGES//
let messagesNotification = document.querySelector('#messages-notification');
let messages = document.querySelector('.messages');
let messagesList = messages.querySelectorAll('.message');
let messageSearch = document.querySelector('#message-search');
//theme//
let theme=document.querySelector('#theme');
let themeModal= document.querySelector('.customize-theme');
let fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
let fontSize = '16px'; // Default font size
let colorPalette=document.querySelectorAll('.choose-color span')
let Bg1 = document.querySelector('.bg-1');
let Bg2 = document.querySelector('.bg-2');
let Bg3 = document.querySelector('.bg-3');




//===================================SIDEBAR===================================//
//remove active from all menu items              
const changeactive=() =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}
menuItems.forEach(item =>{
    item.addEventListener('click' ,() =>{
        changeactive();
        item.classList.add('active');
        //notification popup
        if(item.id != 'notifications'){
            showPopup.style.display='none'
        }else
        {
            removeCount.style.display='none';
            showPopup.style.display='block';
        }
    })
})
//====================================MESSAGES=================================//
//search chat
const searchMessage = () => {
    let val = messageSearch.value.toLowerCase();
    messagesList.forEach(message => {
        let name = message.querySelectorAll('h5')[0].textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
            message.style.display = 'flex';
        } else {
            message.style.display = 'none';
        }
    });
};

messageSearch.addEventListener('keyup', searchMessage);

//highlight message card when click on it
messagesNotification.addEventListener('click', ()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() =>{
        messages.style.boxShadow='none'
    },2000);
})


//clear notification count when clicked on
messagesNotification.addEventListener('click', () => {
    messagesNotification.querySelector('.notification-count').style.display = 'none';
});

//==================================THEME CUSTOMIZATION==========================//
//open modal
theme.addEventListener('click', () =>{
    themeModal.style.display='grid';
})
// close modal
let closeModal=(e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}

themeModal.addEventListener('click',closeModal);

//================================ FONTS =========================================//
// Remove active class from font sizes
let removeSizeSelector = () => {
    fontSizes.forEach((size) => {
    size.classList.remove('active');
});
};

fontSizes.forEach((size) => {
    size.addEventListener('click', () => {
    removeSizeSelector();
    size.classList.toggle('active');

    if (size.classList.contains('font-size-1')) {
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
        fontSize = '13px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
        fontSize = '16px';
        root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
        fontSize = '19px';
        root.style.setProperty('--sticky-top-left', '-5rem');
        root.style.setProperty('--sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')) {
        fontSize = '22px';
        root.style.setProperty('--sticky-top-left', '-10rem');
        root.style.setProperty('--sticky-top-right', '-33rem');
    }

    // Change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
});
});
//======================================COLOR=====================================//
//remove active class from colors
let changeActiveColorClass=() =>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color =>{
    color.addEventListener('click',() =>{
        let primary;
        //remove active class from colors
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue=52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue=352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue=152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})
//=====================================BACKGROUND COLOR=================//
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

let changeBG=() =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}



Bg1.addEventListener('click',() =>{
    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
})
Bg2.addEventListener('click',() =>{
    darkColorLightness='95%';
    whiteColorLightness='20%'
    lightColorLightness='15%'

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click',() =>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})




