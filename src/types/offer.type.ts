import { User } from './user.type.js';
import { OfferCity } from './offer-city.enum.js';
import { OfferGoods } from './offer-goods.enum.js';
import { OfferTypeHouse } from './offer-type-house.enum.js';
import { Location } from './location.type.js';

export type Offer = {
  title: string;
  description: string;
  data: string;
  city: OfferCity;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  rating: number;
  houseType: OfferTypeHouse;
  roomsCount: number;
  adultsCount: number;
  price: number;
  goods: OfferGoods[];
  author: User;
  commentsCount: number;
  location: Location;
}
