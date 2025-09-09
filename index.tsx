import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.outer}>
      <View style={styles.box}>
        {/* Lastname */}
        <View style={styles.row}>
          <Text style={styles.label}>Lastname:</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Firstname */}
        <View style={styles.row}>
          <Text style={styles.label}>Firstname:</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Section */}
        <View style={styles.row}>
          <Text style={styles.label}>Section:</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.btn, styles.present]}>
            <Text style={styles.btnText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.absent]}>
            <Text style={styles.btnText}>Absent</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  box: {
    width: "90%",
    maxWidth: 350,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    width: 90,
    fontSize: 16,
    color: "#333",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  present: {
    backgroundColor: "#28a745",
  },
  absent: {
    backgroundColor: "#dc3545",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
