import iconSuccess from "/assets/images/icon-success.svg?url"
import Button from "./Button"

interface ComponentProp {
    emailAddress: string
}

const ThankYouPage = (props: ComponentProp) => {
    const {emailAddress} = props;

    return (
        <div className="bg-neutral-white h-screen md:h-auto md:max-w-lg md:rounded-3xl flex flex-col sm:gap-3 items-start justify-center px-3 sm:px-4 md:p-10 pt-5 text-neutral-slateGrey">
            <img  className="mb-6 animate-bounce" src={iconSuccess} alt="Thank You" />
            <h2 className="font-bold text-xl sm:text-3xl md:text-5xl mb-6">Thanks for subscribing!</h2>
            <p className="sm:text-md mb-6">A confirmation email has been sent to <span className="font-bold">{emailAddress}</span>. Please open it and click the button inside to confirm your subscription</p>
            <Button text="Dismiss message" />
        </div>
    )
}

export default ThankYouPage