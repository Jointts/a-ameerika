import facebook from '../img/facebook_white.png';
import phone from '../img/phone.png';
import mail from '../img/mail.png';

const SideBar = () => (
    <span className={'hidden md:flex h-screen fixed left-0 items-center'}>
        <span className={'bg-red grid h-max p-1 sidebar'}>
            <span className={'row-span-1 p-1 flex items-center'}>
                <img alt={'facebook'} className={'w-12'} src={facebook}/>
                <span className={'sidebar-text hidden text-white inline-flex mx-4'}>
                    <a href={'https://www.facebook.com/groups/httpswww.aameerika.ee'}>Liitu meie facebooki grupiga</a>
                </span>
            </span>
            <span className={'row-span-1 p-1 flex items-center'}>
                <img alt={'telefon'} className={'w-12 inline-flex'} src={phone}/>
                <span className={'sidebar-text hidden text-white inline-flex mx-4'}>Konsultatsioon +372 507 1759 <br/>Finants +372 501 7765</span>
            </span>
            <span className={'row-span-1 p-1 flex items-center'}>
                <img alt={'mail'} className={'w-12'} src={mail}/>
                <span className={'sidebar-text hidden text-white inline-flex mx-4'}>info@a-ameerika.ee</span>
            </span>
        </span>
    </span>
);

export default SideBar;