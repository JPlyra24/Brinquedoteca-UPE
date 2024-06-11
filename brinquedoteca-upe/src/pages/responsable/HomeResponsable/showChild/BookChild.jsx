import "./BookChild.css"
function ShowChild(){
    const imagem = "https://i.imgur.com/XpXSzdx.png"
    return <div>
        <div>
            <h2 className="h2">nome da criança</h2>
        </div>
        <div>
            <button className="button1">Agendar</button>
            <img width={35} className="icone" src= {imagem}/>
        </div>
    </div>
}

export default ShowChild