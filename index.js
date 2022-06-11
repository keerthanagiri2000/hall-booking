import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const createroom = {
    "NoOfSeatsAvailable": 4,
    "amenities": "parking,free-wifi,TV,breakfast",
    "PriceForOneHour": "₹1000",
    };

const bookingroom = {
     "customername": "john",
     "Date": "20-jan-2022",
     "StartTime": "07:00:00am",
     "EndTime": "08:00:00am",
     "RoomID": "edz234"
};

// 1.creating a room
app.post("/create-room", (req, res) => {
    res.send(createroom);
    console.log("successfully created room !!!")
});
// 2.Booking a room
app.post("/booking-room", (req, res) => {
    res.send(bookingroom);
    console.log("successfully booked room ...")
});

//3.list all rooms with booked data
app.get('/listroom-data', (req, res) => {
    delete bookingroom.RoomID;
    bookingroom.RoomName="A21";
    bookingroom.bookedStatus="booked";
    res.send(bookingroom);
});

//4.list all customers with booked data with
app.get('/customers-data', (req, res) => {
  delete bookingroom.RoomID;
  bookingroom.RoomName="A21";
  res.send(bookingroom);
})

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server run in ${PORT}`))

