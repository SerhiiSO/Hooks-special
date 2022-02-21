import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Img = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
`;

export const Modal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const onClose = () => {
    navigate(location.state.from);
  };
  return (
    <div>
      <button type="button" onClick={onClose}>
        close
      </button>
      <Img src={location?.state?.largeImageURL} alt="" width="500" />
    </div>
  );
};
