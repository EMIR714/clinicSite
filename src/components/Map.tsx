'use client';
import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export function Map() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly',
      });
      await loader.load();
      
      const position = {
        lat: 43,
        lng: -79
      };
      

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'MY_NEXTJS_MAPID'
      };

      const map = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);

      new google.maps.Marker({
        map: map,
        position: position
      });
    };
    initMap();
  }, []);

  return ( 
    <div style={{height: '360px', maxWidth: '100%'}} ref={mapRef} />
  );
}
