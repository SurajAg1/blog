
import { styled, Box} from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Banner = () => {
    
    return (
        <Image>
        </Image>
    )
}

export default Banner;