import imageMobile from "/assets/images/illustration-sign-up-mobile.svg?url"

import imageDesktop from "/assets/images/illustration-sign-up-desktop.svg?url"

const Illustration = () => {
    return (
        <div className="">
            <picture>
                <source media="(min-width: 768px)" srcSet={imageDesktop} />
                <img className="w-full" src={imageMobile}  alt="Image" />
            </picture>
    </div>
    )
}

export default Illustration