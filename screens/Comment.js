import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ViewPropTypes } from 'react-native'

import CommentInput from '../components/CommentInput'
import CommentList from '../components/CommentList'
import NavigationBar from '../components/NavigationBar'

export default function Comment ({
    style,
    comments,
    onClose,
    onSubmitComment
}) {
    return (
        <SafeAreaView style = {style}>
    <NavigationBar 
    title = 'Comments'
    leftText = 'Close'
    onPressLeftText = {onClose}
    />
    <CommentInput 
    placeholder = 'Leave a comment'
    onSubmit = {onSubmitComment}
    />
    <CommentList 
    items = {comments}
    />
        </SafeAreaView>
    )
}

Comment.propTypes = {
    style: ViewPropTypes.style,
    comments: 
    PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmitComment: PropTypes.func.isRequired,
}

Comment.defaultProps = {
    style: null
}