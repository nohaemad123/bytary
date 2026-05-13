import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

export default function SearchForm() {
    const STEP = 1;
    const MIN = 10;
    const MAX = 100;

    const [values, setValues] = useState([20, 80]); // min & max

    return (
        <div className="md:absolute md:top-10 bg-primary-600 md:right-10 z-[1000] md:w-[380px] md:w-96 p-[20px]">
            <h4 className="text-white text-2xl font-bold mb-3">General Search</h4>

            <form>
                <div className="flex flex-col gap-y-3">
                    <input
                        type="text"
                        placeholder="What Are You Looking For..."
                        className="bg-neutral-secondary-medium text-heading text-sm rounded-base border-0 rounded-sm text-gray-500 w-full px-3 py-2.5 shadow-xs placeholder:text-600"
                    />

                    <select
                        id="countries"
                        className="bg-neutral-secondary-medium text-heading text-sm rounded-base border-0 rounded-sm text-gray-500 w-full px-3 py-2.5 shadow-xs placeholder:text-600"
                    >
                        <option selected disabled>Choose region</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Giza">Giza</option>
                    </select>

                    <select
                        className="bg-neutral-secondary-medium text-heading text-sm rounded-base border-0 rounded-sm text-gray-500 w-full px-3 py-2.5 shadow-xs placeholder:text-600"
                    >
                        <option selected disabled>Choose Government</option>
                        <option value="Nasr city">Nasr City</option>
                        <option value="Masr el gdeda">Masr El Gededa</option>
                    </select>

                    <label className="text-lg text-white">
                        Filter by distance interval: <b>{values[0]} km</b> - <b>{values[1]} km</b>
                    </label>


                    <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(vals) => setValues(vals)}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                className="h-2 w-full rounded-full bg-gray-200 mt-5"
                                style={{
                                    background: getTrackBackground({
                                        values,
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
                                className="h-[20px] w-[20px] rounded-full bg-black bg-green-500 flex items-center justify-center"
                            >
                                <span className="absolute h-[20px] w-[20px] text-center rounded-full bg-black -top-6 text-xs text-white font-medium">
                                    {values[index]}
                                </span>
                            </div>
                        )}
                    />
                </div>

                <div className="text-center mt-4">
                    <button type="submit" className="px-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}
