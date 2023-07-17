import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState, useRef } from "react";
import { Text, TextInput, Button, IconButton } from "react-native-paper";
import useWithoutHeader from "../hooks/useWithoutHeader";
import { formItems } from "../utils/mockups/form";
import colors from "../utils/constants/colors";

const RenderItem = ({ item, selectedId, setSelectedId, setForm, form }) => {
  const [textItem, setTextItem] = useState(item.text);

  const handleEditText = (id) => {
    if (selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };
  const handleDelete = () => {
    setForm(form.filter((val) => val.id !== item.id));
  };
  const handleSetText = (id) => {
    setForm(
      form.map((val) => {
        if (id === val.id) {
          return { ...val, text: textItem };
        } else {
          return val;
        }
      })
    );
    handleEditText(id);
  };
  return (
    <View style={styles.itemsContainer}>
      {selectedId === item.id ? (
        <TextInput
          value={textItem}
          onChangeText={(text) => setTextItem(text)}
          style={[styles.textItem, { flex: 8 }]}
          multiline
          key={item.id}
          autoFocus={true}
        />
      ) : (
        <Text style={[styles.textItem, { flex: 8 }]}>{item.text}</Text>
      )}
      {!(selectedId === item.id) && (
        <IconButton
          style={{ flex: 1 }}
          icon={"pencil"}
          onPress={() => handleEditText(item.id)}
          disabled={selectedId && selectedId !== item.id}
        />
      )}
      {!(selectedId === item.id) && (
        <IconButton
          style={{ flex: 1 }}
          icon={"delete"}
          onPress={handleDelete}
          disabled={selectedId && selectedId !== item.id}
        />
      )}
      {selectedId === item.id && (
        <IconButton
          style={{ flex: 2 }}
          icon={"check"}
          onPress={() => handleSetText(item.id)}
        />
      )}
    </View>
  );
};

const RecordEditor = () => {
  useWithoutHeader();
  const [form, setForm] = useState(formItems);
  const [selectedId, setSelectedId] = useState(null);
  const scrollViewRef = useRef(null);

  const handleAddItem = () => {
    setForm([
      ...form,
      {
        id: Math.floor(Math.random() * 999999),
        text: "Agregar Descripción",
        options: [
          { text: "Coincide", selected: false },
          { text: "No Coincide", selected: false },
          { text: "No se revisa", selected: true },
        ],
        comment: "",
      },
    ]);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
  };

  return (
    <ScrollView style={styles.formContainer} ref={scrollViewRef}>
      {form.map((item) => {
        return (
          <RenderItem
            item={item}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            setForm={setForm}
            form={form}
            key={item.id}
          />
        );
      })}
      <Button
        style={{ paddingBottom: 25 }}
        icon="plus"
        mode="text"
        onPressIn={handleAddItem}
      >
        Agregar item
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: colors.bg_3_color,
    borderRadius: 12,
  },
  textItem: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  btnSubmitContainer: {
    paddingVertical: 20,
  },
});

export default RecordEditor;
