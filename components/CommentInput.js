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
}