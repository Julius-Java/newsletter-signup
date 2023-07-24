import { createContext } from "react";

interface IPageContext {
    // nextPage: boolean,
    setUserEmail: React.Dispatch<React.SetStateAction<string>>;
    setNextPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const pageContext = createContext<IPageContext>({
    // nextPage: false,
    setUserEmail: () => {},
    setNextPage: () => {}
})

export default pageContext