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
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
`;
Middle.Left = styled.div`
  flex: 4;
  padding: 68px 43px;
  .text {
    width: 550px;
    height: 250px;
  }
  .button {
    margin-top: 44px;
  }
  .p_text {
    text-transform: uppercase;
  }
`;
Middle.Right = styled.div`
  flex: 3;
  position: relative;
  .big_flower {
    position: absolute;
    bottom: 0;
  }
  .small_flower {
    position: absolute;
    bottom: 45px;
    left: 30px;
  }
`;
Middle.Left.P = styled.p``;
Middle.Left.Heder1 = styled.h1`
  font-size: 70px;
  font-weight: 900;
  line-height: 70px;
  text-align: left;
  margin: 7px 0;
  text-transform: uppercase;

  .planet {
    color: rgba(70, 163, 88, 1);
  }
`;

export { Wrapper, Middle };
