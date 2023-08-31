import React from 'react';
import styles from './footer.module.scss'
import { Typography } from 'antd';
const { Text } = Typography;

function Footer(props) {
    return (
        <div className={styles.wrapper}>
            <Text>&copy; Restaurants 2023</Text>
        </div>
    );
}

export default Footer;