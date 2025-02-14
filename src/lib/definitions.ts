export interface Delivery {
  name: string;
  value: number;
}

export interface Results {
  id: number;
  createdAt: Date;
  name: string;
  deliveries: Delivery[];
  okrId: number;
}

export interface OKR {
  id: number;
  name: string;
  createdAt: Date;
  resultKeys: Results[];
}
