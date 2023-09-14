import React, { useState, useCallback } from 'react';
import Display from './Components/Display';
import Keyboard from './Components/Keyboard';
import Key from './Components/Key';

function App() {
  const displaySize = 10;
  const [displayContent, setDisplayContent] = useState<string>('');
  const [isResult, setIsResult] = useState<boolean>(true);

  const appendToDisplay = useCallback((nextChar: string) => {
    if(isResult) {
      setDisplayContent(nextChar);
      setIsResult(false);
      return;
    }

    if(displayContent.length >= displaySize) return;

    setDisplayContent(`${displayContent}${nextChar}`);
  }, [displayContent, setDisplayContent, isResult]);

  const calculate = useCallback(() => {
    if(isResult) return;

    try {
      const result = eval(displayContent);
      setDisplayContent(result);
    } catch {
      setDisplayContent('ERROR');
    }
    setIsResult(true);
  }, [setDisplayContent, displayContent, isResult, setIsResult]);

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div style={{maxWidth: '600px'}}>
        <Display content={displayContent} />
        <Keyboard append={appendToDisplay}/>
        <Key label="=" action={calculate} />
      </div>
    </div>
  );
}

export default App;
