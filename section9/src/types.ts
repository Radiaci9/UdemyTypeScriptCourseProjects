export interface Location {
  lat: number;
  lng: number;
}

export interface Mappable {
  location: Location;
  name: string;
  markerContent(): string;
}
