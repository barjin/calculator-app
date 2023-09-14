export default function Key({ label, action }: { label: string, action?: () => void }) {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyItems: 'space-around', 
            padding: '10px', 
            fontSize: '2em',
            paddingLeft: '20px',
            paddingRight: '20px',
            background: 'rgba(175,255,247,1)',
            cursor: action ? 'pointer' : 'auto'
        }}
            onClick={action}
        >
            <div style={{ textAlign: 'center' }}>
                {label}
            </div>
        </div>
    )
}