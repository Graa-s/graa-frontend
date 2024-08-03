import axios from 'axios';

async function useFetchCollections(owner: string) {
  try {
    const response = await axios.post('', { owner });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default useFetchCollections;
