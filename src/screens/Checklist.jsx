import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { RadioButton, Text, Button, TextInput } from "react-native-paper";
import { formItems } from "../utils/mockups/form.js";
import useWithoutHeader from "../hooks/useWithoutHeader.js";
import useAuth from "../hooks/useAuth.js";
import colors from "../utils/constants/colors.js";

const Checklist = () => {
  const { auth } = useAuth();
  const [form, setForm] = useState(formItems);
  useWithoutHeader();
  const handlePress = (indexItem, indexOption) => {
    setForm((prevForm) =>
      prevForm.map((item, index) => {
        if (indexItem === index) {
          return {
            ...item,
            options: item.options.map((option, optionIndex) => ({
              ...option,
              selected: optionIndex === indexOption,
            })),
          };
        } else {
          return item;
        }
      })
    );
  };

  const handleSubmit = () => {
    const userCheck = form.map((item) => {
      const optionSelectedText = item.options.filter(
        (val) => val.selected === true
      )[0].text;
      console.log(item);
      return {
        id: item.id,
        title: item.text,
        checked: optionSelectedText,
        comment: item.comment || "",
      };
    });
    console.log({ user: auth.mail, form: userCheck });
  };
  const toggleShowComment = (indexItem, clean = false) => {
    setForm((prevForm) =>
      prevForm.map((item, index) => {
        if (indexItem === index) {
          return {
            ...item,
            showComment: !item.showComment,
            comment: clean ? "" : item.comment,
          };
        } else {
          return item;
        }
      })
    );
  };
  const changeText = (indexItem, text) => {
    console.log(text);
    setForm((prevForm) =>
      prevForm.map((item, index) => {
        if (indexItem === index) {
          return {
            ...item,
            comment: text,
          };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <ScrollView>
      <View style={styles.formContainer}>
        {form.map((formItem, indexItem) => (
          <View key={"formItem" + formItem.id}>
            <View style={styles.itemsContainer}>
              <Text style={styles.textItem}>{formItem.text}</Text>

              {formItem.options.map((option, indexOption) => (
                <View
                  key={option.text + indexItem + indexOption}
                  style={[
                    styles.option,
                    indexOption < formItem.options.length - 1 &&
                      styles.optionDivider,
                  ]}
                >
                  <Text style={styles.textOption}>{option.text}</Text>
                  <View style={styles.btnOptionContainer}>
                    <RadioButton
                      onPress={() => handlePress(indexItem, indexOption)}
                      status={option.selected ? "checked" : "unchecked"}
                    />
                  </View>
                </View>
              ))}
              {formItem.showComment ? (
                <>
                  <Button
                    icon="minus"
                    mode="text"
                    textColor="red"
                    onPress={() => toggleShowComment(indexItem, true)}
                  >
                    Eliminar comentario
                  </Button>
                  <TextInput
                    placeholder="Comentario..."
                    value={formItem.comment}
                    onChangeText={(text) => changeText(indexItem, text)}
                    mode="outlined"
                    multiline
                  />
                </>
              ) : (
                <Button
                  icon="plus"
                  mode="text"
                  onPress={() => toggleShowComment(indexItem)}
                >
                  Agregar comentario
                </Button>
              )}
            </View>
          </View>
        ))}
        <View style={styles.btnSubmitContainer}>
          <Button mode="contained" onPress={handleSubmit}>
            Enviar
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  itemsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: colors.bg_3_color,
    borderRadius: 12,
  },
  textItem: {
    fontWeight: "bold",
    fontSize: 15,
  },
  option: {
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  optionDivider: {
    borderBottomWidth: 0.7,
    // borderBottomColor: "rgb(176, 196, 222)",
  },
  textOption: {
    fontSize: 13,
    flexBasis: 90,
  },
  btnOptionContainer: {},
  btnSubmitContainer: {
    paddingVertical: 20,
  },
});

export default Checklist;
