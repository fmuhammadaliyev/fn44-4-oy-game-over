//DRAK MOD
const elBtn = document.getElementById("btn");

if (localStorage.getItem("mode") === "darkk") {
  document.body.classList.add("darkk");
} else {
  document.body.classList.remove("darkk");
}

elBtn.addEventListener("click", () => {
  if (document.body.classList.contains("darkk")) {
    document.body.classList.remove("darkk");
    localStorage.setItem("mode", "light");
  } else {
    document.body.classList.add("darkk");
    localStorage.setItem("mode", "darkk");
  }
});

//CARS
import { cars } from "./data.js";

const elContainer = document.querySelector(".grid");

function showCars() {
  elContainer.innerHTML = "";
  cars.forEach((car, index) => {
    elContainer.innerHTML += `
      <div class="bg-white shadow-md rounded-xl p-4">
        <h1 class="font-bold text-lg mb-2">${car.name}</h1>
        <p class="text-gray-600">${car.description}</p>
        <p><span class="font-bold">Country:</span> ${car.country}</p>
        <p><span class="font-bold">Turkum:</span> ${car.category}</p>
        <p><span class="font-bold">Rang:</span> <span class="font-bold">${car.color}</span></p>

        <div class="flex gap-2 mt-4">
          <button onclick="deleteCar(${index})" 
            class="bg-yellow-500 text-white px-3 py-1 rounded-lg">🗑</button>
          <button onclick="editCar(${index})" 
            class="bg-fuchsia-500 text-white px-3 py-1 rounded-lg">✏️</button>
          <button onclick="detailCar(${index})" 
            class="bg-sky-500 text-white px-3 py-1 rounded-lg">👨‍💻</button>
        </div>
      </div>
    `;
  });
}
showCars();

//OCHIRISH
window.deleteCar = function (id) {
  const isConfirmed = confirm("Rostdan ham o‘chirasizmi?");
  if (isConfirmed) {
    cars.splice(id, 1);
    showCars();
  }
};
//TAHRIRLASH
window.editCar = function (id) {
  const car = cars[id];

  const newName = prompt("Mashina nomini tahrirlang:", car.name);
  if (newName === null) return;

  const newDescription = prompt("Mashina tariflang:", car.description);
  if (newDescription === null) return;

  const newCountry = prompt("Davlatni tahrirlang:", car.country);
  if (newCountry === null) return;

  const newColor = prompt("Rangni tahrirlang:", car.color);
  if (newColor === null) return;

  cars[id] = {
    name: newName,
    description: newDescription,
    country: newCountry,
    color: newColor,
  };

  showCars();
};
//MALUMOT
window.detailCar = function (id) {
  const car = cars[id];
  alert(`
    Mashina malumotlari
    Nomi: ${car.name}
    Trim: ${car.trim}
    Avlod: ${car.generation}
    Yili: ${car.year}
    Rangi (kod): ${car.color}
    Rangi (nomi): ${car.colorName}
    Kategoriya: ${car.category}
    Eshiklar soni: ${car.doorCount}
    O‘rindiqlar soni: ${car.seatCount}
    Maksimal tezligi: ${car.maxSpeed}
    Tezlanishi: ${car.acceleration}
    Dvigatel: ${car.engine}
    Ot kuchi: ${car.horsepower}
    Yoqlig‘i turi: ${car.fuelType}
    Yonilg‘i sarfi:
    Shahar: ${car.fuelConsumption.city}
    Trassa: ${car.fuelConsumption.highway}
    O‘rtacha: ${car.fuelConsumption.combined}
    Ishlab chiqarilgan mamlakat: ${car.country}
    Tavsif: ${car.description}
  `);
};
