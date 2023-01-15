// Stworzyć komponent "Photo" odpowiedzialny za wyświetlanie pojedynczego zdjęcia, w którym będzie zawarty:
//     system gwiazdkowy do oceniania zdjęcia
// średnia ocena zdjęcia
// link do szczegółów zdjęcia
// przyciski < > do przeglądania poprzedniego/następnego zdjęcia
export default function Photo( { photo } ) {
    return (
        <div className="photo">
            <img src={photo.urls.regular} alt={photo.alt_description} />
            <div className="photo__info">
                <div>
                    <h4 className="photo__title">{photo.user.name}</h4>
                    <p className="photo__subtitle">
