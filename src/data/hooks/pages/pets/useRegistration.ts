import { AxiosError } from 'axios';
import { useState } from 'react';
import { ApiService } from '../../../services/ApiService';

export function useRegistration(){
  const [name, setName] = useState(''),
  [description, setDescription] = useState(''),
  [imageUrl, setImageUrl] = useState(''),
  [info, setInfo] = useState('');


  function registration() {

    if(validateData()) {
      ApiService.post('/pets', {
        name,
        description,
        image_url: imageUrl
      })
        .then(() => {
          clearForm();
          setInfo('Pet cadastrado com sucesso!')
        })
        .catch((error: AxiosError) => {
          setInfo(error.response?.data.message)
        })
    } else {
      setInfo('Preencha todos os campos!');
    }

  }

  function validateData(){
    return name.length > 2 && description.length > 20 && imageUrl.length > 10
  }

  function clearForm(){
    setName('');
    setDescription('');
    setImageUrl('');
  }

  return {
    name,
    description,
    imageUrl,
    setName,
    setDescription,
    setImageUrl,
    registration,
    info,
    setInfo
  }
}