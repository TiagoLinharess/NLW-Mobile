import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem () {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/TiagoLinharess.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Tiago Linhares</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View> 
            </View>

            <Text style={styles.bio}>
                Desenvolvedor Front-End na Medilab Sistemas
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$50,00</Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}></Image> */}
                        <Image source={unFavoriteIcon}></Image>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}></Image>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>

                </View>
            </View>
        </View>
    )
}

export default TeacherItem