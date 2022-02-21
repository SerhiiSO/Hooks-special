import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { Nav } from 'components/Navigation/Nav';
import { Pic } from 'pages/PicturesPage';
import { Modal } from 'pages/ModalPage';
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index path="home" element={<HomePage />} />
        <Route path="pictures" element={<Pic />}>
          <Route path=":id" element={<Modal />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
