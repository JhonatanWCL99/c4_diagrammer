import React, { useRef, useState } from 'react';
import { Group, Transformer, Rect, Circle, Text } from 'react-konva';

const PersonD2 = ({ shapeProps, addPerson,personName }) => {

  const personRef = useRef()

  return (

    <React.Fragment>
      <Group
        draggable={true}

        onDragEnd={event => {
          let name = 'person' + personName
          let toSend = {
            x: event.target.x(),
            y: event.target.y(),
            width: 120,
            height: 70,
            radius: 24,
            fill: '#083f75',
            id: 'persona1',
             ref: name,
            descripcion: 'Descripcion de Person',
            nombre: 'Person Name',
            tipo: '[Person]',
          }
          addPerson(toSend)
          var person = personRef.current
          console.log(person)
          person.position({
            x: 25,
            y: 13
          })

        }}
        ref={personRef}
        x={25}
        y={13}

      >
        <Circle
          x={shapeProps.width / 2}
          y={30}
          radius={shapeProps.radius}
          fill={shapeProps.fill}
        />
        <Rect
          x={0}
          y={50}
          width={shapeProps.width}
          height={shapeProps.height}
          fill={shapeProps.fill}
          cornerRadius={15}
          text="sdfd"
        />
        <Text
          x={5}
          y={62}
          fill='white'
          fontFamily='Calibri'
          fontSize={15}
          width={shapeProps.width - 10}
          text={shapeProps.nombre}
          verticalAlign="middle"
          align='center'
        />

        <Text
          x={5}
          y={82}
          fill='white'
          fontFamily='Calibri'
          fontSize={10}
          width={shapeProps.width - 10}
          text={shapeProps.tipo}
          verticalAlign="middle"
          align='center'
        />
        <Text
          x={5}
          y={100}
          fill='white'
          fontFamily='Calibri'
          fontSize={shapeProps.radius - 15}
          width={shapeProps.width - 10}
          text={shapeProps.descripcion}
          verticalAlign="middle"
          align='center'
        />
      </Group>
    </React.Fragment>
  );
};

const PersonE2 = () => {
  return (
    <React.Fragment>
      <Group
        x={25}
        y={13}
      >
        <Circle
          x={120 / 2}
          y={30}
          radius={24}
          fill='#083f75'
        />
        <Rect
          x={0}
          y={50}
          width={120}
          height={70}
          fill='#083f75'
          cornerRadius={15}
          text="sdfd"
        />
        <Text
          x={5}
          y={62}
          fill='white'
          fontFamily='Calibri'
          fontSize={15}
          width={120 - 10}
          text='Person Name'
          verticalAlign="middle"
          align='center'
        />

        <Text
          x={5}
          y={82}
          fill='white'
          fontFamily='Calibri'
          fontSize={10}
          width={120 - 10}
          text='[Person]'
          verticalAlign="middle"
          align='center'
        />
        <Text
          x={5}
          y={100}
          fill='white'
          fontFamily='Calibri'
          fontSize={24 - 15}
          width={120 - 10}
          text='Descripcion de Person'
          verticalAlign="middle"
          align='center'
        />
      </Group>
    </React.Fragment>
  );
};

export {
  PersonD2,
  PersonE2,
}