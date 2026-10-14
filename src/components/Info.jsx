function Info(props) {
    console.log(props.datos);

    return (
        <div className="info">
            <h1>{props.datos.nombre}</h1>
            <p>{props.datos.bio}</p>
            <p>Edad: {props.datos.edad} años</p>
        </div>
    );
}

export default Info;