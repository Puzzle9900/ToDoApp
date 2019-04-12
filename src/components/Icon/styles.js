import styled from 'styled-components'
import { Dimensions } from 'themes'


export default {
    Icon: styled.div`
        i {
            font-size: ${({size}) => Dimensions.IconSize[size]}
        }
    `
}
