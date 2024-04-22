import { Button, Dropdown } from "antd";
import { Wrapper, Middle, Right, Left } from "./style";
import "./style.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  RightCircleOutlined,
  ChromeOutlined,
} from "@ant-design/icons";

const App = () => {
  const onMenuClick = (e) => {
    console.log("click", e);
  };
  const items = [
    {
      key: "1",
      label: "1st item",
    },
    {
      key: "2",
      label: "2nd item",
    },
    {
      key: "3",
      label: "3rd item",
    },
    (this.state = {
      selec: null,
    }),
  ];
  const onLeft = () => {
    console.log("hello");
  };
  return (
    <div>
      <Wrapper>
        <Wrapper.Left>
          <img src="Group (9).png" alt="" />
        </Wrapper.Left>
        <Wrapper.Middle>
          <Wrapper.Middle.Item>Home</Wrapper.Middle.Item>
          <Wrapper.Middle.Item>Shop</Wrapper.Middle.Item>
          <Wrapper.Middle.Item>Plant Care</Wrapper.Middle.Item>
          <Wrapper.Middle.Item>Blogs</Wrapper.Middle.Item>
        </Wrapper.Middle>
        <Wrapper.Right>
          <SearchOutlined className="icon" />
          <ShoppingCartOutlined className="icon" />
          <Dropdown.Button
            menu={{
              items,
              onClick: onMenuClick,
            }}
            icon={<RightCircleOutlined />}
            type="primary"
            className="color"
          >
            Login
          </Dropdown.Button>
        </Wrapper.Right>
      </Wrapper>

      <Middle>
        <Middle.Left>
          <Middle.Left.P>Welcome to GreenShop</Middle.Left.P>
          <Middle.Left.Heder1>Let's Make a Better Planet</Middle.Left.Heder1>
          <Middle.Left.P>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </Middle.Left.P>
        </Middle.Left>
        <Middle.Right>
          <img className="small_flower" src="01 2.png" alt="" />
          <img className="big_flower" src="01 1.png" alt="" />
        </Middle.Right>
        <ChromeOutlined
          onClick={() => {
            onLeft();
          }}
          className="icon_button left"
        />
        <ChromeOutlined className="icon_button middle" />
        <ChromeOutlined className="icon_button right" />
      </Middle>
      <Left className="left_div">left</Left>
      <Right>right</Right>
    </div>
  );
};

export default App;
