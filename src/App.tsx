import imageMobile from "/assets/images/illustration-sign-up-mobile.svg?url"

import imageDesktop from "/assets/images/illustration-sign-up-desktop.svg?url"

import Update from "./components/Update"

import Form from "./components/Form"

// Update Data
import updates from "./components/updateInfo"

function App() {

  return (
    <>
      <main className="bg-neutral-white h-screen md:h-auto md:max-w-3xl md:flex md:items-center md:rounded-lg md:flex-row-reverse md:p-4 ">
        <div className="">
          <picture>
            <source media="(min-width: 768px)" srcSet={imageDesktop} />
            <img className="w-full" src={imageMobile}  alt="Image" />
          </picture>
        </div>
        <article className="px-3 sm:px-4 md:px-6 pt-5 text-neutral-slateGrey sm:max-w-md sm:mx-auto">
          <h1 className="font-robotoBold text-3xl sm:text-4xl md:text-5xl lg:text-4xl mt-4">Stay updated!</h1>
          <p className="mt-4 text-sm sm:text-md">Join 60,000+ product managers recieving monthly updates on:</p>
          {
            updates.map(update => (
              <Update key={update.id} text={update.text} />
            ))
          }
          <Form />
        </article>
      </main>
    </>
  )
}

export default App
