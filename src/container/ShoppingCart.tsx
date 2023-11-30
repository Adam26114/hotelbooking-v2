import React from "react";
import { FaTimes } from "react-icons/fa";

const ShoppingCart = ({ datas }) => {
    if (datas.length === 0) return null;

    const subtotal = datas[0].rates.reduce((sum, room) => sum + room.price, 0);
    const taxTotal = datas[0].rates
        .reduce((sum, room) => sum + room.charges.amount, 0)
        .toFixed(2);

    const total = Number(subtotal) + Number(taxTotal);
    
    // console.log(subtotal,taxTotal ,total);

    return (
        <div className=" ">
            <div className="panel-heading border px-5 py-2 bg-slate-100 rounded-sm shadow">
                <h1 className="title is-4 text-3xl font-light">
                    Booking Summary
                </h1>
            </div>

            <div className=" flex flex-col gap-4">
                {datas[0].rates.map((data) => (
                    <div className="box ">
                        <a href="#" className="delete pull-right float-right">
                            <FaTimes />
                        </a>
                        <h1 className="title is-5 text-xl font-light">
                            {data.name}
                        </h1>
                        <h2
                            className="subtitle is-6 text-xl text-slate-500 font-light"
                            dangerouslySetInnerHTML={{
                                __html: datas[0].name,
                            }}
                        />
                        <table className="table w-full my-4">
                            <tr className="grid grid-cols-2  gap-4 border-b py-2 hover:bg-slate-50 cursor-pointer">
                                <td className="">
                                    <p>Room Charges</p>
                                </td>
                                <td className="flex items-center gap-2">
                                    <span>{data.currency}</span>
                                    <span>{data.price}</span>
                                </td>
                            </tr>
                            <tr className="grid grid-cols-2 gap-4 py-2 hover:bg-slate-50 cursor-pointer">
                                <td>Tax and Charges</td>
                                <td className="flex items-center gap-1">
                                    <span>{data.currency}</span>
                                    <span>
                                        {data.charges.amount
                                            ? data.charges.amount
                                            : 0}
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>

            <div className="box  border p-5 rounded-md shadow mt-4">
                <table className="table w-full my-4">
                    <tr className="grid grid-cols-2  gap-4 border-b py-2 hover:bg-slate-50 cursor-pointer">
                        <td>Sub Total</td>
                        <td className="flex items-center gap-1">
                            <span>{datas[0].rates[0].currency}</span>
                            <span>{subtotal}</span>
                        </td>
                    </tr>
                    <tr className="grid grid-cols-2  gap-4 border-b py-2 hover:bg-slate-50 cursor-pointer">
                        <td>Tax and Charges</td>
                        <td className="flex items-center gap-1">
                            <span>{datas[0].rates[0].currency}</span>
                            <span>{taxTotal}</span>
                        </td>
                    </tr>
                    <tr className="grid grid-cols-2  gap-4 border-b py-2 hover:bg-slate-50 cursor-pointer">
                        <td>Total</td>
                        <td className="flex items-center gap-1">
                            <span>{datas[0].rates[0].currency}</span>
                            <span>{total.toFixed(2)}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default ShoppingCart;
