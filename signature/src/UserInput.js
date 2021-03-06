import React, { useState, useEffect, useRef } from 'react'
import { Button, Input } from 'semantic-ui-react'
import img from './사인칸.PNG'
import "./App.css"
const UserInput = (props) => {
  const [ctx, setCtx] = useState(null)
  const [isDrawing, setIsDrawing] = useState(false);
  const [image, setImage] = useState();
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "rgba(255, 255, 255, 1)";
    context.fillRect(0, 0, 300, 150);

    const i = new Image();
    i.onload = () => {
      context.drawImage(i, 0, 0)
    }
    i.src = img

    setCtx(context)
  }, [])

  const onChange = (e) => {
    const { value, name } = e.target
    props.setInputs({
      ...props.inputs,
      [name]: value
    })

  }

  const clearCanvas = () => {
    const c = canvasRef.current.getContext("2d");
    c.fillRect(0, 0, 300, 150);
    c.lineWidth = 2;
    c.strokeStyle = "black";
    c.fillStyle = "rgba(255, 255, 255, 1)";
    const i = new Image();
    i.onload = () => {
      c.drawImage(i, 0, 0)
    }
    i.src = img
    setCtx(c)
  }

  const startDraw = (event) => {
    event.persist();
    setIsDrawing(true);
  }

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();

      }
    }

  }

  const stopDraw = () => {
    setIsDrawing(false);
    setImage(canvasRef.current.toDataURL())
    props.setInputs({
      ...props.inputs,
      sign: image
    })
  }
  return (
    <div className="userInput">
      <div className="input-box input-once">
        <p>몇월 교육 지원금 인가요?</p>
        <p style={{ color: 'grey' }}>*틀리는 분이 많습니다 ex) 10월 1일 서명 => 9월이 맞습니다</p>
        <Input size='mini' name="attendMonth" onChange={onChange} placeholder="달" defaultValue={props.inputs.attendMonth} /> <br />
      </div>
      <div className="input-box  input-once">
        <p>이름</p>
        <Input size='mini' name="name" onChange={onChange} placeholder="이름" /> <br />
      </div>
      <div className="input-box">
        <p>지역 / 반(숫자만)</p>
        <div className="input-flex">
          <Input size='mini' name="location" onChange={onChange} placeholder="지역" />


          <span>/</span>

          <Input size='mini' name="classNum" onChange={onChange} placeholder="반" className="second-input" />
        </div>
      </div>
      <div className="input-box">
        <p>총 출석일 / 총 수업일</p>
        <div className="input-flex">
          <Input size='mini' name="attendDays" onChange={onChange} placeholder="총 출석일" />
          <span>/</span>
          <Input size='mini' name="totalDays" onChange={onChange} placeholder="총 수업일" className="second-input" defaultValue={props.inputs.totalDays} />
        </div>
      </div>


      <div className="input-box">
        <p>제출일 (월 / 일)</p>
        <p style={{ color: 'grey' }}>*보통 제출 마감일 적어주시면 됩니다</p>
        <div className="input-flex">
          <Input size='mini' name="month" onChange={onChange} placeholder="몇월" defaultValue={props.inputs.month} />
          <span>/</span>
          <Input size='mini' name="date" onChange={onChange} placeholder="몇일" defaultValue={props.inputs.date} className="second-input" />
        </div>
      </div>
      <div className="input-box">
        <p>서명</p>
        <div className="sign-div">
          <canvas
            id="signCanvas"
            ref={canvasRef}
            style={{ border: '3px solid black' }}
            width={166}
            height={90}
            onMouseDown={startDraw}
            onMouseUp={stopDraw}
            onMouseMove={drawing}
            onMouseLeave={stopDraw}
          ></canvas>
          <Button onClick={clearCanvas}>다시 그리기</Button>
        </div>
      </div>


    </div>
  )
}

export default UserInput
