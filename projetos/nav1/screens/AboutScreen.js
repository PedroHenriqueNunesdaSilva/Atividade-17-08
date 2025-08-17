import {View, Text, Button, StyleSheet, Image } from "react-native";
export default function AboutScreen({navigation}){
    return(
        <View style={styles.containerPrincipal}>
            <Text style={styles.title}>Criador da Styles Crist</Text>
        <View style={styles.conteinerDaImagem}>    
             <Image 
                source={require("../assets/pessoaleatoria - Copia.jpg")}
                style={styles.image}>
            </Image>
        </View>
            <Text style={styles.description}>
                Tyler o Criador da Marca Style Crist nasceu em 1999 e desde criança incluido na vé católica e queria poder criar algo que mostrasse ao mundo{'\n'}
                que Deus pode participar até de nossa rotina, então com seus 19 anos ele criou junto de alguns amigos sua própria loja de roupas católicas. {'\n'} 

            </Text>

            <Button title="Voltar para a tela inicial" onPress={() => navigation.navigate('Home')}/>
            <Button title="Voltar a Segunda Página" onPress={() => navigation.navigate('Details')}/>
        </View>
    )
}
 const styles = StyleSheet.create ({
        containerPrincipal: {
            flex: 1,
            alignItems: 'center',
            borderRadius: 1,
            justifyContent: 'center',
            backgroundColor: '#D67743',
        },
        conteinerDaImagem: {
            width : 300,
            padding : 10,
            alignItems: 'center',
            borderRadius: 20,
            marginBottom: 20,
            justifyContent: 'center',
            backgroundColor: '#d0d0d0ff'
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