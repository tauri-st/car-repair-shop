const createVehicle = function (type, numWheels, color) {
    const vehicle = {
       type: type,
       numWheels: numWheels,
       color: color
    };
    return vehicle;
};

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bike", 2, "pink");
const skateboard = createVehicle("skateboard", 4, "orange");

const myVehicles = [
    car,
    bike,
    skateboard
];

for (let key in myVehicles) {
    console.log(key, myVehicles[key]);
};