import {LinearGradient} from "expo-linear-gradient";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";

/*Ici le composant correspondant au prenant en paramètre la variable "isValidForm" pour savoir si
le button est valide ou pas afin de ne pas uploader le formulaire si les champs ne respectent pas les critères
*/

//instanciation de notre composant en prenant en paramètre la validité du formulaire, l'email à envoyer à la prochaine vue, ainsi que le nom de cette vue
const IEDFormButton = ({isValidForm, validateFormSubmit}) => {
    //Ici la fonction qui est appelée lorsqu'on clique sur le bouton, si le formulaire est valide,

    return (
        //Si le formulaire est valide, on affiche le bon style, sinon on affiche le style du bouton disabled
        <TouchableOpacity style={isValidForm ? styles.button : styles.disabledBtn}  onPress={() =>validateFormSubmit()} disabled={!isValidForm}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#7732a8', '#b130b8']}
                            style={styles.signIn}>
                <Text style={styles.textSign}>Sign In</Text>
            </LinearGradient>
        </TouchableOpacity>
    )


}

//Les styles utilisés par ce composant
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10
    },
    textSign: {
        color: 'white',
        fontSize: 16,
    },
    signIn: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical:20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    button: {
        width: '100%',
        height: 50,
    },
    disabledBtn: {
        width: '100%',
        height: 50,
        opacity:0.6,
    }

});

export default IEDFormButton;
