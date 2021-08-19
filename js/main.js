
const tabsItems = document.querySelectorAll(".tab-item");
const tabsContentItems = document.querySelectorAll(".tab-content-item");

// select tab content item
function handleSelectItem(event){
    removeBorder();
    removeShow();
    this.classList.add("tab-border")
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show");
};

function removeBorder() {
    tabsItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
    tabsContentItems.forEach(item => item.classList.remove("show"));
}


tabsItems.forEach(item => item.addEventListener("click", handleSelectItem))