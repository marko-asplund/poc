import styled from 'styled-components';
// import styledTS from 'styled-components-ts'

/**
 * A custom input field
 */
const CustomInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 3px solid #B8B8B8;
  padding: .5rem 0;
  font-size: 1.2rem;
  font-weight: lighter;
  font-style: italic;
  outline: none;
  font-family: inherit;
  background-color: transparent;
  &::placeholder{
    color: hsl(0, 0%, 66.7%);
  }
`

/** @component */
export default CustomInput