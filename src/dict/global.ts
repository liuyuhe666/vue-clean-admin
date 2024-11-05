import { PageTransitionEnum } from '@/enums';

export const switchOptions: BaseOptions<boolean>[] = [
  {
    label: '开启',
    value: true,
  },
  {
    label: '关闭',
    value: false,
  },
];

export const whetherOptions: (BaseOptions<boolean> & { disabled?: boolean })[] = [
  {
    label: '是',
    value: true,
  },
  {
    label: '否',
    value: false,
  },
];

type PageTransition = {
  label: string;
  options: BaseOptions<PageTransitionEnum>[];
};
export const PageTransitionOptions: PageTransition[] = [
  {
    label: '淡入淡出效果',
    options: [
      {
        label: '无动画',
        value: PageTransitionEnum.NONE,
      },
      {
        label: '淡出淡出(基础)',
        value: PageTransitionEnum.FADE_BASE,
      },
      {
        label: '淡入淡出(上)',
        value: PageTransitionEnum.FADE_UP,
      },
      {
        label: '淡入淡出(下)',
        value: PageTransitionEnum.FADE_DOWN,
      },
      {
        label: '淡入淡出(右)',
        value: PageTransitionEnum.FADE_RIGHT,
      },
    ],
  },
  {
    label: '缩放效果',
    options: [
      {
        label: '缩放(基础)',
        value: PageTransitionEnum.SCALE_BASE,
      },
      {
        label: '缩放(上)',
        value: PageTransitionEnum.SCALE_UP,
      },
      {
        label: '缩放(下)',
        value: PageTransitionEnum.SCALE_DOWN,
      },
    ],
  },
  {
    label: '其他动画',
    options: [
      {
        label: '旋转效果',
        value: PageTransitionEnum.ROTATE_BASE,
      },
      {
        label: '翻转效果',
        value: PageTransitionEnum.FLIP_BASE,
      },
    ],
  },
];