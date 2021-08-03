import './Home.css';
import Bar from "./components/bar";
import facebook from "./img/facebook_white.png";
import Button from "./components/button";
import SideBar from "./components/sidebar";
import Service from "./components/service";
import consulting from './img/consulting.png';
import sell from './img/sell.png';
import Calculator from "./components/calculator";

const Home = () => {
    return (
        <>
            <SideBar/>
            <div className={'bg-car bg-cover h-screen/2 flex justify-center items-center'}>
                <span className={'grid'}>
                    <Bar text={'A-Ameerika'} className={'mb-8'}/>
                    <h1 className={'text-white text-center row-span-1 mb-6'}>Konsultatsiooni ja esindusteenus<br/> autode ostul, müümisel</h1>
                    <span className={'row-span-1 flex justify-center my-6'}>
                        <Button/>
                    </span>
                    <span className={'row-span-1 flex justify-center my-6'}>
                        <img alt={'facebook'} className={'w-12'} src={facebook}/>
                    </span>
                </span>
            </div>
            <div className={'container'}>
                <span className={'grid'}>
                    <span className={'row-span-1 flex justify-center my-24'}>
                        <Bar text={<>
                            <h1 className={'text-gray'}>Teenused</h1>
                            <h3 className={'text-red mb-2 font-lato'}>Millega meie tegeleme</h3>
                        </>} className={'mb-8'}/>
                    </span>
                    <span className={'row-span-1'}>
                        <span className={'grid grid-cols-2 gap-12'}>
                            <Service image={consulting} title={"Konsultatsioon ja müük"} email={'sandor@a-ameerika.ee'}
                                     number={'01'} phoneNr={'+372 1234 5678'} personName={'Sandor Pitskar'}/>
                            <Service image={sell} title={"Finants ja müük"} email={'martin@a-ameerika.ee'} number={'02'}
                                     phoneNr={'+372 1234 5678'} personName={'Martin Schröder'}/>
                        </span>
                    </span>
                </span>
            </div>
            <div className={'mt-48 row-span-1 w-screen'} style={{
                background: 'linear-gradient(rgb(19, 51, 84) 0%, rgb(82 37 43) 100%)'
            }}>
                <div className={'container py-32'}>
                    <Calculator/>
                </div>
            </div>
        </>
    );
};

export default Home;
