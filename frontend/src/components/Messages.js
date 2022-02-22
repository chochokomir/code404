import { Avatar, Box, CssBaseline, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import contacts from '../consts/messages';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Messages = (props) => {
  const { chatId } = props

  const [chatIdState = chatId, setChatIdState] = useState(0)

  Messages.propTypes = {
    chatId: PropTypes.number
  }

  return <Box sx={{ display: 'flex' }}>
    <CssBaseline/>
    <Box sx={{width: '20%', height: '100vh', borderRight: '1px solid rgba(0, 0, 0, 0.1)'}}>
      <List>
        {contacts.map((contact, index) => (
          <ListItem component={Link} to={contact.user} button onClick={() => setChatIdState(index)} key={index}>
            <ListItemAvatar><Avatar src={contact.avatar}/></ListItemAvatar>
            <ListItemText noWrap primary={contact.user} secondary={contact.messages[contact.messages.length - 1].text} sx={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}/>
          </ListItem>
        ))}
      </List>
    </Box>
    <Box sx={{ p: 2, display: 'flex' }}>
      <Grid container display='inline-flex'>
        {contacts.map((contact, index) => (
          <>
            {chatIdState === index && <Grid item sx={{width: '70%'}}>
              <Box sx={{ p: 1, width: 'min-content', border: '1px solid rgba(0, 0, 0, 0.1)', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                <Box sx={{ display: 'inline-flex'}}>
                  <Avatar src={contact.avatar}/>
                  <Typography variant='h7' sx={{ ml: '10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{contact.user}</Typography>
                  <Typography variant='h7' sx={{ ml: '10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{contact.messages[0].date}</Typography>
                </Box>
                {contact.messages.map((message) => (
                  <Typography paragraph sx={{mt: '10px'}}>{message.text}</Typography>
                ))}
              </Box>
            </Grid>}
          </>
        ))}
      </Grid>
    </Box>
  </Box>;
};

export default Messages;