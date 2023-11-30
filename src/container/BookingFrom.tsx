import React, { useEffect, useState } from "react";

const BookingFrom = ({ datas }) => {
    return (
        <div className="panel">
            <div className="panel-block is-block-mobile">
                <form action="" id="hotel-details" className="container">
                    <h3 className="title is-3 text-3xl font-light">
                        Hotel Details
                    </h3>
                    <div className=" flex flex-col gap-4 mt-4">
                        <div className="field flex flex-col">
                            <label
                                htmlFor="property_code"
                                className="label is-small text-sm font-semibold capitalize"
                            >
                                Hotel Location
                            </label>
                            <select
                                name="property_code"
                                id="property_code"
                                className="ui fluid dropdown border p-2"
                                
                            >
                                <option selected disabled>
                                    -- Select Hotel --
                                </option>
                                {datas.map((data) => (
                                    <option key={data?.name} value={data?.name}>
                                        {data?.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="field  flex flex-col">
                            <label
                                htmlFor="checkin_date"
                                className="label is-small text-sm font-semibold capitalize"
                            >
                                Check In Date
                            </label>
                            <p className="control">
                                <input
                                    type="date"
                                    id="checkin_date"
                                    className="input is-small border p-2 w-full"
                                    name="checkin_date"
                                    placeholder="Check In Date"
                                />
                            </p>
                        </div>

                        <div className="field  flex flex-col">
                            <label
                                htmlFor="nights"
                                className="label is-small text-sm font-semibold capitalize"
                            >
                                Nights
                            </label>
                            <p className="control">
                                <input
                                    type="number"
                                    id="nights"
                                    className="input is-small border p-2 w-full"
                                    name="nights"
                                    placeholder="Nights"
                                />
                            </p>
                        </div>

                        <div className="field  flex flex-col">
                            <label
                                htmlFor="checkout_date"
                                className="label is-small text-sm font-semibold capitalize"
                            >
                                Check Out Date
                            </label>
                            <p className="control">
                                <input
                                    type="date"
                                    id="checkout_date"
                                    className="input is-small border p-2 w-full"
                                    name="checkout_date"
                                    placeholder="Check Out Date"
                                />
                            </p>
                        </div>

                        <div className="field  flex flex-col">
                            <label
                                htmlFor="adults"
                                className="label is-small text-sm font-semibold capitalize"
                            >
                                Adults
                            </label>
                            <p className="control">
                                <input
                                    type="number"
                                    id="adults"
                                    className="input is-small border p-2 w-full"
                                    name="adults"
                                    placeholder="Adult Count"
                                />
                            </p>
                        </div>

                        <div className="field  flex flex-col">
                            <label
                                htmlFor="children"
                                className="label is-small text-sm font-semibold capitalize"
                            >
                                Children
                            </label>
                            <p className="control">
                                <input
                                    type="number"
                                    id="children"
                                    className="input is-small border p-2 w-full"
                                    name="children"
                                    placeholder="Children"
                                />
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingFrom;
