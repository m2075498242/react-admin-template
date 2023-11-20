/*
 * @Author: comelong
 * @Date: 2023-06-02 09:31:22
 * @LastEditors: comelong
 * @LastEditTime: 2023-07-28 20:44:35
 *
 */

/**
 * 文件下载
 * @param content
 * @param filename
 */
export function downloadFile(content: BlobPart, filename: string) {
  const a = document.createElement('a');
  const blob = content instanceof Blob ? content : new Blob([content]);
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}
