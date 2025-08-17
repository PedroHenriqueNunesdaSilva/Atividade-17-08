import {View, Text, Button, StyleSheet, Image } from "react-native";
export default function DetailScreen({navigation}){
    return(
        <View style={styles.containerPrincipal}>
            <Text style={styles.title}>Camisa Owersized "Romanos 12:2" </Text>
        <View style={styles.conteinerDaImagem}>
            <Image
                source={require("../assets/camisad2.png")}
                style={styles.image}>
            </Image>
        </View>

            <Text style={styles.description}>
                Outro exemplo é a camiseta no estilo Oversized "Roamanos 12:2" que é decorada com a passagem descrita{'\n'}
                "² E não sejais conformados com este mundo, mas sede transformados pela renovação do vosso entendimento{'\n'}
                para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus."
            </Text>

            <Button title="Informações do Criador" onPress={() => navigation.navigate('About')}/>
            <Button title="Voltar para a tela inicial" onPress={() => navigation.navigate('Home')}/> 
        </View>
    )
}
 const styles = StyleSheet.create ({
        containerPrincipal: {
            flex: 1,
            alignItems: 'center',
            borderRadius: 1,
            justifyContent: 'center',
            backgroundColor: '#562b2bff',
        },
        conteinerDaImagem: {
            width : 300,
            padding : 10,
            alignItems: 'center',
            borderRadius: 20,
            marginBottom: 20,
            justifyContent: 'center',
            backgroundColor: '#fdfdfdff'
        },
        title : {
            color: '#000000ff',
            fontSize: 24,
            marginBottom: 20,
        },
        image:{
            width:200,
            height: 200,
            marginTop: 20,
            borderRadius: 10,
            marginBottom: 20
        },
        description:{
            fontSize: 20,
            color : '#000',
            marginBottom: 20,
        }
    });