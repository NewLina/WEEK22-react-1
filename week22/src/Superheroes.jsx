function HeroCard(props) {
    return (
<div className="superhero">
        <div className="superhero__name">{props.name}</div>
        <div className="superhero__universe"><span>Вселенная:</span> {props.universe}</div>
        <div className="superhero__alterego"><span>Альтер-эго:</span> {props.alterego}</div>
        <div className="superhero__occupation"><span>Род деятельности:</span> {props.occupation}</div>
        <div className="superhero__friends"><span>Друзья:</span> {props.friends}</div>
        <div className="superhero__superpowers"><span>Суперсилы:</span> {props.superpowers}</div>
        <div className="superhero__info"><span>Описание:</span> {props.info}</div>
        <div className="superhero__picture"><img className="hero-image" src={props.url} alt="superheroImage" /></div>
        </div>
    );
}
export default HeroCard;