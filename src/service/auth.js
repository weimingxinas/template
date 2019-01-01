import xhr from '@/utils/http';
export default {
  getMenuList () {
    return xhr.get(`/api/v1/menus`);
  }
}