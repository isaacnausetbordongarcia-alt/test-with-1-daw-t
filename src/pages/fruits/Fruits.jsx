function Fruits() {
    const fruitsNames = ["Melocotón", "Fresa", "Mango"]
    return (
        <>
            <h1>Lista de Frutas</h1>

            {
                fruitsNames.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
        </>
    )
}

export default Fruits