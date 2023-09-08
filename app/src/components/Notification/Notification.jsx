import React from 'react';
import { Button, notification } from 'antd';

function Notification({ message, description }) {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
        message: message,
        description: description,
        duration: 0,
        });
  };
    return (
        <div>
            {contextHolder}
            <Button type="primary" onClick={openNotification}>
                Open the notification box
            </Button>
        </div>
    );
}

export default Notification;