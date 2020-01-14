import React from 'react'
import { Message, Icon, Transition } from 'semantic-ui-react'

export default class WelcomeMessage extends React.Component {
    state = { visible: true }

    hide = () =>
    {
        setTimeout(() => {
            this.setState({ visible: false })
            }, 4000)
        
    }
    

    render(){    
        const { visible } = this.state;
 
            return (
                <div>
                <Transition visible={visible} animation='fade' duration={1000} unmountOnHide transitionOnMount onComplete={this.hide}>
                    <Message icon>
                        <Icon name='terminal' />
                        <Message.Header>Welcome to my personal website!</Message.Header>
                    </Message>
                </Transition>
                </div>

            );


    }
  
}
