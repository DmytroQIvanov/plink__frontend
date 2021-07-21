import { IItem } from './../../../Interfaces/IItem';
import { hostAddress } from './../../../config';
import axios from "axios";


export function requestGetGoods():Promise<IItem[]> {
  return axios.request({
    method: "GET",
    url: `${hostAddress}/goods`
  }).then(elem=>elem.data);
}
