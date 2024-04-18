import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Footer: React.FC = () => {
  return (
    <View style={{ padding: 60, backgroundColor: "#E7ECFF" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Link href="/privacy/">
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Link>
          <Link href="/terms/">
            <Text style={styles.linkText}>Terms and Conditions</Text>
          </Link>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.footerMainText}>MyCE</Text>
        </View>
        <View style={{ width: 150 }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerMainText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#37447E",
    paddingBottom: 16,
  },
  linkText: {
    fontSize: 16,
    color: "#37447E",
    textDecorationLine: "underline",
    paddingBottom: 8,
  },
});

export default Footer;
