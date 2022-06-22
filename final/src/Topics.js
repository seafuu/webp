import { List, ListItem } from '@mui/material';
import React from 'react'
import { db } from './utils/firebase';

function Topics() {
    const [topics,setTopics]=React.useState([])
    React.useEffect(() => {
        db.collection('topics').get().then((collectionSnapshot)=>{
            const data=collectionSnapshot.docs.map(doc=>{
                return doc.data();
            })
            setTopics(data);
        })
    })
    return( 
        <List>
            {topics.map((topics)=>{
                return <ListItem>{topics.name}</ListItem>
            })}
        </List>

    )
    
}
export default Topics;