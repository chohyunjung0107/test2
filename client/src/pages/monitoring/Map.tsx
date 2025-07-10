import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const MapMonitoring = () => {
  const [box, setBox] = useState({ name: '', address: '' });
  const [boxList, setBoxList] = useState<any[]>([]);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // 기본 스크롤 막기
    const zoomAmount = 0.1;
    const newScale = e.deltaY < 0 ? scale + zoomAmount : scale - zoomAmount;

    // 최소/최대 줌 제한
    if (newScale >= 1 && newScale <= 2) {
      setScale(newScale);
    }
  };

  const handleRotate = () => {
    console.log(rotation);
    setRotation((prev) => (prev + 90) % 360);
  };

  const { name, address } = box;

  const handleBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBox({ ...box, [name]: value });
  };

  const handleAddBox = () => {
    console.log('name/address', name, address);
    setBox({ name: '', address: '' });
    setBoxList([
      ...boxList,
      {
        id: Date.now(),
        name,
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      },
    ]);
  };

  const handleBoxChange = (id: number, data: any) => {
    setBoxList((prev) =>
      prev.map((box) =>
        box.id === id
          ? {
              ...box,
              ...data,
            }
          : box,
      ),
    );
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="영역명"
        value={name}
        onChange={handleBoxOnChange}
      />
      <input
        name="address"
        type="text"
        placeholder="주소"
        value={address}
        onChange={handleBoxOnChange}
      />
      <button onClick={handleAddBox}>add</button>
      <hr />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://tracetaghub.io/img/AssetMap_skai.24899f88.png"
          alt="exmap"
          style={{
            width: rotation === 90 || rotation === 270 ? '500px' : '100%',
            height: rotation === 90 || rotation === 270 ? '100%' : '500px',
            transition: 'transform 0.3s ease',
            transform: `rotate(${rotation}deg) scale(${scale})`,
            transformOrigin: 'center center',
          }}
          onWheel={handleWheel}
          onClick={handleRotate}
        />
        {boxList.map((box) => (
          <Rnd
            key={box.id}
            size={{
              width: box.width,
              height: box.height,
            }}
            position={{ x: box.x, y: box.y }}
            onDragStop={(e, d) => handleBoxChange(box.id, { x: d.x, y: d.y })}
            onResizeStop={(e, direction, ref, delta, position) => {
              handleBoxChange(box.id, {
                width: parseInt(ref.style.width),
                height: parseInt(ref.style.height),
                ...position,
              });
            }}
            bounds="parent"
            style={{
              border: '1px dotted #fff',
              background: '#333',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.7,
            }}
          >
            <span style={{ overflow: 'hidden' }}>{box.name}</span>
          </Rnd>
        ))}
      </div>
    </div>
  );
};

export default MapMonitoring;
