import {useForm} from "react-hook-form"

interface IFormInput {
    email: string
}

const Form = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({mode: "all"})


    return (
        <form className="mt-5" onSubmit={handleSubmit((data) => {console.log(data)})}>
            <div className="flex justify-between items-center">
                <label className="block text-sm font-bold my-2" htmlFor="Email">Email address</label>
                <span className={"block text-[10px] font-bold text-primary-tomato"}>{errors.email?.message}</span>
            </div>
            <input 
                className={"h-14 rounded-lg pl-4 w-full border-[1px] border-neutral-grey outline-none placeholder:text-neutral-grey placeholder:font-robotoBold mb-4 hover:border-neutral-slateGrey " + (errors.email?.message && " border-primary-tomato border-2 placeholder:text-primary-tomato bg-primary-tomato bg-opacity-10")} 
                id="Email"
                placeholder="email@company.com"
                {
                        ...register("email",
                    {
                        required: "Email is required",
                        pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Valid Email is required"
                                }
                    })
                }
            />
            <button className="h-14 bg-neutral-slateGrey text-white w-full rounded-lg font-bold text-xs sm:mb-3 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-primary-pinkTomato/100 to-primary-tomato/100 hover:shadow-3xl shadow-primary-tomato  ">Subscribe to monthly newsletter</button>
        </form>
    )
}

export default Form