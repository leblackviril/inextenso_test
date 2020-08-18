import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default function Home({route, navigation}) {
    //Je déclare le state (les données à manipuler), et le setState pour update des données du state
    const [state, setState] = React.useState({
        email:route.params.email,
    });

    //Fonction pour rediriger vers la page de login
    const redirectLink = ()=>{
        navigation.navigate('Login',{
            reset: true
        });
    }
    return (
        <View style={styles.container}>
            {/*Début de header view*/}
            <Animatable.View animation="fadeInDownBig" duraton="1500" style={styles.header}>
                <View style={styles.view1}>
                    <View style={styles.view2}>
                        {/*Ici l'image du logo de In Extenso Design */}
                        <Image source={require('../assets/images/ied-logo.png')} resiseMode="stretch" style={styles.logo} />
                    </View>
                </View>
            </Animatable.View>
            {/*Fin de header view*/}

            {/*Début de footer*/}
            <View style={styles.footer}>
                {/* Je teste si c'est un IED collaborator càd si l'email se termine par @inextenso.fr
                Si oui, j'affiche Hello Dear Collaborator*/}
                {state.email.endsWith("@inextenso.fr") ? <Text style={styles.headerText}>Hello Dear Collaborator!</Text> : null }

                {/* Bouton de déconnexion */}
                <TouchableOpacity style={styles.button} onPress={() => redirectLink()}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#7732a8', '#b130b8']} style={styles.signIn}>
                        <Text style={styles.textSign}>Log out </Text>
                        <FontAwesome name="key" color="#fff" size={20} />
                    </LinearGradient>
                </TouchableOpacity>
                {/* Fin du bouton de déconnexion */}
            </View>
            {/*Fin de footer*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c877f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view1:{
        backgroundColor: '#000',
        marginTop:150,
        borderRadius:150,
        width: 220,
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view2:{
        borderRadius:150,
        backgroundColor: '#FFF',
        width: 210,
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        borderRadius:150,
        width: 205,
        height: 205,
    },
    header:{
        flex:2
    },
    footer:{
        flex:1
    },
    headerText:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:30,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10
    },
    textSign: {
        color: 'white',
        fontSize: 16,
        fontWeight:'bold'
    },
    signIn: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 70,
        paddingVertical:20,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    button: {
        width: '100%',
        height: 50,
        alignSelf: 'center',
        marginTop: 40
    },
});
