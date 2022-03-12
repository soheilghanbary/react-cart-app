import tw , { styled , css } from "twin.macro";

const ProductStyled = styled.div(() => [
    css`
        ${tw`bg-secondary rounded p-5`}
        button {
            ${tw`mt-3`}
        }
    `
])

export default ProductStyled