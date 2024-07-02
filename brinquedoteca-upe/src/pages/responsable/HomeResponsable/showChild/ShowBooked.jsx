function ShowBooked(){
    const imagem = "https://i.imgur.com/XpXSzdx.png"
    return (
        <div>
        <div>
            <h2 className="h2">nome da criança</h2>
        </div>
        <div>
            <h3 className="h3">data/hora</h3>
            <img width={35} className="icone" src= {imagem}/>
        </div>
    </div>
    )
}

export default ShowBooked