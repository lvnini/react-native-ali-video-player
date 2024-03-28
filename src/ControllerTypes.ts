/*
 * @Author: lvnini lv@lvnini.cn
 * @Date: 2022-04-15 18:52:36
 * @LastEditors: lvnini lv@lvnini.cn
 * @LastEditTime: 2024-03-28 10:44:53
 * @FilePath: /AwesomeProject/Users/lvnini/Downloads/react-native-ali-video-player/src/ControllerTypes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type BitrateType = {
  index: number;
  bitrate: number;
  height: number;
  width: number;
  title?: string;
};

export type ControllerViewProps = {
  isFull: boolean;
  current: number;
  buffer: number;
  total: number;
  isError: boolean;
  isLoading: boolean;
  onSliderValueChange?: (value: number) => void;
  isStart: boolean;
  onPressedStart?: () => void;
  onPause?: () => void;
  onFull?: () => void;
  title?: string;
  onBack?: () => void;
  showTiming?: boolean;
  /**
   * 定时时间
   */
  timing: number;
  setTiming: (value: number) => void;
  /**
   * 是否隐藏返回按钮
   */
  isHiddenBack?: boolean;
  /**
   * 是否隐藏全屏返回按钮
   */
  isHiddenFullBack?: boolean;
  /**
   * 倍速
   */
  speed?: number;
  /**
   * 修改倍速
   */
  setSpeed?: (value: number) => void;
  /**
   * 清晰度索引
   */
  selectBitrateIndex?: number;
  /**
   * 切换清晰度索引
   */
  setSelectBitrateIndex?: (value: number) => void;
  audioList?: BitrateType | undefined;
  videoList?: BitrateType[] | undefined;
};
