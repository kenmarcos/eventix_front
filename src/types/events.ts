export interface Event {
  _id: string;
  title: string;
  date: Date;
  description: string;
  banner: string;
  flyers: string[];
  coupons: string[];
  participants: string[];
  price: Array<{ sector: string; amount: string }>;
  city: string;
  categories: string[];
  formattedAddress: string;
  createdAt: Date;
  location: {
    latitude: string;
    longitude: string;
  };
}
