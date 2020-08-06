import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import GiveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const {goBack} = useNavigation()

    function handleNavigateBack() {
        goBack()
    }

    return (
    <View style={styles.container}>
        <ImageBackground 
            resizeMode='contain' 
            source={GiveClassesBgImage} 
            style={styles.content}
        >
            <Text style={styles.title}>Quer ser{'\n'} um Proffy?</Text>
            <Text style={styles.description}>
                Para começar, você precisa{'\n'} se cadastrar como professor{'\n'} na nossa plataforma web.
            </Text>
        </ImageBackground>
 
        <RectButton onPress={handleNavigateBack} style={[styles.button]}>
            <Text style={styles.buttonText}>Tudo bem</Text>
        </RectButton>
    </View>
    )
}

export default GiveClasses