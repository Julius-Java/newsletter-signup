interface ButtonProp {
    text: string
}

const Button = (props: ButtonProp) => {
    const {text} = props
  return (
    <button className="h-14 bg-neutral-slateGrey text-white w-full rounded-lg font-bold text-xs sm:mb-3 transition-all duration-300 ease-in-out hover:bg-gradient-to-r mb-3 from-primary-pinkTomato/100 to-primary-tomato/100 hover:shadow-3xl shadow-primary-tomato">{text}</button>
  )
}

export default Button