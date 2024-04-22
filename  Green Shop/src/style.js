import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 78px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(70, 163, 88, 1);

  img {
    cursor: pointer;
  }
`;

Wrapper.Left = styled.div``;
Wrapper.Middle = styled.div`
  display: flex;
  gap: 50px;
`;
Wrapper.Right = styled.div`
  display: flex;
  gap: 30px;
  .color {
    background-color: rgba(70, 163, 88, 1);
  }
  .icon {
    font-size: 20px;
    cursor: pointer;
  }
`;

Wrapper.Middle.Item = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.11px;
  text-align: left;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: rgba(70, 163, 88, 1);
    bottom: -29px;
    right: 0px;
    display: none;
  }
  &:hover::after {
    display: block;
  }
`;

const Middle = styled.div`
  width: 80%;
  height: 450px;
  margin: auto;
  margin-top: 12px;
  display: flex;
  position: relative;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );

  .left {
    position: absolute;
    bottom: 15px;
    left: 48%;
  }
  .middle {
    position: absolute;
    bottom: 15px;
    left: 50%;
  }
  .right {
    position: absolute;
    bottom: 15px;
    left: 52%;
  }
  .right:hover {
    background-color: red;
  }
  .icon_button {
    border-radius: 50%;
    background-color: black;
    font-size: 10px;
    cursor: pointer;
  }
`;
Middle.Left = styled.div`
  flex: 3;
`;
Middle.Right = styled.div`
  flex: 2;
  position: relative;

  .big_flower {
    position: absolute;
    /* background-color: bisque; */
    bottom: 0;
  }
  .small_flower {
    position: absolute;
    bottom: 40px;
    left: 45px;
  }
`;
Middle.Left.P = styled.p``;
Middle.Left.Heder1 = styled.h1``;

const Left = styled.div`
  width: 80%;
  height: 450px;
  margin: auto;
  margin-top: 12px;
  display: flex;
  background-color: red;
  position: relative;
  display: none;

  .left_div {
    display: block;
  }
`;
const Right = styled.div`
  width: 80%;
  height: 450px;
  margin: auto;
  margin-top: 12px;
  display: flex;
  background-color: blue;
  display: none;
`;
export { Wrapper, Middle, Left, Right };
