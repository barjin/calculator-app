import Key from './Key'

export default function Keyboard({ append }: { append: (s: string) => void }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {
                Array(9).fill(0).map((x, i) => 
                    <Key 
                        label={(i + 1).toString()} 
                        action={() => append((i + 1).toString())}
                    />
                )
            }
            <Key 
                label={'+'} 
                action={() => append('+')}
            />
            <Key 
                label={'0'} 
                action={() => append('0')}
            />
            <Key 
                label={'-'} 
                action={() => append('-')}
            />
        </div>
    )
}