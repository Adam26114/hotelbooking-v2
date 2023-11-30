import React, { useEffect, useState } from "react";
import BookingFrom from "./BookingFrom";
import Container from "../components/Container";
import HotelInformation from "./HotelInformation";
import ShoppingCart from "./ShoppingCart";
import SellFilter from "./SellFilter";
import RoomInformation from "./RoomInformation";

const Main = () => {
    const [aviability, setAviability] = useState([]);
    const [property, setProperty] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://hotelbooking-data.onrender.com/aviability"
                );

                if (response.ok) {
                    const data = await response.json();
                    setAviability(data);
                } else {
                    console.error("Failed to fetch data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://hotelbooking-data.onrender.com/properties"
                );
                if (response.ok) {
                    const data = await response.json();
                    setProperty(data);
                } else {
                    console.error("Failed to fetch data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="pt-[100px] w-full">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className=" flex flex-col gap-5">
                        <BookingFrom datas={aviability} />
                        <ShoppingCart datas={aviability} />
                    </div>
                    <div className="col-span-2 flex flex-col gap-5">
                        <HotelInformation datas={property} />
                        <SellFilter />
                        <RoomInformation datas={aviability} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Main;
