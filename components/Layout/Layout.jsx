import styles from '../../styles/Layout.module.css'
import Nav from '../Nav/Nav'
const Layout = ({children}) => {
    return (
        <div>
            <Nav/>
            <div className={styles.container}>
            {children}
        </div>
        </div>
    )
}

export default Layout
