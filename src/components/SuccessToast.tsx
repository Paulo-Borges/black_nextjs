

const SuccessToast = (props: {
    toastIsOpen: boolean
    setToastIsOpen: (isOpen: boolean) => void
}) => {
    return (
       
            <span className=""  isOpen={props.toatsIsOpen} fade>
                Produto adicionado ao carrinho.
                <button className="" onClick={() => props.setToastIsOpen(false)}></button>
            </span>
       
    )
}

export default SuccessToast