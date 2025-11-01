import React, { useReducer } from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCCREMENT = 15;

const ACTION_TYPES = {
  CHANGE_RED: "CHANGE_RED",
  CHANGE_GREEN: "CHANGE_GREEN",
  CHANGE_BLUE: "CHANGE_BLUE",
};

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_RED:
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case ACTION_TYPES.CHANGE_GREEN:
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case ACTION_TYPES.CHANGE_BLUE:
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: ACTION_TYPES.CHANGE_RED, payload: COLOR_INCCREMENT })
        }
        onDecrease={() =>
          dispatch({
            type: ACTION_TYPES.CHANGE_RED,
            payload: -1 * COLOR_INCCREMENT,
          })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({
            type: ACTION_TYPES.CHANGE_GREEN,
            payload: COLOR_INCCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            type: ACTION_TYPES.CHANGE_GREEN,
            payload: -1 * COLOR_INCCREMENT,
          })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({
            type: ACTION_TYPES.CHANGE_BLUE,
            payload: COLOR_INCCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            type: ACTION_TYPES.CHANGE_BLUE,
            payload: -1 * COLOR_INCCREMENT,
          })
        }
      />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text>
          rgb({red}, {green}, {blue})
        </Text>
        <View
          style={{
            height: 150,
            width: 150,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
});

export default SquareScreen;
