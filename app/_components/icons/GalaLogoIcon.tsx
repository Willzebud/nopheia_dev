import { ComponentPropsWithoutRef } from "react";

export const GalaLogoIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      viewBox="0 0 141.5 70"
      width={props.size}
      height={props.size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.025" fill="#E20025" width="141.45" height="70" />
      <path
        fill="#FFFFFF"
        d="M96.57,53.78c-0.949,1.102-2.156,2.875-3.375,2.92c-1.852,0.059-0.984-2.845-0.387-4.802l11.752-44.316
        c-5.152,1.103-10.318,1.89-15.477,2.357v2.129c2.172-0.077,4.639-0.468,4.639,2.516l-9.049,35.425
        c-2.922,11.411,0.299,12.279,3.441,12.279c3.865,0,6.482-2.961,8.74-5.822c0,0-0.078-0.599-0.227-1.16
        C96.482,54.743,96.57,53.78,96.57,53.78"
      />
      <path
        fill="#FFFFFF"
        d="M125.141,56.777c-1.41-0.303-0.295-3.39,0-4.803l7.256-25.976l-8.227,0.477l-1.346,4.091
        c-0.896-3.623-1.939-5.354-5.535-5.354c-10.094,0-20.117,17.004-20.117,26.529c0,5.823,2.402,10.542,8.453,10.542
        c5.162,0,9.277-5.74,11.59-9.997c-2.691,4.882-0.373,10.079,3.965,10.079c4.713,0,8.82-6.062,11.217-9.841l-1.574-1.184
        C129.697,52.524,127.232,57.227,125.141,56.777 M109.512,56.777c-2.316,0-3.211-2.521-3.211-4.645
        c0-4.801,6.131-23.538,11.814-23.538c2.912,0,3.064,2.759,3.064,4.252C121.18,38.121,115.943,56.777,109.512,56.777"
      />
      <path
        fill="#FFFFFF"
        d="M82.934,54.009c-1.115,1.499-2.852,3.191-3.971,2.769c-1.562-0.595-0.293-3.39,0-4.803l7.248-25.976
        l-8.227,0.477l-1.34,4.091c-0.893-3.623-1.949-5.354-5.533-5.354c-10.094,0-20.117,17.004-20.117,26.529
        c0,5.823,2.396,10.542,8.45,10.542c5.157,0,9.271-5.74,11.594-9.997C68.343,57.168,70.664,62.365,75,62.365
        c2.703,0,5.494-2.29,7.598-4.702c0,0-0.076-1.049-0.037-1.697C82.594,55.309,82.934,54.009,82.934,54.009 M63.334,56.777
        c-2.317,0-3.217-2.521-3.217-4.645c0-4.801,6.133-23.538,11.819-23.538c2.914,0,3.064,2.759,3.064,4.252
        C75,38.121,69.767,56.777,63.334,56.777"
      />
      <path
        fill="#FFFFFF"
        d="M56.072,34.076H31.581l-0.036,2.065c1.797,0.233,9.919,0.139,10.542,2.604
        c0.286,1.156-0.027,1.651-0.101,2.438c-3.064,12.198-3.096,15.435-4.448,16.617c-1.571,1.414-4.561,2.043-6.579,2.043
        c-10.917,0-11.598-11.294-11.598-15.703c0-17,9.354-33.041,20.646-33.041c7.332,0,11.202,8.086,10.75,15.173l3.12,0.022
        l0.833-15.308c-1.82,0.031-3.712-0.846-6.802-1.674c-3.417-0.923-5.809-1.26-9.397-1.26c-4.857,0-11.069,1.579-15.252,4.171
        C10.547,20.095,7.391,32.51,7.411,41.824C7.438,58.796,22.827,62.711,29.544,62.68c5.676-0.026,12.709-1.494,17.864-4.013
        l2.581-1.939c0,0-1.197-2.897,0.139-9.985C51.583,39.044,56.072,34.076,56.072,34.076"
      />
    </svg>
  );
};
