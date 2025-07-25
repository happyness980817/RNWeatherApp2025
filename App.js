import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="light" />
    </View>
  );
} // Rule #1 - div 대신 View 사용. div 는 쓸 수 없음
// Rule #2 - 모든 텍스트는 Text component 내부에 위치

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    color: "white",
  },
});

// Rule #3 - StyleSheet.create 는 단순히 style object 를 생성해주는 역할이지만
// 자동완성 지원, 컴포넌트 분리 때문에 사용
