import iconSuccess from "/assets/images/icon-success.svg?url"
import Button from "./Button"

const ThankYouPage = () => {
    return (
        <div className="bg-neutral-white h-screen md:h-auto md:max-w-lg md:rounded-3xl flex flex-col sm:gap-3 items-start justify-center px-3 sm:px-4 md:p-10 pt-5 text-neutral-slateGrey">
            <img className="mb-6" src={iconSuccess} alt="Thank You" />
            <h2 className="font-bold text-xl sm:text-3xl md:text-5xl mb-6">Thanks for subscribing!</h2>
            <p className="sm:text-md mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia pariatur ipsam commodi dolore repellat veniam suscipit? Nobis, deserunt vitae.</p>
            <Button text="Dismiss message" />
        </div>
    )
}

export default ThankYouPage