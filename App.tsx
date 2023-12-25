import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  RefreshControl,
  // KeyboardAvoidingView,
  // Platform,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Seventh Item',
  },
];

const SECTION_DATA = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
    ],
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
    ],
  },
];

const App = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  const toggleModal = () => setIsModalVisible((prevState) => !prevState);
  const toggleSwitch = (value: boolean) => setIsEnabled(value);

  const handleClickCloseModal = () => {
    Alert.alert('This is alert title.', 'This is alert message');
    toggleModal();
  };

  // console.log({ Platform });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#e9e9e9" />
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      > */}
      <ScrollView
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl
            colors={['#1060f0']}
            // progressBackgroundColor={'#cedbf1'}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
          />
        }
      >
        <Text style={styles.title}>Hello World</Text>
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} color="#1060f0" size="large" />
        </View>
        <View style={styles.nativeButtonContainer}>
          <Button color="#1060f0" title="Press me" touchSoundDisabled={false} />
        </View>
        <FlatList
          style={styles.itemsContainer}
          contentContainerStyle={styles.items}
          data={DATA}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
          )}
          // numColumns={2}
          // scrollEnabled={false}
          horizontal
        />
        <Image
          style={styles.image}
          source={{
            // height: 200,
            uri: 'https://fakeimg.pl/200x200?font=lobster',
            // width: 200,
          }}
          src="https://fakeimg.pl/300x200?font=lobster"
        />
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri: 'https://fakeimg.pl/300x200?font=lobster',
          }}
        >
          <View style={styles.imageBackgroundTextContainer}>
            <Text style={styles.imageBackgroundText}>Background image</Text>
          </View>
        </ImageBackground>
        <TextInput
          style={styles.input}
          cursorColor="#2d2e4e"
          placeholder="Enter you name"
          placeholderTextColor="#2d2e4e"
        />
        <Button
          color="#1060f0"
          title="Submit"
          onPress={toggleModal}
          touchSoundDisabled={false}
        />
        <Modal
          animationType="slide"
          onRequestClose={handleClickCloseModal}
          visible={isModalVisible}
          transparent
          statusBarTranslucent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHandler} />
              <Text style={styles.modalText}>Hello Modal!</Text>
              <Button
                color="#1060f0"
                title="Hide Modal"
                onPress={toggleModal}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {}}
            android_ripple={{
              color: '#6b9df8',
            }}
          >
            <Text style={styles.buttonText}>Press Me</Text>
          </Pressable>
        </View>
        <SectionList
          style={styles.sectionListContainer}
          sections={SECTION_DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.sectionItemText}>{item.text}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionTitle}>{section.title}</Text>
          )}
          scrollEnabled={false}
        />
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: '#8b8787', true: '#1060f0' }}
            thumbColor="#fff"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            // disabled
          />
        </View>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9e9',
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    color: '#2d2d4e',
    fontSize: 30,
    fontWeight: '600',
  },
  activityIndicatorContainer: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
  },
  nativeButtonContainer: {
    borderRadius: 20,
    borderWidth: 2,
    overflow: 'hidden',
  },
  itemsContainer: {
    marginVertical: 16,
  },
  items: {
    paddingVertical: 16,
    gap: 16,
  },
  itemTitle: {
    color: '#2d2e4e',
    fontSize: 20,
  },
  image: {
    height: 300,
  },
  imageBackground: {
    height: 300,
    marginVertical: 16,
  },
  imageBackgroundTextContainer: {
    alignItems: 'center',
    backgroundColor: '#3c3c3c68',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  imageBackgroundText: {
    fontSize: 30,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#c9c9c9',
    borderRadius: 5,
    color: '#2d2e4e',
    marginVertical: 16,
    padding: 10,
  },
  modalContainer: {
    backgroundColor: '#3c3c3c68',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '50%',
    padding: 16,
    elevation: 5,
    shadowColor: '#2d2e4e',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalHandler: {
    backgroundColor: '#c9c9c9',
    borderRadius: 5,
    height: 5,
    marginBottom: 16,
    width: 40,
  },
  modalText: {
    color: '#2d2e4e',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 16,
  },
  buttonContainer: {
    borderRadius: 40,
    marginVertical: 16,
    overflow: 'hidden',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1060f0',
    borderRadius: 40,
    paddingVertical: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionListContainer: {
    marginVertical: 16,
  },
  sectionItemText: {
    color: '#2d2e4e',
  },
  sectionTitle: {
    backgroundColor: '#c9c9c9',
    color: '#2d2e4e',
  },
  switchContainer: {
    marginVertical: 16,
  },
});

export default App;
