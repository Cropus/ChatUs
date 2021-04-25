import {StyleSheet} from 'react-native';

const styles = StyleSheet.create( {
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50,
        borderColor: 'red',
    },
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
      fontSize: 16,
      color: 'grey',
    },
    time: {
        paddingRight: 10,
        fontSize: 12,
        color: 'grey',
    },
});

export default styles;