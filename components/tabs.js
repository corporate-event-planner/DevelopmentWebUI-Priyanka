// JavaScript file for InfoLink

class InfoLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // console.log(this.data);

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.about-me-content[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    this.infoItem = new InfoItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.info-link');
    console.log(`select of InfoLink called ${this.data}`);

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => link.classList.remove('info-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('info-link-selected');
    console.log(`${this.data} has class info-link-selected added to it`);

    // Call the select method on the item associated with this link
    this.infoItem.select();
    // TweenMax.to(`.tabs-item[data-tab="${this.data}"]`, 3, { rotation: 360, scale: 1 });
  }
}

class InfoItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.about-me-content');
    console.log(items)

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('about-me-selected'));
    console.log(`${this.element} has class about-me-selected added to it`)

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('about-me-selected');
  }
}

/* START HERE: 

- Select all elements with class name ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.info-link');
console.log(links);
links.forEach(link => new InfoLink(link));