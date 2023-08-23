import React from 'react';
import { Tooltip } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons';

function HelpToolTip({title, color}) {
    return (
        <Tooltip title={title} color={color} >
            <span><InfoCircleTwoTone /></span>    
        </Tooltip>
    );
}

export default HelpToolTip;


