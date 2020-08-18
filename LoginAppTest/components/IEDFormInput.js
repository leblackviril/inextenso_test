import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';


//Composant comportant l'input qui va permettre d'afficher le champ du login ou du mot de passe
//Je prend en entrée les données passées en paramètres comme props
function IEDFormInput({label,fontAwesome, size, placeholder, check_textInputChange,secureTextEntry,errorMessage,setStateEmail,setStatePassword, value}) {
    //Je déclare le state (les données à manipuler), et le setState pour update des données du state
    const [state, setState] = React.useState({
        check_textInputChange: false,
        errorMessageEmail: '',
        errorMessagePassword: '',
        secureTextEntry: true,
    });

    //Ici ces variables ont été déclarées hors du state parce que le setState ne marchait pas sur celles-ci,
    let hasHandleBlurEmail = false;
    let hasHandleBlurPassword= false;

    //Fonction qui permet de vérifier si le format de l'email est valide avant d'update avec setState
    const textInputChange = (val)=> {
        let regex = /\S+@\S+\.\S+/;
        let result = false;
        let errorMessage = '';

        //Si le format est conforme au type email, je renvoie true afin que le bouton Sign in soit débloqué
        if (regex.test(val)) result = true;

        //Quelques messages personnalisés en fonction de ce que l'utilisateur saisit dans le champ login
        if(hasHandleBlurEmail) {
            if (val.length == 0) errorMessage = 'This field cannot be empty';
            else if (regex.test(val)) errorMessage = '';
            else errorMessage = 'Please enter a valid email address';
        }
        //Je mets à jour le message d'erreur et la validité de l'email dans le state
        setState({
            check_textInputChange: result,
            errorMessageEmail: errorMessage,
        })
       //J'appelle cette fonction qui vient de Login.js, elle permet de mettre à jour l'email et le fait que l'email soit valide
        setStateEmail(val,result);
    }

    //Fonction qui permet de vérifier si le format de le password est valide avant d'update avec setState
    const handlePasswordChange = (val)=> {
        let result = false;
        let errorMessage = '';
        let regex = /[!@#$%^&*(),.?":{}|<>]/g;

        //On teste si on a au moins 6 caractères,et si on a au moins un caractère spécial
        if (val.length >= 6 & regex.test(val)) result = true;

        //Quelques messages personnalisés en fonction de ce que l'utilisateur saisit dans le champ login
        if(true) { //hasHandleBlurPassword) {
            if (val.length == 0) errorMessage = 'This field cannot be empty';
            else if (val.length < 6) errorMessage = 'You must enter at least 6 characters';
            else if (!regex.test(val)) errorMessage = 'You must enter at least one special character';
            else errorMessage = '';
        }
        //Je mets à jour le message d'erreur et la validité de le password dans le state
        setState({
            errorMessagePassword: errorMessage,
        });

        //J'appelle cette fonction qui vient de Login.js, elle permet de mettre à jour le mot de passe et le fait que l'email soit valide
        setStatePassword(val,result);
    }

    //Fonction qui s'éxecute lorsqu'on enlève le focus sur l'email, ça permet de commencer à controler et afficher les messages d'erreur
    const handleFocusOutEmail = ()=> {
        hasHandleBlurEmail=true;
        textInputChange(value);
    }

    //Fonction qui s'éxecute lorsqu'on enlève le focus sur le password, ça permet de commencer à controler et afficher les messages d'erreur
    const handleFocusOutPassword = ()=> {
        hasHandleBlurPassword=true;
        handlePasswordChange(value);
    }

    //Fonction qui s'éxecute lorsqu'on appuie sur l'oeil du mot de passe pour afficher le contenu du champ
    const updateSecureTextEntry = ()=> {
        setState({
            ...state,
            secureTextEntry: !state.secureTextEntry,
        });
    }

    return (
        <View>
            {/*Ici le label du champ*/}
            <Text style={styles.label}>{label}</Text>
            {/*Ici la vue qui contient le champs, les icones et le message d'erreur*/}
            <View style={styles.action}>
                {/*Icone user du fontawesome*/}
                <FontAwesome name={fontAwesome} color="#000" size={size} />

                {/*Ici le coeur du composant, on paramètre en fonction des données recues par le props*/}
                <TextInput placeholder={placeholder} style={styles.textInput} autoCapitalize="none"
                           onChangeText={(label=="Email") ? (val)=>textInputChange(val) : (val)=>handlePasswordChange(val)}
                           onBlur={(label=="Email") ? ()=>handleFocusOutEmail() : ()=>handleFocusOutPassword()}
                           secureTextEntry={(label=="Email") ? false : !state.secureTextEntry}
                />
                {/* Si c'est l'email, on affiche l'icone pour dire que le champ est valide, si c'est le mot de passe,
                on affiche le bouton de l'oeil pour cahcher et afficher le password*/}
                { (label=="Email") ?
                    (state.check_textInputChange ?
                    <Animatable.View animation="bounceIn">
                    <Feather style={styles.feather} name="check-circle"  color="green" size={20} />
                    </Animatable.View>
                    : null
                ) : (
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {state.secureTextEntry ?
                            <Feather style={styles.feather}  name="eye-off"  size={20} />
                            :
                            <Feather style={styles.feather}  name="eye"  size={20} />
                        }
                    </TouchableOpacity>
                    )
                }
            </View>
            {/*Si c'est l'email, on affiche le message d'erreur correspond à l'email en bas du champ, si c'est le mot de passe,
            on affiche celui correspondant au mot de passe*/}
            { (label=="Email") ? (
                state.errorMessageEmail == ''  ? null : <Text style={styles.error}>{state.errorMessageEmail}</Text>
            ) : (
                state.errorMessagePassword == ''  ? null : <Text style={styles.error}>{state.errorMessagePassword}</Text>
            ) }
        </View>
    )
}

const styles = StyleSheet.create({

    textInput: {
        color: "#000",
        paddingLeft:10,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'stretch',
        width:310
    },
    action: {
        borderBottomWidth :2,
        borderBottomColor: '#908c91',
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginBottom: 20,
    },
    feather: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    textSign: {
        color: 'white',
        fontSize: 16,
    },

    error:{
        color: 'red',
        marginTop:-21,
        marginBottom:25
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#98269e',
        marginBottom: 10,
    }
});

export default IEDFormInput;
