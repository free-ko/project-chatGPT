import React from "react";
import { convertIcon } from "./Icon";

interface OverrideIconSize16 {
  size: "16";
}

interface OverrideIconSize24 {
  size: "24";
}

interface OverrideIconSize20 {
  size?: "20";
}

type OverrideIconSize =
  | OverrideIconSize16
  | OverrideIconSize24
  | OverrideIconSize20;

const SvgComponent = ({
  size = "20",
  color = "#616161",
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === "16") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.00001 2C11.3137 2 14 4.68629 14 8.00001C14 11.3137 11.3137 14 8.00001 14C4.68629 14 2 11.3137 2 8.00001C2 4.68629 4.68629 2 8.00001 2ZM8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3ZM10.924 6.765C11.0704 6.53083 10.9992 6.22236 10.765 6.076C10.5308 5.92965 10.2224 6.00083 10.076 6.235L7.90912 9.70201L5.85355 7.64645C5.65829 7.45118 5.34171 7.45118 5.14645 7.64645C4.95118 7.84171 4.95118 8.15829 5.14645 8.35355L7.20201 10.4091C7.65674 10.8638 8.41628 10.7773 8.75712 10.232L10.924 6.765Z"
          fill={color}
        />
      </svg>
    );
  }
  if (size === "24") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM16.4686 8.70008C16.5546 8.46654 16.4601 8.19922 16.2323 8.07049C15.9759 7.92568 15.6478 8.01112 15.4995 8.26133L11.7205 14.6332L8.41013 11.4905L8.335 11.4309C8.12398 11.2925 7.83532 11.3166 7.65179 11.5008C7.44532 11.7081 7.45008 12.0395 7.66243 12.241L11.4669 15.8518L11.5465 15.9143C11.7975 16.0759 12.1475 16.0043 12.3049 15.7387L16.4278 8.78574L16.4686 8.70008Z"
          fill={color}
        />
      </svg>
    );
  }
  if (size === "20") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM13.9614 7.68754C14.0538 7.4698 13.9769 7.2119 13.7672 7.07952C13.5313 6.9306 13.2166 6.99693 13.0643 7.22768L9.7583 12.2363L6.85294 9.61797L6.78018 9.56329C6.57658 9.43707 6.30364 9.46719 6.13452 9.64673C5.94425 9.8487 5.95741 10.1633 6.16392 10.3494L9.51411 13.3684L9.58748 13.4235C9.81786 13.5662 10.1319 13.5057 10.2858 13.2723L13.9187 7.76698L13.9614 7.68754Z"
          fill={color}
        />
      </svg>
    );
  }
  return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#616161
 * 사용가능한 사이즈는 16, 20, 24 입니다.
 *
 */
const IconComponent = convertIcon<OverrideIconSize>(
  SvgComponent,
  "check-deselected"
);
export default IconComponent;
