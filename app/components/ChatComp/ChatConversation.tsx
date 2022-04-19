import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import Message from "./Message";

type Props = {};

const ChatConversation = (props: Props) => {
  const [messages, setMessages] = useState([
    {
      user: 0,
      time: "9:27 AM",
      content:
        " Hi...I saw this work that you did. \n \n I want to ask, how much does that \n cost? ",
    },
    {
      user: 1,
      time: "9:29 AM",
      content: "OK. Do you want it exactly or with \n your own material?",
    },
    {
      user: 0,
      time: "9:30 AM",
      content: "No, just the way it is",
    },
  ]);

  const user = useRef(0);
  const scrollView: React.MutableRefObject<any> = useRef();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff", flex: 1 }}
      ref={(ref) => (scrollView.current = ref)}
      onContentSizeChange={() => {
        scrollView.current.scrollToEnd({ animated: true });
      }}
    >
      {messages.map((message, index) => (
        <Message
          key={index}
          time={message.time}
          isLeft={message.user === user.current}
          message={message.content}
        />
      ))}
    </ScrollView>
  );
};

export default ChatConversation;

const styles = StyleSheet.create({});
