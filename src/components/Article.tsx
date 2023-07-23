import Update from "./Update"
import Form from "./Form"

// Update Data
import updates from "./updateInfo"



const Article = () => {
    return (
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
    )
}

export default Article