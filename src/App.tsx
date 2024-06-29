import './App.css'

function App() {

  interface IShopItem {
    brand: string;
    title: string;
    description: string;
    descriptionFull: string;
    price: number;
    currency: string;
  }

  interface IShopItemFuncProps {
    item: IShopItem;
  }

  const ShopItemFunc: React.FC<IShopItemFuncProps> = ({ item }) => {
    return (
      <div className="main-content">
        <h2 className="brand">{item.brand}</h2>
        <h1 className="title">{item.title}</h1>
        <h3 className="descr-short">{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{`${item.currency}${item.price.toFixed(2)}`}</div>
          <button className="button">Добавить в корзину</button>
        </div>

      </div>
    )

  }

  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399.00,
    currency: '£'
  };

  return (
    <>
    <ShopItemFunc item={item}/>
    </>
  )
}

export default App
