import { SortModeEnum } from '@/enums/index';

/**
 * 处理通过 import.meta.glob 导出的路由
 * @param routers 路由列表
 * @returns 返回提取后的正确路由
 */
export const extractRoutes = (routers: Record<string, any>): CustomRouteRecordRaw[] => {
  return Object.values(routers).map((router) => router.default);
};

/**
 * 生成排序后的路由表
 * @param routes 路由表
 * @param mode 排序模式，升序(asc) | 降序(desc)
 */
export const generateSortRouter = (routes: CustomRouteRecordRaw[], mode: SortModeEnum) => {
  return routes.sort((a, b) => {
    const sortA = a.meta.sort ?? 0;
    const sortB = b.meta.sort ?? 0;
    return mode === SortModeEnum.ASC ? sortA - sortB : sortB - sortA;
  });
};
