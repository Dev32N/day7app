import React, { useState } from 'react';

function ToggleButton() {
  // Khai báo state cho trạng thái của button
  const [isOn, setIsOn] = useState(false);

  // Hàm xử lý sự kiện khi button được nhấn
  const handleToggle = () => {
    setIsOn(!isOn); // Đảo ngược trạng thái isOn
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <p>The button is {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
}

export default ToggleButton;
