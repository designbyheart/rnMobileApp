import React from 'react'
import { Image, StyleSheet, View, ActivityIndicator} from 'react-native'
import propTypes from 'prop-types'

import AuthorRow from './AuthorRow'

export default class Card extends React.Component {
state = {
    loading: true
}

handleLoad = () => {
    this.setState({ loading: false})
}


    static PropTypes = {
        fullname: propTypes.string.isRequired,
        image: Image.propTypes.source.isRequired,
        linkText: propTypes.string,
        onPressLinkText: propTypes.func,
    }

    static defaultProps = {
        linkText: '',
        onPressLinkText: () => {},
    }

    render(){
        const { fullname, image, linkText, onPressLinkText} = this.props
        const {loading} = this.state
        return (
            <View>
                <AuthorRow 
                fullname = {fullname}
                linkText = {linkText}
                onPressLinkText = {onPressLinkText}
                />
            <View style ={styles.image}>
            {loading && (
                <ActivityIndicator style = {StyleSheet.absoluteFill} size ={'large'} />
            )}
        <Image 
        style = {StyleSheet.absoluteFill}
        source = {image}
        onLoad={this.handleLoad}
        />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.02)'
    }
})