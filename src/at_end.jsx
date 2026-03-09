import { useState, useEffect, useCallback } from 'react'

function AtEnd() {
    const [numbers, setNumbers] = useState(Array(10).fill(""));
    const [num_style, setNum_style] = useState(Array(10).fill({}));
    const ans = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    const handleKeyPress = useCallback((event) => {
        const key = event.key;

        if (key === "Enter" && numbers[9] !== "") {
            console.log("Conditional passed");

            for (let n = 0; n < 10; n++) {
                if (numbers[n] === ans[n]) {
                    num_style[n] = { backgroundColor: "green" };
                } else {
                    num_style[n] = { backgroundColor: "red" };
                }
            }

            setNum_style([...num_style]);
            return;
        }

        if (!/^[0-9]$/.test(key)) return;

        setNumbers(prev => {
            const index = prev.findIndex(n => n === "");
            if (index === -1) return prev;

            const newArr = [...prev];

            const newStyles = [...num_style];

            setNum_style(newStyles)

            newArr[index] = key;
            return newArr;
        });  

    }, [numbers, ans]);

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

export default AtEnd
