import {useForm} from "react-hook-form"
import Button from "./Button"
import { useContext } from "react"
import pageContext from "../context"

interface IFormInput {
    email: string
}

const Form = () => {
    const {setNextPage} = useContext(pageContext)

    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({mode: "all"})


    return (
        <form className="mt-5" onSubmit={handleSubmit(() => {setNextPage(true)})}>
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
            <Button text="Subscribe to monthly newsletter" />
        </form>
    )
}

export default Form