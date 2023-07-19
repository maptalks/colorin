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
   * 获取插值后的颜色数组
   * @param stop
   * @returns 颜色数组 [R,G,B,A]
   */
  getColor(stop: number): [number, number, number, number];
}
