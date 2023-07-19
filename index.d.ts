type Options = {
  width: number;
  height: number;
};

type ColorArrayItem = [value: number, color: string];

/**
 * 颜色插值类
 * @example 使用示例
 *  const colors = [
        [800, 'lightskyblue'],
        [20000, 'yellow'],
        [50000, 'orangered']
    ];
    const ci = new colorin.ColorIn(colors);
    const [r, g, b, a] = ci.getColor(1000);
 */
export class ColorIn {
  constructor(colors: ColorArrayItem[], options?: Options);
  /**
   * get color by stop
   * @param stop
   * @returns 颜色数组 [R,G,B,A]
   */
  getColor(stop: number): [number, number, number, number];
  /**
   * get canvas image data
   */
  getImageData(): ImageData;
}

type CanvasInstanceLike = {
  width: number;
  height: number;
  getContext(
    contextType: "2d",
    contextAttributes?: CanvasRenderingContext2DSettings
  ): CanvasRenderingContext2D | any;
};

export function registerCanvas<T extends CanvasInstanceLike>(
  canvasInstance: T
): void;
