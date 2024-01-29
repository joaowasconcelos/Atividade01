import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  // Import LinearGradient from expo

export default function App() {
  return (
    <LinearGradient
      style={{
        flex: 1,  // Set flex to 1 to take the entire screen
        alignItems: 'center',
        justifyContent: 'center',
      }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={['#A62A3C', '#6A2577']}
    >
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.container}>

          <View style={{}}>
            <Image source={{ uri:'https://reactjs.org/logo-og.png', }} style={styles.image}/> 
          </View>

          <View style={styles.container1}>
            <Text style={styles.labelInput}>Usuário:</Text>
            <TextInput placeholder='Usuário' style={styles.input} />
            <Text style={styles.labelInput}>Senha:</Text>
            <TextInput placeholder='Senha' secureTextEntry={true} style={styles.input} maxLength={20} />
          </View>

          <View>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#555' : '#888',
                },
                styles.button,
              ]}
            >
              <Text style={{ color: "white", textTransform: "uppercase" }}>Acessar</Text>
            </Pressable>
          </View>

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  container: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
    gap:20,
  },
  container1: {
    gap: 10,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: "#ffff",
  },
  labelInput: {
    fontSize: 20,
    marginBottom: 1,
    color: "white",
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 40,
    width: 250,
    padding: 10,
    margin: 20,
  },
  image:{
    height: 100, 
    width: 100, 
    borderColor: "white", 
    borderWidth: 3, 
    borderRadius: 30, 
    
  }
});