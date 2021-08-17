import phoneBlack from "../img/phone_black.png";
import mailBlack from "../img/mail_black.png";

const Service = ({number, title, phoneNr, email, image, personName}) => (
    <span className={'col-span-2 md:col-span-1 grid grid-cols-8 sm:gap-12 gap-6'}>
      <span className={'md:col-span-2 col-span-3'}>
        <img className={'bg-red lg:p-6 p-4'} alt={'Konsultatsioon'} src={image}/>
      </span>
      <span className={'md:col-span-6 col-span-5'}>
        <h3 className={'md:text-xl text-lg'}>
            <span className={'text-gray-white'}>{number} / </span>
            {title}
        </h3>
        <span className={'grid md:text-base text-sm'}>
            <span className={'row-span-1 pt-4'}>{personName}</span>
            <span className={'row-span-1 pt-2'}>
                <img alt={'telefon'} className={'w-6 inline'} src={phoneBlack}/>
                <span className={'ml-4'}>{phoneNr}</span>
            </span>
            <span className={'row-span-1 pt-2'}>
                <img alt={'mail'} className={'w-6 inline'} src={mailBlack}/>
                <span className={'ml-4'}>{email}</span>
            </span>
        </span>
      </span>
    </span>
);

export default Service;