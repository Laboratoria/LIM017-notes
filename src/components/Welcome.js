export function Welcome () {
    const getInto = () => {
        alert("Ingresa")
    }
    document.getElementById("btnGetInto").addEventListener("click",getInto)
    return <div>
        <h1>YUYARINAPAQ</h1>
        <button id="btnGetInto" onclick={getInto}>Ingresar</button>
    </div>;
}