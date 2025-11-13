import EtsyListProp from "../../props/etsy-list-prop.type.ts";
import EtsyItemType from "../../types/etsy-item.type.ts";
import EtsyItem from "../item/etsy-item.tsx";

import './etsy-list.css';

const EtsyList = (props: EtsyListProp<EtsyItemType>): JSX.Element => {

  const items: Array<EtsyItemType> | [] = props.items

  return (
    <div className="etsy-list">{
      items.map((item: EtsyItemType): JSX.Element => (
        <EtsyItem key={item.listing_id} item={item} />
      ))
    }</div>
  )
}

export default EtsyList
