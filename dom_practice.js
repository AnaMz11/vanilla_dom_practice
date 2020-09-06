console.log("hello world")

let image = document.getElementById("SF")


//Get the h2 element and save it to a variable h2. Console.log that variable.
var greeting = document.querySelector("h2")

// Using JavaScript, change the innerText of your h2 to have 3 exclamation points at the end

greeting.innerText = "Welcome to San Francisco!!!"

//Get all of the elements with the class you assigned and save them to a variable. Console.log that variable.
var headings = document.getElementsByClassName("headings")

image.style.filter = 'grayscale(60%)'

//Change the style/color of the text of your ONE of your li elements to your favorite html color
var list = document.querySelectorAll("li")
list[0].style.color = "#FFB6C1"


//Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'

list[3].innerText = "Jamboree sandwich at the Jambo-ree"

//Create an element and append it
//Create a new img element using document.createElement()
const cableCars = document.createElement("img")

// Add an attribute for the source url of your new image using .setAttribute()
cableCars.setAttribute("src", "https://www.planetware.com/photos-large/USCA/california-san-francisco-cable-cars.jpg")
const paragraph = document.querySelector("p")

// Append it to your page, somewhere, using .appendChild()
paragraph.appendChild(cableCars)


// Select any element using querySelector and save it to a variable
var footer = document.querySelector("footer")

//and remove it from your page using .remove()

// footer.remove()