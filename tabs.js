/* const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});

    let tabFocus = 0;
    function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    // change the tabindex of the current tab to -1

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
            // if the right key is pushed, move to the next tab on the right
            if (e.keyCode === keydownRight) {
                tabFocus++;
                if (tabFocus >= tabs.length){
                    tabFocus = 0;
                }
            }
            //  if the left key is pushed, move to the next tab on the left
            else if (e.keyCode === keydownLeft) {
                tabFocus--;
                if (tabFocus < 0){   
                    tabFocus = tabs.length - 1;
                }
            }

            tabs[tabFocus].setAttribute("tabindex", 0);
            tabs[tabFocus].focus();
    }
}


function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");


    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);
 
    hidecontent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer,[`#${targetPanel}`]);

    // mainContainer
    // .querySelectorAll('[role="tabpanel"]')
    // .forEach((panel) => panel.setAttribute("hidden", true));

    // mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    hidecontent(mainContainer, 'picture')
    showContent(mainContainer, [`#${targetImage}`])
    // mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden')
}
    // mainContainer
    // .querySelectorAll('picture')
    // .forEach((picture) => picture.setAttribute("hidden", true));

    // mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');




function hidecontent(parent, content){
    parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));

}

function showContent(parent, content) {
    parent.querySelector([content]).removeAttribute('hidden');
} 
*/


const tabList = document.querySelector('[role ="tablist"]');
const tabs = tabList.querySelectorAll('[role ="tab"]');

tabList.addEventListener('keydown', changeTabFocus )

tabs.forEach((tab) =>{
tab.addEventListener('click',changeTabPanel);
})



let tabFocus = 0;
function changeTabFocus(e){

        const keydownLeft = 37;
        const keydownRight = 39;
        
        //change the tabindex of the current tab to -1
        if (e.keyCode === keydownLeft || e.keyCode === keydownRight){
            tabs[tabFocus].setAttribute('tabindex', -1);
        }

        //if the right key  is pushed, move to the next tab on the right
        if(e.keyCode === keydownRight){
            tabFocus++;
            if(tabFocus >= tabs.length){
                tabFocus = 0;
            }
        }
        
        
        // if the left key is pushed, move to the next tab on the left
        if(e.keyCode === keydownLeft){
            tabFocus--;
            if(tabFocus < 0){
            tabFocus = tabs.length -1;
        }
    }

        tabs[tabFocus].setAttribute('tabindex', 0);
        tabs[tabFocus].focus();

    
}

function changeTabPanel(e){
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute('aria-controls');
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    const targetImage = targetTab.getAttribute('data-image')

    tabContainer
    .querySelector("[aria-selected ='true']")
    .setAttribute("aria-selected", false)


    targetTab.setAttribute("aria-selected", true);

    //the below line select the article tag and then there it add the attribute of hidden to all the article tags
  /*   mainContainer
    .querySelectorAll(`[role="tabpanel"]`)
    .forEach((panel) => panel.setAttribute("hidden", true));
     */
    hidecontent(mainContainer,`[role="tabpanel"]`)
    showContent(mainContainer, `#${targetPanel}`)

/*     mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden'); */


    //the below will hide all the images
  /*   mainContainer
    .querySelectorAll(("picture"))
    .forEach((picture)=> picture.setAttribute("hidden", true)) */
    hidecontent(mainContainer, "picture")

    // below code, once we have clicked on the a particular button, then it will remove the hidden attribute from there and we will be able to see that content. 
  /* mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden') */
    showContent(mainContainer, `#${targetImage}` )
}

function hidecontent(parent, content){
    parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute('hidden', true))
}

function showContent(parent, content){
    parent
    .querySelector(content).removeAttribute('hidden')
    
}

/* 
const tabElement = document.querySelector('[role ="tablist"]');
const dotTabs = tabElement.querySelectorALL('[role = "tab"]');

tabElement.addEventListener('keydown', changeTabFocus)
dotTabs.forEach((tab) =>{
    tab.addEventListener('click', changeDotPanel);
})

let dotTabFocus = 0;
function changeDotPanel(e){
    const targetDotTab = e.target
    // const targetDotTab = 

}

 */