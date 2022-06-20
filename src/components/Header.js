export default function Header(props) {
    return (
        <div className="container-fluid bg-info py-4">
        <header className="container d-flex justify-content-around flex-wrap">
            <h1>Practicando useEffect</h1>
            {props.isLogged && <button className="btn btn-primary" onClick={props.onHandle}>Salir</button>}
        </header>
        </div>
    )
}
