export interface TImage {
    id:string;
    likes:number;
    alt_description:string;
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
      };
}