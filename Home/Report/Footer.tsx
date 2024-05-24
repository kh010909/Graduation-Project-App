import { View,Image,StyleSheet } from "react-native";
import { Text,Button } from "react-native-paper";

function ModalButton({ onPress, title, color }: any) {
    return (
      <Button
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}>
        <Text style={[styles.textStyle]}>{title}</Text>
      </Button>
    )
  }
export default ({submit,photo}:any) => {
    return (
        <View style={styles.modalFooter}>
            {photo 
            ?<Image source={{uri:photo.path}}style={styles.image}/>
            :<View style={styles.image}></View>
            }
            <ModalButton
                color={'#FF5733'}
                onPress={submit}
                title={"發送通報"} />
        </View>)
}

const styles = StyleSheet.create({
    modalFooter: {
        flex: 0.8,
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center'
      },
    button: {
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
    },


    textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    },
    image:{
      height: 80,
      width : 80,
      backgroundColor : 'gray', 
      borderWidth: 4,
      borderColor: 'white',
      borderRadius: 10
    }
})