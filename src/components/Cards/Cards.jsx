import { useEffect } from "react";
import Mark from "../Mark/Mark";
import './Cards.css'
import { useState } from "react";

const Cards = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    return (
        <>
            <div className="max-w-screen-xl mx-auto flex gap-5">
                <div className="w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
                    {
                        cart.map(item => (
                            <div key={item.id} className="p-5 bg-white rounded-lg">
                                <img src={item.img} alt="" />
                                <h3 className="text-[#1C1B1B] font-semibold text-[18px] pt-4">{item.course}</h3>
                                <p className="py-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div>
                                    <h6 className="flex justify-evenly"><span>0</span> <span>Price : 15000</span> <span>0</span> <span className="text-right">Credit : 2hr</span></h6>
                                </div>
                                <div className="text-center mt-3">
                                    <button className="bg-[#2F80ED] text-white px-8 py-2 w-full text-[18px] rounded-lg">Select</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-1/4">
                    <Mark></Mark>
                </div>
            </div>
        </>
    );
};

export default Cards;