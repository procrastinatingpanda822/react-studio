// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div class="image-gallery">
            <h2>{props.item.name}</h2>
            <img
                class="responsive"
                style={{ display: "block" }}
                src={props.item.image}
            />
            <button
                class="button2"
                onClick={() => props.updateCart(props.item)}
            >
                Add to Cart
            </button>
        </div>
    );
}
