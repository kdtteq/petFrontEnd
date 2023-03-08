import React from "react";
import {
  Children,
  isValidElement,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import { createCustomEqual, CustomEqualCreatorOptions } from "fast-equals";

interface MapProps extends google.maps.MapOptions {
  style?: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children?: React.ReactNode;
}
const deepCompareEqualsForMaps: any = createCustomEqual(
  (deepEqual: any) => (a: any, b: any) => {
    if (
      isLatLngLiteral(a) ||
      a instanceof google.maps.LatLng ||
      isLatLngLiteral(b) ||
      b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b);
  }
);
const useDeepCompareMemoize = (value: any) => {
  const ref = useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};
const useDeepCompareEffectForMaps = (
  callback: React.EffectCallback,
  dependencies: any[]
) => {
  useEffect(callback, dependencies.map(useDeepCompareMemoize));
};
const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div>1</div>;
    case Status.FAILURE:
      return <div>2</div>;
    case Status.SUCCESS:
      return <div>3</div>;
    default:
      return <div>4</div>;
  }
};

function MyMapComponent({
  onClick,
  onIdle,
  children,
  style,
  ...options
}: MapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const [position, setPosition] = useState<google.maps.InfoWindow>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
      setPosition(new google.maps.InfoWindow());
    }
  }, [ref, map]);
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);
  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);
  return (
    <div>
      <div ref={ref} id="map" className="w-[50%] h-[600px]" />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return cloneElement(child, { map });
        }
      })}
    </div>
  );
}

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const Map = () => {
  const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = useState(3); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  console.log("clicks", clicks);
  console.log("zoom", zoom);
  console.log("center", center);
  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    if (m) {
      setZoom(m.getZoom()!);
      const center = m.getCenter();
      if (center) {
        setCenter(center.toJSON());
      }
    }
  };
  return (
    <div>
      <Wrapper
        apiKey={"AIzaSyAFHC-2RAWvyUWgKXExxR9EGGHNmsNqDMQ"}
        render={render}
      >
        <MyMapComponent
          center={center}
          zoom={zoom}
          onClick={onClick}
          onIdle={onIdle}
        >
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </MyMapComponent>
      </Wrapper>
      <div>
        <div>
          {clicks.map((latLng, i) => (
            <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
          ))}
        </div>
        <button onClick={() => setClicks([])}>Clear</button>
      </div>
    </div>
  );
};
export default Map;
