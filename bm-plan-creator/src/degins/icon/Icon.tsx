import React, { CSSProperties, DetailedHTMLProps } from "react";

type IconSize1 = {
  size: "16";
};

type IconSize2 = {
  size?: "20";
};

type IconSize3 = {
  size: "24";
};

type IconSize4 = {
  size: "32";
};

type IconSize5 = {
  size: "40";
};

type IconSizeAll = IconSize1 | IconSize2 | IconSize3 | IconSize4 | IconSize5;

export interface IconProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  svg: React.ReactElement;
  spin?: boolean;
  rotate?: number;
  type?: string;
}

type IconProps2 = IconProps & IconSizeAll;

const Icon = React.forwardRef<HTMLSpanElement, IconProps2>((props, ref) => {
  const { svg, rotate, style, type, color, size = "20", ...restProps } = props;

  /**
   * span 에 기본 lineHeight 가 있으므로 오버라이드 해야함.
   * */
  const overrideStyle: Pick<IconProps2, "style"> = {
    style: { lineHeight: 0, ...style },
  };

  const svgComponent = React.cloneElement(svg, {
    color,
    size,
    style: overrideStyle.style,
  });

  const outerStyle: CSSProperties = {};
  if (Number.isSafeInteger(rotate))
    outerStyle.transform = `rotate(${rotate}deg)`;
  Object.assign(outerStyle, style);

  return (
    <span
      role="img"
      ref={ref}
      aria-label={type}
      style={outerStyle}
      {...restProps}
    >
      {svgComponent}
    </span>
  );
});

Icon.displayName = "Icon";

// @ts-ignore
Icon.elementType = "Icon";

type SvgFn1 = (props: React.SVGProps<SVGSVGElement> & IconSize1) => JSX.Element;
type SvgFn2 = (props: React.SVGProps<SVGSVGElement> & IconSize2) => JSX.Element;
type SvgFn3 = (props: React.SVGProps<SVGSVGElement> & IconSize3) => JSX.Element;
type SvgFn4 = (props: React.SVGProps<SVGSVGElement> & IconSize4) => JSX.Element;
type SvgFn5 = (props: React.SVGProps<SVGSVGElement> & IconSize5) => JSX.Element;

type SvgFn = SvgFn1 | SvgFn2 | SvgFn3 | SvgFn4 | SvgFn5;
const convertIcon = <TSize extends IconSizeAll>(
  Svg: SvgFn,
  iconType: string
) => {
  /**
   * 일단 size default 로 아이콘 컴포넌트를 만든 다음, cloneElement 로 props 를 바꾼다.
   * */
  const PreEvaluatedSvgComponent = Svg as SvgFn2;
  const InnerIcon = React.forwardRef<
    HTMLSpanElement,
    Omit<IconProps2, "svg" | "type" | "size"> & TSize
  >((props, ref) => (
    <Icon
      svg={<PreEvaluatedSvgComponent />}
      type={iconType}
      ref={ref as any}
      {...props}
    />
  ));

  // @ts-ignore
  InnerIcon.elementType = "Icon";
  InnerIcon.displayName = "InnerIcon";
  return InnerIcon;
};

export { convertIcon };
