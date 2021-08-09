import React from "react";
import ReactDOM from "react-dom";
import "./dashboard.css";
import App from "./App";

// // Khai báo biến
// const a = 10;
// const b = 20;

// const myName = <span>Le Trong Dat</span>;
// const person = {
//   name: "Le Thanh Tung",
//   age: 20
// };

// function total(a, b) {
//   return a + b;
// }

// function ShowName(props) {
//   console.log(props.data); // nhận vào 1 object {}
//   return null;
// }

// // Sử dụng
// const element = (
//   <div>
//     <p>Tổng là: {total(a, b)}</p>
//     <p>Tên bố: {myName}</p>
//     <p>
//       Tên con: {person.name}, Tuổi {person.age}
//     </p>
//     <p>
//       <ShowName data="Dat" />
//       <ShowName data="Kien" />
//       <ShowName data="Tung" />
//     </p>
//   </div>
// );

// hiển thị
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// jsx -> javascript xml
// es6 -> ecmascript 6
