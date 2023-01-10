import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    // console.log(enteredText); 아래 터미널에 한글자마다 입력됨
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="검색어를 입력해주세요 "
          onChangeText={goalInputHandler}
        />
        <Button title="검색하기" onPress={addGoalHandler} />
      </View>
      <View styles={styles.goalsContainer}>
        {/* <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} styles={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            // itemData는 index 프로퍼티 접근 권한도 제공한다
            // itemData.index
            return (
              <View styles={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 1,
  },
  category: {
    margin: 16,
    padding: 16,
    borderWidth: 16,
    borderBottomColor: "#f0f8ff",
    flexDirection: "row",
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    backgroundColor: "#5e0acc",
    color: "white",
    margin: 8,
    padding: 8,
    borderRadius: 6,
  },
});
