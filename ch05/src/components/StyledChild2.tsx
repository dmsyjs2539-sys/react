import styled, {css} from "styled-components";

const Button = styled.button<{$primary?:boolean}>`
  background:transparent;
  border-radius: 3px;
  border:2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.$primary &&
    css`
      background :'#bf4f74;
      color : #fff;
    `
  }
`
export default function StyledChild2(){
  return(
    <>
    <Button $primary>Click</Button>
    </>
  )
}