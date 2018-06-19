import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  color: string
  size: number
}

const Heading = styled.h1`
    color: ${(props: IProps) => (props.color ? props.color : 'black')};
    font-size: ${(props: IProps) => (props.size ? props.size : 18)}px;
`
const CustomHeader = styled.header`
    width: 100%;
    background-color: black;
    padding: 2rem;
    text-align:center;
    margin-bottom: 2rem;
`
/**
 * The header component
 */

const Header = (props: IProps) => (
  <CustomHeader>
    <Heading {...props}>
      foobar
    </Heading>
  </CustomHeader>
)

export default Header
