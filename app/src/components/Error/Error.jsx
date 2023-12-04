import React from 'react';
import styles from './error.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd';

function Error({ statusOfResponse, messageOfResponse }) {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/restaurants')
    }

    return (
        <Result
            className={styles.wrapper}
            status={statusOfResponse}
            title={statusOfResponse}
            subTitle={messageOfResponse}
            extra={<Button onClick={handleHome} type="primary">В рестораны</Button>}
        />
    );
}

export default Error;