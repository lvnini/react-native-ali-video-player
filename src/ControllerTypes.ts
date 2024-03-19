import { BitrateType } from './VideoTypes'

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
  showTiming?: boolean,
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
