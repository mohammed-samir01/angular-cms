export interface Products {
  "id": number,
  "title": string,
  "price": number,
  "description": string,
  "category": string,
  "image": string,
  "rating": rating

}

interface rating {
  "rate": number,
  "count": number

}
