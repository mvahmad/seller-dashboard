export const AppRoutes = {
  PANEL: "/panel",
  NOT_FOUND: `/404`,
  LOGIN: `/login`,
  ADMIN: `/admin`,
  ADD_BOOK_PRODUCT: `/admin/add-book-product`,
  ADD_BOOK_PRODUCT_ADDITIONAL_INFO: `/admin/add-book-product/additional-info`,
  ADD_BOOK_PRODUCT_DETAILD_INFO: `/admin/add-book-product/detaild-info`,
  ADD_BOOK_PRODUCT_MEDIA: `/admin/add-book-product/product-media`,
  ADD_AUDIOBOOK_PRODUCT: `/admin/add-audiobook-product`,
  ADD_AUDIOBOOK_PRODUCT_DETAILD_INFO: `/admin/add-audiobook-product/detaild-info`,
  ADD_AUDIOBOOK_PRODUCT_ADDITIONAL_INFO: `/admin/add-audiobook-product/additional-info`,
  ADD_AUDIOBOOK_PRODUCT_MEDIA: `/admin/add-audiobook-product/product-media`,
  ADD_VIDEOBOOK_PRODUCT: `/admin/add-video-product`,
  ADD_VIDEOBOOK_PRODUCT_ADDITIONAL_INFO: `/admin/add-videobook-product/additional-info`,
  ADD_VIDEOBOOK_PRODUCT_DETAILD_INFO: `/admin/add-videobook-product/detaild-info`,
  ADD_VIDEOBOOK_PRODUCT_MEDIA: `/admin/add-videobook-product/product-media`,
  ADD_MAGAZINE_PRODUCT: `/admin/add-magazine-product`,
  ADD_MAGAZINE_PRODUCT_ADDITIONAL_INFO: `/admin/add-magazinebook-product/additional-info`,
  ADD_MAGAZINE_PRODUCT_DETAILD_INFO: `/admin/add-magazinebook-product/detaild-info`,
  ADD_MAGAZINE_PRODUCT_MEDIA: `/admin/add-magazinebook-product/product-media`,
};

export const PublicRoutes = [AppRoutes.LOGIN, AppRoutes.REGISTER];
