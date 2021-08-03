import facebook from '../img/facebook_white.png';
import phone from '../img/phone.png';
import mail from '../img/mail.png';

const SideBar = () => (
    <span className={'flex h-screen fixed left-0 items-center'}>
        <span className={'bg-red grid h-max p-1'}>
            <span className={'row-span-1 p-1'}>
                <img alt={'facebook'} className={'w-12'} src={facebook}/>
            </span>
            <span className={'row-span-1 p-1'}>
                <img alt={'telefon'} className={'w-12'} src={phone}/>
            </span>
            <span className={'row-span-1 p-1'}>
                <img alt={'mail'} className={'w-12'} src={mail}/>
            </span>
        </span>
    </span>
);

export default SideBar;