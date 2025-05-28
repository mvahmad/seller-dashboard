export const AppRoutes = {
  PANEL: "/panel",
  NOT_FOUND: `/404`,
  LOGIN: `/login`,
  ADMIN: `/admin`,
  ADD_BOOK_PRODUCT: `/admin/add-book-product`,
  ADD_BOOK_PRODUCT_ADDITIONAL_INFO: `/admin/add-book-product/additional-info`,
  ADD_BOOK_PRODUCT_DETAILD_INFO: `/admin/add-book-product/detaild-info`,
  ADD_BOOK_PRODUCT_MEDIA: `/admin/add-book-product/product-media`,

};

export const PublicRoutes = [AppRoutes.LOGIN, AppRoutes.REGISTER];
