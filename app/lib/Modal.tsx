import {
  Animated,
  Dimensions,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  visible: boolean;
  children: JSX.Element;
};

const { width, height } = Dimensions.get("window");

const ModalPopup = ({ visible, children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(visible);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        //duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);
  return (
    <>
      {visible === true ? <StatusBar hidden /> : <View></View>}
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackground}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};

export default ModalPopup;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: width * 0.9,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 20,
  },
});
