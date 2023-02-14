import styles from '../styles/modules/Navbar.module.css'

export default function Navbar(){
    return<>
        <div className={`${styles.navbar} container`}>
            <div className={styles.navbarElement}>
                <p className={styles.navbarText}>
                    All rights reserved and may not be used. 2022 licence required.
                </p>
            </div>
        </div>
    </>
}