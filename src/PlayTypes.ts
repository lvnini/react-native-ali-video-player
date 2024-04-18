/*
 * @Author: lvnini lv@lvnini.cn
 * @Date: 2022-04-15 18:52:36
 * @LastEditors: lvnini lv@lvnini.cn
 * @LastEditTime: 2024-04-18 15:51:16
 * @FilePath: /src/PlayTypes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AliVideoViewProps } from './VideoTypes';

export type VideoPlayerProps = Omit<AliVideoViewProps, 'ref'> & {
  /**
   * 视频播放
   */
  title?: string;
  /**
   * 播放完成
   */
  onCompletion?: () => void;
  onBack?: () => void;
  onError?: (code: string, message: string) => void;
  onFullScreen?: (isFull: boolean) => void;
  onProgress?: (progress: number) => void;
  onBufferProgress?: (progress: number) => void;
  onPrepare?: (duration: number) => void;
  onGetTiming?: (progress: number) => void;
  onGetSpeed?: (progress: number) => void;
  isLandscape?: boolean;
  /**
   * 是否隐藏控制栏
   */
  isHiddenController: boolean;
  /**
   * 是否隐藏返回按钮
   */
  isHiddenBack?: boolean;
  /**
   * 是否显示定时
   */
  showTiming?: boolean;
  /**
   * 是否隐藏全屏返回按钮
   */
  isHiddenFullBack?: boolean;
};
export type VideoPlayerHandler = {
  play: () => void;
  pause: () => void;
  stop: () => void;
  full: (isFull: boolean) => void;
  seekTo: (position: number) => void;
  onSpeed: (s: number) => void;
  onBitrateIndex: (index: number) => void;
  onSetTiming: (s: number) => void;
  destroy: () => void;
};
