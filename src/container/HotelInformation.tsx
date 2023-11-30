import React from "react";

const HotelInformation = ({ datas }) => {
    if (datas.length === 0) return null;
    return (
        <div className="property-information box">
            <h1 className="title is-5 text-3xl font-light">
                Hotel Information
            </h1>

            <div className="media grid grid-cols-4 gap-5 mt-5">
                <div className="media-left">
                    <p className="image">
                        <img
                            src={datas[0].logo}
                            className="w-full h-32 object-cover rounded shadow"
                            alt={datas[0].name}
                        />
                    </p>
                </div>
                <div className="media-content col-span-3">
                    <div className="content">
                        <p className="title is-4 text-xl font-light mb-5">
                            {datas[0].name}
                        </p>
                        <p>
                            <small
                                className=" font-light"
                                dangerouslySetInnerHTML={{
                                    __html: datas[0].description,
                                }}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelInformation;
