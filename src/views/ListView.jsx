import ShopItem from "../components/ShopItem";

export default function ListView({items}) {
  const render = items.map(item => <ShopItem item={item.value} key={item.id} />)
  return (
    <div className="view-list">{render}</div>
  )
}
