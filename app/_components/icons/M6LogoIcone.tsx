import { ComponentPropsWithoutRef } from "react";

export const M6LogoIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      viewBox="0 0 763.33 572.5"
      width={props.size}
      height={props.size}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo de chaine télévisé M6"
      {...props}
    >
      <defs>
        <style>{`.cls-1{fill:#d2d2d2;}.cls-2{fill:#e61e1e;}`}</style>
      </defs>
      <polygon
        className="cls-1"
        points="0 572.5 95.42 0 381.67 286.25 667.92 0 763.33 572.5 572.5 572.5 545.24 408.93 381.67 572.5 218.09 408.93 190.83 572.5 0 572.5"
      />
      <path
        className="cls-2"
        d="M388.19,114.56C415.08,68.38,442,25.53,460.13.07H340.32c-49.95,70.15-109.6,171-126.1,242.13a172.65,172.65,0,0,0-5.84,44.42c0,95,77.94,172.31,173.71,172.31s173.73-77.29,173.73-172.31C555.82,194.55,480.81,117.8,388.19,114.56Zm69.18,172.06a75.57,75.57,0,1,1-75.56-75.35A75.53,75.53,0,0,1,457.37,286.62Z"
      />
    </svg>
  );
};
