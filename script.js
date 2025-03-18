const mainNav = document.getElementById("main-nav");
const pageTitle = document.getElementById("page-title");

function callIframeDocument(docName) {
  if (docName === "") return null;
  const iframe = document.getElementsByTagName("iframe").item(0);
  
  console.log(docName)
  iframe.src = `./pages/${docName}.html`;
}

const mainNavListItems = Array.from(
  mainNav.children.item(0).children
)

mainNavListItems.forEach( li => {
  li.addEventListener("click", () => {
    let itemName = li.innerHTML.toLowerCase().trim(); 
    callIframeDocument(itemName);
  });
});
