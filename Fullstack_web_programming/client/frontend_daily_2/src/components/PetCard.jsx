import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdoptionForm from './AdoptionForm';

function PetCard({ pet }) {
    const [petDetail, setPetDetail] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card sx={{ width: 345, height: 400, margin: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                component="img"
                height="200"
                image={pet.imagen}
                alt={pet.nombre}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pet.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {pet.descripcion}
                </Typography>
                {petDetail && (
                    <Typography variant="body2" color="text.secondary">
                        Edad: {pet.edad} años
                        <br />
                        Raza: {pet.raza}
                        <br />
                        Descripcion: {pet.desc_fisica}
                        <br />
                        {pet.historia}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setPetDetail(!petDetail)}>
                    {petDetail ? "Ver menos" : "Ver más"}
                </Button>
                <Button size="small" onClick={handleClickOpen}>
                    Adoptar
                </Button>
            </CardActions>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Formulario de Adopción</DialogTitle>
                <DialogContent>
                    <AdoptionForm pet={pet}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

export default PetCard;