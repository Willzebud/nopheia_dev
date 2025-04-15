import { ComponentPropsWithoutRef } from "react";

export const BlobBackground = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 1440 320"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <path
        fill="#f3f4f6"
        fillOpacity="1"
        d="M0,64L48,74.7C96,85,192,107,288,128C384,149,480,171,576,176C672,181,768,171,864,165.3C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  );
};
