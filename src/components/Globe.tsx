import React, { useEffect, useRef } from 'react';

declare const Globe: any;

export default function GlobeVisualization() {
  const globeRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<any>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (scriptRef.current) return;

    scriptRef.current = document.createElement('script');
    scriptRef.current.src = 'https://unpkg.com/globe.gl';
    scriptRef.current.async = true;
    
    const currentScript = scriptRef.current;
    
    currentScript.onload = () => {
      if (!globeRef.current) return;

      worldRef.current = Globe()
        (globeRef.current)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
        .backgroundColor('rgba(0,0,0,0)')
        .pointOfView({ altitude: 2.5 }, 5000)
        .polygonCapColor(() => 'rgba(200, 0, 0, 0.15)')
        .polygonSideColor(() => 'rgba(0, 0, 0, 0)')
        .polygonAltitude(0.04)
        .polygonLabel(({ properties: d }: any) => `
          <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
          Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
        `);

      if (worldRef.current.controls()) {
        worldRef.current.controls().autoRotate = true;
        worldRef.current.controls().autoRotateSpeed = 0.5;
        worldRef.current.controls().enableZoom = false;
        worldRef.current.controls().enablePan = false;
        worldRef.current.controls().enableDamping = true;
        worldRef.current.controls().dampingFactor = 0.1;
      }

      fetch('/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
          if (worldRef.current) {
            worldRef.current.polygonsData(
              countries.features.filter((d: any) => d.properties.ISO_A2 !== 'AQ')
            );
          }
        })
        .catch(console.error);
    };

    document.body.appendChild(currentScript);

    return () => {
      if (currentScript && document.body.contains(currentScript)) {
        document.body.removeChild(currentScript);
      }
      if (worldRef.current) {
        worldRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={globeRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        opacity: 0.6,
        filter: 'blur(1px)'
      }}
    />
  );
}
