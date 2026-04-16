import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, RadioButton, Text, TextInput } from "react-native-paper";
import { formItems } from "../utils/mockups/form.js";
import useAuth from "../hooks/useAuth.js";
import colors from "../utils/constants/colors.js";

const Checklist = () => {
  const { auth } = useAuth();
  const [form, setForm] = useState(formItems);

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
        }

        return item;
      })
    );
  };

  const handleSubmit = () => {
    const userCheck = form.map((item) => {
      const optionSelectedText = item.options.find((val) => val.selected)?.text;

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
        }

        return item;
      })
    );
  };

  const changeText = (indexItem, text) => {
    setForm((prevForm) =>
      prevForm.map((item, index) => {
        if (indexItem === index) {
          return {
            ...item,
            comment: text,
          };
        }

        return item;
      })
    );
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>Checklist</Text>
        <Text variant="headlineSmall" style={styles.title}>
          Revision guiada
        </Text>
        <Text style={styles.subtitle}>
          Marca el estado de cada item y agrega comentarios solo cuando aporten
          contexto real.
        </Text>
      </View>

      {form.map((formItem, indexItem) => (
        <View key={`formItem-${formItem.id}`} style={styles.itemCard}>
          <View style={styles.itemHeader}>
            <View style={styles.indexBadge}>
              <Text style={styles.indexText}>{indexItem + 1}</Text>
            </View>
            <Text style={styles.itemTitle}>{formItem.text}</Text>
          </View>

          <View style={styles.optionsList}>
            {formItem.options.map((option, indexOption) => (
              <TouchableOpacity
                key={`${option.text}-${indexItem}-${indexOption}`}
                activeOpacity={0.85}
                style={[
                  styles.optionRow,
                  option.selected && styles.optionRowActive,
                ]}
                onPress={() => handlePress(indexItem, indexOption)}
              >
                <View>
                  <Text
                    style={[
                      styles.optionText,
                      option.selected && styles.optionTextActive,
                    ]}
                  >
                    {option.text}
                  </Text>
                  <Text style={styles.optionHint}>
                    {option.selected ? "Seleccionado" : "Tocar para elegir"}
                  </Text>
                </View>
                <RadioButton
                  value={option.text}
                  status={option.selected ? "checked" : "unchecked"}
                  onPress={() => handlePress(indexItem, indexOption)}
                  color={colors.accent}
                  uncheckedColor={colors.text_muted}
                />
              </TouchableOpacity>
            ))}
          </View>

          {formItem.showComment ? (
            <View style={styles.commentSection}>
              <Button
                icon="minus"
                mode="text"
                textColor={colors.accent_warm}
                onPress={() => toggleShowComment(indexItem, true)}
              >
                Quitar comentario
              </Button>

              <TextInput
                placeholder="Escribe una observacion breve"
                value={formItem.comment}
                onChangeText={(text) => changeText(indexItem, text)}
                mode="outlined"
                multiline
                style={styles.commentInput}
                textColor={colors.text_primary}
                outlineColor={colors.border_soft}
                activeOutlineColor={colors.accent}
                theme={{ colors: { onSurfaceVariant: colors.text_muted } }}
              />
            </View>
          ) : (
            <Button
              icon="plus"
              mode="text"
              textColor={colors.accent}
              onPress={() => toggleShowComment(indexItem)}
            >
              Agregar comentario
            </Button>
          )}
        </View>
      ))}

      <Button
        mode="contained"
        icon="check-circle"
        buttonColor={colors.accent}
        textColor={colors.bg_1_color}
        contentStyle={styles.submitContent}
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        Enviar checklist
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
    marginBottom: 16,
  },
  indexBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.accent_soft,
    alignItems: "center",
    justifyContent: "center",
  },
  indexText: {
    color: colors.accent,
    fontWeight: "700",
  },
  itemTitle: {
    flex: 1,
    color: colors.text_primary,
    fontSize: 16,
    fontWeight: "700",
  },
  optionsList: {
    gap: 10,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 18,
    backgroundColor: colors.surface_2,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  optionRowActive: {
    borderColor: colors.border_strong,
    backgroundColor: colors.accent_soft,
  },
  optionText: {
    color: colors.text_primary,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 2,
  },
  optionTextActive: {
    color: colors.text_primary,
  },
  optionHint: {
    color: colors.text_muted,
    fontSize: 12,
  },
  commentSection: {
    marginTop: 10,
  },
  commentInput: {
    backgroundColor: colors.surface_2,
  },
  submitButton: {
    marginTop: 4,
  },
  submitContent: {
    minHeight: 52,
  },
});

export default Checklist;
