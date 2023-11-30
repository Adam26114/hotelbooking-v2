import React from "react";

const SellFilter = () => {
    return (
        <div className="filter-panel">
            <div className="panel-heading py-2 px-5 bg-slate-100 border">
                <h1 className="title is-5  text-2xl font-light">Filter Sell Options</h1>
            </div>
            <div className="panel-block columns grid grid-cols-3 gap-5 box">
                <div className="column">
                    <div className="field">
                        <label htmlFor="currency" className="label is-small text-sm font-semibold">
                            Currency
                        </label>
                        <p className="select is-small text-sm mt-2">
                            <select name="" id="currency" className="border p-2 rounded-sm w-full">
                                <option value="" selected disabled>
                                    - Hotel Currency -
                                </option>
                                <option value="SGD">SGD</option>
                                <option value="MYR">MYR</option>
                                <option value="USD">USD</option>
                            </select>
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label htmlFor="sort_by" className="label is-small text-sm font-semibold">
                            Sort By
                        </label>
                        <p className="select is-small text-sm mt-2">
                            <select name="sort_by" id="sort_by" className="border p-2 rounded-sm w-full">
                                <option value="low_hi">Low to High</option>
                                <option value="hi_low">High to Low</option>
                            </select>
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label htmlFor="rate_limit" className="label is-small text-sm font-semibold">
                            Rate Limit
                        </label>
                        <p className="control is-small text-sm mt-2">
                            <input
                                type="number"
                                id="rate_limit"
                                className="input is-small border p-2 rounded-sm w-full"
                                name="rate_limit"
                                placeholder="Rate Limit"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellFilter;
