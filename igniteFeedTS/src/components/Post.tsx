import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR }from 'date-fns/locale/pt-BR';
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from 'react';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType{
    id: number;
    author: Author;
    publishdAt: Date;
    content: Content[];
}
interface PostProps{
    post: PostType;
}

export function Post({post} : PostProps){
    const [comments, setComments] = useState([
        'Um post muito bacana!'
    ])

const [newCommentText, setNewCommenttext] = useState('')

const publishedDateFormatted = format(post.publishdAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
})

const publishedDateRelativeToNow = formatDistanceToNow(post.publishdAt,{
    locale: ptBR,
    addSuffix: true,
})

function handleCreateNewComment(event : FormEvent){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommenttext("")
}

function handleNewCommentChange(event : ChangeEvent <HTMLTextAreaElement>){
    event.target.setCustomValidity('')
    setNewCommenttext(event.target.value)
}

function handleNewCommentInvalid(event : InvalidEvent <HTMLTextAreaElement>){
    event.target.setCustomValidity('Este campo é obrigatório')
}

function deleteComment(commentToDelete : string){
    const commentsWithoutDeleteOnde = comments.filter(comment => {
        return comment != commentToDelete
    })
    setComments(commentsWithoutDeleteOnde)
}
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={post.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>  
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={post.publishdAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
               {post.content.map(line =>{
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if (line.type === 'link'){
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required={true}
                    />
                <footer>

                    <button type='submit' disabled={newCommentText.length == 0}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
               {comments.map(comment =>{
                    return( 
                        <Comment 
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    ) 
                })}
            </div>
        </article>
    )
}