import { useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  return (props) => (
    <Component {...props} params={useParams} navigate={useNavigate} />
  );
};

export default withRouter;
