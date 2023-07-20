import { styled } from "styled-components"


const Button = ({children, onClick }) => {
  return (
    <div >
        <StyledButton onClick={onClick}>{children}</StyledButton>
    </div>
  )
}

export default Button



const StyledButton= styled.button`

    background-color: #1d3cb8;
    border-radius: 6px;
    width: 60px;
    height:40px;
    border: 1px solid white;
    color: white;
    &:hover{
        background-color: #97e9ef
    }
    &:active{
        background-color: #0d0d46
    }
`