import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Users } from '../api/users';
import { Calls } from '../api/calls';

import Button from './Button';

const Reciever = ({ calls }) => {

  function playNotification() {
    const n = new Notification('Call On Me', { onShow: playSound(), body: 'Someone is calling from the reception', icon: '/img/notification_img.png'});
    console.log(n);
  }

  function playSound() {
    //new Audio('/audio/notification.mp3').play();

  }

  function requestPermission() {
    if (window.Notification) {
      Notification.requestPermission();
      console.log(Notification.permission);
    }
  }

  return (
    <div className="container">
      { requestPermission() }
      {
        calls.map((call) => (
          call.active ? playNotification() : 'no calls'
        ))
      }
      <Button handleClick={() => Calls.remove(calls[0]._id)} label={'ANSWER'}/>
    </div>
  )

};

export default createContainer(() => {
  return {
    calls: Calls.find({}).fetch(),
  };
}, Reciever);