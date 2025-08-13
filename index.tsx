import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Label 1:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter text"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Label 2:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter text"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Label 3:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter text"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 1</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: Math.min(windowWidth - 40, 500), // Responsive width with max of 500
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    width: 70,
    marginRight: 10,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    width: 120,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: '500',
  },
});
