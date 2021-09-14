import React from 'react'
import { ImageBackground} from 'react-native'

type CommonProps = {
    children: React.ReactChildren | React.ReactChild;
    height: number;
    width: number;
    opacity?: number;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'center' | 'repeat';
    overflow?: 'hidden'
}

type PropsUrl = {
    color?: never
    url: string;
}

type PropsColor = {
    color: 'red' | 'green' | 'blue';
    url?: never;
}

type Props = (PropsUrl | PropsColor) & CommonProps

export const Background = ({ children, height, width, url, color,}: Props): JSX.Element => {

    return (
        <ImageBackground width={100} height={100} color='red'>
            {children}
        </ImageBackground>
    )
    
} 
