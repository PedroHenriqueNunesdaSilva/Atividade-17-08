import {View, Text, Button, StyleSheet, Image } from "react-native";
export default function HomeScreen({navigation}){
    return(
        <View style={styles.containerPrincipal}>
            <Text style={styles.title}>Camisa Oversized "a Cruz Sagrada"</Text>
        <View style={styles.conteinerDaImagem}>
            <Image 
                source={require("../assets/camisah1.png")}
                style={styles.image}>
            </Image>
        </View>

            <Text style={styles.description}>
                Bem vindo á Styles Crist onde fazemso camisetas católicas incriveis para quem quer {'\n'}
                incluir sua fé até no jeito de se vistir, um exemplo é nossa camiseta " A Cruz Sagrada " {'\n'}
                fazendo referência a oração de São Bento.
            </Text>

            <Button title="Ver Mais Sobre" onPress={() => navigation.navigate('Details')}/>
            <Button title="Informações do Criador" onPress={() => navigation.navigate('About')}/>
        </View>
    )
}
     const styles = StyleSheet.create ({
        containerPrincipal: {
            flex: 1,
            alignItems: 'center',
            borderRadius: 1,
            justifyContent: 'center',
            backgroundColor: '#8d7e7eff',
        },
        conteinerDaImagem: {
            width : 300,
            padding : 10,
            alignItems: 'center',
            borderRadius: 20,
            marginBottom: 20,
            justifyContent: 'center',
            backgroundColor: '#ffffffff'
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