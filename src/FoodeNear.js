import React, {Component} from 'react';
import Flatlist from '../Data/FlatlistData';
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class FlatListItem extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={{uri: this.props.item.imageUrl}}
            style={{width: 80, height: 80, margin: 5}}></Image>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.FlatListItem}>{this.props.item.name}</Text>
          <Text style={{color: '#bbbbbb', padding: 5}}>
            {this.props.item.address}
          </Text>
          <Text style={{color: '#939393', padding: 5}}>
            {this.props.item.type}
          </Text>
        </View>
        <Text
          style={{color: 'green', fontSize: 20, position: 'relative', top: 60}}>
          {this.props.item.point}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  FlatListItem: {
    color: 'black',
    padding: 5,
    fontSize: 16,
  },
  header: {
    backgroundColor: '#cb0003',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  inputText: {
    backgroundColor: 'white',
    width: '10%',
    borderRadius: 5,
    flex: 1,
  },
  ViewInput: {
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default class FoodeNear extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*      
      <FlatList
          data={Flastlist}
          renderItem={({item}) => <Flatlist Flastlist={item}/>}
          keyExtractor={item => item.id}
      /> */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon
              name="angle-left"
              style={{
                fontSize: 20,
                color: 'white',
                marginHorizontal: 10,
                marginRight: 20,
              }}></Icon>
          </TouchableOpacity>
          <View style={styles.ViewInput}>
            <TouchableOpacity>
              <Icon
                name="search"
                style={{fontSize: 20, color: 'gray', padding: 10}}></Icon>
            </TouchableOpacity>
            <TextInput
              style={styles.inputText}
              placeholder="Tìm kiếm tên món ăn,..."
              placeholderTextColor="black"></TextInput>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
              <TouchableOpacity>
                <Text style={{textDecorationLine: 'underline'}}>Địa điểm </Text>
              </TouchableOpacity>
              <Text>Tại </Text>
              <TouchableOpacity>
                <Text style={{textDecorationLine: 'underline'}}>Hà Nội</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <FlatList
          data={Flatlist}
          renderItem={({item, index}) => (
            <FlatListItem item={item} index={index}></FlatListItem>
          )}></FlatList>
      </View>
    );
  }
}
