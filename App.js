import React from 'react';
import { StyleSheet, Text, View, Button, Image, flex } from 'react-native';
import ImagePicker from 'react-native-image-picker';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      arrImages: []
    };
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState(prevState => ({
          filePath: source,
          arrImages: [...prevState.arrImages, source.uri],
          }))
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {/*<Image 
          source={{ uri: this.state.filePath.path}} 
          style={{width: 100, height: 100}} />*/}
          {/* { <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 100, height: 100 }}
          /> } */}
          {this.state.arrImages.map((k)=>{
                 console.warn("array images uri is =" +k)
                 console.warn("this.state.filePath.uri = " + this.state.filePath.uri)
          })}
          {this.state.arrImages.length>0 ? this.state.arrImages.map((k) => {return(<Image
            source={{ uri: k }}
            style={{ width: 25, height: 25}}
          />)}): null }
          
          
          <Button class = "button" title="Choose File" onPress={this.chooseFile.bind(this)} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: flex,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },

  image

});