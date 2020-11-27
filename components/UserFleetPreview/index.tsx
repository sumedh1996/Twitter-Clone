import React from 'react'
import { View, Text } from 'react-native';
import { UserType } from '../../types';
import ProfilePicture from '../ProfilePicture';
import styles from './styles'

export type userFleetPreviewProps = {
    user: UserType
}

const UserFleetPreview = (props: userFleetPreviewProps) => {
    const { user: { username, image } } = props;
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <ProfilePicture image={image} size={70} />
            </View>
            <Text style={styles.userName}>Hello</Text>
        </View>
    )
}

export default UserFleetPreview;
