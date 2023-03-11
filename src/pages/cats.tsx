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
const deepCompareEqualsForMaps: any = createCustomEqual<any>({
  isEqual: (a: any, b: any, deepEqual: (a: any, b: any) => boolean) => {
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
  },
} as CustomEqualCreatorOptions<any>);

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

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
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
      <div ref={ref} id="map" className="w-full h-[600px]" />
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
      marker.setOptions({ ...options, title: "測試一下" });
    }
  }, [marker, options]);

  return null;
};

const Cats = () => {
  const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = useState(15); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  console.count();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  // console.log("latitude", latitude);
  // console.log("longitude", longitude);
  // console.log("clicks", clicks);
  // console.log("zoom", zoom);
  // console.log("center", center);
  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([e.latLng!]);
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
    <div className="flex">
      <div className="w-[600px] h-[600px]">
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
            <Marker position={clicks[0]} />
          </MyMapComponent>
        </Wrapper>
      </div>

      <div className="h-[600px]">
        <div>
          {clicks.map((latLng, i) => (
            <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
          ))}
        </div>
        <button onClick={() => setClicks([])}>Clear</button>
      </div>
      <div className="h-[600px]">
        <div>
          <label htmlFor="1">品種</label>
          <input type="text" name="1" id="1" />
        </div>
        <div>
          <label htmlFor="1">特徵</label>
          <input type="text" name="1" id="1" />
        </div>
        <div>
          <label htmlFor="1">dddd</label>
          <input type="text" name="1" id="1" />
        </div>
        <div>
          <label htmlFor="1">dddd</label>
          <input type="text" name="1" id="1" />
        </div>
        <div>
          <label htmlFor="1">dddd</label>
          <input type="text" name="1" id="1" />
        </div>
        <div>
          <label htmlFor="1">dddd</label>
          <input type="text" name="1" id="1" />
        </div>
      </div>
    </div>
  );
};
export default Cats;
