import React , {useState, useEffect}from 'react'
import './Sidebar.css'
import { FiberManualRecord, Create, InsertComment, Inbox, BookmarkBorder, Drafts, Apps, FileCopy, ExpandLess, PeopleAlt, ExpandMore, Add } from '@material-ui/icons'
import SidebarOption from './SidebarOption'
import db from './firebase';

export default function Sidebar() {

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        //run this code once when sidebar component loads
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc=>({
                id: doc.id,
                name: doc.data().name,
            })))
        ));
    }, [])
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                    <h2>Inevitable Programmer</h2>
                    <h3>
                        <FiberManualRecord/>
                        Ankit Raj
                    </h3>
                </div>
                <Create/>
            </div>
            <SidebarOption Icon={InsertComment} title='Threads'/>
            <SidebarOption Icon={Inbox} title='Mention & reactions'/>
            <SidebarOption Icon={Drafts} title='Saved items'/>
            <SidebarOption Icon={BookmarkBorder} title='Channel Browser'/>
            <SidebarOption Icon={PeopleAlt} title='People & User groups'/>
            <SidebarOption Icon={Apps} title='Apps'/>
            <SidebarOption Icon={FileCopy} title='File Browser'/>
            <SidebarOption Icon={ExpandLess} title='Show less'/>
            <hr />
            <SidebarOption Icon={ExpandMore} title='Channels'/>
            <hr />
            <SidebarOption Icon={Add} title='Add Channel'/>
            {
                channels.map(channel => (
                    <SidebarOption title={channel.name} id={channel.id}/>
                ))
            }
            <hr />
        </div>
    )
}
