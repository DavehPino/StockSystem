import React, { Component } from 'react'
import Portal from './Portal'
import styled from "styled-components";

export default class Modal extends Component {
    render() {

        const { children, toggle, active } = this.props
        return (
            <Portal>
                {active && (<Wrapper>
                    <Window>
                        <Button onClick={toggle}>X</Button>
                        <div>{children}</div>
                    </Window>
                </Wrapper>)}
            </Portal>
        )
    }
}

const Wrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Window = styled.div`
position: relative;
background: #fff;
border-radius: 2px 2px 10px rgba(0,0,0,0.3);
z-index: 10;
min-width: 320;`

const Button = styled.button`
position: absolute;
top: 0;
right: 0;
 `

