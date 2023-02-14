import React from 'react';
import styles from '../styles/modules/Header.module.css'

export default function Header({title}) {
    return(
        <header className={styles.header}>
            <div className={`container ${styles.headerSection}`}>
                <div className={styles.headerElement}>
                    <a href="/">
                        <span>
                            {title}
                        </span>
                    </a>
                </div>
                <div className={styles.headerElement}>
                </div>
            </div>
        </header>
    )
}