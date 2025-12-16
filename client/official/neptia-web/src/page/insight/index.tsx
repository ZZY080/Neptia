import { Container, Row, Col } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
import animationData from "@assets/lottie/dev.json";
import Lottie from "react-lottie";
const Insight = () => {
  // const { t } = useTranslation();
  //   const insightsData = t('insights', { returnObjects: true });
  return (
    <Container className="min-vh-100 d-flex flex-column bg-white">
      <Row className="flex-grow-1 align-items-center justify-content-center">
        <Col className="p-0 text-center">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={200}
            width={200}
          />
          <div>敬请期待...</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Insight;
