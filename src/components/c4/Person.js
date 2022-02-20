import React, { useRef, useState } from 'react';
import { Group, Transformer, Rect, Circle, Text } from 'react-konva';

const PersonD = ({ shapeProps, isSelected, onSelect, onChange }) => {

  const shapeRef = useRef();
  const trRef = useRef();
  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Group
        draggable
        /* onDblTap={onSelect} */
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
          
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
            radius: Math.max(node.height() / 3 * scaleY),
          });
          console.log("e target",e.target)
        }}
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
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

const PersonE = () => {
  return (
    <React.Fragment>
      <Group
        x={25}
        y={13}
      >
        <Circle
          x={120/2}
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

export{
  PersonD,
  PersonE,
}