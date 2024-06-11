import './menubar.css';
function MenuBar(){
    const logoUpe = "https://i.imgur.com/2A6wgMv.png"
    const logoBrinquedoteca = "https://i.imgur.com/3dLWvo7.png"
    return <div className="container">
        <div className='item'><img width={80} src={logoBrinquedoteca}/></div>
        <div className='item'><img width={80} src={logoUpe}/></div>
    </div>
}

export default MenuBar;