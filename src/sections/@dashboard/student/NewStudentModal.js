import { useState } from 'react';
import { Modal, FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledForm = styled('form')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  borderRadius: '4px',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  display: 'block',
  width: '100%',
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  width: '100%',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const CITIES = {
  'sp': ['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'],
  'rj': ['Angra dos Reis', 'Niterói', 'Itaboraí'],
  'mg': ['Belo Horizonte', 'Monte Azul', 'Muzambinho'],
};

export default function NewStudentModal ({ open, onClose, onCreateNewStudent }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('geography');
  const [state, setState] = useState('sp');
  const [city, setCity] = useState('Mogi das Cruzes');

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleStateChange = (event) => {
    const { value } = event.target
    setState(value);
    const [firstCity] = CITIES[value];
    setCity(firstCity)
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateNewStudent?.({ name, course, state, city });
    setName('');
    setCourse('geography');
    setState('sp');
    setCity('Mogi das Cruzes');
    onClose();
  };

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="student-modal"
      aria-describedby="modal-to-add-student"
    >
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormControl>
          <StyledTextField
            id="name"
            value={name}
            onChange={handleNameChange}
            label="Nome"
          />
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel htmlFor="course-label">Curso</InputLabel>
          <StyledSelect
            labelId="course-label"
            id="course-select"
            value={course}
            onChange={handleCourseChange}
            label="Curso"
          >
            <MenuItem value="math">Matemática</MenuItem>
            <MenuItem value="letters">Letras</MenuItem>
            <MenuItem value="geography">Geografia</MenuItem>
          </StyledSelect>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel htmlFor="state-label">Estado</InputLabel>
          <StyledSelect
            labelId="state-label"
            id="state-select"
            value={state}
            onChange={handleStateChange}
          >
            <MenuItem value="sp">São Paulo</MenuItem>
            <MenuItem value="rj">Rio de Janeiro</MenuItem>
            <MenuItem value="mg">Minas Gerais</MenuItem>
          </StyledSelect>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel htmlFor="city-label">Cidade</InputLabel>
          <StyledSelect
            labelId="city-label"
            id="city-select"
            value={city}
            onChange={handleCityChange}
            disabled={state.length <= 0}
          >
            {CITIES[state].map((city, index) => (
              <MenuItem key={`${city + index}`} value={city}>{city}</MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledButton variant="outlined" onClick={onClose}>
            Voltar
          </StyledButton>
          <StyledButton variant="contained" type="submit">
            Gravar
          </StyledButton>
        </div>
      </StyledForm>
    </StyledModal>
  );
};
