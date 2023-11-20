/*
 * @Author: comelong
 * @Date: 2023-06-17 17:23:30
 * @LastEditors: comelong
 * @LastEditTime: 2023-08-04 01:39:24
 * @Description: 菜单配置（配置由后端返回更加灵活）
 *
 */
import * as Icons from '@ant-design/icons';

export type IconType = keyof typeof Icons;
export interface MenuItem {
  id: string;
  title: string;
  path: string | null;
  roles: string[];
  icon?: IconType;
  isHide?: boolean; // 是否在菜单栏隐藏
  parentId: string | null;
}

export const menu: MenuItem[] = [
  // 1、首页
  {
    id: '1',
    title: '首页',
    path: '/home',
    roles: ['admin', 'test'],
    icon: 'HomeOutlined',
    parentId: null
  },
  // 2、权限测试
  {
    id: '2',
    title: '权限测试',
    path: null,
    icon: 'LockOutlined',
    roles: ['admin', 'test'],
    parentId: null
  },
  {
    id: '21',
    title: '管理员页面',
    path: '/permission/admin',
    roles: ['admin'],
    parentId: '2'
  },
  {
    id: '22',
    title: '测试页面',
    path: '/permission/test',
    roles: ['test'],
    parentId: '2'
  },
  // 3、嵌套路由
  {
    id: '3',
    title: '嵌套路由',
    path: null,
    icon: 'MenuOutlined',
    roles: ['admin', 'test'],
    parentId: null
  },
  {
    id: '31',
    title: '菜单1',
    path: null,
    roles: ['admin', 'test'],
    parentId: '3'
  },
  {
    id: '311',
    title: '菜单1-1',
    path: '/nest/menu1-1',
    roles: ['admin', 'test'],
    parentId: '31'
  },
  {
    id: '312',
    title: '菜单1-2',
    path: null,
    roles: ['admin', 'test'],
    parentId: '31'
  },
  {
    id: '3121',
    title: '菜单1-2-1',
    path: '/nest/menu1-2-1',
    roles: ['admin', 'test'],
    parentId: '312'
  },
  // 4、个人中心
  {
    id: '4',
    title: '个人中心',
    path: '/account/center',
    roles: ['admin', 'test'],
    isHide: true,
    parentId: null
  },
  // 5、个人设置
  {
    id: '5',
    title: '个人设置',
    path: '/account/settings',
    roles: ['admin', 'test'],
    isHide: true,
    parentId: null
  },
  // 6、表格
  {
    id: '6',
    title: '表格',
    path: null,
    icon: 'InsertRowAboveOutlined',
    roles: ['admin', 'test'],
    parentId: null
  },
  {
    id: '61',
    title: '基础表格',
    path: '/table/basic',
    roles: ['admin', 'test'],
    parentId: '6'
  },
  {
    id: '62',
    title: '搜索条件',
    path: '/table/search',
    roles: ['admin', 'test'],
    parentId: '6'
  },
  {
    id: '63',
    title: '拖拽表格',
    path: '/table/drag',
    roles: ['admin', 'test'],
    parentId: '6'
  }
];
