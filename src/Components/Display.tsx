export default function Display({content} : { content: string }) {
    return (
        <div style={{backgroundColor: 'black', color: 'white', textAlign: 'right', width: '100%', fontSize: '2em', height: '1.5em'}} data-display="true">
            {content}
        </div>
    )
}