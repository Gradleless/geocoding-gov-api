type Coordinates = [number, number];
type Properties = Record<string, any>;
type Feature = {
    geometry: {
        coordinates: Coordinates;
    };
    properties: Properties;
};

declare class Geocoding {
    private uri: string;

    constructor();
    distance(lat1: number, long1: number, lat2: number, long2: number): string;
    getPos(lat: string, long: string): Promise<{ coordinates: Coordinates, properties: Properties } | undefined>;
    searchPos(search: string, limit?: number, autocomplete?: number, lat?: string, lon?: string, type?: string, postcode?: string, citycode?: string): Promise<{ list: Feature[] } | { coordinates: Coordinates, properties: Properties } | undefined>;
}