import React from 'react'
import PropTypes from 'prop-types';
import {Colors, Dimensions} from 'themes'
import styled from 'styled-components'

const {heigth, elevation} = Dimensions.Toolbar

const SContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${Dimensions.ZIndex.Toolbar};
`

const SToolbar = styled.div`
    height: ${heigth}px;
    padding: 8px;
    background-color: ${Colors.primary};
`

const SElevation = styled.div`
    background-image: linear-gradient(${Colors.elevation}, ${Colors.clear});
    display: block;
    height: ${elevation}px;
`

function Toolbar({
    children
}){
    return (
        <SContainer>
            <SToolbar>
                {children}
            </SToolbar>
            <SElevation/>
        </SContainer>
        )
}

Toolbar.propsTypes = {
    // Elevation of the toolbar
    elevation: PropTypes.number,
    // Children node to render
    children: PropTypes.node,
}

Toolbar.default = {

}

export default Toolbar