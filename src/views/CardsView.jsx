import ShopCard from "../components/ShopCard";

export default function CardsView({cards}) {
  const render = cards.map(card => <ShopCard item={card.value} key={card.id} />)
  return (
    <div className="view-cards">{render}</div>
  )
}
