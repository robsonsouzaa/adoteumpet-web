import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  
  const [listPets, setListPets] = useState<Pet[]>([]),
  [selectedPet, setSelectedPet] = useState<Pet | null>(null),
  [email, setEmail] = useState(''),
  [ammount, setAmmount] = useState(''),
  [info, setInfo]= useState('');

  useEffect(() => {
    ApiService.get('/pets')
      .then((response) => {
        setListPets(response.data);
      })
  }, []);

  useEffect(() => {
    if (selectedPet === null) {
      clearForm();
    }
  }, [selectedPet]);

  function adotar(){
    if(selectedPet != null) {
      if(validateAdoptionData()) {
        ApiService.post('/adocoes', {
          pet_id: selectedPet.id,
          email,
          ammount
        })
          .then(() => {
            setSelectedPet(null);
            setInfo('Pet adotado com sucesso!');
          })
          .catch((error: AxiosError) => {
            setInfo(error.response?.data.message);
          })
      } else {
        setInfo('Preencha todos os campos corretamente')
      }
    } 
  }

  function validateAdoptionData() {
    return email.length > 0 && ammount.length > 0;
  }

  function clearForm() {
    setEmail('');
    setAmmount('');
  }

  return {
    listPets,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    ammount,
    setAmmount,
    info,
    setInfo,
    adotar
  };
}