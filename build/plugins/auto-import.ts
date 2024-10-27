import AutoImport from 'unplugin-auto-import/vite';
import { pathResolve } from '../utils';

/** 按需自动导入Api */
export const autoImportPluginConfig = () => {
  return AutoImport({
    imports: [
      {
        '@/store/modules/settings': ['useSettingsStore'],
      },
    ],
    dirs: [`${pathResolve('src/hooks')}`, `${pathResolve('src/store/hooks')}`],
    dts: `src/typings/auto-imports.d.ts`, // 生成相应.d.ts文件的文件路径
  });
};
