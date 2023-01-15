import FaStar from 'react-icons/lib/fa/star';
export default function StarRating({ rating }) {
    return (
        <div className="star-rating">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
            <label>
                <input type="radio" name="rating" value={ratingValue} />
                <FaStar
                className="star"
                color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                />
            </label>
            );
        })}
        </div>
    );
}