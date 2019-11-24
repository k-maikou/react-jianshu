import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`
export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  background: #fff;
  padding-top: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`

export const LoginTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin-left: 20px;
  color: #ea6f5a;
`

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
  border-radius: 4px;
`

export const Button = styled.div`
  width: 220px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #3194d0;
  border-radius: 25px;
  margin: 20px auto;
  text-align: center;
  cursor: pointer;
`