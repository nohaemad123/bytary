import pets from "../../assets/icon.png";
import vets from "../../assets/637308-200.png";
import stores from "../../assets/1173553-200.png";
import pharmacies from "../../assets/image2.png";


export default function HomeCategories() {
    return (
        <div className="bg-secondary">
            <div className="max-w-screen-xl mx-auto px-4 pb-10">
                <div className="
  relative md:-top-15 md:left-[50px] md:w-1/5 text-center
  bg-[#38455e] text-white font-semibold text-[20px] uppercase px-5 py-4 z-[999]
  before:content-[''] md:before:absolute before:bottom-0 before:left-[-50px]
  before:w-0 before:h-0
  before:border-t-[53px] md:before:border-r-[45px] before:border-b-[5px] md:before:border-l-[6px]
  before:border-t-transparent md:before:border-l-transparent before:border-r-[#38455e] before:border-b-[#38455e]
  after:content-[''] after:absolute md:after:bottom-0 md:after:right-[-58px]
  after:w-0 after:h-0
  after:border-t-[6px] md:after:border-r-[52px] after:border-b-[53px] after:border-l-[7px]
  after:border-t-transparent after:border-r-transparent after:border-b-[#38455e] after:border-l-[#38455e]
">
                    Our categories
                </div>

                <div className="grid md:grid-cols-4 gap-x-10 ">
                    <a href="" className="border-b py-5 md:border-r md:border-b-0 border-white flex items-center justify-center gap-x-5 text-white font-bold text-lg">   <img
                        src={pets}
                        alt="icon"
                        className="w-10 h-10"
                    />
                        pets clinics
                    </a>

                    <a href="" className="border-b py-5 md:border-r md:border-b-0 border-white flex items-center justify-center gap-x-5 text-white font-bold text-lg">   <img
                        src={vets}
                        alt="icon"
                        className="w-10 h-10"
                    />
                        Vets
                    </a>
                    <a href="" className="border-b py-5 md:border-r md:border-b-0 border-white flex items-center justify-center gap-x-5 text-white font-bold text-lg">   <img
                        src={stores}
                        alt="icon"
                        className="w-10 h-10"
                    />
                        pet stores
                    </a>
                    <a href="" className="flex pt-5 items-center justify-center gap-x-5 text-white font-bold text-lg">   <img
                        src={pharmacies}
                        alt="icon"
                        className="w-10 h-10"
                    />
                        Pharmacies
                    </a>
                </div>
            </div>
        </div >
    )
}
