import './Home.css';
import Bar from "./components/bar";
import facebook from "./img/facebook_white.png";
import Button from "./components/button";
import SideBar from "./components/sidebar";
import Service from "./components/service";
import consulting from './img/consulting.png';
import sell from './img/sell.png';
import Calculator from "./components/calculator";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Analytics} from "analytics";
import googleAnalyticsPlugin from "@analytics/google-analytics/lib/analytics-plugin-ga.browser.es";
import mail from "./img/mail.png";
import phone from "./img/phone.png";

const Home = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();

    const analytics = Analytics({
        app: 'A-ameerika',
        plugins: [
            googleAnalyticsPlugin({
                measurementIds: ['G-RND9JK1B6K']
            })
        ]
    });

    useEffect(async () => {
        await analytics.page();
    }, []);

    const trackSendMail = (data) => analytics.track('send_mail', data);

    const sendMail = async (event) => {
        event.preventDefault();
        const data = {
            'email': email?.target?.value,
            'name': name?.target?.value,
            'message': message?.target?.value
        };
        axios.post('/send_mail.php', data).then(
            () => toast.success("Sõnum saadetud! Vastame esimesel võimalusel")
        ).catch(
            () => toast.error("Oih midagi läks valesti, võid proovida uuesti või võta ühendust telefoni teel.")
        );
        await trackSendMail(data);
    };

    return (
        <>
            <SideBar/>
            <div className={'bg-car bg-cover h-screen sm:h-screen/2 flex justify-center items-center'}>
                <span className={'grid'}>
                    <Bar text={'A-Ameerika'} className={'mb-8'} textClassName={'text-3xl'}/>
                    <h1 className={'text-white text-center row-span-1 md:mb-6 mb-2 md:text-4xl lg:text-6xl text-xl px-4'}>Konsultatsiooni ja esindusteenus<br/> autode ostul, müümisel</h1>
                    <span className={'row-span-1 flex justify-center md:my-6 my-2'}>
                        <a href={'#contact'}>
                            <Button text={'Võta ühendust'}/>
                        </a>
                    </span>
                    <span className={'row-span-1 flex justify-center my-6'}>
                        <a href='https://www.facebook.com/groups/httpswww.aameerika.ee'>
                            <img alt={'facebook'} className={'w-12 hover:opacity-70'} src={facebook}/>
                        </a>
                    </span>
                </span>
            </div>
            <div className={'container'}>
                <span className={'grid'}>
                    <span className={'row-span-1 flex justify-center my-24'}>
                        <Bar text={<>
                            <h1 className={'text-gray md:text-6xl text-4xl'}>Teenused</h1>
                            <h3 className={'text-red mb-2 font-lato md:text-xl text-base'}>Millega meie tegeleme</h3>
                        </>} className={'mb-8'}/>
                    </span>
                    <span className={'row-span-1'}>
                        <span className={'grid grid-cols-2 gap-12'}>
                            <Service image={consulting} title={"Konsultatsioon ja müük"} email={'sandor@a-ameerika.ee'}
                                     number={'01'} phoneNr={'+372 507 1759'} personName={'Sandor Pitskar'}/>
                            <Service image={sell} title={"Finants ja müük"} email={'martin@a-ameerika.ee'} number={'02'}
                                     phoneNr={'+372 501 7765'} personName={'Martin Schröder'}/>
                        </span>
                    </span>
                </span>
            </div>
            <div className={'mt-48 row-span-1 w-full'} style={{
                background: 'linear-gradient(rgb(19, 51, 84) 0%, rgb(57 42 59) 100%)'
            }}>
                <div className={'container py-32'}>
                    <Calculator analytics={analytics}/>
                </div>
            </div>
            <div className={'container py-32'}>
                <Bar text={<>
                    <h1 className={'text-gray md:text-6xl text-4xl'}>Kontakt</h1>
                    <h3 className={'text-red mb-2 font-lato md:text-xl text-base'}>Võta meiega ühendust</h3>
                </>} className={'mb-24'}/>
                <form onSubmit={sendMail} id={'contact'}
                      className={'border border-black rounded grid grid-cols-2 md:p-16 p-10 text-xl gap-x-16'}>
                    <span className={'md:col-span-1 col-span-2 grid'}>
                        <label className={'row-span-1 md:mb-8 mb-4 mt-4'}>Nimi</label>
                        <input onChange={setName} required={true} name={'name'} className={'row-span-1 w-full'}
                               type={'text'}/>
                    </span>
                    <span className={'md:col-span-1 col-span-2 grid mt-4'}>
                        <label className={'row-span-1 md:mb-8 mb-4'}>Email</label>
                        <input onChange={setEmail} required={true} name={'email'} className={'row-span-1 w-full'}
                               type={'text'}/>
                    </span>
                    <span className={'col-span-2 grid mt-4'}>
                        <label className={'row-span-1 md:mb-8 mb-4'}>Sõnum</label>
                        <textarea onChange={setMessage} required={true} name={'message'} rows="4"
                                  className={'row-span-1'}/>
                    </span>
                    <span className={'col-span-2 flex justify-end mt-12'}>
                        <Button text={'Saada'} className={'w-full md:w-auto md:px-16'}/>
                    </span>
                </form>
            </div>
            <div className={'mt-12 row-span-1 w-full'} style={{
                background: 'linear-gradient(rgb(19, 51, 84) 0%, rgb(57 42 59) 100%)'
            }}>
                <div className={'container py-16 text-white grid grid-cols-2'}>
                    <span className={'col-span-1 grid'}>
                        <span className={'mt-2'}>A-Ameerika OÜ</span>
                        <span className={'mt-2'}>
                            <a target="_blank" rel="noreferrer" href={'https://goo.gl/maps/f7wnw1eHpktt7WpW9'}>Lembitu tn 7-79, Tallinn 10114</a>
                        </span>
                        <span className={'mt-2'}>EE927700771006240070</span>
                    </span>
                    <span className={'col-span-1 grid justify-end'}>
                        <span>
                            <img alt={'telefon'} className={'w-6 inline-flex mr-3'} src={phone}/>
                            +372 507 1759 - Konsultatsioon ja müük
                        </span>
                        <span>
                            <img alt={'telefon'} className={'w-6 inline-flex mr-3'} src={phone}/>
                            +372 501 7765 - Finants ja müük
                        </span>
                        <span>
                            <img alt={'mail'} className={'w-6 inline-flex mr-3'} src={mail}/>
                            info@a-ameerika.ee
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Home;
