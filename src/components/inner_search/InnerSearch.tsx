import { useState } from "react";
import { getTrackBackground, Range } from "react-range";

export default function SearchBox() {

    const STEP = 1;
    const MIN = 10;
    const MAX = 100;

    const [distanceValues, setDistanceValues] = useState([20, 80]);
    const [priceValues, setPriceValues] = useState([20, 80]);


    return (
        <div className=" bg-primary-600 p-6 rounded-lg">
            <form className="grid md:grid-cols-[185px_180px_180px_220px_220px_120px] gap-3 items-end">

                <input
                    type="text"
                    placeholder="What Are You Looking For..."
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />

                <select className="border border-gray-300 rounded-md px-3 py-2 w-full">
                    <option disabled defaultValue="">Choose Region</option>
                    <option>Cairo</option>
                    <option>Guiza</option>
                </select>

                <select className="border border-gray-300 rounded-md px-3 py-2 w-full">
                    <option disabled defaultValue="">Choose Government</option>
                    <option>Nasr City</option>
                    <option>Gesr El Suiz</option>
                </select>

                <div>
                    <label className="text-md block mb-1 text-white ">
                        Distance: <b>{distanceValues[0]} km</b> - <b>{distanceValues[1]} km</b>
                    </label>
                    <Range
                        values={distanceValues}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(vals) => setDistanceValues(vals)}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                className="h-2 w-full rounded-full bg-gray-200 mt-5"
                                style={{
                                    background: getTrackBackground({
                                        values: distanceValues,
                                        colors: ["#D1D5DB", "#3B82F6", "#D1D5DB"],
                                        min: MIN,
                                        max: MAX,
                                    }),
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props, index }) => (
                            <div
                                {...props}
                                className="h-[20px] w-[20px] rounded-full bg-green-500 flex items-center justify-center"
                            >
                                <span className="absolute h-[20px] w-[20px] text-center rounded-full bg-black -top-4 text-[10px] text-white font-medium">
                                    {distanceValues[index]}
                                </span>
                            </div>
                        )}
                    />
                </div>

                <div>
                    <label className="text-md block mb-1 text-white ">
                        Price: <b>${priceValues[0]}</b> - <b>${priceValues[1]}</b>
                    </label>
                    <Range
                        values={priceValues}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(vals) => setPriceValues(vals)}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                className="h-2 w-full rounded-full bg-gray-200 mt-5"
                                style={{
                                    background: getTrackBackground({
                                        values: priceValues,
                                        colors: ["#D1D5DB", "#3B82F6", "#D1D5DB"],
                                        min: MIN,
                                        max: MAX,
                                    }),
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props, index }) => (
                            <div
                                {...props}
                                className="h-[20px] w-[20px] rounded-full bg-green-500 flex items-center justify-center"
                            >
                                <span className="absolute h-[20px] w-[20px] text-center rounded-full bg-black -top-4 text-[10px] text-white font-medium">
                                    {priceValues[index]}
                                </span>
                            </div>
                        )}
                    />                </div>

                <input
                    type="submit"
                    value="Search"
                    className="bg-[#38455e] text-white font-bold rounded-md py-2 cursor-pointer w-full"
                />

            </form>
        </div>
    );
}