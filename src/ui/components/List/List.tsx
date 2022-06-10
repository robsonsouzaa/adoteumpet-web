import { Button } from '@mui/material';

import { 
    ListStyled, 
    ItemList, 
    ImageStyled,
    Information,
    Name,
    Description
 } from "./List.style";
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/TextService';

 interface ListProps {
   pets: Pet[];
   onSelect: (pet: Pet) => void;
 }

 export default function List(props: ListProps) {
   const maxSizeText = 200;

   return (
      <ListStyled>
        {props.pets.map(pet => (
          <ItemList key={ pet.id }>
          <ImageStyled src={ pet.image_url } alt={ pet.name }/>
            <Information>
              <Name>{ pet.name }</Name>
                <Description>
                  { TextService.limitText(pet.description, maxSizeText) }
                </Description>
                <Button
                  variant={'contained'}
                  fullWidth
                  onClick={() => props.onSelect(pet)}
                >
                  Adotar { pet.name }
                </Button>
            </Information>
        </ItemList>
        ))}
        
      </ListStyled>
   );
 }