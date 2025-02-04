"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@components/Map"), { ssr: false });

const MapWrapper = () => {
  return <DynamicMap />;
};

export default MapWrapper;
