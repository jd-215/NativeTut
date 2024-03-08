import  {View, Text, StyleSheet} from 'react-native'
export  default function Box({children , style}){
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "red",
        padding: 10,
        height: 100,
        width: 100
    },
    text: {
        color: "white",
        fontSize: 30,
        textAlign: "center"
    }
})