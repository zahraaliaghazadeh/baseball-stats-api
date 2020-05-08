import React from 'react'
import "./style.css"

export default function Row(props){

    const hits = props.player.singles + props.player.doubles + props.player.triples+ props.player.home_runs;
    const average = hits/props.player.at_bats
    return (
        <tr>
            <td>{props.player.name}</td>
            <td>{props.player.team}</td>
            <td>{props.player.at_bats}</td>
            <td>{props.player.singles + props.player.doubles + props.player.triples+ props.player.home_runs}</td>
            <td>{hits}</td>
            <td>{hits}</td>
            <td>{hits}</td>


        </tr>
    )
}