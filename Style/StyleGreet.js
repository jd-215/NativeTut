import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        padding: 10
    },
    text: {
        color: "white"
    },
    box:{
        color: "white",
        padding: 20,
        margin: 20
    }
})

function StyleGreet() {
  return (
    <View style={[styles.container, styles.box]}>
        <Text style={styles.text}>Hello from StyleGreet</Text>
        </View>
  )
}

export default StyleGreet