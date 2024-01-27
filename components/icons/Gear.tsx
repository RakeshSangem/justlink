import React from 'react';

export default function Gears(props: React.SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      className={className}
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#ffffff"
        d="M17.3 10.453l1.927.315a.327.327 0 01.273.322v1.793a.326.326 0 01-.27.321l-1.93.339c-.111.387-.265.76-.459 1.111l1.141 1.584a.326.326 0 01-.034.422l-1.268 1.268a.326.326 0 01-.418.037l-1.6-1.123c-.354.197-.73.354-1.118.468l-.34 1.921a.326.326 0 01-.322.269H11.09a.325.325 0 01-.321-.272l-.319-1.911a5.498 5.498 0 01-1.123-.465l-1.588 1.113a.326.326 0 01-.418-.037L6.052 16.66a.327.327 0 01-.035-.42l1.123-1.57a5.499 5.499 0 01-.47-1.129l-1.901-.337a.326.326 0 01-.269-.321V11.09c0-.16.115-.296.273-.322l1.901-.317c.115-.393.272-.77.47-1.128l-1.11-1.586a.326.326 0 01.037-.417L7.34 6.053a.326.326 0 01.42-.035l1.575 1.125a5.46 5.46 0 011.121-.46l.312-1.91a.327.327 0 01.322-.273h1.793c.159 0 .294.114.322.27l.336 1.92c.389.112.764.268 1.12.465l1.578-1.135a.326.326 0 01.422.033l1.268 1.268a.326.326 0 01.036.418L16.84 9.342c.193.352.348.724.46 1.11v.001zM9.716 12a2.283 2.283 0 104.566 0 2.283 2.283 0 00-4.566 0z"
      ></path>
    </svg>
  );
}
