import {useState} from "react";

function Square(){
    const innitStyles = {
        top: 0,
        left: 0
    }

    const [styles, setStyles] = useState(innitStyles);

    const moveEvent = (e: MouseEvent) => {
        const square = document.querySelector(".square");
        const position = square?.getBoundingClientRect();
        if (position === undefined) {
            return
        }
        setStyles({
            top: position.top + e.movementY,
            left: position.left + e.movementX
        });
        console.log(styles)
    }
function registerMoveListener() {
    document.addEventListener("mousemove",(moveEvent));
    document.addEventListener("mouseup",() => { document.removeEventListener("mousemove") })


}
    return (
        <div style={styles} onMouseDown={() => {
            registerMoveListener()
        }} className={"square"}>

        </div>


    );
}
export default Square
