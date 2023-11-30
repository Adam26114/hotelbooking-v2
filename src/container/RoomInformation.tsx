import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
const RoomInformation = ({ datas }) => {
    if (!datas) return null;

    // const aviableRoom = Array.from({ length:  }, (_, index) => index + 1);
    return (
        <div className="panel-heading">
            <nav className="pagination py-2 px-5 bg-slate-100 border flex justify-between items-center gap-2">
                <div className=" flex items-center gap-4">
                    <p>{datas.length} Results Found</p>

                    <ul className="pagination-list flex gap-4">
                        <li className="nav-link-btn">
                            <a href="#" className="pagination-link">
                                1
                            </a>
                        </li>
                        <li className="nav-link-btn">
                            <a href="#" className="pagination-link">
                                2
                            </a>
                        </li>
                        <li className="nav-link-btn">
                            <a href="#" className="pagination-link">
                                3
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <a href="#" className="pagination-previous btn">
                        Previous
                    </a>
                    <a href="#" className="pagination-next btn">
                        Next
                    </a>
                </div>
            </nav>
            <div className="flex flex-col gap-4">
                {datas.map((data) => (
                    <div className="box">
                        <div className="selloption panel-block">
                            <div className="media flex gap-4">
                                <div className="media-left= w-1/4">
                                    <div className="">
                                        <Swiper
                                            effect={"coverflow"}
                                            grabCursor={true}
                                            centeredSlides={true}
                                            loop={true}
                                            slidesPerView={"auto"}
                                            coverflowEffect={{
                                                rotate: 0,
                                                stretch: 0,
                                                depth: 100,
                                                modifier: 2.5,
                                            }}
                                            className="swiper_container"
                                        >
                                            {data.images.map((data) => (
                                                <SwiperSlide
                                                    key={data.description}
                                                >
                                                    <img
                                                        src={data.src}
                                                        className=" rounded shadow w-full h-32 object-cover"
                                                        alt={data.description}
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                                <div className="media-content w-3/4">
                                    <div className="content">
                                        <span className="pull-right float-right">
                                            <em className="">
                                                Sleeps {data.occupancy.max}
                                            </em>
                                        </span>
                                        <h4 className="text-xl">{data.name}</h4>

                                        <p
                                            className=" line-clamp-3 active:line-clamp-none text-sm text-slate-600 mt-3"
                                            dangerouslySetInnerHTML={{
                                                __html: data.description,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel-block">
                            <table className="ui table w-full last:border-none">
                                {data.rates.map((data) => (
                                    <tr
                                        key={data.name}
                                        className="w-full grid grid-cols-4 py-3 border-b hover:bg-slate-50"
                                    >
                                        <td className="flex items-center">
                                            <strong>{data.name}</strong>
                                        </td>
                                        <td className="flex items-center gap-1 font-light">
                                            <p>{data.currency}</p>
                                            <p>{data.price}</p>
                                        </td>
                                        <td>
                                            <select name="" id="" className=" border p-2 rounded">
                                                {Array.from(
                                                    {
                                                        length: data.availability,
                                                    },
                                                    (_, index) => index + 1
                                                ).map((data, idx) => (
                                                    <option>{data}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <button className="btn is-primary is-small">
                                                Book
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomInformation;
