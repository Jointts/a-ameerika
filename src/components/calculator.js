import {useEffect, useState} from "react";
import axios from "axios";
import copart from '../img/copart.svg';
import iaai from '../img/iaai.png';

const Calculator = () => {
    const [carPrice, setCarPrice] = useState(10000);
    const [price, setPrice] = useState();

    useEffect(() => {
        if (carPrice >= 0) {
            axios.get(`/calculate.php?car_price=${carPrice}`).then((payload) => setPrice(payload.data));
        }
    }, [carPrice]);

    const calculateCost = (event) => setCarPrice(event.target.value);

    const SectionHeader = ({number, text}) => (
        <span className={'col-span-2 md:text-2xl text-lg'}>
            <span className={'inline-flex rounded-full h-12 w-12 md:w-16 md:h-16 bg-white text-gray text-center justify-center items-center'}>{number}</span>
            <span className={'ml-8 text-white'}>{text}</span>
        </span>
    );

    return (
        <span className={'grid grid-cols-2 gap-12'}>
            <SectionHeader number={'1'} text={'Vali auto järgmistelt oksjonilehtedelt'}/>
            <span className={'auction-dealer-logos col-span-2 grid sm:flex grid-cols-2 sm:grid-cols-none'}>
                <a className={'col-span-1'} href={'https://www.copart.com/'} target={'window'}>
                    <img className={'inline-flex h-16 md:h-24'} alt={'copart'} src={copart}/>
                </a>
                <a className={'col-span-1'} href={'https://iaai.com/'} target={'window'}>
                    <img className={'ml-8 inline-flex h-16 md:h-24'} alt={'iaai'} src={iaai}/>
                </a>
            </span>
            <SectionHeader number={'2'} text={'Sisesta soovitud auto hind ja arvuta kogumaksumus'}/>
            <span className={'lg:col-span-1 col-span-2'}>
                <div className={'bg-white rounded p-8 md:p-16 grid'}>
                    <h2 className={'row-span-1 md:text-3xl text-xl'}>Impordikulu kalkulaator</h2>
                    <label className={'row-span-1 my-8'}>Autohind ($)</label>
                    <input defaultValue={10000} className={'row-span-1'}
                           type={'number'} onChange={calculateCost}/>
                </div>
            </span>
            <span className={'grid lg:col-span-1 col-span-2 text-white lg:pl-12'}>
                <h2 className={'row-span-1 text-lg md:text-xl'}>Kogukulu</h2>
                <table className={'row-span-1 md:text-lg mt-4'}>
                    <tbody>
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
                    </tbody>
                </table>
            </span>
        </span>
    )
}

export default Calculator;