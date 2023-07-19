export class Device {
  id: string;
  someFunction() {
    console.log("some function");
  }
}

new Device().someFunction();

// export type Device = {
//   id: string;
//   someFunction(): void;
// };
