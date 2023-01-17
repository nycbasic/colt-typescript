import axios from "axios";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     printUser(res.data)
//   })
//   .catch((err) => {
//     console.log(err);
//   });


  function printUser(user: User) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone)
  }

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users/")
  .then((res) => {
    res.data.forEach(printUser)
  })
  .catch((err) => {
    console.log(err);
  });