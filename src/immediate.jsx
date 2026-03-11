import { useState, useEffect, useCallback } from 'react'

function Immediate() {
    const [numbers, setNumbers] = useState(Array(10).fill(""));
    const [num_style, setNum_style] = useState(Array(10).fill({}));
    const ans = ["8", "1", "3", "4", "6", "5", "1", "0", "4", "5"] // Ans2
    // const ans = ["5", "4", "0", "2", "7", "4", "5", "3", "1", "7"] // Ans3
    // const ans = ["0", "2", "5", "9", "1", "7", "8", "8", "9", "6"] // Ans4
    // const ans = ["5", "9", "0", "8", "8", "7", "8", "8", "1", "8"] // Ans5
    // const ans = ["9", "5", "9", "5", "9", "7", "3", "5", "1", "3"] // Ans6
    // const ans = ["1", "0", "4", "4", "8", "6", "6", "1", "9", "8"] // Ans7
    // const ans = ["4", "7", "2", "9", "9", "3", "8", "3", "5", "7"] // Ans8
    // const ans = ["3", "2", "2", "8", "5", "2", "3", "2", "3", "4"] // Ans9
    // const ans = ["7", "2", "0", "8", "7", "1", "7", "9", "7", "0"] // Ans10
    // const ans = ["9", "1", "8", "5", "5", "1", "7", "0", "7", "6"] // Ans11
    // const ans = ["2", "7", "9", "3", "1", "5", "2", "3", "6", "1"] // Ans12
    // const ans = ["4", "4", "5", "2", "7", "2", "0", "3", "4", "3"] // Ans13

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