import checkImg from "/assets/images/icon-list.svg?url"

interface ComponentProp {
    text: string
}

const Update = (props: ComponentProp) => {
    const {text} = props;
    return (
    <div className="mb-1 mt-3 flex gap-3 items-center">
        <img src={checkImg}  className="self-start" alt="Update" />
        <p className="text-sm">{text}</p>
    </div>
    )
}

export default Update