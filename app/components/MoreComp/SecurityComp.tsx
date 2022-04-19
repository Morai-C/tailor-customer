import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";
import { SwitchBtn } from "../../lib/ButtonComp";
import InputBox from "../../lib/InputBox";

type Props = {};

const SecurityComp = (props: Props) => {
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  return (
    <View>
      <View style={{ marginBottom: 40 }}>
        <Text
          style={[
            globalStyles.textSemiBold,
            { fontSize: 14, color: colors.primary, marginBottom: 13 },
          ]}
        >
          Verified Information
        </Text>

        <View style={{ marginBottom: 16 }}>
          <Text style={[globalStyles.textMedium, { fontSize: 13 }]}>
            Email Address
          </Text>
          <Text style={[globalStyles.textRegular, { fontSize: 12 }]}>
            charisbraide@gmail.com
          </Text>
        </View>

        <View>
          <Text style={[globalStyles.textMedium, { fontSize: 13 }]}>
            Phone Number
          </Text>
          <Text style={[globalStyles.textRegular, { fontSize: 12 }]}>
            0806 959 9147
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 39 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              globalStyles.textSemiBold,
              { fontSize: 14, color: colors.primary },
            ]}
          >
            Two-factor Authentication
          </Text>
          <SwitchBtn />
        </View>
        <Text style={[globalStyles.textRegular, { fontSize: 12 }]}>
          Add extra layer of security to your account {"\n"} using Google's
          authenticator app
        </Text>
      </View>

      <View>
        <Text
          style={[
            globalStyles.textSemiBold,
            { fontSize: 14, color: colors.primary, marginBottom: 13 },
          ]}
        >
          Change Password
        </Text>

        <View>
          <Text style={[globalStyles.textRegular, { fontSize: 10 }]}>
            Current Password
          </Text>
          <InputBox
            //label={password}
            placeholderText="*****"
            onChangeText={(currentPassword) => setPassword(currentPassword)}
            secureTextEntry={true}
          />
        </View>

        <View>
          <Text style={[globalStyles.textRegular, { fontSize: 10 }]}>
            New Password
          </Text>
          <InputBox
            //label={newPassword}
            placeholderText="*****"
            onChangeText={(userPassword) => setNewPassword(userPassword)}
            secureTextEntry={true}
          />
        </View>
      </View>
    </View>
  );
};

export default SecurityComp;

const styles = StyleSheet.create({});
