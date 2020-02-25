import React, { useState, useEffect } from 'react';
import Car from './Car';
import { HubConnectionBuilder } from '@aspnet/signalr';

function Racegame() {

    const [hub, setHub] = useState(new HubConnectionBuilder()
        .withUrl('http://localhost:5000/racegamehub')
        .build())

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        hub.on('UsuarioEntrou', e => {
            setPlayers(players => [...players, e])
        })

        hub.start()
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h1>
                Participantes:
            </h1>
            {
                players.map((nome) => <Car key={nome} name={nome}/>)
            }
            <button onClick={() => callPlayer(hub, 'Carlos')}>Participar!</button>
        </div>
    )
}

function callPlayer(hub) {
    var name = prompt("Insira o seu nome!");
    if(name != "")
        hub.invoke('Join', name)
}

export default Racegame;