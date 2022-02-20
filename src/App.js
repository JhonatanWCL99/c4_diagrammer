import React from 'react';
import { Toolbar } from './components/Toolbar';
import { Toolbar2 } from './components/Toolbar2';
import { Stage, Layer } from 'react-konva';


function checkDeselect(e) {
  const clickedOnEmpty = e.target === e.target.getStage();
  if (clickedOnEmpty) {
  }
};


function App() {

  const [persons, setPersons] = React.useState([]);
  const [personsDeleteCount, setPersonsDeleteCount] = React.useState(0);
  const layerRef = React.useRef();
  const StageRef = React.useRef();

  return (
    <React.Fragment>
      <div className='App'>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={event => checkDeselect(event)}
          onTouchStart={event => checkDeselect(event)}
          ref={StageRef}
        >
          <Layer
            ref={layerRef}
          >
            <Toolbar2
              personName={
                persons.length + 1 + personsDeleteCount
              }
              appendToPersons={stuff => {
                var layer = layerRef.current
                var toPush = stuff;

                var transform = layerRef.current
                  .getAbsoluteTransform()
                  .copy();
                transform.invert();

                var pos = transform.point({
                  x: toPush.x,
                  y: toPush.y
                });

                if (layer.attrs.x !== null || layer.attrs.x !== undefined) {
                  toPush.x = pos.x;
                  toPush.y = pos.y;
                }
                setPersons([...persons,toPush])
                console.log(persons)
              }}
            ></Toolbar2>
          </Layer>
        </Stage>
      </div>
    </React.Fragment>
  );
}

export default App;
