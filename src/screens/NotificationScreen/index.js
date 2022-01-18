import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Animated } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { notifications } from "../../global";
import {
  Container,
  ButtonView,
  RowFront,
  Box,
  Title,
  Details,
  Left,
  ButtonRight,
  ButtonLeft,
  RowBack,
  BackRightBtn,
  Trash,
  BackRightBtnRight,
} from "./styles";
import { useTheme } from "@react-navigation/native";
export default function NotificationScreen() {
  const [listData, setListData] = useState(
    notifications.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      details: NotificationItem.details,
    }))
  );
  function deleteRow(rowMap, rowKey) {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  }
  function closeRow(rowMap, rowKey) {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  }
  function renderItem(data, rowMap) {
    const rowHeightAnimatedValue = new Animated.Value(60);
    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  }
  function VisibleItem(props) {
    const {
      data,
      rowHeightAnimatedValue,
      removeRow,
      leftActionState,
      rightActionState,
    } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }

    return (
      <Animated.View style={[RowFront, { height: rowHeightAnimatedValue }]}>
        <ButtonView
          onPress={() => console.log("Element touched")}
          underlayColor={"#aaa"}
        >
          <Box>
            <Title numberOfLines={1}>{data.item.title}</Title>
            <Details numberOfLines={1}>{data.item.details}</Details>
          </Box>
        </ButtonView>
      </Animated.View>
    );
  }
  function renderHiddenItem(data, rowMap) {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  }
  function HiddenItemWithActions(props) {
    const {
      swipeAnimatedValue,
      leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onClose,
      onDelete,
    } = props;
    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false,
      }).start();
    }

    return (
      <Animated.View style={[RowBack, { height: rowHeightAnimatedValue }]}>
        <Left>Left</Left>
        {!leftActionActivated && (
          <ButtonLeft onPress={onClose}>
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={25}
              style={styles.trash}
              color="#fff"
            />
          </ButtonLeft>
        )}
        {!leftActionActivated && (
          <Animated.View
            style={[
              BackRightBtn,
              BackRightBtnRight,
              {
                flex: 1,
                width: rowActionAnimatedValue,
              },
            ]}
          >
            <ButtonRight
              style={[BackRightBtn, BackRightBtnRight]}
              onPress={onDelete}
            >
              <Animated.View
                style={[
                  Trash,
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: "clamp",
                        }),
                      },
                    ],
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={25}
                  color="#fff"
                />
              </Animated.View>
            </ButtonRight>
          </Animated.View>
        )}
      </Animated.View>
    );
  }
  function onLeftAction(rowKey) {
    console.log("onLeftAction", rowKey);
  }
  function onRightAction(rowKey) {
    console.log("onRightAction", rowKey);
  }
  function onLeftActionStatusChange(rowKey) {
    console.log("onLeftActionStatusChange", rowKey);
  }
  function onRightActionStatusChange(rowKey) {
    console.log("onRightActionStatusChange", rowKey);
  }
  function onRowDidOpen(rowKey) {
    console.log("This row opened", rowKey);
  }
  const theme = useTheme();
  return (
    <Container color={theme.dark ? theme.colors.background : "#f4f4f4"}>
      <StatusBar style={theme.dark ? "light" : "dark"} />
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
        onRowDidOpen={onRowDidOpen}
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        onLeftActionStatusChange={onLeftActionStatusChange}
        onRightActionStatusChange={onRightActionStatusChange}
      />
    </Container>
  );
}
