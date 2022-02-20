import React, { Fragment } from "react";
import { Rect } from "react-konva";
import { Stage, Layer,Ellipse } from 'react-konva';
import { PersonD, PersonE } from './c4/Person';

const _persons = [
    {
        x: 25,
        y: 13,
        width: 120,
        height: 70,
        radius: 24,
        fill: '#083f75',
        id: 'persona1',
        descripcion: 'Descripcion de Person',
        nombre: 'Person Name',
        tipo: '[Person]',
    },
];


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



export class Toolbar extends React.Component {

    state = {
        persons: _persons,
        selectPerson: null
    }

    checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            this.setState({
                selectPerson: null
            })
        }
    };

    render() {
        return (
            <Fragment>
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={this.checkDeselect}
                    onTouchStart={this.checkDeselect}
                >
                    <Layer>
                        <Toolbox />
                        <PersonE />
                        {this.state.persons.map((rect, i) => {
                            return (
                                <PersonD
                                    key={i}
                                    shapeProps={rect}
                                    isSelected={rect.id === this.state.selectPerson}
                                    onSelect={() => {
                                        this.setState({
                                            selectPerson: rect.id
                                        })
                                    }}
                                    onChange={(newAttrs) => {
                                        const rects = this.state.persons.slice();
                                        rects[i] = newAttrs;
                                        this.setState({
                                            persons: rects
                                        })
                                    }}
                                />
                            );
                        })}
                        
                    </Layer>
                </Stage>
            </Fragment>
        );
    }
}

