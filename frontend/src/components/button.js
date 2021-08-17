const Button = ({text, className = ''}) => (
    <button className={`transition duration-300 ease-in-out bg-red hover:bg-white hover:text-gray border border-transparent hover:border-black text-white uppercase py-3 px-8 ${className}`}>{text}</button>
);

export default Button;