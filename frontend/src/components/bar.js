const Bar = ({text = '', className = ''}) => (
    <span className={'row-span-1 flex justify-center ' + className}>
        <span className={'grid w-max'}>
            <span className={'uppercase text-white font-old-standard text-xl text-center'}>{text}</span>
            <span className={'row-span-1 h-1'}>
                <hr className={'h-full border-gray'}/>
                <hr className={'h-full mx-auto relative border-red -top-1 w-8'}/>
            </span>
        </span>
    </span>
);

export default Bar;