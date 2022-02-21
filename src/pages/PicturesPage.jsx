import { useState, useEffect } from 'react';
import { Searcher } from 'components/Searcher/Searcher';
import { fetchImages } from 'services/api';
import { PicturesList } from 'components/PicturesList/PicturesList';

export const Pic = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchImages(query);
      setData(response.data.hits);
    })();

    console.log(query);
  }, [query]);

  const onSubmit = value => {
    setQuery(value);
  };

  return (
    <div>
      <Searcher onSubmit={onSubmit} />
      <PicturesList pictures={data} />
    </div>
  );
};
