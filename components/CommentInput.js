import { StyleSheet, TextInput, View} from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'

export default class CommentInput extends React.Component {
    static PropTypes = {
        onSubmit: PropTypes.func.isRequired,
        placeholder: PropTypes.string
    }

    static defaultProps = {
        placeholder = '',
    }

    state = {
        text = ''
    }

    handleChangeText = text => {
        this.setState({text})
    }

    handleSubmitEditing = () => {
        const {onSubmit} = this.props
        const {text} = this.state

        if(!text) return

        onSubmit(text)
        this.setState(text)
    }

    render(){

        const { placeholder } = this.props
        const { text } = this.state
        return (
            <View style = {styles.container}>
            <TextInput 
            style = {styles.input}
            value = {text}
            onChangeText = {this.onChangeText}
            placeholder = {placeholder}
            underlineColorAndroid = 'transparent'
            onSubmitEditing = {this.handleSubmitEditing}
            />
            </View>
        )
    }
}