import { ScrollView, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { formItems } from "../utils/mockups/form";
import colors from "../utils/constants/colors";

const RenderItem = ({ item, index, selectedId, setSelectedId, setForm, form }) => {
  const [textItem, setTextItem] = useState(item.text);

  const handleEditText = (id) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  const handleDelete = () => {
    setForm(form.filter((val) => val.id !== item.id));
  };

  const handleSetText = (id) => {
    setForm(
      form.map((val) => {
        if (id === val.id) {
          return { ...val, text: textItem };
        }

        return val;
      })
    );
    handleEditText(id);
  };

  const editing = selectedId === item.id;

  return (
    <View style={styles.itemCard}>
      <View style={styles.itemHeader}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{index + 1}</Text>
        </View>
        <Text style={styles.itemLabel}>Item editable</Text>
      </View>

      {editing ? (
        <TextInput
          value={textItem}
          onChangeText={(text) => setTextItem(text)}
          mode="outlined"
          multiline
          autoFocus
          style={styles.itemInput}
          textColor={colors.text_primary}
          outlineColor={colors.border_soft}
          activeOutlineColor={colors.accent}
          theme={{ colors: { onSurfaceVariant: colors.text_muted } }}
        />
      ) : (
        <Text style={styles.itemText}>{item.text}</Text>
      )}

      <View style={styles.actionRow}>
        {!editing && (
          <IconButton
            icon="pencil"
            mode="contained-tonal"
            containerColor={colors.accent_soft}
            iconColor={colors.accent}
            onPress={() => handleEditText(item.id)}
            disabled={Boolean(selectedId && selectedId !== item.id)}
          />
        )}
        {!editing && (
          <IconButton
            icon="delete"
            mode="contained-tonal"
            containerColor={colors.accent_warm_soft}
            iconColor={colors.accent_warm}
            onPress={handleDelete}
            disabled={Boolean(selectedId && selectedId !== item.id)}
          />
        )}
        {editing && (
          <Button
            mode="contained"
            buttonColor={colors.accent}
            textColor={colors.bg_1_color}
            icon="check"
            onPress={() => handleSetText(item.id)}
          >
            Guardar cambio
          </Button>
        )}
      </View>
    </View>
  );
};

const RecordEditor = () => {
  const [form, setForm] = useState(formItems);
  const [selectedId, setSelectedId] = useState(null);
  const scrollViewRef = useRef(null);

  const handleAddItem = () => {
    setForm((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 999999),
        text: "Nuevo item para revisar",
        options: [
          { text: "Coincide", selected: false },
          { text: "No Coincide", selected: false },
          { text: "No se revisa", selected: true },
        ],
        comment: "",
      },
    ]);

    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    });
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>Editor</Text>
        <Text variant="headlineSmall" style={styles.title}>
          Plantilla de control
        </Text>
        <Text style={styles.subtitle}>
          Ajusta los items del formulario antes de publicar una nueva version de
          la inspeccion.
        </Text>
      </View>

      {form.map((item, index) => (
        <RenderItem
          item={item}
          index={index}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          setForm={setForm}
          form={form}
          key={item.id}
        />
      ))}

      <Button
        icon="plus"
        mode="contained"
        buttonColor={colors.accent}
        textColor={colors.bg_1_color}
        style={styles.addButton}
        contentStyle={styles.addButtonContent}
        onPress={handleAddItem}
      >
        Agregar item
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screen_bg,
  },
  content: {
    padding: 18,
    paddingBottom: 34,
    gap: 16,
  },
  heroCard: {
    padding: 22,
    borderRadius: 28,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  title: {
    color: colors.text_primary,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.text_secondary,
    lineHeight: 20,
  },
  itemCard: {
    padding: 18,
    borderRadius: 24,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  badge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.accent_soft,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: colors.accent,
    fontWeight: "700",
  },
  itemLabel: {
    color: colors.text_muted,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  itemText: {
    color: colors.text_primary,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
  },
  itemInput: {
    backgroundColor: colors.surface_2,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
    marginTop: 14,
  },
  addButton: {
    marginTop: 4,
  },
  addButtonContent: {
    minHeight: 52,
  },
});

export default RecordEditor;
