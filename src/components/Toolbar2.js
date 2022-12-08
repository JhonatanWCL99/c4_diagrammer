import React from "react";
import { Rect } from "react-konva";
import { PersonE2, PersonD2 } from "./c4/Person2"

    function Toolbox() {
        return (
            <React.Fragment>
                <Rect
                    x={10}
                    y={10}
                    width={150}
                    height={640}
                    fill="white"
                    shadowBlur={5}
                    shadowColor="black"
                />
            </React.Fragment>
        )
    }

export class Toolbar2 extends React.Component {

    addPerson = (toSend) => {
        this.setState({
            personProps: toSend
        })
        this.props.appendToPersons(toSend)
        console.log(toSend)
    }

    state = {
        personProps: {
            x: 25,
            y: 13,
            width: 120,
            height: 70,
            radius: 24,
            fill: '#083f75',
            id: 'persona1',
            /* ref: name, */
            descripcion: 'Descripcion de Person',
            nombre: 'Person Name',
            tipo: '[Person]',
        },
        arrowDraggable: false,
        previousShape: undefined,
        count: 0,
        isDragging: false

    }



    render() {
        return <React.Fragment>
            <Toolbox />
            <PersonD2
                dragrable={true}
                shapeProps={this.state.personProps}
                personName={this.props.personName}
                addPerson={this.addPerson}
            />
        </React.Fragment>
    }
}