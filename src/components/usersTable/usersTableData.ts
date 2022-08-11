export interface UserData {
  id: string;
  username: string;
  img: string;
  status: "active" | "passive" | "pending";
  email: string;
  age: number;
}

export const usersTableRows: UserData[] = [
  {
    id: "1e343ab4-4ffc-4c23-9d72-e006d2575f6e",
    username: "Snow",
    img: "https://res.cloudinary.com/dzytlqnoi/image/upload/v1615203395/default-user-img_t3xpfj.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: "ecc108fb-291b-4bda-b496-aeb78c726170",
    username: "Jamie Lannister",
    img: "https://res.cloudinary.com/dzytlqnoi/image/upload/v1615203395/default-user-img_t3xpfj.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: "be642f45-7cd0-4e3f-9d77-68b2f6ffa964",
    username: "Lannister",
    img: "https://res.cloudinary.com/dzytlqnoi/image/upload/v1615203395/default-user-img_t3xpfj.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: "f59cb34a-db38-4e10-b391-bf46a833138d",
    username: "Stark",
    img: "https://res.cloudinary.com/dzytlqnoi/image/upload/v1615203395/default-user-img_t3xpfj.jpg",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: "cf0282bd-8a3d-4ae7-8a80-2ca53e3cd960",
    username: "Targaryen",
    img: "https://res.cloudinary.com/dzytlqnoi/image/upload/v1615203395/default-user-img_t3xpfj.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: "473dd957-ca08-4144-920f-d6e88dc60ddf",
    username: "Melisandre",
    img: "https://res.cloudinary.com/dzytlqnoi/image/upload/v1615203395/default-user-img_t3xpfj.jpg",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: "ef827998-b1f6-4ac1-80bc-c69f6e38a3b5",
    username: "Clifford",
    img: "https://res.cloudinary.com/dzytlqnoi/image/upload/v1615203395/default-user-img_t3xpfj.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: "9817fc6e-f2cb-40cf-989e-108b56eb84e6",
    username: "Frances",
    img: "https://res.cloudinary.com/dzytlqnoi/image/upload/v1615203395/default-user-img_t3xpfj.jpg",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: "eef5fb66-cd2e-42fa-adb9-2600e9a49c0d",
    username: "Roxie",
    img: "https://res.cloudinary.com/dzytlqnoi/image/upload/v1615203395/default-user-img_t3xpfj.jpg",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  }
];