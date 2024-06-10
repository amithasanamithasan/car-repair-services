import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.png';
import img10 from '../../assets/10.png';
import img11 from '../../assets/11.png';
import img12 from '../../assets/12.png';

import '@fortawesome/fontawesome-free/css/all.css';

const Populerproduct = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Product 1 */}
            <div id="pro-1" className="card w-50  bg-base-100  shadow-xl px-2 py-2 rounded">
                <figure className="px-10 pt-10 bg-slate-500">
                    <img src={img7} className="rounded" alt="Product 1" />
                </figure>
                <div className="card-body">
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 id="name-1" className="font-semibold text-xl mb-1">Car Engine Plug</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
         <p className="text-xl font-semibold text-orange-800">$<span id="price1-total">45.00</span></p>
                        </div>
                        <div className="items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <h2 className="card-title"></h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 2 */}
            <div id="pro-2" className="card w-50  bg-base-100 shadow-xl text-gray-800 px-2 py-2 rounded">
                <figure className="px-10 pt-10 bg-slate-500">
                    <img src={img8} className="rounded-xl text-gray-800" alt="Product 2" />
                </figure>
                <div className="card-body items-center text-center text-gray-800">
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 id="name-2" className="uppercase font-medium text-xl mb-2 text-gray-800">Car Air Filter</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
         <p className="text-xl font-semibold text-orange-800">$<span id="price1-total">45.00</span></p>
                        </div>
                        <div className="items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <h2 className="card-title"></h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 3 */}
            <div id="pro-3" className="card w-45 bg-base-100 shadow-xl text-gray-800 px-2 py-2 rounded">
                <figure className="px-10 pt-10 bg-slate-500">
                    <img src={img9} className="rounded-xl text-gray-800" alt="Product 3" />
                </figure>
                <div className="card-body items-center text-center text-gray-800">
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 id="name-3" className="uppercase font-medium text-xl mb-2 text-gray-800">Cools Led Light</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-orange-800 font-semibold">$<span id="price3-total">70.00</span></p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <h2 className="card-title"></h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 4 */}
            <div id="pro-4" className="card w-50 bg-base-100 shadow-xl text-gray-800 px-2 py-2 rounded">
                <figure className="px-10 pt-10 bg-slate-500">
                    <img src={img10} className="rounded-xl text-gray-800" alt="Product 4" />
                </figure>
                <div className="card-body items-center text-center text-gray-800">
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 id="name-4" className="uppercase font-medium text-xl mb-2 text-gray-800">Yokohama AVID H4S Tire</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-orange-800 font-semibold">$<span id="price4-total">70.00</span></p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <h2 className="card-title"></h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 5 */}
            <div id="pro-5" className="card w-50 bg-base-100 shadow-xl text-gray-800 px-2 py-2 rounded">
                <figure className="px-10 pt-10 bg-slate-500">
                    <img src={img11} className="rounded-xl text-gray-800" alt="Product 5" />
                </figure>
                <div className="card-body items-center text-center text-gray-800">
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 id="name-5" className="uppercase font-medium text-xl mb-2 text-gray-800">Auto Battery Grey transparent</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-orange-800 font-semibold">$<span id="price5-total">70.00</span></p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <h2 className="card-title"></h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 6 */}
            <div id="pro-6" className="card w-50 bg-base-100 shadow-xl text-gray-800 px-2 py-2 rounded">
                <figure className="px-10 pt-10 bg-slate-500">
                    <img src={img12} className="rounded-xl text-gray-800" alt="Product 6" />
                </figure>
                <div className="card-body items-center text-center text-gray-800">
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 id="name-6" className="uppercase font-medium text-xl mb-2 text-gray-800">Engine Air Filter</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-orange-800 font-semibold">$<span id="price6-total">80.00</span></p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <h2 className="card-title"></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Populerproduct;