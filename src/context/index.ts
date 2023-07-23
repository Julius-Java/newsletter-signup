import { createContext } from "react";

interface IPageContext {
    // nextPage: boolean,
    setNextPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const pageContext = createContext<IPageContext>({
    // nextPage: false,
    setNextPage: () => {}
})

export default pageContext