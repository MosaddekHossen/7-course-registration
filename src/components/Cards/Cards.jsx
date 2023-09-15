import { useEffect, useTransition } from "react";
import Mark from "../Mark/Mark";
import './Cards.css'
import { useState } from "react";

const Cards = () => {
    const [cart, setCart] = useState([]);
    const [title, setTitle] = useState([]);
    const [credit, setCredit] = useState(0);
    const [remaining, setRemaining] = useState(20);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);

    const handleSelect = (item) => {
        let creditCount = item.credit;
        const isExist = title.find(tit => tit.id === item.id);
        if (isExist) {
            return alert("Already this course name is exist!")
        }
        title.forEach(element => {
            creditCount += element.credit;
        })
        if (creditCount > 20) {
            alert('Credit count is greater than twenty so stop!')
        }
        console.log(creditCount)
        setCredit(creditCount);
        setRemaining(20 - creditCount);

        setTitle([...title, item])
    }

    return (
        <>
            <div className="max-w-screen-xl mx-auto flex gap-5">
                <div className="w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
                    {
                        cart.map(item => (
                            <div key={item.id} className="p-5 bg-white rounded-lg">
                                <img src={item.img} alt="" />
                                <h3 className="text-[#1C1B1B] font-semibold text-[18px] pt-4">{item.course}</h3>
                                <p className="py-3">{item.details}</p>
                                <div>
                                    <h6 className="flex justify-evenly"><span>0</span> <span>Price : {item.price}</span> <span>0</span> <span className="text-right">Credit : {item.credit}hr</span></h6>
                                </div>
                                <div className="text-center mt-3">
                                    <button onClick={
                                        () => handleSelect(item, item)
                                    } className="bg-[#2F80ED] text-white px-8 py-2 w-full text-[18px] rounded-lg">Select</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-1/4">
                    <Mark
                        title={title}
                        credit={credit}
                        remaining={remaining}
                    ></Mark>
                </div>
            </div>
        </>
    );
};

export default Cards;