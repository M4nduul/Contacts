import React from 'react'
import {ScrollView} from 'react-native'

type Props = {
    gap: 'small' | 'medium' | 'large' | number
    children: React.Element | React.Element[] 
}

const Queue = ({gap, children}: Props): JSX.Element => {
    const count = React.Children.count(); 
    
    return (
        <ScrollView>
            {React.Element.map(children, (child, i)=> {
                if (i !== count - 1) {
                    return (
                        <child.type {...child.props} marginRight={gap}/>
                    )
                } else {
                    return (
                        <child.type {...child.props} marginRight={gap}/>
                    )                
                }
            })}
        </ScrollView>
    )
}

export default Queue