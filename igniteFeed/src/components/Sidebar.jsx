import styles from "./Sidebar.module.css"
import imgUser from "../assets/user.png"
import { Avatar } from "./Avatar"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src={imgUser}/>
            <strong>Alexandre Bührer</strong>
            <span>Software Enginer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfíl
                </a>
            </footer>
        </aside>
    )
}