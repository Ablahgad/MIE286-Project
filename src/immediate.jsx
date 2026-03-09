import { useState, useEffect, useCallback } from 'react'

function Immediate() {
    const [numbers, setNumbers] = useState(Array(10).fill(""));
    const [num_style, setNum_style] = useState(Array(10).fill({}));
    const ans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const handleKeyPress = useCallback((event) => {
        const key = event.key;

        if (!/^[0-9]$/.test(key)) return;

        setNumbers(prev => {
            const index = prev.findIndex(n => n === "");
            if (index === -1) return prev;

            const newArr = [...prev];

            const newStyles = [...num_style];

            if (key == ans[index]) {
                num_style[index] = {backgroundColor: 'green'}
            } else {
                num_style[index] = {backgroundColor: 'red'}
            }

            setNum_style(newStyles)

            newArr[index] = key;
            return newArr;
        });
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
        window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className="main-number-container">
            {numbers.map((n, i) => (
                <div key={i} className="num" style={num_style[i]}>
                    <h1>{n}</h1>
                </div>
            ))}
        </div>
    );
}

export default Immediate