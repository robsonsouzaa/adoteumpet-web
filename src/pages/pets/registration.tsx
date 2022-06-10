import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material';
import { NextPage } from 'next';
import { useRegistration } from '../../data/hooks/pages/pets/useRegistration';
import Title from '../../ui/components/Title/Title';

const Registration: NextPage = () => {
  const {
    name,
    description,
    imageUrl,
    setName,
    setDescription,
    setImageUrl,
    registration,
    info,
    setInfo
  } = useRegistration();

  return(
    <>
      <Title
        title={'Cadastro de Pets para adoção'}
        subtitle={'Preencha os dados do novo Pet'}
      />

      <Paper sx={{ maxWidth: 970, mx: 'auto', p:5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label={'Nome'}
                placeholder={'Digite o nome do pet'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label={'História do Pet'}
                multiline
                fullWidth
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                label={'Foto'}
                placeholder={'Digite o endereço da imagem'}
                fullWidth
              />
              <Button
                variant={'contained'}
                color={'secondary'}
                sx={{mt: 2}}
                component={'a'}
                href={'https://imgur.com/upload'}
                target={'_blank'}
              >
                Enviar Imagem
              </Button>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'center'}}>
              <Button
                onClick={registration}
                variant={'contained'}
                fullWidth
                sx={{ maxWidth: { md: 200 }, mt: 4}}
              >
                Cadastrar Pet
              </Button>
            </Grid>
          </Grid>
      </Paper>

      <Snackbar
        open={info.length > 0}
        autoHideDuration={2500}
        onClose={() => setInfo('')}
        message={info}
      />

    </>
  )
}

export default Registration;