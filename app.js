const container = document.querySelector(".container")
const coffees = [
  { name: "Espresso", image: "images/img1.webp" },
  { name: "Double Espresso", image: "images/img2.webp" },
  { name: "Short Macchiato", image: "images/img3.webp" },
  { name: "Long Macchiato", image: "images/img4.webp" },
  { name: "Ristretto", image: "images/img5.webp" },
  { name: "Americano", image: "images/img6.webp" },
  { name: "Latte", image: "images/img7.webp" },
  { name: "Cppuccino", image: "images/img8.webp" },
  { name: "Flat white", image: "images/img9.webp" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}