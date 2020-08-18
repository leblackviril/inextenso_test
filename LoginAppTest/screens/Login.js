import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import IEDFormButton from '../components/IEDFormButton';
import IEDFormInput from '../components/IEDFormInput';

export default function Login({route, navigation}) {

    //Je déclare le state (les données à manipuler), et le setState pour update des données du state
    const [state, setState] = React.useState({
        email:'',
        password: '',
        isValidEmail: false,
        isValidPassword: false,
        isValidForm: false,
    });

    // ici la fonction qui permet de rediriger vers la page souhaitée après l'authentification cad vers l'accueil
    const validateFormSubmit = () => {
        navigation.navigate('Home', {
            email: state.email
        });
    }

    //Fonction qui permet de mettre à jour state après que le composant IEDFormInput ait modifier la valeur du mail
    //Dans cette fonction je teste également (isValidForm) si l'email et le password sont valides pour pouvoir enlever
    // le 'disabled' sur le bouton de connexion
    const setStateEmail = (val,result) =>{
        setState({
            ...state,
            email: val,
            isValidEmail: result,
            isValidForm: (result & state.isValidPassword) ? true : false,
        });
    }

    //Fonction qui permet de mettre à jour state après que le composant IEDFormInput ait modifier la valeur du mot de passe
    //Dans cette fonction je teste également (isValidForm) si l'email et le password sont valides pour pouvoir enlever
    // le 'disabled' sur le bouton de connexion
    const setStatePassword = (val,result) =>{
        setState({
            ...state,
            password: val,
            isValidPassword: result,
            isValidForm: (result & state.isValidEmail) ? true : false,
        });
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/first_connexion.png')} style={styles.image}>
                {/*Header de ma page */}
                <Animatable.View animation="fadeInDownBig" duraton="1500" style={styles.header}>
                    <Text style={styles.headerText}>Sign In</Text>
                    <Text style={[styles.headerText, {fontSize: 20}]}>To your In Extenso Digital Account !</Text>
                </Animatable.View>
                {/*Fin du header*/}

                {/*Début de footer */}
                <Animatable.View animation="fadeInUpBig" duraton="1500" style={styles.footer}>
                    {/*Ici j'appelle mon 1er composant IEDFormInput pour l'email en ayant passé en props les paramètres souhaités*/}
                    <IEDFormInput label='Email' value={state.email} fontAwesome='user-o' size={20} placeholder="Your email here" setStateEmail={setStateEmail} animation="bounceIn" />

                    {/*J'appelle ensuite mon 1er composant IEDFormInput pour le password en ayant passé en props les paramètres souhaités*/}
                    <IEDFormInput label='Password'  value={state.password} fontAwesome='lock' size={23} placeholder="Your password here" setStatePassword={setStatePassword}/>

                    {/*J'appelle enfin le bouton de connexion*/}
                    <View style={{marginTop:40}}>
                        <IEDFormButton isValidForm={state.isValidForm} email={state.email} screens="Home" validateFormSubmit={validateFormSubmit}/>
                    </View>
                </Animatable.View>
                {/*Fin de footer*/}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 34,
    },
    header: {
        flex:1,
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    headerText:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:30,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    footer:{
        flex:2,
        borderRadius:30,
        padding:20,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        backgroundColor: '#FFF',
        /*alignItems: 'center',
        justifyContent: 'center',*/
        alignSelf: 'stretch',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        paddingHorizontal: 20,
    }
});
