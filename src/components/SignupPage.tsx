import Article from "./Article"
import Illustration from "./Illustration"

const SignupPage = () => {
  return (
    <main className="bg-neutral-white h-screen md:h-auto md:max-w-3xl md:flex md:items-center md:rounded-3xl md:flex-row-reverse md:p-4  ">
      <Illustration />
      <Article />
    </main>
  )
}

export default SignupPage