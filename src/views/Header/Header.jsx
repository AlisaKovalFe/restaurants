import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

function Header(props) {

    const menu = [
        {
            label: <Link to='/' className={styles.menu}><Title level={4}>О проекте</Title></Link>,
            id: '1',
        },
        {
            label: <Link to='/restaurants' className={styles.menu}><Title level={4}>Рестораны</Title></Link>,
            id: '2',
        },
        {
            label: <Link to='/addrest' className={styles.menu}><Title level={4}>Добавить свой ресторан</Title></Link>,
            id: '3',
        },
    ]
    
    return (        
            <Menu 
                mode="horizontal" 
                items={menu} 
                className={styles.wrapper}
            />      
    );
}

export default Header;