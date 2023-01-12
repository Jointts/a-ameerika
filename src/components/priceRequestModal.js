import React, {useState} from "react";
import 'flowbite';
import Button from "./button";
import axios from "axios";
import {toast} from "react-toastify";


const PriceRequestModal = () => {
    const [name, setName] = useState();
    const [company, setCompany] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [price, setPrice] = useState();
    const [auctionLink, setAuctionLink] = useState();

    const closeButtonRef = React.createRef();

    const sendPriceRequest = async (event) => {
        event.preventDefault();
        const data = {
            'name': name?.target?.value,
            'company': company?.target?.value,
            'email': email?.target?.value,
            'phone': phone?.target?.value,
            'price': price?.target?.value,
            'auction_link': auctionLink?.target?.value,
        };
        axios.post('/send_price_request.php', data).then(
            () => {
                toast.success("Sõnum saadetud! Vastame esimesel võimalusel");
                closeButtonRef?.current?.click();
            }
        ).catch(
            () => toast.error("Oih midagi läks valesti, võid proovida uuesti või võta ühendust telefoni teel.")
        );
    };

    return (
        <>
            <Button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" text={'Hinnapäringu vorm'} className={'w-auto col-span-2 md:col-span-1 max-w-sm'}/>
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true"
                 className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button ref={closeButtonRef} type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Hinnapäring</h3>
                            <h4>Modaali sulgemisel jääb sisestatud info alles</h4>
                            <form className={'mt-6'} onSubmit={sendPriceRequest} onInvalid={(e) => e.target.setCustomValidity('See väli on täitmata/vigadega')}
                                  onInput={(e) => e.target.setCustomValidity('')}>
                                <span className={'space-y-6'}>
                                    <div>
                                        <label htmlFor="name"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nimi</label>
                                        <input onChange={setName} type="text" name="name" id="name" placeholder="Eesnimi Perekonnanimi"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required />
                                    </div>
                                    <div>
                                        <label htmlFor="company"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ettevõte (Pole nõutud)</label>
                                        <input onChange={setCompany} type="text" name="company" id="company" placeholder="Ettevõte OÜ"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                                        <input onChange={setEmail} type="email" name="email" id="email"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               placeholder="nimi@gmail.com" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon</label>
                                        <input onChange={setPhone} type="tel" name="phone" id="phone" placeholder="+372 1234 567"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required/>
                                    </div>
                                    <div>
                                        <label htmlFor="price"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Autohinna ülempiir (€)</label>
                                        <input onChange={setPrice} type="number" name="price" id="price"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               placeholder="5000" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="auction_link"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Oksjonikuulutuse link (Coparts/IAAI lehelt)</label>
                                        <input onChange={setAuctionLink} type="url" name="auction_link" id="auction_link"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               placeholder="5000" required/>
                                    </div>
                                </span>
                                <Button type={'submit'} text={'Saada hinnapäring'}
                                        className={'w-full mt-12'}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceRequestModal;