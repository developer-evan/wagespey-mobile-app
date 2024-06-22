import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingTop: 10,
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 16,
      }}
    >
        <Image source={require('../../assets/images/splasha.png')} style={{width: 150, height: 150}} />
      <View
        style={{
          backgroundColor: "white",
          padding: 16,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 12,
            color: "#00BFA6",
          }}
        >
          Login to your account
        </Text>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ color: "black", marginBottom: 8 }}>Email</Text>
          <TextInput
            style={{
              backgroundColor: "#f0f0f0",
              borderRadius: 6,
              paddingHorizontal: 12,
              paddingVertical: 10,
            }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ color: "black", marginBottom: 8 }}>Password</Text>
          <TextInput
            style={{
              backgroundColor: "#f0f0f0",
              borderRadius: 6,
              paddingHorizontal: 12,
              paddingVertical: 10,
            }}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              /* Handle forgot password */
            }}
          >
            <Text style={{ color: "#00BFA6" }}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#00BFA6",
            borderRadius: 6,
            paddingVertical: 12,
            alignItems: "center",
          }}
          onPress={() => {
            /* Handle sign-in logic */
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <Text style={{ color: "black" }}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/signup");
            }}
          >
            <Text style={{ color: "#00BFA6" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
