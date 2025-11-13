import EtsyItemType from '../../types/etsy-item.type.ts';
import EtsyItemProp from "../../props/etsy-item-prop.type.ts";
import {detectLevel, detectPrice, detectTitle} from "../../shared/helpers.ts";

import './etsy-item.css';

const EtsyItem = (props: EtsyItemProp): JSX.Element | undefined => {
  const item: EtsyItemType = props.item;

  if (!item) {
    return;
  }

  const level: string = detectLevel(item.quantity);
  const title: string = detectTitle(item.title || '');
  const priceString: string = detectPrice(item.price, item.currency_code);

  return (
    <div className='etsy-item'>
      <div className='etsy-item-image'>
        <a href={item.url}>
          <img
            src={!item.MainImage ? '' : item.MainImage.url_570xN}
            alt={item.listing_id.toString()}
          />
        </a>
      </div>
      <div className='etsy-item-details'>
        <p className='etsy-item-title'>{title}</p>
        <p className='etsy-item-price'>{priceString}</p>
        <p className={'etsy-item-quantity' + ' ' + level}>
          {item.quantity ?? item.quantity} left
        </p>
      </div>
    </div>
  );
};

export default EtsyItem;
