const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

const createVehicle = function (type, numWheels, color) {
    const vehicle = {
       type: type,
       numWheels: numWheels,
       color: color
    };
    return vehicle;
};

//Add three objects
const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bike", 2, "pink");
const skateboard = createVehicle("skateboard", 4, "orange");

//put them into an array
const myVehicles = [
    car,
    bike,
    skateboard
];

//loop over them
for (let vehicle of myVehicles) {
    for (let key in vehicle) {
        console.log(key, vehicle[key]);
    }
}

//Designate two vehicle objects that need repair
bike.needsRepair = true;
skateboard.needsRepair = true;

//Create an event that will display the vehicles that need repairing when a button is clicked.
button.addEventListener("click", function () {
    //Clear the list before populating
    repairList.innerHTML = "";

    //Grab list of items that need repair
    const vehicleRepairList = myVehicles.filter(function (vehicle) {
        return vehicle.needsRepair === true;
    });
    

    //loop thru vehicles that need repair and display message for all that need repair
    for (let vehicle of vehicleRepairList) {
        let li = document.createElement("li");
        li.innerHTML = `My <span>${vehicle.type}</span> needs some 💜`
        repairList.append(li);
    }
});