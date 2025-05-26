import styles from './Comment.module.css'
import imgUser from "../assets/user1.png"
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (comment : string) => void;
}

export function Comment({content, onDeleteComment} : CommentProps){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) =>{
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src={imgUser} 
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                     <header>
                        <div className={styles.authorAndTime}>
                            <strong>Evelin Mary</strong>
                            <time title="19 de maio às 15:51h" dateTime="2025-05">Cerca de 1h à trás</time>
                        </div>

                        <button onClick={handleDeleteComment}  title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
               
               <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
               </footer>
            </div>
        </div>
    )
}