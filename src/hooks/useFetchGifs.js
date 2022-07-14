import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        // getGifs(category).then(newImages => setImages(newImages));//ESTO SE PUEDE HACER PERO LO MAS RECOMENDABLE ES SACAR LA FUNCION AFUERA DEL USEEFFECT
        getImages();
    }, []);

    return {
        images: images,//images y isloading como es lo mismo lo que se envia no es necesario dejar la igualacion 
        isLoading,
    }
}
