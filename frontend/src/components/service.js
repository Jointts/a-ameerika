import phoneBlack from "../img/phone_black.png";
import mailBlack from "../img/mail_black.png";

const Service = ({number, title, phoneNr, email, image, personName}) => (
    <span className={'grid grid-cols-4 gap-12'}>
      <span className={'col-span-1'}>
        <img className={'bg-red p-6'} alt={'Konsultatsioon'} src={image}/>
      </span>
      <span className={'col-span-3'}>
        <h3>
            <span className={'text-gray-white'}>{number} / </span>
            {title}
        </h3>
        <span className={'grid'}>
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