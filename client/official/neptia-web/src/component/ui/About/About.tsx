import "@component/ui/About/About.css";
import volumnClose from "@assets/volume-close.png";
import volumnUp from "@assets/volumn-up.png";
import zengzhiyuan from "@assets/zengzhiyuan.jpg";
import advertise from "@assets/advertise.mp4";
import { memo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
const About = memo(() => {
  // const navigate = useNavigate();
  // 企业价值观
  const [valueList] = useState([
    {
      id: "1",
      title: "1.Neptia 不是代购，而是全球生活方式的策划师。",
      desc: "我们走得更远，只为找到那些与你生活方式真正契合的好物，不跟风、不凑热闹，只做你真正会喜欢、会复购的选择。",
    },
    {
      id: "2",
      title: "2.Neptia，灵感来自 Neptune（海王星）+ Utopia（乌托邦）",
      desc: "代表一种遥远却贴近的理想生活——无论东京、悉尼、首尔、新加坡还是曼谷，我们精选全球好物，让它们成为你生活的一部分。",
    },
    {
      id: "3",
      title: "3.选得好，比买得多更重要",
      desc: "我们亲选、亲试、亲测每一款商品，深入全球本地：与药房、实验室、母婴店、主妇市场一线接触。不只带回商品，更带回它在当地真实被使用的生活方式。",
    },
    {
      id: "4",
      title: "4.生活，是可以被策划的",
      desc: "你不需要花时间找遍全球，我们替你一步到位策划好。从产品、内容、搭配到使用建议，Neptia 是你生活的全球选物管家。好物不只是好用，而是刚刚好地属于你。",
    },
  ]);
  // 岗位介绍
  const [jobList] = useState([
    { id: 1, pic: "/src/assets/research.png", name: "研发" },
    { id: 2, pic: "/src/assets/product.png", name: "产品" },
    { id: 3, pic: "/src/assets/operation.png", name: "运营" },
    { id: 4, pic: "/src/assets/design.png", name: "设计" },
    { id: 5, pic: "/src/assets/market.png", name: "市场" },
    { id: 6, pic: "/src/assets/sale.png", name: "销售" },
    { id: 7, pic: "/src/assets/support.png", name: "职能支持" },
  ]);
  const [contactList] = useState([
    {
      id: "1",
      name: "小红书",
      appIcon:
        "https://img1.baidu.com/it/u=817800442,1945529257&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      appUrl:
        "https://www.xiaohongshu.com/user/profile/601e81b40000000001003636",
    },
    {
      id: "2",
      name: "抖音",
      appIcon:
        "https://img0.baidu.com/it/u=2095760488,468503885&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      appUrl: "https://www.douyin.com/user/self",
    },
    {
      id: "3",
      name: "微信",
      appIcon:
        "https://mass.alipay.com/openpt_developer/afts/file/A*ODOCS7Y4HRgAAAAAAAAAAAAAerF1AQ",
      appUrl: "",
    },
    {
      id: "4",
      name: "电话",
      appIcon:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/upkhzhreh7lsuhf/hire-fe/protal-midas-materials/BDProductService/assets/page1_icon4_5.png",
      appUrl: "",
    },
  ]);
  // 产品介绍
  const [appList] = useState([
    {
      id: "1",
      name: "邻聚里",
      appIcon:
        "https://mass.alipay.com/openpt_developer/afts/file/A*68pAR4EALnMAAAAAAAAAAAAAerF1AQ",
      appUrl: "",
    },
    {
      id: "2",
      name: "全球购物",
      appIcon:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/upkhzhreh7lsuhf/hire-fe/protal-midas-materials/BDProductService/assets/page1_icon4_3.png",
      appUrl: "",
    },
    {
      id: "3",
      name: "租房么",
      appIcon:
        "https://mass.alipay.com/openpt_developer/afts/file/A*ODOCS7Y4HRgAAAAAAAAAAAAAerF1AQ",
      appUrl: "",
    },
    {
      id: "4",
      name: "趣聚社",
      appIcon:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/upkhzhreh7lsuhf/hire-fe/protal-midas-materials/BDProductService/assets/page1_icon4_5.png",
      appUrl: "",
    },
  ]);

  // 是否静音
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const handleIsMuted = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div className="about-us-container">
        <div className="about-us-content">
          {/* 企业核心价值观  */}
          <Container className="px-4 mt-1">
            <Row className="mt-0  px-0">
              <Col
                className="text-center fs-2 fw-bold"
                sm={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
              >
                为什么选择 Neptia？
              </Col>
            </Row>
            {/* 视频 */}
            <Row className="p-0 mt-5">
              {valueList.map((item) => {
                return (
                  <Col sm={12} md={6} lg={6} xl={4} xxl={3} key={item.id}>
                    <div
                      className="d-flex flex-column align-items-left mb-5 py-3 px-3"
                      style={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "#6ADBD4",
                        borderRadius: "5px",
                      }}
                    >
                      <div className="text-left fs-5 fw-bold">{item.title}</div>
                      <div className="mt-2">{item.desc}</div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
          {/* 企业文化  */}
          <Container className="px-4">
            {/* 视频 */}
            <Row className="p-0 mt-0  d-flex flex-column align-items-center">
              <Col
                className="p-0 m-0 position-relative"
                sm={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
              >
                <video
                  src={advertise}
                  autoPlay={true}
                  controls
                  muted={isMuted}
                  loop={true}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                ></video>
                {/* 控制是否静音的图标 */}
                <div className="volume" onClick={() => handleIsMuted()}>
                  <img src={isMuted ? volumnClose : volumnUp} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
          {/* 职位介绍 */}
          <Container className="mt-4">
            {/* 标题 */}
            <Row>
              <Col className="text-center fs-2 text-dark fw-bold">
                加入Neptia 共创未来
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="lh-small lh-base lh-lg">
                Neptia
                不仅是一家公司，更是一个充满激情和创造力的社区。我们欢迎全球优秀的人才加入我们，共同探索科技的无限可能。无论你是技术专家、行业领袖，还是怀揣梦想的年轻人，Neptia
                都将为你提供广阔的发展平台。
              </Col>
            </Row>
            <Row className="mt-5">
              {jobList.map((item) => {
                return (
                  <Col
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={2}
                    className="d-flex flex-column align-items-center mb-4"
                    key={item.id}
                  >
                    <img
                      src={item.pic}
                      style={{ width: "100%" }}
                      alt={item.name}
                      title={item.name}
                    />
                    <div className="fs-5 mt-3">{item.name}</div>
                  </Col>
                );
              })}
            </Row>
          </Container>
          {/* 成员介绍 */}
          <Container className="mt-4">
            {/* 标题 */}
            <Row>
              <Col className="text-center fs-2 text-dark fw-bold">
                Neptia团队介绍
              </Col>
            </Row>
            {/*  */}
            <Row className="mt-5">
              {[1, 2, 3, 4].map((item) => {
                return (
                  <Col
                    className="mb-5"
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={4}
                    key={item}
                  >
                    <div className="d-flex flex-row">
                      <img
                        src={zengzhiyuan}
                        alt=""
                        className="me-3 "
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          backgroundColor: "#428dd7",
                        }}
                      />
                      <div
                        className="d-flex flex-column align-items-start flex-wrap"
                        style={{
                          flex: "1",
                        }}
                      >
                        <div className="text-left fw-bold">Kenny 曾志远</div>
                        <div
                          className="mt-1 text-left fs-9"
                          style={{
                            fontSize: "10px",
                            color: "#fff",
                            padding: "5px 10px 5px 10px",
                            backgroundColor: "#6ADBD4",
                            borderRadius: "5px",
                          }}
                        >
                          Neptia创始人兼CEO
                        </div>
                        <div
                          className="mt-2"
                          style={{
                            width: "100%",
                            height: "0.8px",
                            backgroundColor: "#6ADBD4",
                          }}
                        ></div>
                        <div
                          className="mt-2  text-left"
                          style={{
                            width: "100%",
                            fontSize: "0.6rem",
                            color: "black",
                          }}
                        >
                          在全球著名战略公司担任项目经理多说的就是卡的
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
          {/* 产品介绍 */}
          <Container className="mt-4">
            {/* 标题 */}
            <Row>
              <Col className="text-center fs-2 text-dark fw-bold">产品介绍</Col>
            </Row>
            <Row className="mt-5">
              {appList.map((item) => {
                return (
                  <Col
                    className="mb-5"
                    xs={6}
                    sm={4}
                    md={3}
                    lg={3}
                    xl={2}
                    key={item.id}
                  >
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img
                        className="mb-2"
                        src={item.appIcon}
                        style={{ width: "88px", height: "88px" }}
                        alt=""
                      />
                      <div className="text-center fs-6 text-dark fw-bold">
                        {item.name}
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
          {/* 产品介绍 */}
          <Container className="mt-4">
            {/* 标题 */}
            <Row>
              <Col className="text-center fs-2 text-dark fw-bold">联系方式</Col>
            </Row>
            <Row className="mt-5">
              {contactList.map((item) => {
                return (
                  <Col
                    className="mb-5"
                    xs={6}
                    sm={4}
                    md={3}
                    lg={3}
                    xl={2}
                    key={item.id}
                  >
                    <div
                      onClick={() => (window.location.href = item.appUrl)}
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <img
                        className="mb-2"
                        src={item.appIcon}
                        style={{ width: "88px", height: "88px" }}
                        alt=""
                      />
                      <div className="text-center fs-6 text-dark fw-bold">
                        {item.name}
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
});

export default About;
