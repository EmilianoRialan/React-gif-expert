import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";

export const GifGrid = ({ category }) => {
    // const [counter, setCounter] = useState(10);
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GiftItem key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
            {/* <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>+1</button> */}
        </>
    )
}
