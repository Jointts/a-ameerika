import {useEffect, useState} from "react";
import axios from "axios";

const Calculator = () => {
    const [carPrice, setCarPrice] = useState(10000);
    const [price, setPrice] = useState();

    useEffect(() => {
        if(carPrice >= 0) {
            axios.get('http://localhost:5000/calculate?car_price=' + carPrice).then((payload) => setPrice(payload.data));
        }
    }, [carPrice]);

    const calculateCost = (event) => setCarPrice(event.target.value);

    return (
        <span className={'grid grid-cols-2 gap-12'}>
            <span className={'col-span-1'}>
                <div className={'bg-white rounded p-16 grid'}>
                    <h2 className={'row-span-1'}>Impordikulu kalkulaator</h2>
                    <label className={'row-span-1 my-8'}>Autohind ($)</label>
                    <input defaultValue={10000} className={'row-span-1 text-gray p-2 rounded border border-gray'} type={'number'} onChange={calculateCost}/>
                </div>
            </span>
            <span className={'grid col-span-1 text-white pl-12'}>
                <h2 className={'row-span-1'}>Kogukulu</h2>
                <table className={'row-span-1 text-lg'}>
                    <tr>
                        <td>Autohind</td>
                        <td>{price?.car_price} €</td>
                    </tr>
                    <tr>
                        <td>Konteinerihind</td>
                        <td>{price?.container_price} €</td>
                    </tr>
                    <tr>
                        <td>Toll</td>
                        <td>{price?.customs} €</td>
                    </tr>
                    <tr>
                        <td>Sisetransport</td>
                        <td>{price?.inner_transport} €</td>
                    </tr>
                    <tr>
                        <td>Teenus ja dokumentatsioon</td>
                        <td>{price?.service} €</td>
                    </tr>
                    <tr>
                        <td>Käibemaks</td>
                        <td>{price?.tax} €</td>
                    </tr>
                    <tr className={'border-t-2 font-bold'}>
                        <td>Kokku</td>
                        <td>{price?.total} €</td>
                    </tr>
                </table>
            </span>
        </span>
    )
}

export default Calculator;