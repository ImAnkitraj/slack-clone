import React ,{useState, useEffect}from 'react'
import './Chat.css';
import {useParams} from 'react-router-dom';
import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons';
import db from './firebase';
import Message from './Message'


function Chat() {
    const {roomId} = useParams();
    const [roomDetails, setroomDetails] = useState([]);
    const [roomMessages, setroomMessages] = useState([]);
    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setroomDetails(snapshot.data());
            });
            db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot( snapshot =>
                setroomMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            )
        }
    }, [roomId]);

    console.log('Messages', roomMessages)
    return (
        <div className='chat'>
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong>#  { roomDetails?.name}</strong>
                        <StarBorderOutlined/>
                    </h4>
                </div>
                <div className='chat__headerRight'>
                    <p>
                        <InfoOutlined/> Details   
                    </p>
                </div>
            </div>
            <div className='chat__messages'>
                {/* Messages */}
                {roomMessages.map(({message, timestamp, user, userImage}) => 
                    <Message 
                        message={message}
                        user={user}
                        userImage={userImage}
                        timestamp={timestamp}
                    />
                )}
            </div>
        </div>
    )
}
export default Chat
