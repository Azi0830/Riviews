import { Button, Carousel } from "antd";
import { Wrapper, Middle } from "./style";
import "./style.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

const App = () => {
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
          <Button
            icon={<RightCircleOutlined />}
            type="primary"
            className="button_color"
          >
            Login
          </Button>
        </Wrapper.Right>
      </Wrapper>
      <Carousel>
        <div>
          <Middle>
            <Middle.Left>
              <div className="text">
                <Middle.Left.P className="p_text">
                  Welcome to GreenShop
                </Middle.Left.P>
                <Middle.Left.Heder1>
                  Let's Make a Better <span className="planet">Planet</span>
                </Middle.Left.Heder1>
                <Middle.Left.P>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </Middle.Left.P>

                <Button type="primary" className="button_color button">
                  SHOP NOW
                </Button>
              </div>
            </Middle.Left>
            <Middle.Right>
              <img className="small_flower" src="01 2.png" alt="" />
              <img className="big_flower" src="01 1.png" alt="" />
            </Middle.Right>
          </Middle>
        </div>
        <div>
          <Middle>
            <Middle.Left>
              <Middle.Left.P>Welcome to GreenShop</Middle.Left.P>
              <Middle.Left.Heder1>
                Let's Make a Better Planet
              </Middle.Left.Heder1>
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
          </Middle>
        </div>
        <div>
          <Middle>
            <Middle.Left>
              <Middle.Left.P>Welcome to GreenShop</Middle.Left.P>
              <Middle.Left.Heder1>
                Let's Make a Better Planet
              </Middle.Left.Heder1>
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
          </Middle>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
