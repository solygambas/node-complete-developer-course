// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

// const event = {
//   name: "Birthday Party",
//   printGuestList: function () {
//     console.log(`Guest list for ${this.name}`);
//     // this.name is undefined with arrow function
//   },
// };

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log(`Guest list for ${this.name}`);
    // shorter syntax
    this.guestList.forEach((guest) =>
      console.log(`${guest} is attenting ${this.name}`)
    );
  },
};

event.printGuestList();
