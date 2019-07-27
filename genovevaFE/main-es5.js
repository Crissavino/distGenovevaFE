(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-side-cart></app-side-cart>\n<div class=\"\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n\n<!-- <form class=\"mt-3\" (ngSubmit)=\"pruebaPost()\" #forma=\"ngForm\">\n  <div class=\"form-group\">\n    <label class=\"\" for=\"\">Titulo</label>\n    <input class=\"form-control\" type=\"text\" name=\"title\" id=\"\" [(ngModel)]=\"ejemplo.title\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"\" for=\"\">Descripcion</label>\n    <input class=\"form-control\" type=\"text\" name=\"description\" id=\"\" [(ngModel)]=\"ejemplo.description\">\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-outline-secondary m-5\">Enviar</button>\n\n</form>\n\n<button [disabled]=\"forma.invalid\" class=\"btn btn-outline-primary m-5\" (click)=\"prueba()\">Console Log Datos\n  DB</button> -->\n<!-- <div>\n  <table class=\"ml-3 table-bordered\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Titulo</th>\n        <th>Descripcion</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let ejDB of ejemplosDB; let i=index\">\n        <td>{{ i + 1 }}</td>\n        <td>{{ejDB.title}}</td>\n        <td>{{ejDB.description}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div> -->\n  <!-- {{ ejemplosDB['title'] | json }} -->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/busqueda/busqueda.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/busqueda/busqueda.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcumb_area bg-img\" style=\"background-image: url(assets/template/img/bg-img/breadcumb.jpg);\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12\">\n        <div class=\"page-title text-center\">\n          <h2>Resultados</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div *ngIf=\"buscando\" style=\"margin-top: 400px; margin-bottom: 300px;\" class=\"row text-center animated fadeIn\">\n    <div class=\"col\">\n\n      <img style=\"width: 10%\" src=\"assets/loading/Rolling-1s-200px.svg\" alt=\"\">\n\n    </div>\n  </div>\n\n  <div *ngIf=\"this.productosBuscados.length === 0\" class=\"mt-5\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col-12 col-md-8\">\n          <div class=\"regular-page-content-wrapper section-padding-80\">\n            <div class=\"regular-page-text\">\n              <h2>NO ENCONTRAMOS NINGUN PRODUCTO CON ESE TITULO</h2>\n              <p>Podes seguir buscando otros productos en nuestro </p>\n              <h1>\n                <div style=\"cursor: pointer\" class=\"d-inline-block btn btn-outline-dark\" [routerLink]=\"['/shop']\">SHOP ONLINE</div>\n              </h1>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"row\" style=\"margin-top: 50px;\" *ngIf=\" !buscando\">\n    <app-producto-buscado class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productosBuscados\"\n      [producto]=\"producto\">\n    </app-producto-buscado>\n  </div> -->\n  <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 1200px;\" *ngIf=\" !buscando\">\n    <div class=\"row\" style=\"margin-top: 50px;\">\n      <app-producto-buscado class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productosBuscados\"\n        [producto]=\"producto\">\n      </app-producto-buscado>\n    </div>\n  </cdk-virtual-scroll-viewport>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/busqueda/producto-buscado/producto-buscado.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/busqueda/producto-buscado/producto-buscado.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Single Product -->\n<!-- <div class=\"col-12 col-sm-6 col-lg-4\"> -->\n<div class=\"single-product-wrapper\">\n  <!-- Product Image -->\n  <div class=\"product-img\">\n    <!-- <div class=\"product-img\" style=\"height: 210px\"> -->\n    <img [src]=\"producto.path[0]\" alt=\"\">\n    <!-- Hover Thumb -->\n    <!-- <img class=\"hover-img\" src=\"../../../assets/template/img/product-img/product-2.jpg\" alt=\"\"> -->\n    <img class=\"hover-img\" [src]=\"producto.path[1]\" alt=\"\">\n\n    <!-- Product Badge -->\n    <div *ngIf=\"producto.descuento && producto.nuevo\">\n      <div class=\"product-badge mt-5 offer-badge\">\n        <span>-{{ (producto.descuento/100) | percent}}</span>\n      </div>\n      <div class=\"product-badge new-badge\">\n        <span>NEW</span>\n      </div>\n    </div>\n    <div *ngIf=\"producto.descuento && !producto.nuevo\" class=\"product-badge offer-badge\">\n      <span>-{{ (producto.descuento/100) | percent}}</span>\n    </div>\n    <div *ngIf=\"producto.nuevo && !producto.descuento\" class=\"product-badge new-badge\">\n      <span>NEW</span>\n    </div>\n    <!-- Favourite -->\n    <div class=\"product-favourite\">\n      <a (click)=\"guardarFavoritos(producto.id)\">\n        <i class=\"fa fa-heart\" [ngStyle]=\"{'color': esFavorito ? 'red' : 'inherit'}\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n  </div>\n\n  <!-- Product Description -->\n  <div class=\"product-description\">\n    <span>{{ nombreCategoria }}</span>\n    <a [routerLink]=\"['/shop/producto/', producto.id]\">\n      <h6>{{ producto.titulo }}</h6>\n    </a>\n    <p *ngIf=\"producto.descuento\" class=\"product-price\">\n      <span class=\"old-price\">{{ producto.precio | currency }}</span>\n      <!-- {{ (producto.precio/producto.descuento) | currency }} -->\n      {{ (producto.precio - (producto.descuento/100)*(producto.precio)) | currency }}\n    </p>\n    <p *ngIf=\"!producto.descuento\" class=\"product-price\">\n      {{ producto.precio | currency }}\n    </p>\n\n    <!-- Hover Content -->\n    <div class=\"hover-content\">\n      <!-- Add to Cart -->\n      <!-- <div class=\"add-to-cart-btn\">\n          <a style=\"color: white;\" (click)=\"agregarAlCarrito(producto.id)\" class=\"btn essence-btn\">agregar</a>\n        </div> -->\n    </div>\n  </div>\n</div>\n<!-- </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/faqs/faqs.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/faqs/faqs.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ##### Blog Wrapper Area Start ##### -->\n<div class=\"single-blog-wrapper\">\n\n  <!-- Single Blog Post Thumb -->\n  <div class=\"bg-img\" style=\"background-image: url(assets/template/img/bg-img/bg-8.jpg); height: 300px;\">\n    <!-- <img src=\"assets/template/img/bg-img/bg-8.jpg\" alt=\"\"> -->\n    <div class=\"container h-100\">\n      <div class=\"row h-100 align-items-center\">\n        <div class=\"col-12\">\n          <div class=\"page-title text-center\">\n            <h2>Preguntas Frecuentes</h2>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-12 col-md-8\">\n        <div class=\"regular-page-content-wrapper section-padding-80\">\n          <div class=\"regular-page-text\">\n            <h2>¿PUEDO PAGAR EN EFECTIVO? ¿COMO?</h2>\n            <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n              vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n              arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n              risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n              adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n              ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n            <hr>\n\n            <!-- <blockquote>\n              <h6><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Quisque sagittis non ex eget vestibulum. Sed nec\n                ultrices dui. Cras et sagittis erat. Maecenas pulvinar, turpis in dictum tincidunt, dolor nibh lacinia\n                lacus.</h6>\n              <span>Liam Neeson</span>\n            </blockquote> -->\n\n            <div class=\"mt-5\">\n              <h2>¿PORQUE ES SEGURO COMPRAR EN GENOVEVA?</h2>\n              <p>Responsibilidad de todos los datos ingresados en el sitio <br>\n                Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>¿LAS PROMOCIONES EN LAS TARJETAS SON OFRECIDAS POR USTEDES?</h2>\n              <p>No! Las promociones de las tarjetas son ofrecidas por Mercado Libre &reg; (Mercado Pago &reg;).</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>DISTINTOS ESTADOS DEL PAGO</h2>\n              <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>¿COMO SE REALIZAN LOS ENVÍOS?</h2>\n              <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>¿EL ENVÍO TIENE COSTO?</h2>\n              <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>¿CUANTO TIEMPO TARDA EL ENVÍO POR OCA?</h2>\n              <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>¿CÓMO HAGO EL SEGUIMIENTO DE MI PEDIDO?</h2>\n              <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>¿QUÉ PASA SI LLEGA EL PEDIDO Y NO ESTOY?</h2>\n              <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>¿SE HACEN ENVÍOS DENTRO DE LA PLATA?</h2>\n              <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>¿QUE PUEDO HACER SI MI PEDIDO NO LLEGA EN BUEN ESTADO?</h2>\n              <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n\n              <hr>\n            </div>\n\n            <div class=\"mt-5\">\n              <h2>DEVOLUCIONES Y CAMBIOS</h2>\n              <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna\n                vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue\n                arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra\n                risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis\n                ac eu nisi. In accumsan tellus ut dapibus blandit.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- ##### Blog Wrapper Area End ##### -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ##### Welcome Area Start ##### -->\n<section class=\"welcome_area bg-img background-overlay\"\n  style=\"background-image: url(../../../assets/template/img/bg-img/bg-1.jpg);\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12\">\n        <div class=\"hero-content\">\n          <h2>New Collection</h2>\n          <a [routerLink]=\"[ '/shop' ]\" class=\"btn essence-btn\">Ver</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- ##### Welcome Area End ##### -->\n\n<!-- ##### Top Catagory Area Start ##### -->\n<div class=\"top_catagory_area section-padding-80 clearfix\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <!-- Single Catagory -->\n      <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"single_catagory_area d-flex align-items-center justify-content-center bg-img\"\n          style=\"background-image: url(../../../assets/template/img/bg-img/bg-2.jpg);\">\n          <!-- ../img/core-img/long-arrow-left.svg -->\n          <div class=\"catagory-content\">\n            <a [routerLink]=\"['/shop/']\">Remeras</a>\n          </div>\n        </div>\n      </div>\n      <!-- Single Catagory -->\n      <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"single_catagory_area d-flex align-items-center justify-content-center bg-img\"\n          style=\"background-image: url(../../../assets/template/img/bg-img/bg-3.jpg);\">\n          <div class=\"catagory-content\">\n            <a [routerLink]=\"['/shop/']\">Pantalones</a>\n          </div>\n        </div>\n      </div>\n      <!-- Single Catagory -->\n      <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"single_catagory_area d-flex align-items-center justify-content-center bg-img\"\n          style=\"background-image: url(../../../assets/template/img/bg-img/bg-4.jpg);\">\n          <div class=\"catagory-content\">\n            <a [routerLink]=\"['/shop/']\">Acesorios</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- ##### Top Catagory Area End ##### -->\n\n<!-- ##### CTA Area Start ##### -->\n<div class=\"cta-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"cta-content bg-img background-overlay\"\n          style=\"background-image: url(../../../assets/template/img/bg-img/bg-5.jpg);\">\n          <div class=\"h-100 d-flex align-items-center justify-content-end\">\n            <div class=\"cta--text\">\n              <h6>-60%</h6>\n              <h2>Global Sale</h2>\n              <a [routerLink]=\"['/shop/descuentos']\" class=\"btn essence-btn\">Buy Now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- ##### CTA Area End ##### -->\n\n <!-- ##### New Arrivals Area Start ##### -->\n <section class=\"new_arrivals_area section-padding-80 clearfix\">\n\n  <!-- <div *ngIf=\"cargando\" class=\"row text-center animated fadeIn\">\n    <div class=\"col\">\n\n      <img style=\"width: 10%\" src=\"assets/loading/Rolling-1s-200px.svg\" alt=\"\">\n\n    </div>\n  </div> -->\n\n  <!-- <div *ngIf=\"!cargando\"> -->\n  <div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"section-heading text-center\">\n            <h2>Productos Populares</h2>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"popular-products-slides owl-carousel\">\n            <div class=\"single-product-wrapper\" *ngFor=\"let producto of productosDestacadosConImagenes\">\n              <app-popular-products [producto]=\"producto\"></app-popular-products>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"popular-products-slides owl-carousel\">\n            <app-popular-products class=\"single-product-wrapper\" *ngFor=\"let producto of productosDestacadosConImagenes\"\n              [producto]=\"producto\"></app-popular-products>\n        </div>\n      </div>\n    </div>\n  </div> -->\n        \n </section>\n <!-- ##### New Arrivals Area End ##### -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/inicio.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/inicio.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"bg-img cartel\"> -->\n  <div class=\"container cartel\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12\">\n        <div class=\"page-title text-center fadeIn slow\">\n          <img src=\"assets/template/img/core-img/genovevaLogo.jpg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n<!-- </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/popular-products.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/popular-products.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Product Image -->\n  <div class=\"product-img\">\n    <img *ngIf=\"producto.path\" src=\"{{producto.path[0]}}\" alt=\"\">\n    <!-- Hover Thumb -->\n    <img *ngIf=\"producto.path\" class=\"hover-img\" src=\"{{producto.path[1]}}\" alt=\"\">\n    <!-- Product Badge -->\n    <div *ngIf=\"producto.descuento && producto.nuevo\">\n      <div class=\"product-badge mt-5 offer-badge\">\n        <span>-{{ (producto.descuento/100) | percent}}</span>\n      </div>\n      <div class=\"product-badge new-badge\">\n        <span>NEW</span>\n      </div>\n    </div>\n    <div *ngIf=\"producto.descuento && !producto.nuevo\" class=\"product-badge offer-badge\">\n      <span>-{{ (producto.descuento/100) | percent}}</span>\n    </div>\n    <div *ngIf=\"producto.nuevo && !producto.descuento\" class=\"product-badge new-badge\">\n      <span>NEW</span>\n    </div>\n    <!-- Favourite -->\n    <div class=\"product-favourite\">\n      <a (click)=\"guardarFavoritos(producto.id)\">\n        <i class=\"fa fa-heart\" [ngStyle]=\"{'color': esFavorito ? 'red' : 'inherit'}\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n  </div>\n  <!-- Product Description -->\n  <div class=\"product-description\">\n    <a [routerLink]=\"['/shop/producto/', producto.id]\">\n      <h6>{{ producto.titulo }}</h6>\n    </a>\n\n    <p *ngIf=\"producto.descuento\" class=\"product-price\">\n      <span class=\"old-price\">{{ producto.precio | currency }}</span>\n      {{ (producto.precio - (producto.descuento/100)*(producto.precio)) | currency }}\n    </p>\n    <p *ngIf=\"!producto.descuento\" class=\"product-price\">\n      {{ producto.precio | currency }}\n    </p>\n\n    <!-- Hover Content -->\n    <!-- <div class=\"hover-content\">\n  Add to Cart\n  <div class=\"add-to-cart-btn\">\n    <a href=\"#\" class=\"btn essence-btn\">Add to Cart</a>\n  </div> -->\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/perfil/favoritos/favoritos.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/perfil/favoritos/favoritos.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcumb_area bg-img\" style=\"background-image: url(assets/template/img/bg-img/breadcumb.jpg);\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12\">\n        <div class=\"page-title text-center\">\n          <h2>Tus Productos Favoritos</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"cargando\" style=\"margin: auto; margin-top: 400px; margin-bottom: 300px;\" class=\"row text-center animated fadeIn\">\n  <img style=\"width: 10%; margin: auto;\" src=\"assets/loading/Rolling-1s-200px.svg\" alt=\"\">\n</div>\n<div *ngIf=\"!cargando\" class=\"container\">\n  <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 1200px;\">\n    <div class=\"row\" style=\"margin-top: 50px;\">\n      <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productosFavoritos\"\n        [producto]=\"producto\">\n      </app-producto>\n    </div>\n  </cdk-virtual-scroll-viewport>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/perfil/perfil.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/perfil/perfil.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcumb_area bg-img\" style=\"background-image: url(assets/template/img/bg-img/breadcumb.jpg);\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12\">\n        <div class=\"page-title text-center\">\n          <h2>Perfil</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!usuario\" style=\"margin: auto; margin-top: 400px; margin-bottom: 300px;\"\n  class=\"row text-center animated fadeIn\">\n  <img style=\"width: 10%; margin: auto;\" src=\"assets/loading/Rolling-1s-200px.svg\" alt=\"\">\n</div>\n\n<div *ngIf=\"usuario\"  class=\"container\">\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12 text-right mb-2\">\n      <button (click)=\"logout()\" class=\"btn btn-danger mt-5\">Cerrar sesión</button>\n    </div>\n  </div>\n  <div *ngIf=\"hayPedidos\">\n    <div class=\"mt-3 mb-5\">\n      <h2>Hola {{ usuario.name }} {{ usuario.lastname }}</h2>\n      <h5>Estos son tus pedidos</h5>\n    </div>\n    <div class=\"m-0 mb-5 row\">\n      <table id=\"respTable\" class=\"table col-md-12\">\n        <thead class=\"thead-light\">\n          <tr style=\"overflow: hidden\" id=\"agregarRow\">\n            <th id=\"agregarDIB\" style=\"width: 17,5%\" scope=\"col\"># Orden</th>\n            <th id=\"agregarDIB\" style=\"width: 25%\" scope=\"col\">Productos</th>\n            <th id=\"agregarDIB\" style=\"width: 17,5%\" scope=\"col\">Total</th>\n            <th id=\"agregarDIB\" style=\"width: 17,5%\" scope=\"col\">Estado del Pago</th>\n            <th id=\"agregarDIB\" style=\"width: 17,5%\" scope=\"col\">Estado del Envio</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr style=\"overflow: hidden\" *ngFor=\"let pedido of pedidosUsuario\">\n            <td style=\"width: 17,5%\" scope=\"row\">{{ pedido.orden }}</td>\n            <td style=\"width: 25%\">\n              <div class=\"sobre d-block\">Productos\n                <span class=\"informacion-abajo\">\n                  <ul class=\"list-group\">\n                    <li *ngFor=\"let prod of pedido.prods\" style=\"list-style:none;\">\n                      {{prod}}\n                    </li>\n                  </ul>\n                </span>\n              </div>\n            </td>\n            <td style=\"width: 17,5%\">{{ pedido.total }}</td>\n            <td style=\"width: 17,5%\">{{ pedido.pago }}</td>\n            <td style=\"width: 17,5%\">{{ pedido.envio }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div *ngIf=\"!hayPedidos\">\n    <div class=\"mt-3 mb-5\">\n      <h2>Hola {{ usuario.name }} {{ usuario.lastname }}</h2>\n      <h5>Todavia no tenes ningún pedido registrado</h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/politicas/politicas.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/politicas/politicas.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  politicas works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/productos-descuento/productos-descuento.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/productos-descuento/productos-descuento.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcumb_area bg-img\" style=\"background-image: url(assets/template/img/bg-img/breadcumb.jpg);\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12\">\n        <div class=\"page-title text-center\">\n          <h2>Genoveva Global Sale</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div *ngIf=\"cargando\" style=\"margin-top: 100px; margin-bottom: 300px;\" class=\"row text-center animated fadeIn\">\n    <div class=\"col\">\n\n      <img style=\"width: 10%\" src=\"assets/loading/Rolling-1s-200px.svg\" alt=\"\">\n\n    </div>\n  </div>\n\n  <!-- <div class=\"row\" style=\"margin-top: 150px;\" *ngIf=\" !cargando\">\n    <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productosDecuento\"\n      [producto]=\"producto\">\n    </app-producto>\n  </div> -->\n\n  <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 1200px;\" *ngIf=\" !cargando\">\n    <div class=\"row\" style=\"margin-top: 50px;\">\n      <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productosDecuento\"\n        [producto]=\"producto\">\n      </app-producto>\n    </div>\n  </cdk-virtual-scroll-viewport>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/registro/login.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/registro/login.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter animated fadeInLeft\">\n  <div class=\"container-login100\">\n    <div class=\"wrap-login100 p-t-50 p-b-90\">\n      <form #formRegistro=\"ngForm\" (ngSubmit)=\"login( formRegistro )\"\n        class=\"login100-form validate-form flex-sb flex-w\">\n\n        <span class=\"login100-form-title p-b-51\">\n          Login\n        </span>\n\n        <span *ngIf=\"formRegistro.submitted && formRegistro.controls['email'].errors\"\n          class=\"text-danger animated fadeIn\">El correo es obligatorio</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100\" type=\"text\" required email [(ngModel)]=\"usuario.email\" name=\"email\"\n            placeholder=\"Email\">\n\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <span *ngIf=\"formRegistro.submitted && formRegistro.controls['password'].errors\"\n          class=\"text-danger animated fadeIn\">La contraseña debe de ser más de 6 letras</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 password\" type=\"password\" minlength=\"6\" required name=\"password\" [(ngModel)]=\"usuario.password\"\n            placeholder=\"Password\">\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n          <div class=\"contact100-form-checkbox\">\n            <input [(ngModel)]=\"recordarme\" class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n            <label class=\"label-checkbox100\" for=\"ckb1\">\n              Recordar mi usuario\n            </label>\n          </div>\n\n          <div>\n            <a routerLink=\"/registro\" class=\"txt1\">\n              ¿No tienes cuenta?\n            </a>\n          </div>\n        </div>\n\n        <div class=\"container-login100-form-btn m-t-17\">\n          <button class=\"login100-form-btn\" type=\"submit\">\n            Ingresar\n          </button>\n        </div>\n\n        <div class=\"flex-sb-m w-full p-t-24\">\n          <div>\n            <button (click)=\"resetearPassword()\" class=\"\">\n              Olvidé mi contraseña\n            </button>\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/registro/registro.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/registro/registro.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter animated fadeInRight\">\n  <div class=\"container-login100\">\n    <div class=\"wrap-login100 p-t-50 p-b-90\">\n      <form (ngSubmit)=\"onSubmit( formRegistro )\" #formRegistro=\"ngForm\"\n        class=\"login100-form validate-form flex-sb flex-w\">\n\n        <span class=\"login100-form-title p-b-51\">\n          Crear nueva cuenta\n        </span>\n\n        <span *ngIf=\"formRegistro.submitted && formRegistro.controls['email'].errors\"\n          class=\"text-danger animated fadeIn\">El correo es\n          obligatorio</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 email\" type=\"text\" name=\"email\" email required [(ngModel)]=\"usuario.email\"\n            placeholder=\"Email\">\n\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <span *ngIf=\"formRegistro.submitted && formRegistro.controls['name'].errors\"\n          class=\"text-danger animated fadeIn\">El nombre es obligatorio</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 nombre\" type=\"text\" name=\"name\" required [(ngModel)]=\"usuario.name\"\n            placeholder=\"Nombre\">\n\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <span *ngIf=\"formRegistro.submitted && formRegistro.controls['lastname'].errors\"\n          class=\"text-danger animated fadeIn\">El apellido es obligatorio</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 apellido\" type=\"text\" required name=\"lastname\" [(ngModel)]=\"usuario.lastname\"\n            placeholder=\"Apellido/s\">\n\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <span *ngIf=\"formRegistro.submitted && formRegistro.controls['password'].errors\"\n          class=\"text-danger animated fadeIn\">La contraseña debe de ser más de 6 letras</span>\n        <span *ngIf=\"noCoinciden\"\n          class=\"text-danger animated fadeIn\">Las contraseñas deben ser iguales</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 password\" type=\"password\" required minlength=\"6\" name=\"password\" [(ngModel)]=\"usuario.password\"\n            placeholder=\"Contraseña\">\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <span *ngIf=\"formRegistro.submitted && formRegistro.controls['repassword'].errors\"\n          class=\"text-danger animated fadeIn\">La recontraseña debe de ser más de 6 letras</span>\n        <span *ngIf=\"noCoinciden\" class=\"text-danger animated fadeIn\">Las contraseñas deben ser iguales</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 repassword\" type=\"password\" required name=\"repassword\" [(ngModel)]=\"usuario.repassword\"\n            placeholder=\"Repetí la constraseña\">\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <label class=\"mt-3 mb-2\" for=\"\">Cual es tu color preferido? <small>Te servirá si olvidas la contraseña</small></label>\n        <span *ngIf=\"formRegistro.submitted && formRegistro.controls['respuesta'].errors\"\n          class=\"text-danger animated fadeIn\">Tenes que responder la pregunta secreta!</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 respuesta\" type=\"text\" required name=\"respuesta\" [(ngModel)]=\"usuario.respuesta\"\n            placeholder=\"Respuesta secreta\">\n\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n          <div class=\"contact100-form-checkbox\">\n            <input [(ngModel)]=\"recordarme\" class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n            <label class=\"label-checkbox100\" for=\"ckb1\">\n              Recordar mi usuario\n            </label>\n          </div>\n\n          <div>\n            <a routerLink=\"/login\" class=\"txt1\">\n              ¿Ya tienes cuenta? / Ingresar\n            </a>\n          </div>\n        </div>\n\n        <div class=\"container-login100-form-btn m-t-17\">\n          <button class=\"login100-form-btn\" type=\"submit\">\n            Crear cuenta\n          </button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/registro/reset/reset.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/registro/reset/reset.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter animated fadeInLeft\">\n  <div class=\"container-login100\">\n    <div *ngIf=\"!coincide\" class=\"wrap-login100 p-t-50 p-b-90\">\n      <form #formReset=\"ngForm\" (ngSubmit)=\"resetPass( formReset )\"\n        class=\"login100-form validate-form flex-sb flex-w\">\n\n        <span class=\"login100-form-title p-b-51\">\n          Pregunta Secreta\n        </span>\n\n        <span *ngIf=\"formReset.submitted && formReset.controls['email'].errors\"\n          class=\"text-danger animated fadeIn\">El correo es\n          obligatorio</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 email\" type=\"text\" name=\"email\" email required [(ngModel)]=\"reset.email\"\n            placeholder=\"Email\">\n\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <label class=\"mt-3 mb-2\" for=\"\">Cual es tu color preferido?</label>\n        <span *ngIf=\"formReset.submitted && formReset.controls['respuesta'].errors\"\n          class=\"text-danger animated fadeIn\">Tenes que responder la pregunta secreta!</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 respuesta\" type=\"text\" required name=\"respuesta\" [(ngModel)]=\"reset.respuesta\"\n            placeholder=\"Respuesta secreta\">\n\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <div class=\"container-login100-form-btn m-t-17\">\n          <button class=\"login100-form-btn\" type=\"submit\">\n            Ver si coincide\n          </button>\n        </div>\n\n      </form>\n    </div>\n\n    <div *ngIf=\"coincide\"  class=\"wrap-login100 p-t-50 p-b-90\">\n      <form #formCambioContra=\"ngForm\" (ngSubmit)=\"cambiarPassword( formCambioContra )\"\n        class=\"login100-form validate-form flex-sb flex-w\">\n\n        <span class=\"login100-form-title p-b-51\">\n          Reset de contraseña\n        </span>\n\n        <span *ngIf=\"formCambioContra.submitted && formCambioContra.controls['email'].errors\" class=\"text-danger animated fadeIn\">El\n          correo es\n          obligatorio</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 email\" type=\"text\" name=\"email\" email required [(ngModel)]=\"reset.email\"\n            placeholder=\"Email\">\n\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <span *ngIf=\"formCambioContra.submitted && formCambioContra.controls['password'].errors\"\n          class=\"text-danger animated fadeIn\">La contraseña debe de ser más de 6 letras</span>\n        <span *ngIf=\"noCoinciden\" class=\"text-danger animated fadeIn\">Las contraseñas deben ser iguales</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 password\" type=\"password\" required minlength=\"6\" name=\"password\"\n            [(ngModel)]=\"cambiarPass.password\" placeholder=\"Contraseña\">\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <span *ngIf=\"formCambioContra.submitted && formCambioContra.controls['repassword'].errors\"\n          class=\"text-danger animated fadeIn\">La recontraseña debe de ser más de 6 letras</span>\n        <span *ngIf=\"noCoinciden\" class=\"text-danger animated fadeIn\">Las contraseñas deben ser iguales</span>\n        <div class=\"wrap-input100 m-b-16\">\n          <input class=\"input100 repassword\" type=\"password\" required name=\"repassword\" [(ngModel)]=\"cambiarPass.repassword\"\n            placeholder=\"Repetí la constraseña\">\n          <span class=\"focus-input100\"></span>\n        </div>\n\n        <div class=\"container-login100-form-btn m-t-17\">\n          <button class=\"login100-form-btn\" type=\"submit\">\n            Cambiar contraseña\n          </button>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ##### Footer Area Start ##### -->\n<footer class=\"footer_area clearfix\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- Single Widget Area -->\n      <div class=\"col-12 col-md-6\">\n        <div class=\"single_widget_area d-flex mb-30\">\n          <!-- Logo -->\n          <!-- <div class=\"footer-logo mr-50\"> -->\n          <div class=\"footer-logo mr-30\">\n            <a [routerLink]=\"[ 'home' ]\"><img width=\"100px;\" src=\"assets/template/img/core-img/genovevaLogoTransparenteBlaco.png\" alt=\"\"></a>\n          </div>\n          <!-- Footer Menu -->\n          <div class=\"footer_menu\">\n            <ul>\n              <li><a [routerLink]=\"[ 'shop' ]\">Shop</a></li>\n              <li><a [routerLink]=\"[ 'faqs' ]\">Preguntas frecuentes</a>\n              <li><a href=\"https://www.facebook.com/genovevaok/\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\"\n              title=\"Facebook\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"https://www.instagram.com/genovevaok/\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"bottom\"\n              title=\"Instagram\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- Single Widget Area -->\n      <!-- <div class=\"col-12 col-md-6\">\n        <div class=\"single_widget_area mb-30\">\n          <ul class=\"footer_widget_menu\">\n            <li><a href=\"#\">Order Status</a></li>\n            <li><a href=\"#\">Payment Options</a></li>\n            <li><a href=\"#\">Shipping and Delivery</a></li>\n            <li><a href=\"#\">Guides</a></li>\n            <li><a href=\"#\">Privacy Policy</a></li>\n            <li><a href=\"#\">Terms of Use</a></li>\n          </ul>\n        </div>\n      </div> -->\n    </div>\n\n    <div class=\"row align-items-end\">\n      <!-- Single Widget Area -->\n      <!-- <div class=\"col-12 col-md-6\">\n        <div class=\"single_widget_area\">\n          <div class=\"footer_heading mb-30\">\n            <h6>Subscribe</h6>\n          </div>\n          <div class=\"subscribtion_form\">\n            <form action=\"#\" method=\"post\">\n              <input type=\"email\" name=\"mail\" class=\"mail\" placeholder=\"Your email here\">\n              <button type=\"submit\" class=\"submit\"><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i></button>\n            </form>\n          </div>\n        </div>\n      </div> -->\n      <!-- Single Widget Area -->\n      <!-- <div class=\"col-12 col-md-6\">\n        <div class=\"single_widget_area\">\n          <div class=\"footer_social_area\">\n            <a href=\"https://www.facebook.com/genovevaok/\" data-toggle=\"tooltip\" data-placement=\"top\"\n              title=\"Facebook\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://www.instagram.com/genovevaok/\" data-toggle=\"tooltip\" data-placement=\"top\"\n              title=\"Instagram\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n          </div>\n        </div>\n      </div> -->\n    </div>\n\n    <div class=\"row mt-5\">\n      <div class=\"col-md-12 text-center\">\n        <p>\n          Copyright &copy;\n          <script>\n            document.write(new Date().getFullYear());\n          </script> \n          Todos los derechos reservados | Desarrollado por <a style=\"color: #949494\" href=\"https://jackcode.cf\" target=\"_blank\">jackCode</a>\n        </p>\n      </div>\n    </div>\n\n  </div>\n</footer>\n<!-- ##### Footer Area End ##### -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ##### Header Area Start ##### -->\n<header class=\"header_area\">\n  <div class=\"classy-nav-container breakpoint-off d-flex align-items-center justify-content-between\">\n    <!-- Classy Menu -->\n    <nav class=\"classy-navbar\" id=\"essenceNav\">\n      <!-- Logo -->\n      <a class=\"nav-brand mb-1\" [routerLink]=\"[ 'home' ]\">\n        <img class=\"logo\" src=\"assets/template/img/core-img/genovevaLogoTransparenteNegro.png\" alt=\"\">\n        <!-- <img src=\"assets/template/img/core-img/genovevaLogo.jpg\" alt=\"\"> -->\n      </a>\n      <!-- Navbar Toggler -->\n      <div class=\"classy-navbar-toggler\">\n        <span class=\"navbarToggler\"><span></span><span></span><span></span></span>\n      </div>\n      <!-- Menu -->\n      <div class=\"classy-menu\">\n        <!-- close btn -->\n        <div class=\"classycloseIcon\">\n          <div class=\"cross-wrap\"><span class=\"top\"></span><span class=\"bottom\"></span></div>\n        </div>\n        <!-- Nav Start -->\n        <div class=\"classynav\">\n          <ul>\n            <li routerLinkActive=\"active\"><a [routerLink]=\"[ 'shop' ]\">Shop</a></li>\n            <li routerLinkActive=\"active\"><a [routerLink]=\"[ 'faqs' ]\">Preguntas frecuentes</a></li>\n            <li><a href=\"https://www.facebook.com/genovevaok/\" target=\"_blank\" title=\"Facebook\">\n              <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"https://www.instagram.com/genovevaok/\" target=\"_blank\" title=\"Instagram\">\n              <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n            <!-- <li routerLinkActive=\"active\"><a [routerLink]=\"[ 'politicas' ]\">Políticas</a></li> -->\n            <!-- <li><a>Tablero Angular</a>\n              <ul class=\"dropdown\">\n                <li routerLinkActive=\"active\"><a [routerLink]=\"[ 'admin/ecommerce' ]\">E-Commerce</a></li>\n                <li routerLinkActive=\"active\"><a [routerLink]=\"[ 'admin/ventas' ]\">Ventas</a></li>\n                <li routerLinkActive=\"active\"><a [routerLink]=\"[ 'admin/estadisticas' ]\">Estadísticas</a></li>\n              </ul>\n            </li> -->\n            <!-- <li><a href=\"http://127.0.0.1:8000/admin\">Tablero Laravel</a></li> -->\n            <li *ngIf=\"mostrarTablero\" ><a href=\"http://genovevabe.cf/admin\">Tablero Laravel</a></li>\n            <!-- <li><a href=\"http://genovevaok.com/admin\">Tablero Laravel</a></li> -->\n          </ul>\n        </div>\n        <!-- Nav End -->\n      </div>\n    </nav>\n\n    <!-- Header Meta Data -->\n    <div class=\"header-meta d-flex clearfix justify-content-end\">\n      <!-- Search Area -->\n      <div class=\"search-area\">\n        <form action=\"#\" method=\"post\">\n          <input #termino (keyup)=\"buscarTermino(termino.value)\" type=\"search\" name=\"search\" id=\"headerSearch\" placeholder=\"Buscar...\">\n          <!-- <input #termino (keyup)=\"buscarTermino(termino.value)\" type=\"search\" name=\"search\" id=\"headerSearch\" placeholder=\"Buscar...\"> -->\n          <button type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n        </form>\n      </div>\n      <!-- Favourite Area -->\n      <div class=\"favourite-area\">\n        <a [routerLink]=\"['favoritos', userId]\" *ngIf=\"userId\"><img src=\"assets/template/img/core-img/heart.svg\" alt=\"\"></a>\n        <a [routerLink]=\"['login']\" *ngIf=\"!userId\"><img src=\"assets/template/img/core-img/heart.svg\" alt=\"\"></a>\n      </div>\n      <!-- User Login Info -->\n      <div class=\"user-login-info\">\n        <!-- <a href=\"http://127.0.0.1:8000/login\"><img src=\"assets/template/img/core-img/user.svg\" alt=\"\"></a> -->\n        <a [routerLink]=\"['perfil', userId]\" *ngIf=\"userId\"><img src=\"assets/template/img/core-img/user.svg\"\n            alt=\"\"></a>\n        <a [routerLink]=\"['login']\" *ngIf=\"!userId\"><img src=\"assets/template/img/core-img/user.svg\"\n            alt=\"\"></a>\n      </div>\n      <!-- Cart Area -->\n      <div class=\"cart-area\">\n        <!-- <a [routerLink]=\"['carrito']\"><img src=\"assets/template/img/core-img/bag.svg\" alt=\"\"> -->\n        <a *ngIf=\"userId\" style=\"cursor: pointer\" id=\"essenceCartBtn\"><img src=\"assets/template/img/core-img/bag.svg\" alt=\"\">\n          <span>{{cantidadDeProd}}</span>\n        </a>\n        <a *ngIf=\"!userId\" [routerLink]=\"['login']\" id=\"\"><img src=\"assets/template/img/core-img/bag.svg\" alt=\"\">\n        </a>\n      </div>\n    </div>\n\n  </div>\n</header>\n<!-- ##### Header Area End ##### -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/side-cart/side-cart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/side-cart/side-cart.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ##### Right Side Cart Area ##### -->\n<div class=\"cart-bg-overlay\"></div>\n\n<div *ngIf=\"actualizando == false\"  class=\"right-side-cart-area\">\n\n  <!-- Cart Button -->\n  <div class=\"cart-button\">\n    <a style=\"cursor: pointer\" id=\"rightSideCart\"><img src=\"assets/template/img/core-img/bag.svg\" alt=\"\">\n      <span>{{cantidadDeProd}}</span></a>\n  </div>\n\n  <div class=\"cart-content d-flex\">\n\n    <!-- Cart List Area -->\n    <div class=\"cart-list\">\n      <!-- Single Cart Item -->\n      <div *ngFor=\"let producto of productosCarrito\"  class=\"single-cart-item\">\n        <a class=\"product-image\">\n          <img src=\"{{producto.path[0]}}\" class=\"cart-thumb\" alt=\"\">\n          <!-- Cart Item Desc -->\n          <div class=\"cart-item-desc\">\n            <span class=\"product-remove\" (click)=\"quitarProducto(producto.idCarrito)\"><i class=\"fa fa-close\"\n                aria-hidden=\"true\"></i></span>\n            <h6>{{producto.titulo}}</h6>\n            <p class=\"size\">Talle: {{producto.talle}}</p>\n            <p *ngIf=\"!producto.descuento\"  class=\"price\">{{producto.precio | currency}}</p>\n            <p *ngIf=\"producto.descuento\"  class=\"price\">{{ (producto.precio - (producto.descuento/100)*producto.precio) | currency}}</p>\n          </div>\n        </a>\n      </div>\n    </div>\n\n    <!-- Cart Summary -->\n    <div *ngIf=\"hayProductos > 0\"  class=\"cart-amount-summary\">\n\n      <h2>Resumen</h2>\n      <ul class=\"summary-table\">\n        <li><span>cantidad de productos:</span> \n          <span *ngIf=\"productosCarrito !== undefined\">{{productosCarrito.length}}</span>\n          <span *ngIf=\"productosCarrito === undefined\">0</span>\n        </li>\n        <!-- <li><span>envío:</span> <span>$10.00</span></li> -->\n        <!-- <li><span>discount:</span> <span>-15%</span></li> -->\n        <li><span>total:</span> \n          <span *ngIf=\"productosCarrito !== undefined\">${{precioTotal}}</span>\n          <span *ngIf=\"productosCarrito === undefined\">0</span>\n        </li>\n        <!-- <li><span>total:</span> <span>${{precioTotal}}</span></li> -->\n      </ul>\n      <div class=\"checkout-btn mt-100\">\n        <a [routerLink]=\"['checkout']\" class=\"btn essence-btn\">comprar</a>\n        <!-- <a [routerLink]=\"['chekout']\" class=\"btn essence-btn\">comprar</a> -->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- ##### Right Side Cart End ##### -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shop/checkout/checkout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shop/checkout/checkout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ##### Breadcumb Area Start ##### -->\n<div class=\"breadcumb_area bg-img\" style=\"background-image: url(/assets/template/img/bg-img/breadcumb.jpg);\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12\">\n        <div class=\"page-title text-center\">\n          <h2>Checkout</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- ##### Breadcumb Area End ##### -->\n\n<!-- ##### Checkout Area Start ##### -->\n<div class=\"checkout_area mt-md-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- <div class=\"col-12 col-md-6\"> -->\n      <div class=\"col-12 col-md-12 mb-5\">\n        <div class=\"checkout_details_area mt-50 clearfix\">\n      \n          <div class=\"cart-page-heading mb-30\">\n            <h5>Dirección de envío</h5>\n          </div>\n      <!-- #formEnvio=\"ngForm\" -->\n          <form \n              \n              id=\"formEnvio\" \n              action=\"#\" \n              method=\"post\">\n            <div class=\"row\">\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"first_name\">Nombre <span>*</span></label>\n                <input type=\"text\" class=\"form-control validate\" name=\"name\" id=\"first_name\" value=\"\" [(ngModel)]=\"checkout.name\">\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"last_name\">Apellido <span>*</span></label>\n                <input type=\"text\" class=\"form-control validate\" name=\"lastname\" id=\"last_name\" value=\"\"\n                  [(ngModel)]=\"checkout.lastname\">\n              </div>\n      \n              <!-- <div class=\"col-12 mb-3\"> -->\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"country\">País <span>*</span></label>\n                <select [(ngModel)]=\"checkout.pais_id\" class=\"w-100 form-control validate\" name=\"pais_id\" id=\"country\">\n                  <option value=\"\">Seleccioná un país</option>\n                  <option value=\"Argentina\">Argentina</option>\n                  <option value=\"Uruguay\">Uruguay</option>\n                  <option value=\"Chile\">Chile</option>\n                  <option value=\"Brasil\">Brasil</option>\n                  <option value=\"Perú\">Perú</option>\n                  <option value=\"Bolivia\">Bolivia</option>\n                  <option value=\"Paraguay\">Paraguay</option>\n                </select>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"city\">Provincia <span>*</span></label>\n                <input type=\"text\" class=\"form-control validate\" name=\"provincia\" id=\"city\" [(ngModel)]=\"checkout.provincia\" value=\"\">\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"state\">Ciudad <span>*</span></label>\n                <input type=\"text\" class=\"form-control validate\" name=\"ciudad\" id=\"state\" [(ngModel)]=\"checkout.ciudad\" value=\"\">\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"postcode\">Código Postal <span>*</span></label>\n                <input type=\"text\" class=\"form-control validate\" name=\"cp\" id=\"postcode\" (change)=\"calcularEnvio(zipCode)\"\n                  #zipCode [(ngModel)]=\"checkout.cp\" value=\"\">\n              </div>\n              <!-- <div class=\"col-12 mb-3\">\n                <label for=\"street_address\">Dirección <span>*</span></label>\n                <input type=\"text\" class=\"form-control validate mb-3\" name=\"direccion1\" id=\"direccion1\"\n                  [(ngModel)]=\"checkout.direccion1\" value=\"\">\n              </div> -->\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"street_address\">Calle <span>*</span></label>\n                <input type=\"text\" class=\"form-control validate mb-3\" name=\"calle\" id=\"calle\"\n                  [(ngModel)]=\"checkout.calle\" value=\"\">\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"street_address\">Número <span>*</span></label>\n                <input type=\"number\" class=\"form-control validate mb-3\" name=\"numero\" id=\"numero\"\n                  [(ngModel)]=\"checkout.numero\" value=\"\">\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"phone_number\">Número de teléfono <span>*</span></label>\n                <input type=\"tel\" class=\"form-control validate\" name=\"telefono\" id=\"phone_number\" min=\"0\"\n                  [(ngModel)]=\"checkout.telefono\" value=\"\">\n              </div>\n              <div class=\"col-md-6 mb-4\">\n                <label for=\"email_address\">Correo electrónico <span>*</span></label>\n                <input type=\"email\" class=\"form-control validate\" name=\"email\" id=\"email_address\" value=\"\"\n                  [(ngModel)]=\"checkout.email\">\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"custom-control custom-checkbox d-block mb-2\">\n                  <input type=\"checkbox\" class=\"custom-control-input terminos\" id=\"customCheck1\">\n                  <label class=\"custom-control-label\" for=\"customCheck1\">Términos y condiciones</label>\n                </div>\n              </div>\n      \n              <!-- <div *ngIf=\"esPagoConCredito === true && \n                            esPagoConDebito === false && \n                            esPagoEnEfectivo  === false && \n                            esPagoPorDomicilio === false\" class=\"col-md-12\">\n                <button (click)=\"enviarPagarPedido(tarjeta, codSeg, mesV, anoV, \n                                        nombreCompleto, tipoDoc, numDoc, formEnvio, terminos)\" type=\"submit\"\n                  class=\"comprarCredito btn essence-btn btn-block mt-3\">\n                  Comprar Pedido\n                </button>\n              </div>\n      \n              <div *ngIf=\"esPagoConDebito === true &&\n                            esPagoConCredito === false &&\n                            esPagoEnEfectivo  === false &&\n                            esPagoPorDomicilio === false\" class=\"col-md-12\">\n                <button (click)=\"enviarPagarPedido(tarjeta, codSeg, mesV, anoV, \n                                nombreCompleto, tipoDoc, numDoc, formEnvio, terminos)\" type=\"submit\"\n                  class=\"comprarDebito btn essence-btn btn-block mt-3\">\n                  Comprar Pedido\n                </button>\n              </div>\n      \n              <div *ngIf=\"esPagoEnEfectivo === true \n                            && esPagoConDebito === false \n                            && esPagoConCredito  === false \n                            && esPagoPorDomicilio === false\" class=\"col-md-12\">\n                <button (click)=\"enviarPagarPedido(tarjeta, codSeg, mesV, anoV, \n                                        nombreCompleto, tipoDoc, numDoc, formEnvio, terminos)\" type=\"submit\"\n                  class=\"comprarEfectivo comprar btn essence-btn btn-block mt-3\">\n                  Comprar Pedido\n                </button>\n              </div> -->\n      \n            </div>\n          </form>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"productosCarrito\" class=\"col-12 col-md-6 col-lg-5 ml-lg-auto\"> -->\n      <!-- <div class=\"row\"> -->\n      <div *ngIf=\"productosCarrito\" class=\"col-12\">\n\n        <div class=\"order-details-confirmation mb-100\">\n\n          <div class=\"cart-page-heading\">\n            <h5>Tu Orden</h5>\n            <p>Detalles</p>\n          </div>\n\n          <ul class=\"order-details-form mb-4\">\n            <li><span>Producto</span> <span>Total</span></li>\n            <li *ngFor=\"let producto of productosCarrito\">\n              <!-- <li> -->\n              <span>{{ producto.titulo }}</span>\n              <span *ngIf=\"!producto.descuento\">${{ producto.precio }}</span>\n              <span\n                *ngIf=\"producto.descuento\">${{ (producto.precio - (producto.descuento/100)*(producto.precio)) }}</span>\n            </li>\n            <li><span>Subtotal</span> <span>${{ subTotal }}</span></li>\n            <li><span>Envío<small class=\"ml-2\">Costo aproximado</small>\n              <small class=\"d-block\">Estas dentro del Casco Urbano de La Plata?</small>\n              <small class=\"d-block\"> Hace click acá\n              <input (click)=\"dentroCasco.checked ? envio.laplata : envio.costo\"\n                type=\"checkbox\"\n                #dentroCasco\n                name=\"\"\n                id=\"dentroCasco\"></small></span>\n              <span *ngIf=\"dentroCasco.checked\">${{ envio.laplata }}</span>\n              <span *ngIf=\"!dentroCasco.checked\">${{ envio.costo }}</span></li>\n            <!-- <li><span>Envío</span> <span> -->\n              <!-- <button class=\"btn\" (click)=\"calcularEnvio(zipCode)\">Calcular</button> -->\n            <!-- </span></li> -->\n            <li *ngIf=\"dentroCasco.checked\"><span>Total</span> <span>${{ subTotal + envio.laplata }}</span></li>\n            <li *ngIf=\"!dentroCasco.checked\"><span>Total</span> <span>${{ subTotal + envio.costo }}</span></li>\n          </ul>\n\n          <div id=\"accordion\" role=\"tablist\" class=\"mb-4\">\n            <div class=\"card\">\n              <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                <h6 class=\"mb-0\">\n                  <a data-toggle=\"collapse\" class=\"medioDePago\" href=\"#collapseOne\" aria-expanded=\"false\"\n                    aria-controls=\"collapseOne\"><i class=\"fa fa-circle-o mr-3\"></i>Tarjeta de crédito</a>\n                </h6>\n              </div>\n\n              <div id=\"collapseOne\" class=\"collapse tarjetaCredito col-md-12\" role=\"tabpanel\"\n                aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <div class=\"tarjetasCreditoDisponibles ml-4\">\n                  <img *ngFor=\"let tarjeta of this.tarjetasCreditoDisponibles\" [src]=\"tarjeta.thumbnail\" alt=\"\"\n                    class=\"img-thumbnail m-2\">\n                </div>\n                <div class=\"card-body float-left\">\n                  <form\n                    *ngIf=\"esPagoConCredito === true && esPagoConDebito === false && esPagoEnEfectivo  === false && esPagoPorDomicilio === false\"\n                    action=\"\" class=\"\" method=\"post\" id=\"pay\" name=\"pay\">\n                    <!-- <fieldset> -->\n                    <div class=\"row\">\n                      <div class=\"col-12 mb-3\">\n                        <label for=\"email\">Correo electrónico <span>*</span></label>\n                        <!-- <input id=\"email\" class=\"form-control\" name=\"email\" value=\"test_user_4855076@testuser.com\" type=\"email\"\n                            placeholder=\"your email\" > -->\n                        <input id=\"email\" class=\"form-control validateCard\" name=\"email\" value=\"\" type=\"email\"\n                          placeholder=\"Ingresá tu email...\">\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label class=\"\" for=\"cardholderName\">Nombre completo <span>*</span></label>\n                        <small> Como aparece en la tarjeta</small>\n                        <input #nombreCompleto class=\"form-control validateCard\" type=\"text\" id=\"cardholderName\"\n                          data-checkout=\"cardholderName\" placeholder=\"\">\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"cardNumber\">Número de tarjeta de crédito <span>*</span></label>\n                        <input #tarjeta class=\"form-control validateCard\" type=\"text\" id=\"cardNumber\" data-checkout=\"cardNumber\"\n                          placeholder=\"4509 9535 6623 3704\" onselectstart=\"\" onCopy=\"return false\" onCut=\"return false\"\n                          onDrag=\"return false\" onDrop=\"return false\" autocomplete=off>\n                        <!-- <input #tarjeta class=\"form-control validateCard\" type=\"text\" id=\"cardNumber\" data-checkout=\"cardNumber\"\n                            placeholder=\"4509 9535 6623 3704\" onselectstart=\"return false\" onpaste=\"return false\"\n                            onCopy=\"return false\" onCut=\"return false\" onDrag=\"return false\" onDrop=\"return false\"\n                            autocomplete=off > -->\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"securityCode\">Código de seguridad <span>*</span></label>\n                        <input #codSeg class=\"form-control validateCard\" type=\"text\" id=\"securityCode\" data-checkout=\"securityCode\"\n                          placeholder=\"123\" onselectstart=\"return false\" onpaste=\"return false\" onCopy=\"return false\"\n                          onCut=\"return false\" onDrag=\"return false\" onDrop=\"return false\" autocomplete=off>\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"cardExpirationMonth\">Mes de vencimiento <span>*</span></label>\n                        <input #mesV class=\"form-control validateCard\" type=\"text\" id=\"cardExpirationMonth\"\n                          data-checkout=\"cardExpirationMonth\" placeholder=\"12\" onselectstart=\"return false\"\n                          onpaste=\"return false\" onCopy=\"return false\" onCut=\"return false\" onDrag=\"return false\"\n                          onDrop=\"return false\" autocomplete=off>\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"cardExpirationYear\">Año de vencimiento <span>*</span></label>\n                        <input #anoV class=\"form-control validateCard\" type=\"text\" id=\"cardExpirationYear\"\n                          data-checkout=\"cardExpirationYear\" placeholder=\"2015\" onselectstart=\"return false\"\n                          onpaste=\"return false\" onCopy=\"return false\" onCut=\"return false\" onDrag=\"return false\"\n                          onDrop=\"return false\" autocomplete=off>\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"cuotas\">Cuotas disponibles para su tarjeta <span>*</span></label>\n                        <select class=\"w-100 form-control validateCard\" id=\"cuotas\" data-checkout=\"installments\">\n                          <option value=\"\" disabled selected>Seleccione</option>\n                          <option *ngFor=\"let cuota of cuotasDisponibles\" value=\"{{cuota.cantidad}}\">{{cuota.mensaje}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"docType\">Tipo de documento <span>*</span></label>\n                        <select #tipoDoc class=\"w-100 form-control validateCard\" id=\"docType\" data-checkout=\"docType\">\n                          <option value=\"\" disabled selected>Seleccione</option>\n                          <option *ngFor=\"let doc of tipoDocumentos\" value=\"{{doc.id}}\">{{doc.name}}</option>\n                        </select>\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"docNumber\">Número de documento <span>*</span></label>\n                        <div *ngFor=\"let doc of tipoDocumentos\">\n                          <input #numDoc *ngIf=\"opcionDoc === doc.id\" [attr.maxlength]=\"doc.max_length\"\n                            [attr.minlength]=\"doc.min_length\" class=\"form-control validateCard {{doc.id}}\" type=\"{{doc.type}}\"\n                            id=\"{{doc.id}}\" data-checkout=\"docNumber\" value=\"\" placeholder=\"\">\n                        </div>\n                        <input disabled *ngIf=\"tipoDoc.value === ''\" class=\"form-control\" type=\"number\" value=\"\"\n                          placeholder=\"\">\n\n                        <!-- <input #numDoc class=\"form-control\" type=\"text\" id=\"docNumber\" data-checkout=\"docNumber\"\n                            value=\"\" placeholder=\"\"> -->\n                      </div>\n                    </div>\n                    <input type=\"hidden\" name=\"paymentMethodId\">\n                    <!-- <input type=\"submit\" class=\" btn btn-outline-dark\" value=\"Pay!\"> -->\n                    <!-- </fieldset> -->\n                    <!-- <div class=\"col-md-6\">\n                      <div class=\"custom-control custom-checkbox d-block mb-2\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" #terminos>\n                        <label class=\"custom-control-label\" for=\"customCheck1\">Términos y condiciones</label>\n                      </div>\n                    </div> -->\n                    <div class=\"col-md-12\">\n                      <button \n                        type=\"submit\"\n                        class=\"comprarCredito btn essence-btn btn-block mt-3\">\n                        Comprar Pedido\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                <h6 class=\"mb-0\">\n                  <a class=\"collapsed medioDePago\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\"\n                    aria-controls=\"collapseTwo\"><i class=\"fa fa-circle-o mr-3\"></i>Tarjeta de débito</a>\n                </h6>\n              </div>\n\n              <div id=\"collapseTwo\" class=\"collapse tarjetaDebito\" role=\"tabpanel\" aria-labelledby=\"headingTwo\"\n                data-parent=\"#accordion\">\n                <div class=\"tarjetasDebitoDisponibles ml-4\">\n                  <img *ngFor=\"let tarjeta of this.tarjetasDebitoDisponibles\" [src]=\"tarjeta.thumbnail\" alt=\"\"\n                    class=\"img-thumbnail m-2\">\n                </div>\n\n                <div class=\"card-body\">\n                  <form *ngIf=\"esPagoConDebito === true &&\n                        esPagoConCredito === false &&\n                        esPagoEnEfectivo  === false &&\n                        esPagoPorDomicilio === false\" action=\"\" class=\"\" method=\"post\" id=\"pay\" name=\"pay\">\n                    <!-- <fieldset> -->\n                    <div class=\"row\">\n                      <div class=\"col-12 mb-3\">\n                        <label for=\"email\">Correo electrónico <span>*</span></label>\n                        <!-- <input id=\"email\" class=\"form-control\" name=\"email\" value=\"cris@cris.com\" type=\"email\"\n                                                placeholder=\"your email\" > -->\n                        <input id=\"email\" class=\"form-control validateCard\" name=\"email\" value=\"\" type=\"email\"\n                          placeholder=\"Ingresá tu email...\">\n                      </div>\n                      <div class=\"col-md-12 mb-3\">\n                        <label class=\"\" for=\"cardholderName\">Nombre completo <span>*</span></label>\n                        <small> Como aparece en la tarjeta</small>\n                        <input #nombreCompleto class=\"form-control validateCard\" type=\"text\" id=\"cardholderName\"\n                          data-checkout=\"cardholderName\" placeholder=\"\">\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"cardNumber\">Número de tarjeta de crédito <span>*</span></label>\n                        <input #tarjeta class=\"form-control validateCard\" type=\"text\" id=\"cardNumber\" data-checkout=\"cardNumber\"\n                          placeholder=\"4509 9535 6623 3704\" onselectstart=\"\" onCopy=\"return false\" onCut=\"return false\"\n                          onDrag=\"return false\" onDrop=\"return false\" autocomplete=off>\n                        <!-- <input #tarjeta class=\"form-control validateCard\" type=\"text\" id=\"cardNumber\" data-checkout=\"cardNumber\"\n                                                placeholder=\"4509 9535 6623 3704\" onselectstart=\"return false\" onpaste=\"return false\"\n                                                onCopy=\"return false\" onCut=\"return false\" onDrag=\"return false\" onDrop=\"return false\"\n                                                autocomplete=off > -->\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"securityCode\">Código de seguridad <span>*</span></label>\n                        <input #codSeg class=\"form-control validateCard\" type=\"text\" id=\"securityCode\" data-checkout=\"securityCode\"\n                          placeholder=\"123\" onselectstart=\"return false\" onpaste=\"return false\" onCopy=\"return false\"\n                          onCut=\"return false\" onDrag=\"return false\" onDrop=\"return false\" autocomplete=off>\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"cardExpirationMonth\">Mes de vencimiento <span>*</span></label>\n                        <input #mesV class=\"form-control validateCard\" type=\"text\" id=\"cardExpirationMonth\"\n                          data-checkout=\"cardExpirationMonth\" placeholder=\"12\" onselectstart=\"return false\"\n                          onpaste=\"return false\" onCopy=\"return false\" onCut=\"return false\" onDrag=\"return false\"\n                          onDrop=\"return false\" autocomplete=off>\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"cardExpirationYear\">Año de vencimiento <span>*</span></label>\n                        <input #anoV class=\"form-control validateCard\" type=\"text\" id=\"cardExpirationYear\"\n                          data-checkout=\"cardExpirationYear\" placeholder=\"2015\" onselectstart=\"return false\"\n                          onpaste=\"return false\" onCopy=\"return false\" onCut=\"return false\" onDrag=\"return false\"\n                          onDrop=\"return false\" autocomplete=off>\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"docType\">Tipo de documento <span>*</span></label>\n                        <select #tipoDoc class=\"w-100 form-control validateCard\" id=\"docType\" data-checkout=\"docType\">\n                          <option value=\"\" disabled selected>Seleccione</option>\n                          <option *ngFor=\"let doc of tipoDocumentos\" value=\"{{doc.id}}\">{{doc.name}}</option>\n                        </select>\n                      </div>\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"docNumber\">Número de documento <span>*</span></label>\n                        <div *ngFor=\"let doc of tipoDocumentos\">\n                          <input #numDoc *ngIf=\"opcionDoc === doc.id\" [attr.maxlength]=\"doc.max_length\"\n                            [attr.minlength]=\"doc.min_length\" class=\"form-control validateCard {{doc.id}}\" type=\"{{doc.type}}\"\n                            id=\"{{doc.id}}\" data-checkout=\"docNumber\" value=\"\" placeholder=\"\">\n                        </div>\n                        <input disabled *ngIf=\"tipoDoc.value === ''\" class=\"form-control\" type=\"number\" value=\"\"\n                          placeholder=\"\">\n\n                        <!-- <input #numDoc class=\"form-control\" type=\"text\" id=\"docNumber\" data-checkout=\"docNumber\"\n                                                value=\"\" placeholder=\"\"> -->\n                      </div>\n                    </div>\n                    <input type=\"hidden\" name=\"paymentMethodId\">\n                    <!-- <input type=\"submit\" class=\" btn btn-outline-dark\" value=\"Pay!\"> -->\n                    <!-- </fieldset> -->\n                    <!-- <div class=\"col-md-6\">\n                      <div class=\"custom-control custom-checkbox d-block mb-2\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" #terminos>\n                        <label class=\"custom-control-label\" for=\"customCheck1\">Términos y condiciones</label>\n                      </div>\n                    </div> -->\n                    <div class=\"col-md-12\">\n                      <button \n                        type=\"submit\"\n                        class=\"comprarDebito btn essence-btn btn-block mt-3\">\n                        Comprar Pedido\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n                <h6 class=\"mb-0\">\n                  <a class=\"collapsed medioDePago\" data-toggle=\"collapse\" href=\"#collapseThree\" aria-expanded=\"false\"\n                    aria-controls=\"collapseThree\"><i class=\"fa fa-circle-o mr-3\"></i>Pago en efectivo</a>\n                </h6>\n              </div>\n              <div id=\"collapseThree\" class=\"collapse efectivo\" role=\"tabpanel\" aria-labelledby=\"headingThree\"\n                data-parent=\"#accordion\">\n\n                <div class=\"pagoEnEfectivo ml-4\">\n                  <img *ngFor=\"let efectivo of this.pagoEnEfectivo\" [src]=\"efectivo.thumbnail\" alt=\"\"\n                    class=\"img-thumbnail m-2\">\n                </div>\n\n                <div class=\"card-body\">\n                  <form *ngIf=\"esPagoEnEfectivo === true \n                              && esPagoConDebito === false \n                              && esPagoConCredito  === false \n                              && esPagoPorDomicilio === false\" action=\"\" class=\"\" method=\"post\" id=\"pay\" name=\"pay\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12 mb-3\">\n                        <label for=\"email\">Correo electrónico <span>*</span></label>\n                        <input id=\"email\" class=\"form-control mailEfectivo\" name=\"email\" value=\"\" type=\"email\"\n                          placeholder=\"Ingresá tu email...\">\n                      </div>\n                      <div class=\"col-md-12 mb-3\">\n                        <label for=\"medioPagoEfectivo\">Empresa <span>*</span></label>\n                        <select class=\"form-control\" name=\"\" id=\"medioPagoEfectivo\">\n                          <option disabled selected value=\"\">Seleccione<span>*</span></option>\n                          <option *ngFor=\"let efectivo of this.pagoEnEfectivo\" [value]=\"efectivo.id\">{{ efectivo.name }}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <input type=\"hidden\" name=\"paymentMethodId\">\n                    <!-- <div class=\"col-md-6\">\n                      <div class=\"custom-control custom-checkbox d-block mb-2\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" #terminos>\n                        <label class=\"custom-control-label\" for=\"customCheck1\">Términos y condiciones</label>\n                      </div>\n                    </div> -->\n                    <div class=\"col-md-12\">\n                      <button \n                              \n                              type=\"submit\"\n                        class=\"comprarEfectivo comprar btn essence-btn btn-block mt-3\">\n                        Comprar Pedido\n                      </button>\n                    </div>\n\n                  </form>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"card\">\n              <div class=\"card-header\" role=\"tab\" id=\"headingFour\">\n                <h6 class=\"mb-0\">\n                  <a class=\"collapsed medioDePago\" data-toggle=\"collapse\" href=\"#collapseFour\" aria-expanded=\"false\"\n                    aria-controls=\"collapseFour\"><i class=\"fa fa-circle-o mr-3\"></i>Retirar por domicilio</a>\n                </h6>\n              </div>\n              <div id=\"collapseFour\" class=\"collapse domicilio\" role=\"tabpanel\" aria-labelledby=\"headingThree\"\n                data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                  <div class=\"col-md-6\">\n                    <div class=\"custom-control custom-checkbox d-block mb-2\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" #terminos>\n                      <label class=\"custom-control-label\" for=\"customCheck1\">Términos y condiciones</label>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <button\n                      *ngIf=\"esPagoPorDomicilio === true && esPagoConDebito === false && esPagoEnEfectivo  === false && esPagoConCredito === false\"\n                      (click)=\"enviarPagarPedido(tarjeta, codSeg, mesV, anoV, \n                                      nombreCompleto, tipoDoc, numDoc, formEnvio, terminos)\" type=\"submit\"\n                      class=\"comprarPorDomicilio comprar btn essence-btn btn-block mt-3\">\n                      Comprar Pedido\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n      <!-- </div> -->\n    </div>\n  </div>\n</div>\n<!-- ##### Checkout Area End ##### -->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shop/producto-detalle.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shop/producto-detalle.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cargando\" style=\"margin-top: 400px; margin-bottom: 300px;\" class=\"row text-center animated fadeIn\">\n  <div class=\"col\">\n\n    <img style=\"width: 10%\" src=\"assets/loading/Rolling-1s-200px.svg\" alt=\"\">\n\n  </div>\n</div>\n\n<section *ngIf=\"!cargando && productoConImagen\" class=\"single_product_details_area d-flex align-items-center\">\n\n  <!-- Single Product Thumb -->\n  <div class=\"single_product_thumb clearfix\">\n    <div class=\"product_thumbnail_slides owl-carousel\">\n      <img *ngFor=\"let imagen of productoConImagen['path']\" [src]=\"imagen\" alt=\"\">\n    </div>\n  </div>\n\n  <!-- <div *ngIf=\"productoConImagen['path']\" id=\"carouselExampleIndicators\" class=\"carousel slide single_product_thumb clearfix\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li *ngIf=\"productoConImagen['path'][0]\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\"></li>\n      <li *ngIf=\"productoConImagen['path'][1]\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li *ngIf=\"productoConImagen['path'][2]\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n      <li *ngIf=\"productoConImagen['path'][3]\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n      <li *ngIf=\"productoConImagen['path'][4]\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"{{productoConImagen['path'][0]}}\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div *ngIf=\"productoConImagen['path'][1]\" class=\"carousel-item\">\n        <img src=\"{{productoConImagen['path'][1]}}\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div *ngIf=\"productoConImagen['path'][2]\" class=\"carousel-item\">\n        <img src=\"{{productoConImagen['path'][2]}}\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div *ngIf=\"productoConImagen['path'][3]\" class=\"carousel-item\">\n        <img src=\"{{productoConImagen['path'][3]}}\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div *ngIf=\"productoConImagen['path'][4]\" class=\"carousel-item\">\n        <img src=\"{{productoConImagen['path'][4]}}\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div> -->\n\n  <!-- Single Product Description -->\n  <div class=\"single_product_desc clearfix\">\n    <!-- marca\n    <span>mango</span>\n    -->\n\n    <!-- con darle click aca agrego al carrito -->\n    <a href=\"cart.html\">\n      <h2>{{ productoConImagen['titulo'] }}</h2>\n    </a>\n    <p *ngIf=\"productoConImagen['descuento']\" class=\"product-price\"><span class=\"old-price\">{{ productoConImagen['precio'] | currency }}</span> {{ (productoConImagen['precio'] - (productoConImagen['descuento']/100)*(productoConImagen['precio'])) | currency }}</p>\n    <p *ngIf=\"!productoConImagen['descuento']\" class=\"product-price\">{{ productoConImagen['precio'] | currency }}</p>\n    <p class=\"product-desc\">{{ productoConImagen['descripcion'] }}</p>\n\n    <!-- Form -->\n    <form *ngIf=\"stockProducto.length !== 0\" (ngSubmit)=\"onSubmit(productoConImagen['id'], talle.value)\"\n      class=\"cart-form clearfix\" method=\"post\">\n      <!-- Select Box -->\n      \n      <!-- <div class=\"select-box d-flex mt-50 mb-30\">\n        <select name=\"select\" id=\"productSize\" class=\"mr-5\">\n          <option *ngFor=\"let talle of stockProducto\" name=\"talle\" value=\"talle.talle_nombre\">Talle: {{ talle.talle_nombre }}</option>\n        </select>\n      </div> -->\n      <div class=\"select-box d-flex mt-50 mb-30\">\n        <select name=\"talle\" id=\"productSize\" #talle class=\"mr-5\">\n          <option *ngFor=\"let talle of stockProducto\" value=\"{{talle.talle_nombre}}\">Talle:\n            {{ talle.talle_nombre }}</option>\n        </select>\n      </div>\n      <!-- Cart & Favourite Box -->\n      <div class=\"cart-fav-box d-flex align-items-center\">\n        <!-- Cart -->\n        <button type=\"submit\" name=\"addtocart\" class=\"btn essence-btn\">Agregar</button>\n        <!-- Favourite -->\n        <div class=\"product-favourite ml-4\">\n          <a \n            (click)=\"guardarFavoritos(productoConImagen['id'])\" \n            [ngStyle]=\"{'color': esFavorito ? 'red' : 'LightGrey'}\"\n            class=\"favme fa fa-heart\">\n          </a>\n          <!-- <a (click)=\"guardarFavoritos(productoConImagen['id'])\">\n            <i class=\"fav fa-heart\" [ngStyle]=\"{'color': esFavorito ? 'red' : 'inherit'}\" aria-hidden=\"true\"></i>\n          </a> -->\n        </div>\n      </div>\n    </form>\n\n    <form *ngIf=\"stockProducto.length === 0\" class=\"cart-form clearfix\" method=\"post\">\n      <!-- Select Box -->\n      <div class=\"select-box d-flex mt-50 mb-30\">\n        <select name=\"select\" id=\"productSize\" class=\"mr-5\">\n          <option disabled>producto sin stock</option>\n        </select>\n      </div>\n      <!-- Cart & Favourite Box -->\n      <!-- <div class=\"cart-fav-box d-flex align-items-center\"> -->\n        <!-- Cart -->\n        <!-- <button type=\"submit\" name=\"addtocart\" value=\"5\" class=\"btn essence-btn\">Add to cart</button> -->\n        <!-- Favourite -->\n        <!-- <div class=\"product-favourite ml-4\">\n          <a href=\"#\" class=\"favme fa fa-heart\"></a>\n        </div> -->\n      <!-- </div> -->\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shop/producto.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shop/producto.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Single Product -->\n<!-- <div class=\"col-12 col-sm-6 col-lg-4\"> -->\n  <div class=\"single-product-wrapper\">\n    <!-- Product Image -->\n    <div class=\"product-img\">\n    <!-- <div class=\"product-img\" style=\"height: 210px\"> -->\n      <img [src]=\"producto.path[0]\" alt=\"\">\n      <!-- Hover Thumb -->\n      <!-- <img class=\"hover-img\" src=\"../../../assets/template/img/product-img/product-2.jpg\" alt=\"\"> -->\n      <img class=\"hover-img\" [src]=\"producto.path[1]\" alt=\"\">\n\n      <!-- Product Badge -->\n      <div *ngIf=\"producto.descuento && producto.nuevo\">\n        <div class=\"product-badge mt-5 offer-badge\">\n          <span>-{{ (producto.descuento/100) | percent}}</span>\n        </div>\n        <div class=\"product-badge new-badge\">\n          <span>NEW</span>\n        </div>\n      </div>\n      <div *ngIf=\"producto.descuento && !producto.nuevo\" class=\"product-badge offer-badge\">\n        <span>-{{ (producto.descuento/100) | percent}}</span>\n      </div>\n      <div *ngIf=\"producto.nuevo && !producto.descuento\" class=\"product-badge new-badge\">\n        <span>NEW</span>\n      </div>\n      <!-- Favourite -->\n      <div class=\"product-favourite\">\n        <a (click)=\"guardarFavoritos(producto.id)\">\n          <i class=\"fa fa-heart\" [ngStyle]=\"{'color': esFavorito ? 'red' : 'inherit'}\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n\n    <!-- Product Description -->\n    <div class=\"product-description\">\n      <span>{{ producto.categoria }}</span>\n      <a [routerLink]=\"['/shop/producto/', producto.id]\">\n        <h6>{{ producto.titulo }}</h6>\n      </a>\n      <p *ngIf=\"producto.descuento\" class=\"product-price\">\n        <span class=\"old-price\">{{ producto.precio | currency }}</span>\n        <!-- {{ (producto.precio/producto.descuento) | currency }} -->\n        {{ (producto.precio - (producto.descuento/100)*(producto.precio)) | currency }}\n      </p>\n      <p *ngIf=\"!producto.descuento\" class=\"product-price\">\n        {{ producto.precio | currency }}\n      </p>\n\n      <!-- Hover Content -->\n      <div class=\"hover-content\">\n        <!-- Add to Cart -->\n        <!-- <div class=\"add-to-cart-btn\">\n          <a style=\"color: white;\" (click)=\"agregarAlCarrito(producto.id)\" class=\"btn essence-btn\">agregar</a>\n        </div> -->\n      </div>\n    </div>\n  </div>\n<!-- </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shop/shop.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shop/shop.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ##### Breadcumb Area Start ##### -->\n<div class=\"breadcumb_area bg-img\" style=\"background-image: url(assets/template/img/bg-img/breadcumb.jpg);\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12\">\n        <div class=\"page-title text-center\">\n          <h2>Genoveva Shop Online</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- ##### Breadcumb Area End ##### -->\n\n<!-- ##### Shop Grid Area Start ##### -->\n<section class=\"shop_grid_area section-padding-80\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-4 col-lg-3\">\n        <div class=\"shop_sidebar_area\">\n\n          <!-- ##### Single Widget ##### -->\n          <div class=\"widget catagory mb-50\">\n            <a data-toggle=\"collapse\" href=\"#multiCollapseExample1\" role=\"\"\n              aria-expanded=\"true\" aria-controls=\"multiCollapseExample1\">\n              <h6 class=\"widget-title mb-30\">Categorias</h6>\n            </a>\n            <div class=\"col catagories-menu\">\n              <div class=\"collapse multi-collapse show\" id=\"multiCollapseExample1\">\n                <div>\n                  <ul id=\"menu-content2\" class=\"menu-content collapse show\">\n                    <!-- Single Item -->\n                    <li (click)=\"cambiarCategoria(categoria.id)\" *ngFor=\"let categoria of categoriasPrincipales\"\n                      data-toggle=\"collapse\" data-target=\"#clothing\">\n                      <a [routerLink]=\"['/shop']\">{{categoria.nombre}}</a>\n                      <!-- <a [routerLink]=\"['/shop/categoria/', categoria.id]\">{{categoria.nombre}}</a> -->\n                    </li>\n                    <li (click)=\"cambiarCategoria(99)\" data-toggle=\"collapse\" data-target=\"#clothing\">\n                      <a [routerLink]=\"['/shop']\">Todas</a>\n                      <!-- <a [routerLink]=\"['/shop/categoria/', categoria.id]\">{{categoria.nombre}}</a> -->\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n          <!-- <div class=\"widget catagory mb-50\">\n            Widget Title\n            <h6 class=\"widget-title mb-30\">Categorias</h6>\n\n             Catagories \n            <div class=\"catagories-menu\">\n              <ul id=\"menu-content2\" class=\"menu-content collapse show\">\n                Single Item\n                <li (click)=\"cambiarCategoria(categoria.id)\" *ngFor=\"let categoria of categoriasPrincipales\" data-toggle=\"collapse\" data-target=\"#clothing\">\n                  <a [routerLink]=\"['/shop']\">{{categoria.nombre}}</a>\n                </li>\n                <li (click)=\"cambiarCategoria(99)\" data-toggle=\"collapse\" data-target=\"#clothing\">\n                  <a [routerLink]=\"['/shop']\">Todas</a>\n                </li>\n              </ul>\n            </div>\n          </div> -->\n\n          <!-- ##### Single Widget ##### -->\n          <!-- <div class=\"widget price mb-50\">\n            Widget Title\n            <h6 class=\"widget-title mb-30\">Filtrar por</h6>\n            Widget Title 2\n            <p class=\"widget-title2 mb-30\">Precio</p>\n\n            <div class=\"widget-desc\">\n              <div class=\"slider-range\">\n                <div data-min=\"1\" data-max=\"5000\" data-unit=\"$\"\n                  class=\"slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all\"\n                  data-value-min=\"1\" data-value-max=\"5000\" data-label-result=\"Range:\">\n                  <div class=\"ui-slider-range ui-widget-header ui-corner-all\"></div>\n                  <span (change)=\"filtrarPorPrecio(rango)\" class=\"ui-slider-handle ui-state-default ui-corner-all\"\n                    tabindex=\"0\"></span>\n                  <span (change)=\"filtrarPorPrecio(rango)\" class=\"ui-slider-handle ui-state-default ui-corner-all\"\n                    tabindex=\"0\"></span>\n                </div>\n                <div #rango class=\"range-price\">Rango: $1.00 - $5000.00</div>\n              </div>\n            </div>\n          </div> -->\n\n          <!-- ##### Single Widget ##### -->\n          <div class=\"widget color mb-50\">\n            <div class=\"widget catagory mb-50\">\n              <a data-toggle=\"collapse\" href=\"#multiCollapseExample2\" role=\"\" aria-expanded=\"false\"\n                aria-controls=\"multiCollapseExample2\">\n                <h6 class=\"widget-title mb-30\">Color</h6>\n              </a>\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"multiCollapseExample2\">\n                  <div class=\"widget-desc\">\n                    <ul class=\"d-flex\">\n                      <li (click)=\"filtrarColor(color.id)\" *ngFor=\"let color of colores\"><a [routerLink]=\"['/shop']\"\n                          [style.backgroundColor]=\"color.nombre\"></a></li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n\n\n            <!-- Widget Title 2 -->\n            <!-- <p class=\"widget-title2 mb-30\">Color</p>\n            <div class=\"widget-desc\">\n              <ul class=\"d-flex\">\n                <li (click)=\"filtrarColor(color.id)\" *ngFor=\"let color of colores\"><a [routerLink]=\"['/shop']\" [style.backgroundColor]=\"color.nombre\"></a></li>\n              </ul>\n            </div> -->\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-12 col-md-8 col-lg-9\">\n        <div class=\"shop_grid_product_area\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"product-topbar d-flex align-items-center justify-content-between\">\n                <!-- Total Products -->\n                <div class=\"total-products\">\n                  <p><span *ngIf=\"this.productosBD\">{{ this.productosBD.length }}</span> productos encontrados</p>\n                </div>\n                <!-- Sorting -->\n                <div class=\"product-sorting d-flex\">\n                  <p>Ordenar por:</p>\n                  <form action=\"#\" method=\"get\">\n                    <select (change)=\"ordenarPor(ordenar.value)\" #ordenar name=\"select\" id=\"sortByselect\">\n                      <option value=\"\">Ordenar...</option>\n                      <option value=\"nuevo\">Más nuevo</option>\n                      <option value=\"mayor\">Precio: $$$ - $</option>\n                      <option value=\"menor\">Precio: $ - $$$</option>\n                    </select>\n                    <input type=\"submit\" class=\"d-none\" value=\"\">\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"cargando\" class=\"row text-center animated fadeIn\">\n            <div class=\"col\">\n\n              <img style=\"width: 10%\" src=\"assets/loading/Rolling-1s-200px.svg\" alt=\"\">\n\n            </div>\n          </div>\n\n            <!-- <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 800px;\">\n              todos los productos\n              <div class=\"row\" *ngIf=\"!filtraCategoria && !cargando && !filtraColor && !ordenado\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productosBD\" [producto]=\"producto\">\n                </app-producto>\n              </div>\n              productos filtrados por color\n              <div class=\"row\" *ngIf=\"filtraColor && !cargando && !filtraCategoria && !ordenado\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productoPorColor\" [producto]=\"producto\">\n                </app-producto>\n              </div>\n              productos filtrados por categorias\n              <div class=\"row\" *ngIf=\"filtraCategoria && !cargando && !filtraColor && !ordenado\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productoPorCategoria\"\n                  [producto]=\"producto\"></app-producto>\n              </div>\n               productos ordenados\n              <div class=\"row\" *ngIf=\"!filtraCategoria && !cargando && !filtraColor && ordenado\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productoOrdenado\" [producto]=\"producto\">\n                </app-producto>\n              </div>\n            </cdk-virtual-scroll-viewport> -->\n\n            <!-- todos los productos -->\n            <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 800px;\" \n              *ngIf=\"!filtraCategoria && !cargando && !filtraColor && !ordenadoMayor && !ordenadoMenor && !ordenadoNuevo && !ordenado\">\n              <div class=\"row\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productosBD\" [producto]=\"producto\">\n                </app-producto>\n              </div>\n            </cdk-virtual-scroll-viewport>\n\n            <!-- productos filtrados por color -->\n            <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 800px;\" \n              *ngIf=\"filtraColor && !cargando && !filtraCategoria && !ordenadoMayor && !ordenadoMenor && !ordenadoNuevo && !ordenado\">\n              <div class=\"row\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productoPorColor\" [producto]=\"producto\">\n                </app-producto>\n              </div>\n            </cdk-virtual-scroll-viewport>\n\n            <!-- productos filtrados por categorias -->\n            <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 800px;\" \n              *ngIf=\"filtraCategoria && !cargando && !filtraColor && !ordenadoMayor && !ordenadoMenor && !ordenadoNuevo && !ordenado\">\n              <div class=\"row\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productoPorCategoria\"\n                  [producto]=\"producto\"></app-producto>\n              </div>\n            </cdk-virtual-scroll-viewport>\n\n            <!-- productos ordenados por mayor precio-->\n            <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 800px;\" \n              *ngIf=\"!filtraCategoria && !cargando && !filtraColor && ordenadoMayor && !ordenadoMenor && !ordenadoNuevo && !ordenado\">\n              <div class=\"row\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productoOrdenado\" [producto]=\"producto\">\n                </app-producto>\n              </div>\n            </cdk-virtual-scroll-viewport>\n            <!-- productos ordenados por menor precio-->\n            <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 800px;\"\n              *ngIf=\"!filtraCategoria && !cargando && !filtraColor && !ordenadoMayor && ordenadoMenor && !ordenadoNuevo && !ordenado\">\n              <div class=\"row\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productoOrdenado\"\n                  [producto]=\"producto\">\n                </app-producto>\n              </div>\n            </cdk-virtual-scroll-viewport>\n            <!-- productos ordenados por mas nuevo-->\n            <cdk-virtual-scroll-viewport itemSize=\"50\" style=\"height: 800px;\"\n              *ngIf=\"!filtraCategoria && !cargando && !filtraColor && !ordenadoMayor && !ordenadoMenor && ordenadoNuevo && !ordenado\">\n              <div class=\"row\">\n                <app-producto class=\"col-12 col-sm-6 col-lg-4\" *cdkVirtualFor=\"let producto of this.productoOrdenado\"\n                  [producto]=\"producto\">\n                </app-producto>\n              </div>\n            </cdk-virtual-scroll-viewport>\n\n        </div>\n\n        <!-- Pagination -->\n        <!-- <nav aria-label=\"navigation\">\n          <ul class=\"pagination mt-50 mb-70\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">21</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n          </ul>\n        </nav> -->\n      </div>\n    </div>\n  </div>\n</section>\n<!-- ##### Shop Grid Area End ##### -->"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/carrito.service */ "./src/app/services/carrito.service.ts");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(productosService, carritoService, registroService, checkoutService) {
        this.productosService = productosService;
        this.carritoService = carritoService;
        this.registroService = registroService;
        this.checkoutService = checkoutService;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"], _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__["CarritoService"],
            _services_registro_service__WEBPACK_IMPORTED_MODULE_2__["RegistroService"], _services_checkout_service__WEBPACK_IMPORTED_MODULE_1__["CheckoutService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_shared_side_cart_side_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/side-cart/side-cart.component */ "./src/app/components/shared/side-cart/side-cart.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/components/faqs/faqs.component.ts");
/* harmony import */ var _components_politicas_politicas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/politicas/politicas.component */ "./src/app/components/politicas/politicas.component.ts");
/* harmony import */ var _components_shop_producto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shop/producto.component */ "./src/app/components/shop/producto.component.ts");
/* harmony import */ var _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/ng-drop-files.directive */ "./src/app/directives/ng-drop-files.directive.ts");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var _components_shop_producto_detalle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shop/producto-detalle.component */ "./src/app/components/shop/producto-detalle.component.ts");
/* harmony import */ var _components_home_popular_products_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/popular-products.component */ "./src/app/components/home/popular-products.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _components_registro_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/registro/login.component */ "./src/app/components/registro/login.component.ts");
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/perfil/perfil.component */ "./src/app/components/perfil/perfil.component.ts");
/* harmony import */ var _components_perfil_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/perfil/favoritos/favoritos.component */ "./src/app/components/perfil/favoritos/favoritos.component.ts");
/* harmony import */ var _components_shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/shop/checkout/checkout.component */ "./src/app/components/shop/checkout/checkout.component.ts");
/* harmony import */ var _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/busqueda/busqueda.component */ "./src/app/components/busqueda/busqueda.component.ts");
/* harmony import */ var _components_busqueda_producto_buscado_producto_buscado_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/busqueda/producto-buscado/producto-buscado.component */ "./src/app/components/busqueda/producto-buscado/producto-buscado.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _components_productos_descuento_productos_descuento_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/productos-descuento/productos-descuento.component */ "./src/app/components/productos-descuento/productos-descuento.component.ts");
/* harmony import */ var _pipes_no_image_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/no-image.pipe */ "./src/app/pipes/no-image.pipe.ts");
/* harmony import */ var _components_home_inicio_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/home/inicio.component */ "./src/app/components/home/inicio.component.ts");
/* harmony import */ var _components_registro_reset_reset_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/registro/reset/reset.component */ "./src/app/components/registro/reset/reset.component.ts");



// agregados por mi





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_shared_side_cart_side_cart_component__WEBPACK_IMPORTED_MODULE_9__["SideCartComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_11__["ShopComponent"],
                _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_12__["FaqsComponent"],
                _components_politicas_politicas_component__WEBPACK_IMPORTED_MODULE_13__["PoliticasComponent"],
                _components_shop_producto_component__WEBPACK_IMPORTED_MODULE_14__["ProductoComponent"],
                _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_15__["NgDropFilesDirective"],
                _components_shop_producto_detalle_component__WEBPACK_IMPORTED_MODULE_17__["ProductoDetalleComponent"],
                _components_home_popular_products_component__WEBPACK_IMPORTED_MODULE_18__["PopularProductsComponent"],
                _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_19__["RegistroComponent"],
                _components_registro_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_22__["PerfilComponent"],
                _components_perfil_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_23__["FavoritosComponent"],
                _components_shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_24__["CheckoutComponent"],
                _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_25__["BusquedaComponent"],
                _components_busqueda_producto_buscado_producto_buscado_component__WEBPACK_IMPORTED_MODULE_26__["ProductoBuscadoComponent"],
                _components_productos_descuento_productos_descuento_component__WEBPACK_IMPORTED_MODULE_28__["ProductosDescuentoComponent"],
                _pipes_no_image_pipe__WEBPACK_IMPORTED_MODULE_29__["NoImagePipe"],
                _components_home_inicio_component__WEBPACK_IMPORTED_MODULE_30__["InicioComponent"],
                _components_registro_reset_reset_component__WEBPACK_IMPORTED_MODULE_31__["ResetComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTING"]
            ],
            providers: [
                _services_productos_service__WEBPACK_IMPORTED_MODULE_16__["ProductosService"],
                _services_registro_service__WEBPACK_IMPORTED_MODULE_21__["RegistroService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_shop_producto_detalle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shop/producto-detalle.component */ "./src/app/components/shop/producto-detalle.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/components/faqs/faqs.component.ts");
/* harmony import */ var _components_politicas_politicas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/politicas/politicas.component */ "./src/app/components/politicas/politicas.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _components_registro_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registro/login.component */ "./src/app/components/registro/login.component.ts");
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/perfil/perfil.component */ "./src/app/components/perfil/perfil.component.ts");
/* harmony import */ var _components_perfil_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/perfil/favoritos/favoritos.component */ "./src/app/components/perfil/favoritos/favoritos.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_shared_side_cart_side_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shared/side-cart/side-cart.component */ "./src/app/components/shared/side-cart/side-cart.component.ts");
/* harmony import */ var _components_shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shop/checkout/checkout.component */ "./src/app/components/shop/checkout/checkout.component.ts");
/* harmony import */ var _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/busqueda/busqueda.component */ "./src/app/components/busqueda/busqueda.component.ts");
/* harmony import */ var _components_productos_descuento_productos_descuento_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/productos-descuento/productos-descuento.component */ "./src/app/components/productos-descuento/productos-descuento.component.ts");
/* harmony import */ var _components_home_inicio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/inicio.component */ "./src/app/components/home/inicio.component.ts");
/* harmony import */ var _components_registro_reset_reset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/registro/reset/reset.component */ "./src/app/components/registro/reset/reset.component.ts");






// import { AdminComponent } from './components/admin/admin.component';
// import { EcommerceComponent } from './components/admin/ecommerce/ecommerce.component';
// import { VentasComponent } from './components/admin/ventas/ventas.component';
// import { EstadisticasComponent } from './components/admin/estadisticas/estadisticas.component';
// import { ProductoEcommerceComponent } from './components/admin/ecommerce/producto-ecommerce.component';











var APP_ROUTES = [
    { path: '', component: _components_home_inicio_component__WEBPACK_IMPORTED_MODULE_15__["InicioComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'carrito', component: _components_shared_side_cart_side_cart_component__WEBPACK_IMPORTED_MODULE_11__["SideCartComponent"] },
    { path: 'shop', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"] },
    { path: 'shop/producto/:id', component: _components_shop_producto_detalle_component__WEBPACK_IMPORTED_MODULE_3__["ProductoDetalleComponent"] },
    { path: 'shop/descuentos', component: _components_productos_descuento_productos_descuento_component__WEBPACK_IMPORTED_MODULE_14__["ProductosDescuentoComponent"] },
    { path: 'checkout', component: _components_shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'faqs', component: _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__["FaqsComponent"] },
    { path: 'politicas', component: _components_politicas_politicas_component__WEBPACK_IMPORTED_MODULE_5__["PoliticasComponent"] },
    // { path: 'admin', component: AdminComponent },
    // { path: 'admin/ecommerce', component: EcommerceComponent },
    // { path: 'admin/ecommerce/producto/:id', component: ProductoEcommerceComponent },
    // { path: 'admin/ventas', component: VentasComponent },
    // { path: 'admin/estadisticas', component: EstadisticasComponent },
    { path: 'registro', component: _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"] },
    { path: 'login', component: _components_registro_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'reset', component: _components_registro_reset_reset_component__WEBPACK_IMPORTED_MODULE_16__["ResetComponent"] },
    { path: 'perfil/:id', component: _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__["PerfilComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'favoritos/:id', component: _components_perfil_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_9__["FavoritosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'busqueda/:termino', component: _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_13__["BusquedaComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true, onSameUrlNavigation: 'reload' });


/***/ }),

/***/ "./src/app/components/busqueda/busqueda.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/busqueda/busqueda.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzcXVlZGEvYnVzcXVlZGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/busqueda/busqueda.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/busqueda/busqueda.component.ts ***!
  \***********************************************************/
/*! exports provided: BusquedaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaComponent", function() { return BusquedaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BusquedaComponent = /** @class */ (function () {
    function BusquedaComponent(productosService, router, activatedRoute) {
        var _this = this;
        this.productosService = productosService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // termino: FormControl = new FormControl();
        this.todosLosProductos = [];
        this.todosLosProductosConImagenes = [];
        this.productosBuscados = [];
        this.buscando = false;
        this.muestro = false;
        this.cargando = true;
        this.categoriasPrincipales = [];
        this.colores = [];
        this.contenido = "";
        this.tituloPag = "";
        if (localStorage.getItem('todosLosProductos')) {
            var todosLosProductosJson = JSON.parse(localStorage.getItem('todosLosProductos'));
            this.todosLosProductos = todosLosProductosJson;
        }
        var imagenesShop;
        if (localStorage.getItem('todosLasImagenesShop')) {
            var todosLasImagenesShopJson = JSON.parse(localStorage.getItem('todosLasImagenesShop'));
            imagenesShop = todosLasImagenesShopJson;
        }
        var arregloPath = [];
        this.todosLosProductos.forEach(function (producto) {
            imagenesShop.forEach(function (imagen) {
                if (producto.id === imagen.producto_id) {
                    arregloPath.push(imagen.path);
                    producto.path = arregloPath;
                }
            });
            arregloPath = [];
            _this.todosLosProductosConImagenes.push(producto);
            setTimeout(function () {
                _this.cargando = false;
            }, 500);
        });
        if (localStorage.getItem('todosLosDatos')) {
            var todosLosDatosJson = JSON.parse(localStorage.getItem('todosLosDatos'));
            var datos = todosLosDatosJson;
            this.categoriasPrincipales = datos.principales;
            this.colores = datos.colores;
        }
    }
    BusquedaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productosService.getData().subscribe(function (data) {
            _this.termino = data;
            _this.buscando = true;
            setTimeout(function () {
                _this.buscando = false;
                _this.buscarProducto(_this.termino);
            }, 1000);
        });
        this.contenido = "Esta es la pagina de busqueda de Genoveva Shop Online, aca podras encontrar y asi poder comprar todos nuestros productos. En la pagina podras ver los productos que encontramos de acuerdo con lo que has buscado";
        this.productosService.editarMetaHead(this.contenido);
        this.tituloPag = "Resultados de la busqueda";
        this.productosService.editarTitulo(this.tituloPag);
    };
    BusquedaComponent.prototype.ngOnDestroy = function () {
        this.productosBuscados = [];
        console.log(this.contenido);
        this.productosService.reiniciarMetaHead(this.contenido);
        this.productosService.reiniciarTitulo(this.tituloPag);
    };
    BusquedaComponent.prototype.buscarProducto = function (termino) {
        var _this = this;
        // const todosLosProductosJSon = JSON.parse(localStorage.getItem('todosLosProductos'));
        var productosEncontrados = [];
        var arregloPath = [];
        var cantEncontrados = 0;
        this.todosLosProductosConImagenes.forEach(function (producto) {
            console.log(productosEncontrados);
            if (producto.titulo.toLowerCase().includes(termino)) {
                if (productosEncontrados.length !== 0) {
                    productosEncontrados.forEach(function (prodB) {
                        if (prodB.id !== producto.id) {
                            productosEncontrados.push(producto);
                            _this.productosBuscados = productosEncontrados;
                            cantEncontrados++;
                        }
                    });
                }
                else {
                    productosEncontrados.push(producto);
                    _this.productosBuscados = productosEncontrados;
                    cantEncontrados = 1;
                }
            }
            else {
                if (cantEncontrados === 0) {
                    _this.productosBuscados = [];
                    productosEncontrados = [];
                    // Swal.fire({
                    //   title: "No se encontró ningun producto",
                    //   type: "info"
                    // });
                }
            }
        });
        if (termino === '') {
            this.productosBuscados = [];
            productosEncontrados = [];
            arregloPath = [];
            productosEncontrados = this.todosLosProductosConImagenes;
            this.productosBuscados = this.todosLosProductosConImagenes;
        }
        return productosEncontrados;
    };
    BusquedaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-busqueda',
            template: __webpack_require__(/*! raw-loader!./busqueda.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/busqueda/busqueda.component.html"),
            styles: [__webpack_require__(/*! ./busqueda.component.css */ "./src/app/components/busqueda/busqueda.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BusquedaComponent);
    return BusquedaComponent;
}());



/***/ }),

/***/ "./src/app/components/busqueda/producto-buscado/producto-buscado.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/busqueda/producto-buscado/producto-buscado.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzcXVlZGEvcHJvZHVjdG8tYnVzY2Fkby9wcm9kdWN0by1idXNjYWRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/busqueda/producto-buscado/producto-buscado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/busqueda/producto-buscado/producto-buscado.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductoBuscadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoBuscadoComponent", function() { return ProductoBuscadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductoBuscadoComponent = /** @class */ (function () {
    function ProductoBuscadoComponent(productosService, router) {
        var _this = this;
        this.productosService = productosService;
        this.router = router;
        this.arrayNombresCategoriaPrincipal = [];
        this.nombreCategoria = '';
        this.buscando = false;
        this.esFavorito = false;
        this.productosFavoritos = [];
        if (localStorage.getItem('todosLosDatos')) {
            var todosLosDatosJson = JSON.parse(localStorage.getItem('todosLosDatos'));
            var datos = todosLosDatosJson;
            this.arrayNombresCategoriaPrincipal = datos.principales;
        }
        setTimeout(function () {
            if (localStorage.getItem("userId")) {
                if (localStorage.getItem("favoritosUsuario")) {
                    var favoritosUsuarioJson = JSON.parse(localStorage.getItem("favoritosUsuario"));
                    favoritosUsuarioJson.forEach(function (fav) {
                        if (fav.productId === _this.producto.id) {
                            _this.esFavorito = true;
                        }
                    });
                }
            }
        }, 1000);
        setTimeout(function () {
            _this.arrayNombresCategoriaPrincipal.forEach(function (categoria) {
                if (categoria.id === _this.producto.categoria_id) {
                    console.log(categoria.nombre);
                    _this.nombreCategoria = categoria.nombre;
                }
            });
        }, 1000);
    }
    ProductoBuscadoComponent.prototype.ngOnInit = function () {
    };
    ProductoBuscadoComponent.prototype.ngDoCheck = function () {
    };
    ProductoBuscadoComponent.prototype.guardarFavoritos = function (idProducto) {
        var _this = this;
        var todosLosProductos = JSON.parse(localStorage.getItem('todosLosProductos'));
        if (localStorage.getItem('userId') !== null) {
            if (this.esFavorito === false) {
                this.esFavorito = true;
                var prodFavorito_1 = {
                    id: '',
                    userId: '',
                    productId: 0,
                };
                todosLosProductos.forEach(function (producto) {
                    if (producto.id == idProducto) {
                        prodFavorito_1.id = Math.random().toString(36).substr(2, 9);
                        prodFavorito_1.userId = localStorage.getItem('userId');
                        prodFavorito_1.productId = producto.id;
                        _this.productosFavoritos.push(prodFavorito_1);
                        _this.productosService.guardarFavorito(prodFavorito_1);
                        _this.productosService.guardarFavoritoBD(prodFavorito_1).subscribe(function (res) {
                            return res;
                        });
                    }
                });
            }
            else {
                this.esFavorito = false;
                var favoritosUsuarioJson = JSON.parse(localStorage.getItem('favoritosUsuario'));
                var favoritosNuevo_1 = [];
                favoritosUsuarioJson.forEach(function (prodFavoritos, index) {
                    if (prodFavoritos.productId !== idProducto) {
                        favoritosNuevo_1.push(prodFavoritos);
                    }
                    else {
                        _this.productosService.deleteFavoritoBD(prodFavoritos.id).subscribe(function (res) {
                            return res;
                        });
                    }
                });
                var favoritosNuevoString = JSON.stringify(favoritosNuevo_1);
                localStorage.removeItem('favoritosUsuario');
                localStorage.setItem('favoritosUsuario', favoritosNuevoString);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Tenes que iniciar sesión',
                type: 'info',
                text: 'Para poder agregar productos al carrito primero debes inciar sesión',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Iniciar Sesón'
            }).then(function (result) {
                if (result.value) {
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductoBuscadoComponent.prototype, "producto", void 0);
    ProductoBuscadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto-buscado',
            template: __webpack_require__(/*! raw-loader!./producto-buscado.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/busqueda/producto-buscado/producto-buscado.component.html"),
            styles: [__webpack_require__(/*! ./producto-buscado.component.css */ "./src/app/components/busqueda/producto-buscado/producto-buscado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductoBuscadoComponent);
    return ProductoBuscadoComponent;
}());



/***/ }),

/***/ "./src/app/components/faqs/faqs.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/faqs/faqs.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFxcy9mYXFzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/faqs/faqs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/faqs/faqs.component.ts ***!
  \***************************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");



var FaqsComponent = /** @class */ (function () {
    function FaqsComponent(productosService) {
        this.productosService = productosService;
        this.contenido = "";
        this.tituloPag = "";
    }
    FaqsComponent.prototype.ngOnInit = function () {
        this.contenido = "Estas son las preguntas frecuentes o faqs que se pueden hacer ustedes como usuarios, creemos que estan todas y bien respondidas. Cualquier otra consulta no duden en contactarnos por nuestras redes sociales";
        this.productosService.editarMetaHead(this.contenido);
        this.tituloPag = "Preguntas frecuentes";
        this.productosService.editarTitulo(this.tituloPag);
    };
    FaqsComponent.prototype.ngOnDestroy = function () {
        this.productosService.reiniciarMetaHead(this.contenido);
        this.productosService.reiniciarTitulo(this.tituloPag);
    };
    FaqsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faqs',
            template: __webpack_require__(/*! raw-loader!./faqs.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/faqs/faqs.component.html"),
            styles: [__webpack_require__(/*! ./faqs.component.css */ "./src/app/components/faqs/faqs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], FaqsComponent);
    return FaqsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(productosService) {
        var _this = this;
        this.productosService = productosService;
        this.productosDestacadosConImagenes = [];
        // productosDestacadosConImagenesFavs: any[] = [];
        // @Output()cantProductosDestacados;
        this.logueado = false;
        this.cargando = true;
        this.primeraVez = true;
        this.favoritos = [];
        this.contenido = "";
        this.tituloPag = "";
        setTimeout(function () {
            _this.productosDestacadosConImagenes = _this.productosService.productosDestacados();
            _this.cargando = false;
        }, 1500);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.productosService.cargarScript('assets/js/carousel.js');
        }, 2000);
        this.contenido = "Genoveva es una marca con mas de 3 anos de antiguedad en el mercado, contamos con mas de 50.000 seguidores en nuestras plataformas de redes sociales, hemos realizado con exito muchisimos showrooms y es por eso que decidimos adentrarnos en el mundo del e-commerce para que todo el mundo pueda ver nuestro productos.";
        this.productosService.editarMetaHead(this.contenido);
        this.tituloPag = "Bienvenidos";
        this.productosService.editarTitulo(this.tituloPag);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.productosService.borrarScript('assets/js/carousel.js');
        this.productosService.reiniciarMetaHead(this.contenido);
        this.productosService.reiniciarTitulo(this.tituloPag);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/inicio.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/home/inicio.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@media (max-width: 767px) {\n    .cartel {\n      margin-top: 50%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO01BQ0UsZUFBZTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2luaWNpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY2FydGVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/inicio.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/home/inicio.component.ts ***!
  \*****************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");




var InicioComponent = /** @class */ (function () {
    function InicioComponent(productosService, router) {
        this.productosService = productosService;
        this.router = router;
        this.tituloPag = "";
    }
    InicioComponent.prototype.ngOnInit = function () {
        var _this = this;
        var header = document.querySelector('.header_area');
        var footer = document.querySelector('.footer_area');
        header.classList.add('d-none');
        footer.classList.add('d-none');
        setTimeout(function () {
            // this.router.navigateByUrl('/home').then(() => {
            //   location.reload();
            // });
            _this.router.navigate(['/home']);
        }, 1500);
        this.tituloPag = "Bienvenidos";
        this.productosService.editarTitulo(this.tituloPag);
    };
    InicioComponent.prototype.ngOnDestroy = function () {
        var header = document.querySelector('.header_area');
        var footer = document.querySelector('.footer_area');
        header.classList.remove('d-none');
        footer.classList.remove('d-none');
        this.productosService.reiniciarTitulo(this.tituloPag);
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/components/home/inicio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/components/home/popular-products.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/home/popular-products.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9wb3B1bGFyLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/popular-products.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/home/popular-products.component.ts ***!
  \***************************************************************/
/*! exports provided: PopularProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularProductsComponent", function() { return PopularProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PopularProductsComponent = /** @class */ (function () {
    function PopularProductsComponent(productosService, router) {
        var _this = this;
        this.productosService = productosService;
        this.router = router;
        this.datos = {
            colores: [],
            principales: [],
            secundarios: [],
            talles: []
        };
        this.esFavorito = false;
        this.productosFavoritos = [];
        setTimeout(function () {
            if (localStorage.getItem('userId')) {
                if (localStorage.getItem('favoritosUsuario')) {
                    var favoritosUsuarioJson = JSON.parse(localStorage.getItem('favoritosUsuario'));
                    favoritosUsuarioJson.forEach(function (fav) {
                        if (fav.productId === _this.producto.id) {
                            _this.esFavorito = true;
                        }
                    });
                }
            }
        }, 1000);
    }
    PopularProductsComponent.prototype.ngOnInit = function () {
        // setTimeout(() => {
        //   this.productosService.cargarScript('assets/js/carousel.js');
        // }, 1000);
    };
    PopularProductsComponent.prototype.ngOnDestroy = function () {
        // this.productosService.borrarScript("assets/js/carousel.js");
        // console.log('chau');
    };
    PopularProductsComponent.prototype.guardarFavoritos = function (idProducto) {
        var _this = this;
        var todosLosProductos = JSON.parse(localStorage.getItem('todosLosProductos'));
        if (localStorage.getItem('userId') !== null) {
            if (this.esFavorito === false) {
                this.esFavorito = true;
                var prodFavorito_1 = {
                    id: '',
                    userId: '',
                    productId: 0,
                };
                todosLosProductos.forEach(function (producto) {
                    if (producto.id == idProducto) {
                        prodFavorito_1.id = Math.random().toString(36).substr(2, 9);
                        prodFavorito_1.userId = localStorage.getItem('userId');
                        prodFavorito_1.productId = producto.id;
                        _this.productosFavoritos.push(prodFavorito_1);
                        _this.productosService.guardarFavorito(prodFavorito_1);
                        _this.productosService.guardarFavoritoBD(prodFavorito_1).subscribe(function (res) {
                            return res;
                        });
                    }
                });
            }
            else {
                this.esFavorito = false;
                var favoritosUsuarioJson = JSON.parse(localStorage.getItem('favoritosUsuario'));
                var favoritosNuevo_1 = [];
                favoritosUsuarioJson.forEach(function (prodFavoritos, index) {
                    if (prodFavoritos.productId !== idProducto) {
                        favoritosNuevo_1.push(prodFavoritos);
                    }
                    else {
                        _this.productosService.deleteFavoritoBD(prodFavoritos.id).subscribe(function (res) {
                            return res;
                        });
                    }
                });
                var favoritosNuevoString = JSON.stringify(favoritosNuevo_1);
                localStorage.removeItem('favoritosUsuario');
                localStorage.setItem('favoritosUsuario', favoritosNuevoString);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Tenes que iniciar sesión',
                type: 'info',
                text: 'Para poder agregar productos al carrito primero debes inciar sesión',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Iniciar Sesón'
            }).then(function (result) {
                if (result.value) {
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopularProductsComponent.prototype, "producto", void 0);
    PopularProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popular-products',
            template: __webpack_require__(/*! raw-loader!./popular-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/popular-products.component.html"),
            styles: [__webpack_require__(/*! ./popular-products.component.css */ "./src/app/components/home/popular-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PopularProductsComponent);
    return PopularProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil/favoritos/favoritos.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/perfil/favoritos/favoritos.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyZmlsL2Zhdm9yaXRvcy9mYXZvcml0b3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/perfil/favoritos/favoritos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/perfil/favoritos/favoritos.component.ts ***!
  \********************************************************************/
/*! exports provided: FavoritosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosComponent", function() { return FavoritosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");



var FavoritosComponent = /** @class */ (function () {
    function FavoritosComponent(productoService) {
        var _this = this;
        this.productoService = productoService;
        this.cargando = true;
        this.todosLosProductos = [];
        this.todosLosProductosConImagenes = [];
        this.productosFavoritos = [];
        this.categoriasPrincipales = [];
        this.colores = [];
        this.contenido = "";
        this.tituloPag = "";
        if (localStorage.getItem('todosLosProductos')) {
            var todosLosProductosJson = JSON.parse(localStorage.getItem('todosLosProductos'));
            this.todosLosProductos = todosLosProductosJson;
        }
        var imagenesShop;
        if (localStorage.getItem('todosLasImagenesShop')) {
            var todosLasImagenesShopJson = JSON.parse(localStorage.getItem('todosLasImagenesShop'));
            imagenesShop = todosLasImagenesShopJson;
        }
        var arregloPath = [];
        this.todosLosProductos.forEach(function (producto) {
            imagenesShop.forEach(function (imagen) {
                if (producto.id === imagen.producto_id) {
                    arregloPath.push(imagen.path);
                    producto.path = arregloPath;
                }
            });
            arregloPath = [];
            _this.todosLosProductosConImagenes.push(producto);
            setTimeout(function () {
                _this.cargando = false;
            }, 500);
        });
        if (localStorage.getItem('todosLosDatos')) {
            var todosLosDatosJson = JSON.parse(localStorage.getItem('todosLosDatos'));
            var datos = todosLosDatosJson;
            this.categoriasPrincipales = datos.principales;
            this.colores = datos.colores;
        }
        if (localStorage.getItem('favoritosUsuario')) {
            var favoritosUsuarioJson_1 = JSON.parse(localStorage.getItem('favoritosUsuario'));
            this.todosLosProductosConImagenes.forEach(function (producto) {
                favoritosUsuarioJson_1.forEach(function (favorito) {
                    if (producto.id == favorito.productId) {
                        _this.productosFavoritos.push(producto);
                    }
                });
            });
        }
        setTimeout(function () {
            _this.cargando = false;
        }, 500);
    }
    FavoritosComponent.prototype.ngOnInit = function () {
        this.contenido = "En la seccion de favoritos vas a poder ver todos los productos que guardaste para despues, ya sea porque te gusta la combinacion o porque queres comprarlo mas adelante.";
        this.productoService.editarMetaHead(this.contenido);
        this.tituloPag = "Productos favoritos";
        this.productoService.editarTitulo(this.tituloPag);
    };
    FavoritosComponent.prototype.ngOnDestroy = function () {
        this.productoService.reiniciarMetaHead(this.contenido);
        this.productoService.reiniciarTitulo(this.tituloPag);
    };
    FavoritosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favoritos',
            template: __webpack_require__(/*! raw-loader!./favoritos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/perfil/favoritos/favoritos.component.html"),
            styles: [__webpack_require__(/*! ./favoritos.component.css */ "./src/app/components/perfil/favoritos/favoritos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], FavoritosComponent);
    return FavoritosComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil/perfil.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sobre {\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n}\n\n.sobre:hover .informacion-derecha {\n  visibility: visible;\n}\n\n.informacion-derecha {\n  visibility: hidden;\n  width: 300px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 10px 10px;\n  /* padding: 5px 0; */\n  border-radius: 6px;\n\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  top: -5px;\n  left: 105%;\n  z-index: 1;\n}\n\n.sobre:hover .informacion-abajo {\n  visibility: visible;\n}\n\n.informacion-abajo {\n  visibility: hidden;\n  width: 300px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 10px 10px;\n  /* padding: 5px 0; */\n  border-radius: 6px;\n\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  top: 105%;\n  right: -20%;\n  z-index: 1;\n}\n\n@media screen and (max-width: 780px) {\n  table {\n    border: 0;\n    display: block;\n    box-shadow: none;\n  }\n\n  thead {\n    position: absolute;\n    opacity: 0;\n    /* left: 0; */\n    /* right: 0; */\n  }\n\n  tbody {\n    display: block;\n    /* min-width: 19em; */\n    /* max-width: 25em; */\n  }\n\n  tr {\n    border-top: 2px solid #3c3c3b;\n    border-bottom: 2px solid #3c3c3b;\n    display: block;\n    margin-bottom: 1em;\n  }\n\n  td {\n    /* border-bottom: 1px solid #3c3c3b; */\n    border-top: none !important;\n    display: flex;\n  }\n\n  td::before {\n    display: inline-block;\n    font-weight: bold;\n    margin-right: auto;\n    padding-right: 1em;\n  }\n\n  td:last-child {\n    border-bottom: 0;\n  }\n\n  .sobre{\n    /* position: -webkit-sticky; */\n    /* position: sticky; */\n    /* position: sticky; */\n    /* left: 100%; */\n    /* margin-left: 100%; */\n    position: absolute;\n    right: 10px;\n    display: inline-block;\n    /* font-weight: bold; */\n    margin-right: auto;\n    padding-right: 1em;\n    /* float: right; */\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7O0VBRWxCLG9EQUFvRDtFQUNwRCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCOztFQUVsQixvREFBb0Q7RUFDcEQsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IsYUFBYTtFQUNmOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvYnJlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNvYnJlOmhvdmVyIC5pbmZvcm1hY2lvbi1kZXJlY2hhIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmluZm9ybWFjaW9uLWRlcmVjaGEge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgLyogcGFkZGluZzogNXB4IDA7ICovXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCB0ZXh0IC0gc2VlIGV4YW1wbGVzIGJlbG93ISAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgbGVmdDogMTA1JTtcbiAgei1pbmRleDogMTtcbn1cblxuLnNvYnJlOmhvdmVyIC5pbmZvcm1hY2lvbi1hYmFqbyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5pbmZvcm1hY2lvbi1hYmFqbyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICAvKiBwYWRkaW5nOiA1cHggMDsgKi9cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwIHRleHQgLSBzZWUgZXhhbXBsZXMgYmVsb3chICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDUlO1xuICByaWdodDogLTIwJTtcbiAgei1pbmRleDogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgdGFibGUge1xuICAgIGJvcmRlcjogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgdGhlYWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC8qIGxlZnQ6IDA7ICovXG4gICAgLyogcmlnaHQ6IDA7ICovXG4gIH1cblxuICB0Ym9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLyogbWluLXdpZHRoOiAxOWVtOyAqL1xuICAgIC8qIG1heC13aWR0aDogMjVlbTsgKi9cbiAgfVxuXG4gIHRyIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzNjM2MzYjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzNjM2MzYjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICB0ZCB7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYzNjM2I7ICovXG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICB0ZDo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgfVxuXG4gIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cblxuICAuc29icmV7XG4gICAgLyogcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAqL1xuICAgIC8qIHBvc2l0aW9uOiBzdGlja3k7ICovXG4gICAgLyogcG9zaXRpb246IHN0aWNreTsgKi9cbiAgICAvKiBsZWZ0OiAxMDAlOyAqL1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMDAlOyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/perfil/perfil.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.ts ***!
  \*******************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/carrito.service */ "./src/app/services/carrito.service.ts");






var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(registroService, productosService, carritoService, router, activatedRoute) {
        var _this = this;
        this.registroService = registroService;
        this.productosService = productosService;
        this.carritoService = carritoService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pedidosUsuario = [];
        this.contenido = "";
        this.tituloPag = "";
        this.carritoService.getCarritoBD(localStorage.getItem("userId"));
        this.activatedRoute.params.subscribe(function (parametro) {
            _this.registroService
                .getUsuario(parametro.id)
                .subscribe(function (usuario) {
                _this.usuario = usuario;
                _this.contenido = "Este es tu perfil " + _this.usuario.name + ", aca podras encontrar la informacion sobre las compras que realizaste en Genoveva, el estado del pago, en numero de orden para poder comunicarte con nostros en caso de cualquier problema, los productos que compraste, el total de la compra y el estado del envio";
                _this.productosService.editarMetaHead(_this.contenido);
                _this.tituloPag = "Hola " + _this.usuario.name + " este es tu perfil";
                _this.productosService.editarTitulo(_this.tituloPag);
            });
        });
        var carritoUsuario = this.carritoService.getTablaCarritos(localStorage.getItem("userId"));
        var todosLosProductosJson = JSON.parse(localStorage.getItem('todosLosProductos'));
        var todasLasOrdenes = [];
        this.carritoService.getOrdenes().subscribe(function (res) {
            todasLasOrdenes = res;
        });
        var estadoPagoArray = ['Pagado', 'Pendiente', 'Rechazado', 'Aprobado'];
        var estadoEnvioArray = ['Por enviar', 'Enviado', 'Recibido'];
        setTimeout(function () {
            todasLasOrdenes.forEach(function (orden) {
                var productos = [];
                var numOrden = 0;
                var estadoPago = '';
                var estadoEnvio = '';
                var totalOrden = 0;
                var titulosProductos = [];
                if (orden.user_id == localStorage.getItem("userId")) {
                    totalOrden = orden.totalOrden;
                    carritoUsuario.forEach(function (carrito) {
                        if (carrito.ordene_id !== null) {
                            if (orden.id == carrito.ordene_id) {
                                numOrden = orden.numOrden;
                                if (orden.estadopago_id) {
                                    estadoPagoArray.forEach(function (estado, index) {
                                        if (orden.estadopago_id == (index + 1)) {
                                            estadoPago = estado;
                                        }
                                    });
                                }
                                if (orden.estadoenvio_id) {
                                    estadoEnvioArray.forEach(function (estado, index) {
                                        if (orden.estadoenvio_id == (index + 1)) {
                                            estadoEnvio = estado;
                                        }
                                    });
                                }
                                todosLosProductosJson.forEach(function (prod) {
                                    if (carrito.producto_id == prod.id) {
                                        productos.push(prod);
                                    }
                                });
                            }
                        }
                    });
                }
                productos.forEach(function (prod) {
                    // if (prod.descuento === null) {
                    //   totalOrden = totalOrden + prod.precio;
                    // } else {
                    //   totalOrden = totalOrden + prod.precio - ((prod.descuento * prod.precio) / 100);
                    // }
                    titulosProductos.push(prod.titulo);
                });
                if (numOrden !== 0) {
                    _this.pedidosUsuario.push({
                        orden: numOrden,
                        prods: titulosProductos,
                        total: totalOrden,
                        pago: estadoPago,
                        envio: estadoEnvio
                    });
                }
            });
            if (_this.pedidosUsuario.length === 0) {
                _this.hayPedidos = false;
            }
            else {
                _this.hayPedidos = true;
            }
        }, 1500);
        // get de ordenes
        // get de productos
    }
    PerfilComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var tr = document.getElementById('agregarRow');
            var th = document.getElementById('agregarDIB');
            function cambiaPantalla(x) {
                if (x.matches) {
                    if (tr) {
                        tr.classList.add('row');
                        th.classList.add('d-inline-block');
                        try {
                            var thArray = [];
                            var table = document.getElementById('respTable');
                            var headers = table.getElementsByTagName('th');
                            for (var i = 0; i < headers.length; i++) {
                                var headingText = headers[i].innerHTML;
                                thArray.push(headingText);
                            }
                            var styleElm = document.createElement('style');
                            styleElm.classList.add('estiloCreado');
                            var styleSheet = void 0;
                            document.head.appendChild(styleElm);
                            styleSheet = styleElm.sheet;
                            for (var i = 0; i < thArray.length; i++) {
                                styleSheet.insertRule('#' +
                                    'respTable' +
                                    ' td:nth-child(' +
                                    (i + 1) +
                                    ')::before {content:"' +
                                    thArray[i] +
                                    ': ";}', styleSheet.cssRules.length);
                            }
                        }
                        catch (err) {
                            console.log('cellHeaders(): ' + err);
                        }
                    }
                }
                else {
                    if (tr) {
                        tr.classList.remove('row');
                        th.classList.remove('d-inline-block');
                    }
                }
            }
            var x = window.matchMedia("(max-width: 780px)");
            cambiaPantalla(x);
            x.addEventListener('change', cambiaPantalla);
            //   console.log('entra');
            //   this.productosService.cargarScript('assets/template/js/active.js');
        }, 1500);
        if (localStorage.getItem('userId') !== null) {
            if (this.registroService.esAdmin(localStorage.getItem('userId'))) {
                localStorage.setItem('esAdmin', 'Si');
            }
        }
        else {
            console.error('no esta logueado');
        }
        // this.contenido = "Este es tu perfil"+this.usuario.name+", aca podras encontrar la informacion sobre las compras que realizaste en Genoveva, el estado del pago, en numero de orden para poder comunicarte con nostros en caso de cualquier problema, los productos que compraste, el total de la compra y el estado del envio";
        // this.productosService.editarMetaHead(this.contenido);
        // setTimeout(() => {
        //   this.tituloPag = "Hola "+this.usuario.name+" este es tu perfil";
        //   this.productosService.editarTitulo(this.tituloPag);
        // }, 1000);
    };
    PerfilComponent.prototype.cellHeaders = function (tableId) {
        // try {
        //   let thArray = [];
        //   const table = document.getElementById(tableId);
        //   const tr = document.getElementById('agregarRow');
        //   const th = document.getElementById('agregarDIB');
        //   const headers = table.getElementsByTagName('th');
        //   for (let i = 0; i < headers.length; i++) {
        //     const headingText = headers[i].innerHTML;
        //     thArray.push(headingText);
        //   }
        //   const styleElm = document.createElement('style');
        //   let styleSheet;
        //   document.head.appendChild(styleElm);
        //   styleSheet = styleElm.sheet;
        //   for (let i = 0; i < thArray.length; i++) {
        //     styleSheet.insertRule(
        //       '#' +
        //       tableId +
        //       ' td:nth-child(' +
        //       (i + 1) +
        //       ')::before {content:"' +
        //       thArray[i] +
        //       ': ";}',
        //       styleSheet.cssRules.length
        //     );
        //   }
        // } catch (err) {
        //   console.log('cellHeaders(): ' + err);
        // }
    };
    PerfilComponent.prototype.logout = function () {
        localStorage.removeItem('logueado');
        localStorage.removeItem('userId');
        localStorage.removeItem('esAdmin');
        // localStorage.removeItem('favoritosUsuario');
        // localStorage.removeItem('carritoDeCompras');
        localStorage.setItem('favoritosUsuario', '');
        localStorage.setItem('carritoDeCompras', '');
        // if (localStorage.getItem('email')) {
        //   localStorage.removeItem('email');
        // }
        this.registroService.logout();
        this.router.navigateByUrl('/home').then(function () {
            location.reload();
        });
    };
    PerfilComponent.prototype.ngOnDestroy = function () {
        this.productosService.reiniciarMetaHead(this.contenido);
        this.productosService.reiniciarTitulo(this.tituloPag);
        // console.log('sale');
        // this.productosService.borrarScript('assets/template/js/active.js');
    };
    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! raw-loader!./perfil.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/components/perfil/perfil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_1__["RegistroService"],
            src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"],
            src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_5__["CarritoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/components/politicas/politicas.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/politicas/politicas.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9saXRpY2FzL3BvbGl0aWNhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/politicas/politicas.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/politicas/politicas.component.ts ***!
  \*************************************************************/
/*! exports provided: PoliticasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticasComponent", function() { return PoliticasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");



var PoliticasComponent = /** @class */ (function () {
    function PoliticasComponent(productosService) {
        this.productosService = productosService;
    }
    PoliticasComponent.prototype.ngOnInit = function () { };
    PoliticasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-politicas',
            template: __webpack_require__(/*! raw-loader!./politicas.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/politicas/politicas.component.html"),
            styles: [__webpack_require__(/*! ./politicas.component.css */ "./src/app/components/politicas/politicas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], PoliticasComponent);
    return PoliticasComponent;
}());



/***/ }),

/***/ "./src/app/components/productos-descuento/productos-descuento.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/productos-descuento/productos-descuento.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdG9zLWRlc2N1ZW50by9wcm9kdWN0b3MtZGVzY3VlbnRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/productos-descuento/productos-descuento.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/productos-descuento/productos-descuento.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductosDescuentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosDescuentoComponent", function() { return ProductosDescuentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductosDescuentoComponent = /** @class */ (function () {
    function ProductosDescuentoComponent(productosService, router, activatedRoute) {
        var _this = this;
        this.productosService = productosService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cargando = true;
        this.todosLosProductos = [];
        this.todosLosProductosConImagenes = [];
        this.productosDecuento = [];
        this.categoriasPrincipales = [];
        this.colores = [];
        this.contenido = "";
        this.tituloPag = "";
        if (localStorage.getItem('todosLosProductos')) {
            var todosLosProductosJson = JSON.parse(localStorage.getItem('todosLosProductos'));
            this.todosLosProductos = todosLosProductosJson;
        }
        var imagenesShop;
        if (localStorage.getItem('todosLasImagenesShop')) {
            var todosLasImagenesShopJson = JSON.parse(localStorage.getItem('todosLasImagenesShop'));
            imagenesShop = todosLasImagenesShopJson;
        }
        var arregloPath = [];
        this.todosLosProductos.forEach(function (producto) {
            imagenesShop.forEach(function (imagen) {
                if (producto.id === imagen.producto_id) {
                    arregloPath.push(imagen.path);
                    producto.path = arregloPath;
                }
            });
            arregloPath = [];
            _this.todosLosProductosConImagenes.push(producto);
            setTimeout(function () {
                _this.cargando = false;
            }, 500);
        });
        if (localStorage.getItem('todosLosDatos')) {
            var todosLosDatosJson = JSON.parse(localStorage.getItem('todosLosDatos'));
            var datos = todosLosDatosJson;
            this.categoriasPrincipales = datos.principales;
            this.colores = datos.colores;
        }
        this.todosLosProductosConImagenes.forEach(function (producto) {
            if (producto.descuento) {
                _this.productosDecuento.push(producto);
            }
        });
        setTimeout(function () {
            _this.cargando = false;
        }, 500);
    }
    ProductosDescuentoComponent.prototype.ngOnInit = function () {
        this.contenido = "Estos son todos los productos de nuestro stock que tienen descuento, apurate, nunca duran mucho tiempo!";
        this.productosService.editarMetaHead(this.contenido);
        this.tituloPag = "Grandes descuentos";
        this.productosService.editarTitulo(this.tituloPag);
    };
    ProductosDescuentoComponent.prototype.ngOnDestroy = function () {
        this.productosService.reiniciarMetaHead(this.contenido);
        this.productosService.reiniciarTitulo(this.tituloPag);
    };
    ProductosDescuentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos-descuento',
            template: __webpack_require__(/*! raw-loader!./productos-descuento.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/productos-descuento/productos-descuento.component.html"),
            styles: [__webpack_require__(/*! ./productos-descuento.component.css */ "./src/app/components/productos-descuento/productos-descuento.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductosDescuentoComponent);
    return ProductosDescuentoComponent;
}());



/***/ }),

/***/ "./src/app/components/registro/login.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/registro/login.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/registro/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/registro/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var src_app_models_usuario_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/usuario.models */ "./src/app/models/usuario.models.ts");
/* harmony import */ var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/carrito.service */ "./src/app/services/carrito.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(productoService, registroService, carritoService, router, activatedRoute) {
        this.productoService = productoService;
        this.registroService = registroService;
        this.carritoService = carritoService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.usuario = new src_app_models_usuario_models__WEBPACK_IMPORTED_MODULE_3__["UsuarioModel"]();
        this.logueadoLogin = false;
        this.contenido = "";
        this.tituloPag = "";
        this.recordarme = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.productoService.cargarEstilos('assets/registro/css/util.css')
            .then(function () { }).catch(function () { });
        this.productoService.cargarEstilos('assets/registro/css/main.css')
            .then(function () { }).catch(function () { });
        this.productoService.cargarEstilos('assets/registro/fonts/font-awesome-4.7.0/css/font-awesome.min.css')
            .then(function () { }).catch(function () { });
        this.productoService.cargarEstilos('assets/registro/css/animate.css')
            .then(function () { }).catch(function () { });
        if (localStorage.getItem('email')) {
            this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
        this.contenido = "Aca es donde vas a poder loguearte para poder comprar en genoveva shop online, recorda que es necesario que tengas un usuario para poder comprar y guardar en favoritos todos los productos que desees";
        this.productoService.editarMetaHead(this.contenido);
        this.tituloPag = "Logueate";
        this.productoService.editarTitulo(this.tituloPag);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.productoService.borrarEstilos('assets/registro/css/util.css');
        this.productoService.borrarEstilos('assets/registro/css/main.css');
        this.productoService.borrarEstilos('assets/registro/fonts/font-awesome-4.7.0/css/font-awesome.min.css');
        this.productoService.borrarEstilos('assets/registro/css/animate.css');
        this.productoService.reiniciarMetaHead(this.contenido);
        this.productoService.reiniciarTitulo(this.tituloPag);
    };
    LoginComponent.prototype.login = function (formRegistro) {
        var _this = this;
        if (formRegistro.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Cargando',
            timer: 3000,
            onBeforeOpen: function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading();
            }
        });
        this.registroService.enviarLogin(this.usuario).subscribe(function (usuario) {
            if ((usuario)) {
                if (_this.recordarme) {
                    localStorage.setItem('email', _this.usuario.email);
                }
                localStorage.setItem('userId', usuario.id);
                _this.router.navigate(['/perfil', usuario.id]).then(function () {
                    location.reload();
                    // this.carritoService.getCarritoBD(usuario.id);
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'Error de autenticación',
                    type: 'error',
                    text: 'Ingresaste mal el mail o la contraseña',
                });
            }
        });
    };
    LoginComponent.prototype.resetearPassword = function () {
        this.router.navigate(['/reset']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/registro/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/registro/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_4__["RegistroService"], src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_7__["CarritoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/registro/registro.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/registro/registro.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/registro/registro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/registro/registro.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var src_app_models_usuario_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/usuario.models */ "./src/app/models/usuario.models.ts");
/* harmony import */ var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(productoService, registroService, router) {
        this.productoService = productoService;
        this.registroService = registroService;
        this.router = router;
        this.usuario = new src_app_models_usuario_models__WEBPACK_IMPORTED_MODULE_4__["UsuarioModel"]();
        this.recordarme = false;
        this.contenido = "";
        this.tituloPag = "";
        this.noCoinciden = false;
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.productoService.cargarEstilos('assets/registro/css/util.css')
            .then(function () { }).catch(function () { });
        this.productoService.cargarEstilos('assets/registro/css/main.css')
            .then(function () { }).catch(function () { });
        this.productoService.cargarEstilos('assets/registro/fonts/font-awesome-4.7.0/css/font-awesome.min.css')
            .then(function () { }).catch(function () { });
        this.productoService.cargarEstilos('assets/registro/css/animate.css')
            .then(function () { }).catch(function () { });
        if (localStorage.getItem('email')) {
            this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
        this.contenido = "Aca es donde vas a poder registrarte para poder comprar en genoveva shop online, recorda que es necesario que tengas un usuario para poder comprar y guardar en favoritos todos los productos que desees";
        this.productoService.editarMetaHead(this.contenido);
        this.tituloPag = "Registrate";
        this.productoService.editarTitulo(this.tituloPag);
    };
    RegistroComponent.prototype.ngOnDestroy = function () {
        this.productoService.borrarEstilos('assets/registro/css/util.css');
        this.productoService.borrarEstilos('assets/registro/css/main.css');
        this.productoService.borrarEstilos('assets/registro/fonts/font-awesome-4.7.0/css/font-awesome.min.css');
        this.productoService.borrarEstilos('assets/registro/css/animate.css');
        this.productoService.reiniciarMetaHead(this.contenido);
        this.productoService.reiniciarTitulo(this.tituloPag);
    };
    RegistroComponent.prototype.onSubmit = function (formRegistro) {
        var _this = this;
        if ((formRegistro.controls.password.value !== formRegistro.controls.repassword.value)
            || (formRegistro.controls.password.value === undefined && formRegistro.controls.repassword.value === undefined)) {
            this.noCoinciden = true;
            return;
        }
        else {
            this.noCoinciden = false;
        }
        if (formRegistro.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Cargando',
            timer: 3000,
            onBeforeOpen: function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading();
            }
        });
        this.registroService.enviarRegistro(this.usuario).subscribe(function (res) {
            _this.registroService.enviarLogin(_this.usuario).subscribe(function (usuario) {
                if (usuario) {
                    if (_this.recordarme) {
                        localStorage.setItem('email', _this.usuario.email);
                    }
                    localStorage.setItem('userId', usuario.id);
                    _this.router.navigate(['/perfil', usuario.id]).then(function () {
                        location.reload();
                    });
                }
            });
        }, function (error) {
            console.error(error.error.message);
            if (error.error.message) {
                var mensaje = error.error.message;
                if (mensaje.includes('Duplicate entry')) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        title: 'Este mail ya corresponde a un usuario registrado'
                    });
                }
                else {
                    return;
                }
            }
        });
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/components/registro/registro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"], src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_5__["RegistroService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/components/registro/reset/reset.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/registro/reset/reset.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8vcmVzZXQvcmVzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/registro/reset/reset.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/registro/reset/reset.component.ts ***!
  \**************************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/carrito.service */ "./src/app/services/carrito.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var ResetComponent = /** @class */ (function () {
    function ResetComponent(productoService, registroService, carritoService, router, activatedRoute) {
        this.productoService = productoService;
        this.registroService = registroService;
        this.carritoService = carritoService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.reset = {
            email: '',
            respuesta: ''
        };
        this.cambiarPass = {
            password: '',
            repassword: ''
        };
        this.noCoinciden = false;
    }
    ResetComponent.prototype.ngOnInit = function () {
        this.productoService.cargarEstilos('assets/registro/css/util.css')
            .then(function () { }).catch(function () { });
        this.productoService.cargarEstilos('assets/registro/css/main.css')
            .then(function () { }).catch(function () { });
        this.productoService.cargarEstilos('assets/registro/fonts/font-awesome-4.7.0/css/font-awesome.min.css')
            .then(function () { }).catch(function () { });
        this.productoService.cargarEstilos('assets/registro/css/animate.css')
            .then(function () { }).catch(function () { });
    };
    ResetComponent.prototype.ngOnDestroy = function () {
        this.productoService.borrarEstilos('assets/registro/css/util.css');
        this.productoService.borrarEstilos('assets/registro/css/main.css');
        this.productoService.borrarEstilos('assets/registro/fonts/font-awesome-4.7.0/css/font-awesome.min.css');
        this.productoService.borrarEstilos('assets/registro/css/animate.css');
    };
    ResetComponent.prototype.cambiarPassword = function (formCambioContra) {
        var _this = this;
        if ((formCambioContra.controls.password.value !== formCambioContra.controls.repassword.value)
            || (formCambioContra.controls.password.value === undefined && formCambioContra.controls.repassword.value === undefined)) {
            this.noCoinciden = true;
            return;
        }
        else {
            this.noCoinciden = false;
        }
        if (formCambioContra.invalid) {
            return;
        }
        var data = {
            id: this.userId,
            pass: formCambioContra.controls.password.value
        };
        var contraCambiada = false;
        this.registroService.cambiarContraseña(data).subscribe(function (res) {
            console.log(res);
            if (res.user !== null) {
                contraCambiada = true;
                if (contraCambiada) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        title: 'Contraseña cambiada correctamente'
                    }).then(function () {
                        _this.router.navigate(['/login']);
                    });
                }
            }
            return res;
        });
    };
    ResetComponent.prototype.resetPass = function (formReset) {
        var _this = this;
        if (formReset.invalid) {
            return;
        }
        this.coincide = false;
        this.registroService.getUsuarios().subscribe(function (usuarios) {
            usuarios.forEach(function (user) {
                if (user.email === formReset.controls['email'].value && user.respuesta === formReset.controls['respuesta'].value.toLowerCase()) {
                    _this.coincide = true;
                    _this.userId = user.id;
                }
            });
            if (!_this.coincide) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'La respuesta a la pregunta secreta es incorrecta'
                }).then(function () {
                    formReset.reset();
                });
            }
        });
    };
    ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! raw-loader!./reset.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/registro/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.css */ "./src/app/components/registro/reset/reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_4__["RegistroService"], src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_5__["CarritoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classy-navbar {\n    height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzeS1uYXZiYXIge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carrito.service */ "./src/app/services/carrito.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(productosService, carritoService, router, activatedRoute) {
        this.productosService = productosService;
        this.carritoService = carritoService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.logueadoHeader = false;
        this.mostrarTablero = false;
    }
    HeaderComponent.prototype.ngDoCheck = function () {
        if (localStorage.getItem("logueado")) {
            this.logueadoHeader = true;
        }
        if (localStorage.getItem("userId") === null) {
            this.userId = null;
        }
        else {
            this.userId = localStorage.getItem("userId");
            if (localStorage.getItem('esAdmin') !== null) {
                this.mostrarTablero = true;
            }
            else {
                this.mostrarTablero = false;
            }
        }
        if (this.cantidadDeProd !== this.carritoService.cantidadPodructos()) {
            this.cantidadDeProd = this.carritoService.cantidadPodructos();
        }
    };
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.ngOnDestroy = function () { };
    HeaderComponent.prototype.buscarTermino = function (termino) {
        var terminoMinuscula = termino.toLowerCase();
        this.productosService.updateData(terminoMinuscula);
        this.router.navigate(['/busqueda/', terminoMinuscula]);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__["CarritoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/side-cart/side-cart.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/shared/side-cart/side-cart.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NpZGUtY2FydC9zaWRlLWNhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/side-cart/side-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/side-cart/side-cart.component.ts ***!
  \********************************************************************/
/*! exports provided: SideCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideCartComponent", function() { return SideCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carrito.service */ "./src/app/services/carrito.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SideCartComponent = /** @class */ (function () {
    // hayProductos: boolean;
    function SideCartComponent(productoService, carritoService, router) {
        var _this = this;
        this.productoService = productoService;
        this.carritoService = carritoService;
        this.router = router;
        this.productosCarrito = [];
        this.precioTotal = 0;
        this.actualizando = false;
        this.hayProductos = 0;
        // this.productosCarrito["total"] = 0;
        if (localStorage.getItem('userId')) {
            // const productosCarrito = this.carritoService.getCarrito();
            var carritoDeComprasJsonUsuario_1 = [];
            setTimeout(function () {
                if (localStorage.getItem("carritoDeCompras")) {
                    var carritoDeComprasJson = JSON.parse(localStorage.getItem("carritoDeCompras"));
                    carritoDeComprasJson.forEach(function (carrito) {
                        if (carrito.userId == localStorage.getItem("userId") &&
                            carrito.orden_id === 0) {
                            carritoDeComprasJsonUsuario_1.push(carrito);
                        }
                    });
                }
            }, 1500);
            console.log(carritoDeComprasJsonUsuario_1);
            // setTimeout(() => {
            if (carritoDeComprasJsonUsuario_1 !== null) {
                carritoDeComprasJsonUsuario_1.forEach(function (productoCarrito) {
                    if (productoCarrito.orden_id === 0) {
                        var todosLosProductosJson = JSON.parse(localStorage.getItem("todosLosProductos"));
                        todosLosProductosJson.forEach(function (producto) {
                            if (producto.id == productoCarrito.productId) {
                                var pathImagenDetalle = [];
                                pathImagenDetalle = _this.productoService.imagenesDetalle(producto.id);
                                producto.idCarrito = productoCarrito.id;
                                producto.path = pathImagenDetalle;
                                producto.talle = productoCarrito.talle;
                                console.log(producto);
                                _this.productosCarrito.push(producto);
                            }
                        });
                    }
                });
            }
            // }, 2000);
        }
    }
    SideCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // hago esto para ver si hay algun producto en el carrito, si no lo hay, lo redirijo al shop
        if (localStorage.getItem('carritoDeCompras')) {
            if (localStorage.getItem('carritoDeCompras').length !== 0) {
                var carritoDeComprasLS = JSON.parse(localStorage.getItem('carritoDeCompras'));
                carritoDeComprasLS.forEach(function (element) {
                    if (element.userId == localStorage.getItem('userId')) {
                        if (element.orden_id == 0) {
                            _this.hayProductos++;
                        }
                    }
                });
            }
        }
        // fin
    };
    SideCartComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.cantidadDeProd !== this.carritoService.cantidadPodructos()) {
            this.cantidadDeProd = this.carritoService.cantidadPodructos();
        }
        // console.log(this.productosCarrito.length);
        if (this.productosCarrito == undefined || (this.productosCarrito !== undefined && this.productosCarrito.length === 0)) {
            console.log('entra');
            console.log(this.productosCarrito);
            var todosLosProductosJson = JSON.parse(localStorage.getItem('todosLosProductos'));
            var productoCarrito_1 = [{
                    id: Number,
                    productId: Number,
                    userId: String,
                    talle: String,
                    cantidad: Number,
                    orden_id: 0,
                }];
            if (localStorage.getItem('carritoDeCompras')) {
                productoCarrito_1 = JSON.parse(localStorage.getItem('carritoDeCompras'));
                var total_1 = 0;
                todosLosProductosJson.forEach(function (producto) {
                    productoCarrito_1.forEach(function (carrito) {
                        if (producto.id == carrito.productId && carrito.orden_id === 0) {
                            _this.hayProductos++;
                            // if (producto.id == productoCarrito[0].productId && productoCarrito[0].orden_id === 0) {
                            _this.productosCarrito = [];
                            var pathImagenDetalle = [];
                            pathImagenDetalle = _this.productoService.imagenesDetalle(producto.id);
                            // this.productoService.getImagenesDetalle(producto.id).subscribe((res: any) => {
                            //   res.forEach(imagen => {
                            //     pathImagenDetalle.push(imagen.path);
                            //   });
                            // });
                            producto.idCarrito = carrito.id;
                            producto.path = pathImagenDetalle;
                            producto.talle = carrito.talle;
                            total_1 = total_1 + producto.precio;
                            total_1 = Math.round(total_1 * 100) / 100;
                            _this.productosCarrito.push(producto);
                            // this.productosCarrito["total"] = total;
                        }
                    });
                });
            }
        }
        // console.log(this.productosCarrito.length);
        if (this.productosCarrito !== undefined && this.productosCarrito.length !== 0) {
            if (this.productosCarrito.length !== JSON.parse(localStorage.getItem("carritoDeCompras")).length) {
                this.actualizando = true;
                this.productosCarrito = [];
                var productosCarrito = this.carritoService.getCarrito();
                var total_2 = 0;
                productosCarrito.forEach(function (productoCarrito) {
                    var todosLosProductosJson = JSON.parse(localStorage.getItem("todosLosProductos"));
                    todosLosProductosJson.forEach(function (producto) {
                        if (producto.id == productoCarrito.productId && productoCarrito.orden_id === 0) {
                            var pathImagenDetalle = [];
                            pathImagenDetalle = _this.productoService.imagenesDetalle(producto.id);
                            // this.productoService.getImagenesDetalle(producto.id).subscribe((res: any) => {
                            //   res.forEach(imagen => {
                            //     pathImagenDetalle.push(imagen.path);
                            //   });
                            // });
                            producto.idCarrito = productoCarrito.id;
                            producto.path = pathImagenDetalle;
                            producto.talle = productoCarrito.talle;
                            total_2 = total_2 + producto.precio;
                            _this.productosCarrito.push(producto);
                            // this.productosCarrito["total"] = total;
                        }
                    });
                });
                this.actualizando = false;
            }
        }
        // console.log(this.productosCarrito.length);
        if (this.productosCarrito) {
            var total_3 = 0;
            this.productosCarrito.forEach(function (productoCarrito) {
                if (productoCarrito.descuento) {
                    var descuento = (productoCarrito.descuento * productoCarrito.precio) / 100;
                    total_3 = total_3 + (productoCarrito.precio - descuento);
                    total_3 = Math.round(total_3 * 100) / 100;
                }
                else {
                    total_3 = total_3 + productoCarrito.precio;
                    total_3 = Math.round(total_3 * 100) / 100;
                }
            });
            // this.productosCarrito["total"] = total;
            this.precioTotal = total_3;
        }
    };
    SideCartComponent.prototype.quitarProducto = function (idCarrito) {
        var _this = this;
        this.productosCarrito.forEach(function (producto, index) {
            if (producto.idCarrito === idCarrito) {
                _this.productosCarrito['total'] = _this.productosCarrito['total'] - producto.precio;
                _this.productosCarrito.splice(index, 1);
                _this.carritoService.deleteProductoCarrito(idCarrito);
                _this.carritoService.deleteCarritoBD(idCarrito).subscribe(function (res) {
                    return res;
                });
                if (_this.carritoService.getCarrito() !== null) {
                    _this.cantidadDeProd = _this.carritoService.getCarrito().length;
                }
            }
            if (_this.productosCarrito.length === 0) {
                _this.hayProductos = 0;
                _this.router.navigate(['/shop']);
                delete _this.productosCarrito;
            }
        });
    };
    SideCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-cart',
            template: __webpack_require__(/*! raw-loader!./side-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/side-cart/side-cart.component.html"),
            styles: [__webpack_require__(/*! ./side-cart.component.css */ "./src/app/components/shared/side-cart/side-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"],
            src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__["CarritoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SideCartComponent);
    return SideCartComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/checkout/checkout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/shop/checkout/checkout.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shop/checkout/checkout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shop/checkout/checkout.component.ts ***!
  \****************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/carrito.service */ "./src/app/services/carrito.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(productosService, registroService, carritoService, checkoutService, http, router) {
        var _this = this;
        this.productosService = productosService;
        this.registroService = registroService;
        this.carritoService = carritoService;
        this.checkoutService = checkoutService;
        this.http = http;
        this.router = router;
        this.checkout = {
            name: '',
            lastname: '',
            pais_id: '',
            calle: '',
            numero: 0,
            cp: '',
            provincia: '',
            ciudad: '',
            telefono: '',
            email: '',
            user_id: '',
            totalOrden: 0,
            prods: []
        };
        this.datosMP = {
            total: 0,
            token: '',
            description: '',
            cuotas: 0,
            emisorTarjeta: '',
            email: '',
            calle: '',
            numero: 0,
            cp: '',
            provincia: '',
            ciudad: ''
        };
        this.productosCarrito = [];
        this.subTotal = 0;
        this.envio = {
            costo: 0,
            entrega: '',
            laplata: 50
        };
        this.oculto = false;
        this.contenido = "";
        this.tituloPag = "";
        this.tipoDocumentos = [];
        this.cargandoInfoMP = true;
        this.opcionDoc = '';
        this.tarjetasCreditoDisponibles = [];
        this.cuotasDisponibles = [];
        this.esPagoConCredito = false;
        this.tarjetasDebitoDisponibles = [];
        this.esPagoConDebito = false;
        this.pagoEnEfectivo = [];
        this.esPagoEnEfectivo = false;
        this.esPagoPorDomicilio = false;
        this.registroService
            .getUsuario(localStorage.getItem('userId'))
            .subscribe(function (user) {
            _this.checkout.name = user.name;
            _this.checkout.lastname = user.lastname;
            _this.checkout.email = user.email;
        });
        var carritos;
        carritos = this.carritoService.getCarrito();
        setTimeout(function () {
            if (Mercadopago) {
                Mercadopago.setPublishableKey('APP_USR-e5f44d7a-86b1-429f-8fbd-6c9c231dfae9'
                // 'TEST-0dd0d31e-809e-4bb1-89c7-29742cf40abe'
                );
                Mercadopago.getIdentificationTypes(function (status, docs) {
                    if (status !== 200) {
                        console.error(status, 'error');
                    }
                    else {
                        _this.tipoDocumentos = docs;
                    }
                });
            }
            else {
                console.error('No existe Mercadopago');
            }
        }, 500);
        // empieza integracion de mercadopago
        setTimeout(function () {
            _this.cargandoInfoMP = true;
            // llamo a todos los medios de pago
            setTimeout(function () {
                var todosLosMediosDePago = JSON.parse(localStorage.getItem('mediosDePago'));
                todosLosMediosDePago.forEach(function (medio) {
                    if (medio.payment_type_id === 'credit_card' &&
                        medio.status !== 'testing') {
                        _this.tarjetasCreditoDisponibles.push(medio);
                    }
                    if (medio.payment_type_id === 'debit_card' &&
                        medio.status !== 'testing') {
                        _this.tarjetasDebitoDisponibles.push(medio);
                    }
                    if (medio.payment_type_id === 'ticket' &&
                        medio.status !== 'testing') {
                        _this.pagoEnEfectivo.push(medio);
                    }
                });
            }, 1000);
        }, 1000);
    }
    CheckoutComponent.prototype.calcularEnvio = function (zipCode) {
        var _this = this;
        var dimensions = '30x30x30';
        var peso = '800';
        var zip_code = zipCode.value;
        var item_price = this.subTotal;
        var urlAPI = "https://genovevabe.cf/api";
        // let urlAPI = "http://127.0.0.1:8000/api";
        var url = urlAPI + "/calcularenvio/" + dimensions + "/" + peso + "/" + zip_code + "/" + item_price;
        // const url = `${urlAPI}/${dimensions}/${peso}/${zip_code}/${item_price}`;
        this.http.get(url).pipe().subscribe(function (res) {
            console.log(res);
            if (res.body.message) {
                if (res.body.message.includes('Invalid')) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        title: 'No existe ese Código Postal'
                    }).then(function () {
                        zipCode.value = '';
                    });
                    _this.envio.costo = 0;
                    _this.envio.entrega = '';
                }
            }
            else {
                _this.envio.costo = res.body.options[0].cost;
                _this.envio.entrega = res.body.options[0].estimated_delivery_time.shipping + ' horas';
                return res;
            }
        });
    };
    CheckoutComponent.prototype.enviarPago = function (datos) {
        var urlAPI = "https://genovevabe.cf/api";
        // let urlAPI = "http://127.0.0.1:8000/api";
        var url = urlAPI + "/pagarMP";
        var body = JSON.stringify(datos);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
            return res;
        }));
    };
    CheckoutComponent.prototype.funcionesMercadoPago = function (tipoDeCompra, dentroCasco) {
        var datos = this.datosMP;
        var infoEnvio = this.checkout;
        var usarFunciones = this;
        // obtener numero de tarjeta
        function getBin() {
            var numeroTC = document.querySelector('input[data-checkout="cardNumber"]');
            return numeroTC.value.replace(/[ .-]/g, '').slice(0, 6);
        }
        // funcion para adivinar el tipo de pago
        function guessingPaymentMethod(event) {
            var bin = getBin();
            var amount;
            if (dentroCasco.checked) {
                amount = usarFunciones.subTotal + usarFunciones.envio.laplata;
            }
            else {
                amount = usarFunciones.subTotal + usarFunciones.envio.costo;
            }
            console.log(bin);
            if (event.type == 'keyup') {
                if (bin.length >= 6) {
                    Mercadopago.getPaymentMethod({
                        bin: bin
                    }, setPaymentMethodInfo);
                    Mercadopago.getInstallments({
                        bin: bin,
                        amount: amount
                    }, setInstallmentInfo);
                }
            }
            else {
                setTimeout(function () {
                    if (bin.length >= 6) {
                        Mercadopago.getPaymentMethod({
                            bin: bin
                        }, setPaymentMethodInfo);
                        Mercadopago.getInstallments({
                            bin: bin,
                            amount: amount
                        }, setInstallmentInfo);
                    }
                }, 100);
            }
        }
        // para pagos en cuotas
        function setInstallmentInfo(status, response) {
            var issuer_id;
            var cuotas = [];
            if (status == 200 || status == 201) {
                response.forEach(function (element) {
                    if (element.issuer) {
                        issuer_id = element.issuer.id;
                    }
                    if (element.payer_costs) {
                        element.payer_costs.forEach(function (costoPagador) {
                            cuotas.push({
                                cantidad: costoPagador.installments,
                                totalConInteres: costoPagador.total_amount,
                                mensaje: costoPagador.recommended_message
                            });
                        });
                    }
                });
            }
            else {
                alert("error: " + response);
            }
            usarFunciones.cuotasDisponibles = cuotas;
        }
        var emisorTarjeta = '';
        function setPaymentMethodInfo(status, response) {
            // console.log(response[0].id); // visa master etc
            // pone el nombre de la tarjeta en el value
            if (status == 200) {
                var paymentMethodElement = document.querySelector('input[name=paymentMethodId]');
                var form = document.querySelector('#pay');
                if (paymentMethodElement) {
                    paymentMethodElement.value = response[0].id;
                    emisorTarjeta = response[0].id;
                }
                else {
                    var inputEl = document.createElement('input');
                    inputEl.setAttribute('name', 'paymentMethodId');
                    inputEl.setAttribute('type', 'hidden');
                    inputEl.setAttribute('value', response[0].id);
                    emisorTarjeta = response[0].id;
                    form.appendChild(inputEl);
                }
            }
            else {
                alert("payment method info error: " + response);
            }
        }
        function addEvent(el, eventName, handler) {
            if (el.addEventListener) {
                el.addEventListener(eventName, handler);
            }
            else {
                el.attachEvent('on' + eventName, function () {
                    handler.call(el);
                });
            }
        }
        if (document.querySelector('input[data-checkout="cardNumber"]')) {
            addEvent(document.querySelector('input[data-checkout="cardNumber"]'), 'keyup', guessingPaymentMethod);
            addEvent(document.querySelector('input[data-checkout="cardNumber"]'), 'change', guessingPaymentMethod);
        }
        // addEvent(document.querySelector('input[data-checkout="cardNumber"]'),'keyup', guessingPaymentMethod);
        // addEvent(document.querySelector('input[data-checkout="cardNumber"]'),'change', guessingPaymentMethod);
        var doSubmit = false;
        addEvent(document.querySelector(tipoDeCompra), 'click', doPay);
        function doPay(event) {
            event.preventDefault();
            if (!doSubmit) {
                var $form = document.querySelector('#pay');
                Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below
                return false;
            }
        }
        function sdkResponseHandler(status, response) {
            // console.log(status);
            // console.log(response);
            // console.log(response.id); // token
            if (status != 200 && status != 201) {
                // alert('verify filled data');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Hubo un problema al procesar el pago'
                });
            }
            else {
                // aca debe ir la validacion de los campos del envio
                var checkTerm = true;
                var noHayVacios = true;
                var term = document.querySelector('.terminos');
                if (term.checked === false) {
                    checkTerm = false;
                }
                var form = document.querySelectorAll('.validate');
                for (var campo in form) {
                    if (form.hasOwnProperty(campo)) {
                        var element = form[campo];
                        if (element.value === '' || element.value === null || element.value == 0) {
                            noHayVacios = false;
                        }
                    }
                }
                if (noHayVacios === false || checkTerm === false) {
                    if (checkTerm === false) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                            title: 'Tenes que aceptar los Terminos y Condiciones'
                        }).then(function (result) {
                            if (result) {
                                return;
                            }
                        });
                    }
                    if (noHayVacios === false) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                            title: 'Tenes que completar todos los campos'
                        }).then(function (result) {
                            if (result) {
                                return;
                            }
                        });
                    }
                }
                else {
                    if (tipoDeCompra === '.comprarCredito' ||
                        tipoDeCompra === '.comprarDebito') {
                        var noHayVacios_1 = true;
                        var formTarjeta = document.querySelectorAll('.validateCard');
                        for (var campo in formTarjeta) {
                            if (formTarjeta.hasOwnProperty(campo)) {
                                var element = formTarjeta[campo];
                                if (element.value === '' || element.value === null) {
                                    noHayVacios_1 = false;
                                }
                            }
                        }
                        if (noHayVacios_1 === false) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                title: 'Tenes que completar todos los campos'
                            }).then(function (result) {
                                if (result) {
                                    return;
                                }
                            });
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                title: 'Estamos procesando tu pago',
                                timer: 3000,
                                onBeforeOpen: function () {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading();
                                }
                            });
                            var form_1 = document.querySelector('#pay');
                            var card = document.createElement('input');
                            card.setAttribute('name', 'token');
                            card.setAttribute('type', 'hidden');
                            card.setAttribute('value', response.id);
                            datos.token = response.id;
                            form_1.appendChild(card);
                            doSubmit = true;
                            if (document.querySelector('#cuotas')) {
                                var selectCuotas = document.querySelector('#cuotas');
                                datos.cuotas = selectCuotas.value;
                            }
                            else {
                                datos.cuotas = 1;
                            }
                            datos.description = 'Genoveva Shop Online';
                            var email = document.querySelector('#email');
                            datos.email = email.value;
                            // datos.total = 12;
                            var totalFinal = void 0;
                            if (dentroCasco.checked) {
                                totalFinal = usarFunciones.subTotal + usarFunciones.envio.laplata;
                            }
                            else {
                                totalFinal = usarFunciones.subTotal + usarFunciones.envio.costo;
                            }
                            var formEnvio = document.querySelectorAll('.validate');
                            datos.total = totalFinal;
                            datos.emisorTarjeta = emisorTarjeta;
                            datos.calle = formEnvio[6].value;
                            datos.numero = formEnvio[7].value;
                            datos.cp = formEnvio[5].value;
                            datos.provincia = formEnvio[4].value;
                            datos.ciudad = formEnvio[3].value;
                            var prodsIdsTalles_1 = [];
                            // let prodsIds = [];
                            var prods_1 = [{
                                    id: 0,
                                    titulo: ''
                                }];
                            var carritos = usarFunciones.carritoService.getCarrito();
                            carritos.forEach(function (prodCarrito) {
                                prodsIdsTalles_1.push({
                                    id: prodCarrito.productId,
                                    talle_id: prodCarrito.talle_id
                                });
                            });
                            usarFunciones.productosCarrito.forEach(function (producto) {
                                // prodsIds.push(producto.id);
                                prods_1.push({
                                    id: producto.id,
                                    titulo: producto.titulo
                                });
                            });
                            console.log(prodsIdsTalles_1);
                            infoEnvio = {
                                prods: prodsIdsTalles_1,
                                // name: formEnvio.form.controls.name.value,
                                name: formEnvio[0].value,
                                user_id: localStorage.getItem('userId'),
                                lastname: formEnvio[1].value,
                                // lastname: formEnvio.form.controls.lastname.value,
                                pais_id: formEnvio[2].value,
                                // direccion1: formEnvio[6].value,
                                calle: formEnvio[6].value,
                                numero: formEnvio[7].value,
                                // direccion2: formEnvio.form.controls.direccion2.value,
                                cp: formEnvio[5].value,
                                // cp: formEnvio.form.controls.cp.value,
                                provincia: formEnvio[4].value,
                                // provincia: formEnvio.form.controls.provincia.value,
                                ciudad: formEnvio[3].value,
                                // ciudad: formEnvio.form.controls.ciudad.value,
                                telefono: formEnvio[8].value,
                                // telefono: formEnvio.form.controls.telefono.value,
                                email: formEnvio[9].value,
                                totalOrden: datos.total,
                            };
                            usarFunciones.checkoutService.realizarPedido(infoEnvio).subscribe(function (respuesta) {
                                if (respuesta.noStock) {
                                    var titulo_1 = '';
                                    var talle_1 = '';
                                    prods_1.forEach(function (prod) {
                                        if (prod.id == respuesta.noStock) {
                                            titulo_1 = prod.titulo;
                                            talle_1 = respuesta.talle;
                                        }
                                    });
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                        title: 'Se acaba de agotar',
                                        text: 'No hay stock de: ' + titulo_1 + ' - Talle: ' + talle_1 + '. \n\n Si estas comprando mas de 1 probá con otra cantidad'
                                    }).then(function () {
                                        location.reload();
                                        return;
                                    });
                                }
                                else {
                                    usarFunciones.enviarPago(datos).subscribe(function (res) {
                                        if (res.estado === 'approved') {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                title: 'El pago fue aprobado'
                                            }).then(function (result) {
                                                usarFunciones.router.navigate(['/perfil/', localStorage.getItem('userId')]).then(function () {
                                                    location.reload();
                                                });
                                            });
                                        }
                                        if (res.estado === 'rejected') {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                title: 'El pago fue rechazado, proba con otra tarjeta'
                                            });
                                            var info = {
                                                prods: infoEnvio.prods
                                            };
                                            console.log(info);
                                            usarFunciones.checkoutService.acomodarStock(info).subscribe(function (res) {
                                                console.log(res);
                                            });
                                            usarFunciones.checkoutService.borrarPedido(localStorage.getItem('userId')).subscribe(function (res) {
                                                console.log(res);
                                                setTimeout(function () {
                                                    location.reload();
                                                }, 2000);
                                            });
                                        }
                                        if (res.estado === 'in_process') {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                title: 'Estamos procesando el pago'
                                            });
                                        }
                                        return res;
                                    });
                                }
                            });
                        }
                    }
                    if (tipoDeCompra === '.comprarEfectivo') {
                        var mail = document.querySelector('.mailEfectivo');
                        if (mail.value === '' || mail.value === null) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                title: 'El mail es obligatorio',
                            });
                            return;
                        }
                        var medioPago = document.querySelector('#medioPagoEfectivo');
                        if (medioPago.value === '' || medioPago.value === null) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                title: 'Tenes que seleccionar una empresa',
                            });
                            return;
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                            title: 'Estamos procesando tu pago',
                            timer: 3000,
                            onBeforeOpen: function () {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading();
                            }
                        });
                        var form_2 = document.querySelector('#pay');
                        var card = document.createElement('input');
                        card.setAttribute('name', 'token');
                        card.setAttribute('type', 'hidden');
                        card.setAttribute('value', response.id);
                        form_2.appendChild(card);
                        doSubmit = true;
                        var dataEfectivo_1 = {};
                        var medioDePago = document.querySelector('#medioPagoEfectivo');
                        var email = document.querySelector('#email');
                        var formEnvio = document.querySelectorAll('.validate');
                        console.log(formEnvio);
                        var totalFinal = void 0;
                        if (dentroCasco.checked) {
                            totalFinal = usarFunciones.subTotal + usarFunciones.envio.laplata;
                        }
                        else {
                            totalFinal = usarFunciones.subTotal + usarFunciones.envio.costo;
                        }
                        dataEfectivo_1 = {
                            metodo: medioDePago.value,
                            email: email.value,
                            total: totalFinal,
                            descripcion: 'Genoveva Shop Online',
                            calle: formEnvio[6].value,
                            numero: formEnvio[7].value,
                            cp: formEnvio[5].value,
                            provincia: formEnvio[4].value,
                            ciudad: formEnvio[3].value,
                        };
                        var prodsIdsTalles_2 = [];
                        // let prodsIds = [];
                        var prods_2 = [{
                                id: 0,
                                titulo: ''
                            }];
                        var carritos = usarFunciones.carritoService.getCarrito();
                        carritos.forEach(function (prodCarrito) {
                            prodsIdsTalles_2.push({
                                id: prodCarrito.productId,
                                talle_id: prodCarrito.talle_id
                            });
                        });
                        usarFunciones.productosCarrito.forEach(function (producto) {
                            // prodsIds.push(producto.id);
                            prods_2.push({
                                id: producto.id,
                                titulo: producto.titulo
                            });
                        });
                        console.log(prodsIdsTalles_2);
                        infoEnvio = {
                            // productosIds: prodsIds,
                            prods: prodsIdsTalles_2,
                            // name: formEnvio.form.controls.name.value,
                            name: formEnvio[0].value,
                            user_id: localStorage.getItem('userId'),
                            lastname: formEnvio[1].value,
                            // lastname: formEnvio.form.controls.lastname.value,
                            pais_id: formEnvio[2].value,
                            // direccion1: formEnvio[6].value,
                            calle: formEnvio[6].value,
                            numero: formEnvio[7].value,
                            // direccion2: formEnvio.form.controls.direccion2.value,
                            cp: formEnvio[5].value,
                            // cp: formEnvio.form.controls.cp.value,
                            provincia: formEnvio[4].value,
                            // provincia: formEnvio.form.controls.provincia.value,
                            ciudad: formEnvio[3].value,
                            // ciudad: formEnvio.form.controls.ciudad.value,
                            telefono: formEnvio[8].value,
                            // telefono: formEnvio.form.controls.telefono.value,
                            email: formEnvio[9].value,
                            totalOrden: dataEfectivo_1.total,
                        };
                        console.log(infoEnvio);
                        usarFunciones.checkoutService.realizarPedido(infoEnvio).subscribe(function (respuesta) {
                            if (respuesta.noStock) {
                                var titulo_2 = '';
                                var talle_2 = '';
                                prods_2.forEach(function (prod) {
                                    if (prod.id == respuesta.noStock) {
                                        titulo_2 = prod.titulo;
                                        talle_2 = respuesta.talle;
                                    }
                                });
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                    title: 'Se acaba de agotar',
                                    text: 'No hay stock de: ' + titulo_2 + ' - Talle: ' + talle_2 + '. \n\n Si estas comprando mas de 1 probá con otra cantidad'
                                }).then(function () {
                                    location.reload();
                                    return;
                                });
                            }
                            else {
                                usarFunciones.enviarPago(dataEfectivo_1).subscribe(function (res) {
                                    console.log(res);
                                    if (res.estado === 'pending') {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                            title: 'Se te abrirá una ventana para que puedas imprimir o descargar el tiquet de pago'
                                        }).then(function (result) {
                                            window.open(res.recursoExterno, '_blank');
                                            usarFunciones.checkoutService.realizarPedido(infoEnvio).subscribe(function (respuesta) {
                                                console.log(respuesta);
                                                return respuesta;
                                            });
                                            usarFunciones.router.navigate(['/perfil/', localStorage.getItem('userId')]).then(function () {
                                                location.reload();
                                            });
                                        });
                                    }
                                    return res;
                                }, function (error) {
                                    console.log(error);
                                    if (error) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                            title: 'Hubo un error a la hora de procesar el pago'
                                        });
                                        var info = {
                                            prods: infoEnvio.prods
                                        };
                                        console.log(info);
                                        usarFunciones.checkoutService.acomodarStock(info).subscribe(function (res) {
                                            console.log(res);
                                        });
                                        usarFunciones.checkoutService.borrarPedido(localStorage.getItem('userId')).subscribe(function (res) {
                                            console.log(res);
                                            setTimeout(function () {
                                                location.reload();
                                            }, 2000);
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            }
        }
    };
    CheckoutComponent.prototype.validarFormEnvio = function () {
        var noHayVacios = true;
        var term = document.querySelector('.terminos');
        if (term.checked === false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Tenes que aceptar los Terminos y Condiciones'
            }).then(function (result) {
                if (result) {
                    noHayVacios = false;
                    return;
                }
            });
        }
        var form = document.querySelectorAll('.validate');
        for (var campo in form) {
            if (form.hasOwnProperty(campo)) {
                var element = form[campo];
                if (element.value === '' || element.value === null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        title: 'Tenes que completar todos los campos'
                    }).then(function (result) {
                        if (result) {
                            noHayVacios = false;
                            return;
                        }
                    });
                }
            }
        }
        return noHayVacios;
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "Las opciones de pago son ofrecidas por Mercado Pago " + '&reg;',
            type: "info"
        });
        // borro los campos si selecciono otro medio de pago y muestro el boton de pago de acuerdo a opcion desplegada
        setTimeout(function () {
            var mediosDePago = document.querySelectorAll('.medioDePago');
            var tarjetaCredito = document.querySelector('.tarjetaCredito');
            var tarjetaDebito = document.querySelector('.tarjetaDebito');
            var efectivo = document.querySelector('.efectivo');
            var domicilio = document.querySelector('.domicilio');
            mediosDePago.forEach(function (caja) {
                caja.addEventListener('click', function () {
                    setTimeout(function () {
                        if (tarjetaCredito) {
                            if (!tarjetaCredito.classList.contains('show')) {
                                // oculto Tarjeta de credito
                                _this.esPagoConCredito = false;
                                // this.esPagoConDebito = false;
                                // this.esPagoEnEfectivo = false;
                                // this.esPagoPorDomicilio = false;
                                var todosLosInput = tarjetaCredito.getElementsByTagName('input');
                                var todosLosSelect = tarjetaCredito.getElementsByTagName('select');
                                for (var i = 0; i < todosLosInput.length; i++) {
                                    var input = todosLosInput[i];
                                    input.value = '';
                                }
                                for (var i = 0; i < todosLosSelect.length; i++) {
                                    var select = todosLosSelect[i];
                                    select.value = '';
                                    _this.opcionDoc = '';
                                }
                            }
                            else {
                                // se muestra pago por tarjeta de credito
                                var dentroCasco_1 = document.querySelector('#dentroCasco');
                                var cp_1 = document.querySelector('#postcode');
                                if (dentroCasco_1.checked === false && _this.envio.costo === 0) {
                                    if (dentroCasco_1.checked === false && _this.envio.costo === 0) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                            title: 'Tenes que seleccionar una opción de envío',
                                            text: 'Si estas dentro del casco urbano de La Plata hace click en la casilla que se encuentra en la descripción del envío, si no ingresá tu Código Postal'
                                        }).then(function () {
                                            tarjetaCredito.classList.remove('show');
                                            return;
                                        });
                                    }
                                    dentroCasco_1.addEventListener('click', function () {
                                        if (dentroCasco_1.checked === false && _this.envio.costo === 0) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                title: 'Tenes que seleccionar una opción de envío',
                                                text: 'Si estas dentro del casco urbano de La Plata hace click en la casilla que se encuentra en la descripción del envío, si no ingresá tu Código Postal'
                                            }).then(function () {
                                                tarjetaCredito.classList.remove('show');
                                                return;
                                            });
                                        }
                                    });
                                    cp_1.addEventListener('change', function () {
                                        if (cp_1.value === '' && dentroCasco_1.checked === false) {
                                            _this.envio.costo = 0;
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                title: 'Tenes que seleccionar una opción de envío',
                                                text: 'Si estas dentro del casco urbano de La Plata hace click en la casilla que se encuentra en la descripción del envío, si no ingresá tu Código Postal'
                                            }).then(function () {
                                                tarjetaCredito.classList.remove('show');
                                                return;
                                            });
                                        }
                                    });
                                }
                                else {
                                    setTimeout(function () {
                                        var documentosMP = _this.tipoDocumentos;
                                        var selectDoc = document.querySelector('#docType');
                                        selectDoc.addEventListener('change', function () {
                                            documentosMP.forEach(function (doc) {
                                                if (doc.id === selectDoc.value) {
                                                    var inputDoc = document.querySelector('.' + doc.id);
                                                    _this.opcionDoc = selectDoc.value;
                                                }
                                                else {
                                                    var inputDoc = document.querySelector('.' + doc.id);
                                                }
                                            });
                                        });
                                        _this.funcionesMercadoPago('.comprarCredito', dentroCasco_1);
                                    }, 500);
                                }
                                _this.opcionDoc = '';
                                _this.esPagoConCredito = true;
                                _this.esPagoConDebito = false;
                                _this.esPagoEnEfectivo = false;
                                _this.esPagoPorDomicilio = false;
                            }
                        }
                        if (tarjetaDebito) {
                            if (!tarjetaDebito.classList.contains('show')) {
                                _this.esPagoConDebito = false;
                                var todosLosInput = tarjetaDebito.getElementsByTagName('input');
                                var todosLosSelect = tarjetaDebito.getElementsByTagName('select');
                                for (var i = 0; i < todosLosInput.length; i++) {
                                    var input = todosLosInput[i];
                                    input.value = '';
                                }
                                for (var i = 0; i < todosLosSelect.length; i++) {
                                    var select = todosLosSelect[i];
                                    select.value = '';
                                    _this.opcionDoc = '';
                                }
                            }
                            else {
                                var dentroCasco_2 = document.querySelector('#dentroCasco');
                                var cp_2 = document.querySelector('#postcode');
                                if (dentroCasco_2.checked === false && _this.envio.costo === 0) {
                                    if (dentroCasco_2.checked === false && _this.envio.costo === 0) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                            title: 'Tenes que seleccionar una opción de envío',
                                            text: 'Si estas dentro del casco urbano de La Plata hace click en la casilla que se encuentra en la descripción del envío, si no ingresá tu Código Postal'
                                        }).then(function () {
                                            tarjetaDebito.classList.remove('show');
                                            return;
                                        });
                                    }
                                    dentroCasco_2.addEventListener('click', function () {
                                        if (dentroCasco_2.checked === false && _this.envio.costo === 0) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                title: 'Tenes que seleccionar una opción de envío',
                                                text: 'Si estas dentro del casco urbano de La Plata hace click en la casilla que se encuentra en la descripción del envío, si no ingresá tu Código Postal'
                                            }).then(function () {
                                                tarjetaDebito.classList.remove('show');
                                                return;
                                            });
                                        }
                                    });
                                    cp_2.addEventListener('change', function () {
                                        if (cp_2.value === '' && dentroCasco_2.checked === false) {
                                            _this.envio.costo = 0;
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                title: 'Tenes que seleccionar una opción de envío',
                                                text: 'Si estas dentro del casco urbano de La Plata hace click en la casilla que se encuentra en la descripción del envío, si no ingresá tu Código Postal'
                                            }).then(function () {
                                                tarjetaDebito.classList.remove('show');
                                                return;
                                            });
                                        }
                                    });
                                }
                                else {
                                    setTimeout(function () {
                                        var documentosMP = _this.tipoDocumentos;
                                        var selectDoc = document.querySelector('#docType');
                                        selectDoc.addEventListener('change', function () {
                                            documentosMP.forEach(function (doc) {
                                                if (doc.id === selectDoc.value) {
                                                    var inputDoc = document.querySelector('.' + doc.id);
                                                    _this.opcionDoc = selectDoc.value;
                                                }
                                                else {
                                                    var inputDoc = document.querySelector('.' + doc.id);
                                                }
                                            });
                                        });
                                        _this.funcionesMercadoPago('.comprarDebito', dentroCasco_2);
                                    }, 500);
                                }
                                _this.opcionDoc = '';
                                _this.esPagoConCredito = false;
                                _this.esPagoConDebito = true;
                                _this.esPagoEnEfectivo = false;
                                _this.esPagoPorDomicilio = false;
                            }
                        }
                        if (efectivo) {
                            if (!efectivo.classList.contains('show')) {
                                // this.esPagoConCredito = false;
                                // this.esPagoConDebito = false;
                                _this.esPagoEnEfectivo = false;
                                var todosLosInput = tarjetaDebito.getElementsByTagName('input');
                                for (var i = 0; i < todosLosInput.length; i++) {
                                    var input = todosLosInput[i];
                                    input.value = '';
                                }
                            }
                            else {
                                var dentroCasco_3 = document.querySelector('#dentroCasco');
                                var cp_3 = document.querySelector('#postcode');
                                if (dentroCasco_3.checked === false && _this.envio.costo === 0) {
                                    if (dentroCasco_3.checked === false && _this.envio.costo === 0) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                            title: 'Tenes que seleccionar una opción de envío',
                                            text: 'Si estas dentro del casco urbano de La Plata hace click en la casilla que se encuentra en la descripción del envío, si no ingresá tu Código Postal'
                                        }).then(function () {
                                            efectivo.classList.remove('show');
                                            return;
                                        });
                                    }
                                    dentroCasco_3.addEventListener('click', function () {
                                        if (dentroCasco_3.checked === false && _this.envio.costo === 0) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                title: 'Tenes que seleccionar una opción de envío',
                                                text: 'Si estas dentro del casco urbano de La Plata hace click en la casilla que se encuentra en la descripción del envío, si no ingresá tu Código Postal'
                                            }).then(function () {
                                                efectivo.classList.remove('show');
                                                return;
                                            });
                                        }
                                    });
                                    cp_3.addEventListener('change', function () {
                                        if (cp_3.value === '' && dentroCasco_3.checked === false) {
                                            _this.envio.costo = 0;
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                title: 'Tenes que seleccionar una opción de envío',
                                                text: 'Si estas dentro del casco urbano de La Plata hace click en la casilla que se encuentra en la descripción del envío, si no ingresá tu Código Postal'
                                            }).then(function () {
                                                efectivo.classList.remove('show');
                                                return;
                                            });
                                        }
                                    });
                                }
                                else {
                                    setTimeout(function () {
                                        _this.funcionesMercadoPago('.comprarEfectivo', dentroCasco_3);
                                    }, 500);
                                }
                                console.log('se ve efectivo');
                                _this.esPagoConCredito = false;
                                _this.esPagoConDebito = false;
                                _this.esPagoEnEfectivo = true;
                                _this.esPagoPorDomicilio = false;
                            }
                        }
                        if (domicilio) {
                            if (!domicilio.classList.contains('show')) {
                                console.log('no se ve domicilio');
                                // this.esPagoConCredito = false;
                                // this.esPagoConDebito = false;
                                // this.esPagoEnEfectivo = false;
                                _this.esPagoPorDomicilio = false;
                                // const todosLosInput = tarjetaCredito.getElementsByTagName(
                                //   "input"
                                // );
                                // const todosLosSelect = tarjetaCredito.getElementsByTagName(
                                //   "select"
                                // );
                                // for (let i = 0; i < todosLosInput.length; i++) {
                                //   const input: any = todosLosInput[i];
                                //   input.value = "";
                                // }
                                // for (let i = 0; i < todosLosSelect.length; i++) {
                                //   const select = todosLosSelect[i];
                                //   select.value = "";
                                // }
                            }
                            else {
                                console.log('se ve domicilio');
                                _this.esPagoConCredito = false;
                                _this.esPagoConDebito = false;
                                _this.esPagoEnEfectivo = false;
                                _this.esPagoPorDomicilio = true;
                            }
                        }
                    }, 500);
                });
            });
        }, 500);
        // hago esto para ver si hay algun producto en el carrito, si no lo hay, lo redirijo al shop
        var carritoDeComprasLS = JSON.parse(localStorage.getItem('carritoDeCompras'));
        // si es > 0 hay productos
        var hayProductos = 0;
        carritoDeComprasLS.forEach(function (element) {
            if (element.userId == localStorage.getItem('userId')) {
                if (element.orden_id == 0) {
                    hayProductos++;
                }
            }
            console.log(hayProductos);
        });
        console.log(hayProductos);
        if (hayProductos === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'No tenes ningún producto en el carrito',
                text: 'Te redirijimos a nuestro shop para que puedas agregar productos!'
            });
            this.router.navigate(['/shop']);
        }
        // fin
        this.contenido = "En esta seccion vas a poder hacer el checkout de tu compra, es decir, vas a poder decirnos a donde queres que enviemos lo que compraste y elegir alguno de los medios de pago que nos proporciona Mercado Libre a traves de Mercado Pago. Recorda que si estas dentro del casco urbano de La Plata el envio es mas barato. Cualquier duda que tengas en esta parte consulta la seccion de preguntas frecuentes. Gracias por comprar en Genoveva Shop Online";
        this.productosService.editarMetaHead(this.contenido);
        this.tituloPag = "Finalizar compra";
        this.productosService.editarTitulo(this.tituloPag);
        var todoElCarro = document.querySelector('.right-side-cart-area');
        var botonBolsa = document.querySelector('#rightSideCart');
        if (todoElCarro.classList.value.includes('cart-on')) {
            botonBolsa.click();
        }
        else {
            console.log('no esta abierta');
        }
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
        this.productosService.reiniciarMetaHead(this.contenido);
        this.productosService.reiniciarTitulo(this.tituloPag);
    };
    CheckoutComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var todosLosProductosJson = JSON.parse(localStorage.getItem('todosLosProductos'));
        var carritos;
        carritos = this.carritoService.getCarrito();
        if (this.productosCarrito.length !== carritos.length) {
            this.productosCarrito = [];
            this.subTotal = 0;
            todosLosProductosJson.forEach(function (producto) {
                carritos.forEach(function (carrito) {
                    if (carrito.orden_id === 0) {
                        if (producto.id == carrito.productId) {
                            _this.productosCarrito.push(producto);
                            if (!producto.descuento) {
                                // console.log('entra3');
                                _this.subTotal = _this.subTotal + producto.precio;
                                _this.subTotal = Math.round(_this.subTotal * 100) / 100;
                            }
                            else {
                                // console.log('entra4');
                                var descuento = (producto.descuento / 100) * producto.precio;
                                _this.subTotal = _this.subTotal + (producto.precio - descuento);
                                _this.subTotal = Math.round(_this.subTotal * 100) / 100;
                            }
                        }
                    }
                });
            });
        }
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shop/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/components/shop/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"],
            src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_5__["RegistroService"],
            src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_6__["CarritoService"],
            _services_checkout_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/producto-detalle.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/shop/producto-detalle.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1000px) {\n    .single_product_thumb {\n      height: 100vh;\n      overflow: hidden;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Byb2R1Y3RvLWRldGFsbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO01BQ0UsYUFBYTtNQUNiLGdCQUFnQjtJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Byb2R1Y3RvLWRldGFsbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgLnNpbmdsZV9wcm9kdWN0X3RodW1iIHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shop/producto-detalle.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/shop/producto-detalle.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductoDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetalleComponent", function() { return ProductoDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/carrito.service */ "./src/app/services/carrito.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);



// importados por mi



var ProductoDetalleComponent = /** @class */ (function () {
    function ProductoDetalleComponent(productosService, router, activatedRoute, carritoService) {
        var _this = this;
        this.productosService = productosService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.carritoService = carritoService;
        this.todosLosProductos = [];
        this.datos = {
            colores: [],
            principales: [],
            secundarios: [],
            talles: []
        };
        this.userId = '';
        this.stockProducto = [];
        this.cargando = true;
        this.esFavorito = false;
        this.productosFavoritos = [];
        this.contenido = "";
        this.tituloPag = "";
        if (localStorage.getItem('todosLosProductos')) {
            var todosLosProductosJson = JSON.parse(localStorage.getItem('todosLosProductos'));
            this.todosLosProductos = todosLosProductosJson;
        }
        setTimeout(function () {
            if (localStorage.getItem('userId')) {
                _this.userId = localStorage.getItem('userId');
            }
        }, 1200);
        setTimeout(function () {
            if (localStorage.getItem('userId')) {
                if (localStorage.getItem('favoritosUsuario')) {
                    var favoritosUsuarioJson = JSON.parse(localStorage.getItem('favoritosUsuario'));
                    favoritosUsuarioJson.forEach(function (fav) {
                        if (fav.productId === _this.productoConImagen["id"]) {
                            _this.esFavorito = true;
                        }
                    });
                }
            }
        }, 1000);
        var idProducto;
        var pathImagenDetalle = [];
        // this.productosService.getDatos().subscribe((res: any) => {
        //   this.datos.colores = res.colores;
        //   this.datos.principales = res.principales;
        //   this.datos.secundarios = res.secundarios;
        //   this.datos.talles = res.talles;
        // });
        if (localStorage.getItem('todosLosDatos')) {
            var todosLosDatosJson = JSON.parse(localStorage.getItem('todosLosDatos'));
            var datos = todosLosDatosJson;
            this.datos.colores = datos.colores;
            this.datos.principales = datos.principales;
            this.datos.secundarios = datos.secundarios;
            this.datos.talles = datos.talles;
        }
        this.activatedRoute.params.subscribe(function (parametro) {
            idProducto = parametro.id;
        });
        pathImagenDetalle = this.productosService.imagenesDetalle(idProducto);
        this.todosLosProductos.forEach(function (producto) {
            if (producto.id == idProducto) {
                producto.path = pathImagenDetalle;
                _this.productoConImagen = producto;
                setTimeout(function () {
                    _this.cargando = false;
                }, 500);
            }
        });
        // setTimeout(() => {
        this.productosService.stockProducto(idProducto).subscribe(function (res) {
            if (res.length > 1) {
                res.forEach(function (prod) {
                    if (prod.talle_cantidad > 0) {
                        _this.stockProducto.push(prod);
                    }
                });
            }
            else {
                if (res[0].talle_cantidad > 0) {
                    _this.stockProducto = res;
                }
            }
        });
    }
    ProductoDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.productosService.cargarScript('assets/js/carousel.js');
        }, 1500);
        setTimeout(function () {
            _this.productosService.cargarScript('assets/js/nice-select.js');
        }, 1500);
        console.log(this.productoConImagen);
        this.contenido = "Estas viendo " + this.productoConImagen["titulo"] + " su descripcion es " + this.productoConImagen["descripcion"] + " y tiene un precio de $" + this.productoConImagen["precio"] + " recorda elegir el talle y listo! Ya pasamos al checkout para poder elegir el envio y la forma de pago.";
        this.productosService.editarMetaHead(this.contenido);
        this.tituloPag = "" + this.productoConImagen["titulo"];
        this.productosService.editarTitulo(this.tituloPag);
    };
    ProductoDetalleComponent.prototype.ngOnDestroy = function () {
        this.productosService.borrarScript('assets/js/carousel.js');
        this.productosService.borrarScript('assets/js/nice-select.js');
        this.productosService.reiniciarMetaHead(this.contenido);
        this.productosService.reiniciarTitulo(this.tituloPag);
    };
    ProductoDetalleComponent.prototype.onSubmit = function (id, talle) {
        var _this = this;
        var talleId;
        this.stockProducto.forEach(function (prod) {
            console.log(prod);
            if (prod.talle_nombre === talle) {
                talleId = prod.talle_id;
            }
        });
        if (localStorage.getItem('userId') !== null) {
            var prodAgregado_1 = {
                id: 0,
                userId: "",
                productId: 0,
                talle: "",
                talle_id: 0,
                cantidad: 0,
                orden_id: 0
            };
            this.todosLosProductos.forEach(function (prod) {
                if (prod.id == id) {
                    prodAgregado_1.id = Math.round(Math.random() * (999999999 - 0) + 0);
                    prodAgregado_1.userId = localStorage.getItem('userId');
                    prodAgregado_1.productId = prod.id;
                    prodAgregado_1.talle = talle;
                    prodAgregado_1.talle_id = talleId;
                    prodAgregado_1.cantidad = 1;
                    prodAgregado_1.orden_id = 0;
                    var productosCarrito = _this.carritoService.getCarrito();
                    _this.carritoService.guardarProductoCarrito(prodAgregado_1);
                    _this.carritoService.guardarCarritoBD(prodAgregado_1).subscribe(function (res) {
                        return res;
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: 'Producto agregado al carrito correctamente',
                        type: 'success'
                        // allowOutsideClick: false
                    });
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Tenes que iniciar sesión',
                type: 'info',
                text: 'Para poder agregar productos al carrito primero debes inciar sesión',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Iniciar Sesón'
            }).then(function (result) {
                if (result.value) {
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    ProductoDetalleComponent.prototype.guardarFavoritos = function (idProducto) {
        var _this = this;
        var todosLosProductos = JSON.parse(localStorage.getItem('todosLosProductos'));
        if (localStorage.getItem('userId') !== null) {
            if (this.esFavorito === false) {
                this.esFavorito = true;
                var prodFavorito_1 = {
                    id: 0,
                    userId: '',
                    productId: 0,
                };
                todosLosProductos.forEach(function (producto) {
                    if (producto.id == idProducto) {
                        prodFavorito_1.id = Math.round(Math.random() * (999999999 - 0) + 0);
                        prodFavorito_1.userId = localStorage.getItem('userId');
                        prodFavorito_1.productId = producto.id;
                        _this.productosFavoritos.push(prodFavorito_1);
                        _this.productosService.guardarFavorito(prodFavorito_1);
                        _this.productosService.guardarFavoritoBD(prodFavorito_1).subscribe(function (res) {
                            return res;
                        });
                    }
                });
            }
            else {
                this.esFavorito = false;
                var favoritosUsuarioJson = JSON.parse(localStorage.getItem('favoritosUsuario'));
                var favoritosNuevo_1 = [];
                favoritosUsuarioJson.forEach(function (prodFavoritos, index) {
                    if (prodFavoritos.productId !== idProducto) {
                        favoritosNuevo_1.push(prodFavoritos);
                    }
                    else {
                        _this.productosService.deleteFavoritoBD(prodFavoritos.id).subscribe(function (res) {
                            return res;
                        });
                    }
                });
                var favoritosNuevoString = JSON.stringify(favoritosNuevo_1);
                localStorage.removeItem('favoritosUsuario');
                localStorage.setItem('favoritosUsuario', favoritosNuevoString);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Tenes que iniciar sesión',
                type: 'info',
                text: 'Para poder agregar productos al carrito primero debes inciar sesión',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Iniciar Sesón'
            }).then(function (result) {
                if (result.value) {
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    ProductoDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-producto-detalle',
            template: __webpack_require__(/*! raw-loader!./producto-detalle.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shop/producto-detalle.component.html"),
            styles: [__webpack_require__(/*! ./producto-detalle.component.css */ "./src/app/components/shop/producto-detalle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_carrito_service__WEBPACK_IMPORTED_MODULE_1__["CarritoService"]])
    ], ProductoDetalleComponent);
    return ProductoDetalleComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/producto.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/shop/producto.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9wcm9kdWN0by5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shop/producto.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/shop/producto.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductoComponent = /** @class */ (function () {
    function ProductoComponent(productosService, router) {
        var _this = this;
        this.productosService = productosService;
        this.router = router;
        this.arrayNombresCategoriaPrincipal = [];
        this.nombreCategoria = '';
        this.esFavorito = false;
        this.productosFavoritos = [];
        if (localStorage.getItem('todosLosDatos')) {
            var todosLosDatosJson = JSON.parse(localStorage.getItem('todosLosDatos'));
            var datos = todosLosDatosJson;
            this.arrayNombresCategoriaPrincipal = datos.principales;
        }
        setTimeout(function () {
            _this.arrayNombresCategoriaPrincipal.forEach(function (categoria) {
                if (categoria.id === _this.producto.categoria_id) {
                    _this.producto.categoria = categoria.nombre;
                }
            });
            if (localStorage.getItem('userId')) {
                if (localStorage.getItem('favoritosUsuario')) {
                    var favoritosUsuarioJson = JSON.parse(localStorage.getItem('favoritosUsuario'));
                    favoritosUsuarioJson.forEach(function (fav) {
                        if (fav.productId === _this.producto.id) {
                            _this.esFavorito = true;
                        }
                    });
                }
            }
        }, 1000);
    }
    ProductoComponent.prototype.ngOnInit = function () { };
    // agregarAlCarrito(id: number) {
    //   // let prodAgregado: Carrito = {};
    //   let prodAgregado: Carrito = {};
    //   this.productoService.getProducto(id).subscribe((prod: any) => {
    //     prodAgregado.userId = localStorage.getItem('userId');
    //     prodAgregado.productId = prod.id;
    //     prodAgregado.cantidad = 1;
    //     this.productoService.guardarCarrito(prodAgregado).subscribe(res => console.log(res));
    //   });
    // }
    ProductoComponent.prototype.guardarFavoritos = function (idProducto) {
        var _this = this;
        var todosLosProductos = JSON.parse(localStorage.getItem('todosLosProductos'));
        if (localStorage.getItem('userId') !== null) {
            if (this.esFavorito === false) {
                this.esFavorito = true;
                var prodFavorito_1 = {
                    id: '',
                    userId: '',
                    productId: 0,
                };
                todosLosProductos.forEach(function (producto) {
                    if (producto.id == idProducto) {
                        prodFavorito_1.id = Math.random().toString(36).substr(2, 9);
                        prodFavorito_1.userId = localStorage.getItem('userId');
                        prodFavorito_1.productId = producto.id;
                        _this.productosFavoritos.push(prodFavorito_1);
                        _this.productosService.guardarFavorito(prodFavorito_1);
                        _this.productosService.guardarFavoritoBD(prodFavorito_1).subscribe(function (res) {
                            return res;
                        });
                    }
                });
            }
            else {
                this.esFavorito = false;
                var favoritosUsuarioJson = JSON.parse(localStorage.getItem('favoritosUsuario'));
                var favoritosNuevo_1 = [];
                favoritosUsuarioJson.forEach(function (prodFavoritos, index) {
                    if (prodFavoritos.productId !== idProducto) {
                        favoritosNuevo_1.push(prodFavoritos);
                    }
                    else {
                        _this.productosService.deleteFavoritoBD(prodFavoritos.id).subscribe(function (res) {
                            return res;
                        });
                    }
                });
                var favoritosNuevoString = JSON.stringify(favoritosNuevo_1);
                localStorage.removeItem('favoritosUsuario');
                localStorage.setItem('favoritosUsuario', favoritosNuevoString);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Tenes que iniciar sesión',
                type: 'info',
                text: 'Para poder agregar productos al carrito primero debes inciar sesión',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Iniciar Sesón'
            }).then(function (result) {
                if (result.value) {
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductoComponent.prototype, "producto", void 0);
    ProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto',
            template: __webpack_require__(/*! raw-loader!./producto.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shop/producto.component.html"),
            styles: [__webpack_require__(/*! ./producto.component.css */ "./src/app/components/shop/producto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductoComponent);
    return ProductoComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/shop.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/shop/shop.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ShopComponent = /** @class */ (function () {
    function ShopComponent(productosService, route, activatedRoute) {
        var _this = this;
        this.productosService = productosService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.productoConImagen = [];
        this.productoPorCategoria = [];
        this.productoPorColor = [];
        this.productoOrdenado = [];
        this.cargando = true;
        this.categoriasPrincipales = [];
        this.colores = [];
        this.relColores = [];
        this.filtraCategoria = false;
        this.filtraColor = false;
        this.ordenado = false;
        this.ordenadoNuevo = false;
        this.ordenadoMayor = false;
        this.ordenadoMenor = false;
        this.contenido = '';
        this.tituloPag = '';
        if (localStorage.getItem('todosLosProductos')) {
            var todosLosProductosJson = JSON.parse(localStorage.getItem('todosLosProductos'));
            this.productosBD = todosLosProductosJson;
        }
        var imagenesShop;
        if (localStorage.getItem('todosLasImagenesShop')) {
            var todosLasImagenesShopJson = JSON.parse(localStorage.getItem('todosLasImagenesShop'));
            imagenesShop = todosLasImagenesShopJson;
        }
        var arregloPath = [];
        this.productosBD.forEach(function (producto) {
            imagenesShop.forEach(function (imagen) {
                if (producto.id === imagen.producto_id) {
                    arregloPath.push(imagen.path);
                    producto.path = arregloPath;
                }
            });
            arregloPath = [];
            _this.productoConImagen.push(producto);
            setTimeout(function () {
                _this.cargando = false;
            }, 500);
        });
        if (localStorage.getItem('todosLosDatos')) {
            var todosLosDatosJson = JSON.parse(localStorage.getItem('todosLosDatos'));
            var datos = todosLosDatosJson;
            this.categoriasPrincipales = datos.principales;
            this.colores = datos.colores;
        }
        if (localStorage.getItem('todasRelColores')) {
            var todasRelColoresJson = JSON.parse(localStorage.getItem('todasRelColores'));
            this.relColores = todasRelColoresJson;
        }
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.contenido = "En esta seccion podras encontrar todos los productos que tenemos, filtar por color, por categoria, ordenar por precio y por el mas nuevo. Hoy en dia contamos con " + this.productosBD.length + " productos en nuestro stock, pero siempre estamos trabajando para tener mas";
        this.productosService.editarMetaHead(this.contenido);
        this.tituloPag = "Galeria de productos";
        this.productosService.editarTitulo(this.tituloPag);
    };
    ShopComponent.prototype.ngOnDestroy = function () {
        this.productosService.reiniciarMetaHead(this.contenido);
        this.productosService.reiniciarTitulo(this.tituloPag);
    };
    ShopComponent.prototype.cambiarCategoria = function (categoriaId) {
        var _this = this;
        this.filtraColor = false;
        this.filtraCategoria = true;
        this.ordenadoMayor = false;
        this.ordenadoMenor = false;
        this.ordenadoNuevo = false;
        this.ordenado = false;
        this.productoPorCategoria = [];
        this.productoConImagen.forEach(function (producto) {
            if (producto.categoria_id === categoriaId) {
                _this.productoPorCategoria.push(producto);
            }
        });
        if (categoriaId === 99) {
            this.productoPorCategoria = this.productoConImagen;
        }
        if (this.productoPorCategoria.length === 0 && categoriaId !== 99) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Todavia no tenemos ningún producto en esa categoría'
            }).then(function () {
                _this.productoPorCategoria = _this.productoConImagen;
                _this.filtraCategoria = false;
            });
        }
        return this.productoPorCategoria;
    };
    ShopComponent.prototype.filtrarColor = function (colorId) {
        var _this = this;
        this.filtraCategoria = false;
        this.filtraColor = true;
        this.ordenadoMayor = false;
        this.ordenadoMenor = false;
        this.ordenadoNuevo = false;
        this.ordenado = false;
        this.productoPorColor = [];
        this.productoConImagen.forEach(function (producto) {
            _this.relColores.forEach(function (relColor) {
                if (relColor.colore_id == colorId) {
                    console.log(relColor);
                    if (producto.id == relColor.producto_id) {
                        _this.productoPorColor.push(producto);
                    }
                }
            });
        });
        if (colorId === 99) {
            this.productoPorColor = this.productoConImagen;
        }
        if (this.productoPorColor.length === 0 && colorId !== 99) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Todavia no tenemos ningún producto con ese color'
            }).then(function () {
                _this.productoPorColor = _this.productoConImagen;
                _this.filtraColor = false;
            });
        }
        return this.productoPorColor;
    };
    ShopComponent.prototype.ordenarPor = function (ordenar) {
        console.log(ordenar);
        this.filtraCategoria = false;
        this.filtraColor = false;
        this.productoOrdenado = [];
        this.ordenadoMayor = false;
        this.ordenadoMenor = false;
        this.ordenadoNuevo = false;
        if (ordenar === 'mayor') {
            this.ordenadoMayor = true;
            this.ordenadoMenor = false;
            this.ordenadoNuevo = false;
            this.ordenado = false;
            var arregloOrdenadoMayor = [];
            // function mayor(a, b) {
            //   if (a.precio < b.precio) {
            //     return 1;
            //   }
            //   if (a.precio > b.precio) {
            //     return -1;
            //   }
            //   return 0;
            // }
            arregloOrdenadoMayor = this.productoConImagen.sort(this.mayor);
            this.productoOrdenado = arregloOrdenadoMayor;
            console.log(this.productoOrdenado);
        }
        if (ordenar === 'menor') {
            this.ordenadoMenor = true;
            this.ordenadoMayor = false;
            this.ordenadoNuevo = false;
            this.ordenado = false;
            var arregloOrdenadoMenor = [];
            // function menor(a, b) {
            //   if (a.precio < b.precio) {
            //     return -1;
            //   }
            //   if (a.precio > b.precio) {
            //     return 1;
            //   }
            //   return 0;
            // }
            arregloOrdenadoMenor = this.productoConImagen.sort(this.menor);
            console.log(arregloOrdenadoMenor);
            this.productoOrdenado = arregloOrdenadoMenor;
        }
        if (ordenar === 'nuevo') {
            this.ordenadoNuevo = true;
            this.ordenadoMayor = false;
            this.ordenadoMenor = false;
            this.ordenado = false;
            var arregloOrdenadoMasNuevo = [];
            // function nuevo(a, b) {
            //   if (a.updated_at < b.updated_at) {
            //     return 1;
            //   }
            //   if (a.updated_at > b.updated_at) {
            //     return -1;
            //   }
            //   return 0;
            // }
            arregloOrdenadoMasNuevo = this.productoConImagen.sort(this.nuevo);
            this.productoOrdenado = arregloOrdenadoMasNuevo;
        }
        if (ordenar === '') {
            this.productoOrdenado = this.productoConImagen;
            this.ordenadoMayor = false;
            this.ordenadoMenor = false;
            this.ordenadoNuevo = false;
            this.ordenado = false;
        }
        console.log(this.productoOrdenado);
        return this.productoOrdenado;
    };
    ShopComponent.prototype.nuevo = function (a, b) {
        if (a.updated_at < b.updated_at) {
            return 1;
        }
        if (a.updated_at > b.updated_at) {
            return -1;
        }
        return 0;
    };
    ShopComponent.prototype.menor = function (a, b) {
        if (a.precio < b.precio) {
            return -1;
        }
        if (a.precio > b.precio) {
            return 1;
        }
        return 0;
    };
    ShopComponent.prototype.mayor = function (a, b) {
        if (a.precio < b.precio) {
            return 1;
        }
        if (a.precio > b.precio) {
            return -1;
        }
        return 0;
    };
    ShopComponent.prototype.filtrarPorPrecio = function () {
        console.log('nada por ahora');
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/components/shop/shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/directives/ng-drop-files.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/ng-drop-files.directive.ts ***!
  \*******************************************************/
/*! exports provided: NgDropFilesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDropFilesDirective", function() { return NgDropFilesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_file_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/file-item */ "./src/app/models/file-item.ts");



var NgDropFilesDirective = /** @class */ (function () {
    function NgDropFilesDirective() {
        this.imagen1 = [];
        this.imagen2 = [];
        this.mouseSobre = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgDropFilesDirective.prototype.onDragEnter = function (event) {
        this.mouseSobre.emit(true);
        this._prevenirDetener(event);
    };
    NgDropFilesDirective.prototype.onDragLeave = function (event) {
        this.mouseSobre.emit(false);
    };
    NgDropFilesDirective.prototype.onDrop = function (event) {
        var transferencia = this._getTransferencia(event);
        if (!transferencia) {
            return;
        }
        this._extrarArchivos(transferencia.files);
        this._prevenirDetener(event);
        this.mouseSobre.emit(false);
    };
    NgDropFilesDirective.prototype._getTransferencia = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    NgDropFilesDirective.prototype._extrarArchivos = function (archivosLista) {
        // console.log(archivosLista);
        // tslint:disable-next-line:forin
        for (var propiedad in Object.getOwnPropertyNames(archivosLista)) {
            var archivoTemporal = archivosLista[propiedad];
            if (this._archivoPuedeSerCargado(archivoTemporal)) {
                var nuevoArchivo = new _models_file_item__WEBPACK_IMPORTED_MODULE_2__["FileItem"](archivoTemporal);
                // this.imagen1 = nuevoArchivo;
                this.imagen1.push(nuevoArchivo);
            }
        }
    };
    // Validaciones
    NgDropFilesDirective.prototype._archivoPuedeSerCargado = function (archivo) {
        if (!this._archivoYaFueDroppeado(archivo.name) && this._esImagen(archivo.type)) {
            return true;
        }
        else {
            return false;
        }
    };
    NgDropFilesDirective.prototype._prevenirDetener = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    NgDropFilesDirective.prototype._archivoYaFueDroppeado = function (nombreArchivo) {
        for (var _i = 0, _a = this.imagen1; _i < _a.length; _i++) {
            var archivo = _a[_i];
            if (archivo.nombreArchivo === nombreArchivo) {
                console.log('El archivo ' + nombreArchivo + ' ya está agregado!');
                return true;
            }
        }
        // if (this.imagen1) {
        //   if (this.imagen1.nombreArchivo === nombreArchivo) {
        //     console.log('El archivo ' + nombreArchivo + ' ya está agregado!');
        //     return true;
        //   }
        // }
        return false;
    };
    NgDropFilesDirective.prototype._esImagen = function (tipoArchivo) {
        return (tipoArchivo === '' || tipoArchivo === undefined ? false : tipoArchivo.startsWith('image'));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgDropFilesDirective.prototype, "imagen1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgDropFilesDirective.prototype, "imagen2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgDropFilesDirective.prototype, "mouseSobre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDragEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDrop", null);
    NgDropFilesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNgDropFiles]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgDropFilesDirective);
    return NgDropFilesDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var AuthGuard = /** @class */ (function () {
    function AuthGuard(registroService, router) {
        this.registroService = registroService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.registroService.estaLogueado()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Primero tenes que iniciar sesión en tu cuenta o crear una',
                type: 'warning',
                allowOutsideClick: false
            });
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_registro_service__WEBPACK_IMPORTED_MODULE_3__["RegistroService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/file-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/file-item.ts ***!
  \*************************************/
/*! exports provided: FileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
var FileItem = /** @class */ (function () {
    // public estaSubiendo: boolean;
    // public progreso: number;
    function FileItem(archivo) {
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        // this.estaSubiendo = false;
        // this.progreso = 0;
    }
    return FileItem;
}());



/***/ }),

/***/ "./src/app/models/usuario.models.ts":
/*!******************************************!*\
  !*** ./src/app/models/usuario.models.ts ***!
  \******************************************/
/*! exports provided: UsuarioModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModel", function() { return UsuarioModel; });
var UsuarioModel = /** @class */ (function () {
    function UsuarioModel() {
    }
    return UsuarioModel;
}());



/***/ }),

/***/ "./src/app/pipes/no-image.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/no-image.pipe.ts ***!
  \****************************************/
/*! exports provided: NoImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoImagePipe", function() { return NoImagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoImagePipe = /** @class */ (function () {
    function NoImagePipe() {
    }
    NoImagePipe.prototype.transform = function (images) {
        if (!images) {
            return 'assets/img/noimage.png';
        }
        if (images.length > 0) {
            return images[0].url;
        }
        else {
            return 'assets/img/noimage.png';
        }
        return null;
    };
    NoImagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'noImage'
        })
    ], NoImagePipe);
    return NoImagePipe;
}());



/***/ }),

/***/ "./src/app/services/carrito.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/carrito.service.ts ***!
  \*********************************************/
/*! exports provided: CarritoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoService", function() { return CarritoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CarritoService = /** @class */ (function () {
    // private urlAPI = "http://127.0.0.1:8000/api";
    function CarritoService(http) {
        this.http = http;
        // carritoJson = [];
        this.cantidadProdCarrito = 0;
        this.urlAPI = "https://genovevabe.cf/api";
    }
    CarritoService.prototype.guardarProductoCarrito = function (carrito) {
        if (localStorage.getItem("carritoDeCompras")) {
            var carritoDeComprasJson = JSON.parse(localStorage.getItem("carritoDeCompras"));
            carritoDeComprasJson.push({
                // id: Math.random().toString(36).substr(2, 9),
                id: carrito.id,
                productId: carrito.productId,
                userId: carrito.userId,
                talle: carrito.talle,
                talle_id: carrito.talle_id,
                cantidad: carrito.cantidad,
                orden_id: carrito.orden_id
            });
            localStorage.removeItem("carritoDeCompras");
            var carritoDeComprasString = JSON.stringify(carritoDeComprasJson);
            localStorage.setItem("carritoDeCompras", carritoDeComprasString);
        }
        else {
            var carritoJson = [
                {
                    // id: Math.random().toString(36).substr(2, 9),
                    id: carrito.id,
                    productId: carrito.productId,
                    userId: carrito.userId,
                    talle: carrito.talle,
                    talle_id: carrito.talle_id,
                    cantidad: carrito.cantidad,
                    orden_id: carrito.orden_id
                }
            ];
            var carritoDeComprasString = JSON.stringify(carritoJson);
            localStorage.setItem("carritoDeCompras", carritoDeComprasString);
        }
    };
    CarritoService.prototype.guardarCarritoBD = function (carrito) {
        var url = this.urlAPI + "/guardarCarrito";
        var body = JSON.stringify(carrito);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CarritoService.prototype.deleteCarritoBD = function (idCarrito) {
        var url = this.urlAPI + "/deleteCarrito/" + idCarrito;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CarritoService.prototype.getCarritoBD = function (userId) {
        var url = this.urlAPI + "/getCarrito/" + userId;
        var carritoDeComprasJson = [];
        this.http
            .get(url)
            .pipe()
            .subscribe(function (arregloCarrito) {
            if (arregloCarrito.length !== 0) {
                if (arregloCarrito.length === 1) {
                    carritoDeComprasJson.push({
                        id: arregloCarrito[0].id,
                        productId: arregloCarrito[0].producto_id,
                        userId: arregloCarrito[0].user_id,
                        talle: arregloCarrito[0].talle,
                        talle_id: arregloCarrito[0].talle_id,
                        cantidad: arregloCarrito[0].cantidad,
                        orden_id: arregloCarrito[0].ordene_id
                    });
                    var carritoDeComprasString = JSON.stringify(carritoDeComprasJson);
                    localStorage.setItem("carritoDeCompras", carritoDeComprasString);
                }
                else {
                    arregloCarrito.forEach(function (carrito) {
                        carritoDeComprasJson.push({
                            id: carrito.id,
                            productId: carrito.producto_id,
                            userId: carrito.user_id,
                            talle: carrito.talle,
                            talle_id: carrito.talle_id,
                            cantidad: carrito.cantidad,
                            orden_id: carrito.ordene_id
                        });
                    });
                    var carritoDeComprasString = JSON.stringify(carritoDeComprasJson);
                    localStorage.setItem("carritoDeCompras", carritoDeComprasString);
                }
            }
        });
        return carritoDeComprasJson;
    };
    CarritoService.prototype.getTablaCarritos = function (userId) {
        var url = this.urlAPI + "/getCarrito/" + userId;
        var arregloCarrito = [];
        this.http.get(url).pipe().subscribe(function (filasTabla) {
            if (filasTabla.length !== 0) {
                if (filasTabla.length === 1) {
                    arregloCarrito.push(filasTabla[0]);
                }
                else {
                    filasTabla.forEach(function (fila) {
                        arregloCarrito.push(fila);
                    });
                }
            }
        });
        return arregloCarrito;
    };
    CarritoService.prototype.getCarrito = function () {
        var carritoDeComprasJsonUsuario = [];
        if (localStorage.getItem("carritoDeCompras")) {
            var carritoDeComprasJson = JSON.parse(localStorage.getItem("carritoDeCompras"));
            carritoDeComprasJson.forEach(function (carrito) {
                if (carrito.userId == localStorage.getItem("userId") && carrito.orden_id === 0) {
                    carritoDeComprasJsonUsuario.push(carrito);
                }
            });
        }
        return carritoDeComprasJsonUsuario;
    };
    CarritoService.prototype.deleteProductoCarrito = function (idCarritoAborrar) {
        var carritoDeComprasJson = JSON.parse(localStorage.getItem("carritoDeCompras"));
        carritoDeComprasJson.forEach(function (productoCarrito, index) {
            if (productoCarrito.id === idCarritoAborrar) {
                // entra
                carritoDeComprasJson.splice(index, 1);
            }
        });
        var carritoDeComprasString = JSON.stringify(carritoDeComprasJson);
        // console.log(carritoDeComprasString);
        localStorage.removeItem("carritoDeCompras");
        // console.log(carritoDeComprasString);
        localStorage.setItem("carritoDeCompras", carritoDeComprasString);
        if (carritoDeComprasJson.length === 0) {
            localStorage.removeItem("carritoDeCompras");
        }
    };
    CarritoService.prototype.cantidadPodructos = function () {
        return this.getCarrito().length;
    };
    CarritoService.prototype.getOrdenes = function () {
        var url = this.urlAPI + "/ordenes";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CarritoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CarritoService);
    return CarritoService;
}());



/***/ }),

/***/ "./src/app/services/checkout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CheckoutService = /** @class */ (function () {
    // private urlAPI = 'http://127.0.0.1:8000/api';
    function CheckoutService(http) {
        this.http = http;
        this.urlAPI = "https://genovevabe.cf/api";
        this.obtenerMediosDePago();
    }
    CheckoutService.prototype.realizarPedido = function (infoPedido) {
        var url = this.urlAPI + "/realizarPedido";
        var body = JSON.stringify(infoPedido);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.post(url, body, { headers: headers }).pipe(
        // return this.http.post(url, body).pipe(
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    CheckoutService.prototype.borrarPedido = function (idUser) {
        var url = this.urlAPI + "/deletePedido/" + idUser;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CheckoutService.prototype.acomodarStock = function (idsYtalles) {
        console.log(idsYtalles);
        var url = this.urlAPI + "/acomodarStock";
        var body = JSON.stringify(idsYtalles);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CheckoutService.prototype.obtenerMediosDePago = function () {
        var url = this.urlAPI + "/obtenerMediosDePago";
        // const headers = new HttpHeaders({
        //   "Content-Type": "application/json"
        // });
        return this.http
            .get(url)
            .pipe()
            .subscribe(function (mediosDePago) {
            console.log(mediosDePago);
            var mediosDePagoString = JSON.stringify(mediosDePago.body);
            localStorage.setItem("mediosDePago", mediosDePagoString);
            // mediosDePago.body.forEach(tarjeta => {
            // });
            return mediosDePago;
        });
    };
    // enviarPago() {
    //   const url = `${this.urlAPI}/pagarMP`;
    //   this.http.get(url).pipe().subscribe( res => {
    //     console.log(res);
    //     return res;
    //   });
    // }
    CheckoutService.prototype.enviarPago = function (datos) {
        var url = this.urlAPI + "/pagarMP";
        var body = JSON.stringify(datos);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    CheckoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/services/productos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/productos.service.ts ***!
  \***********************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// import { Observable } from 'rxjs/Observable';


var ProductosService = /** @class */ (function () {
    function ProductosService(http) {
        // const url = `${this.urlAPI}/productos`;
        this.http = http;
        this.urlAPI = "https://genovevabe.cf/api";
        // private urlAPI = 'http://127.0.0.1:8000/api';
        // para compartir data
        this.terminoBuscado$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.http
            .get(this.urlAPI + "/productos")
            .pipe()
            .subscribe(function (productos) {
            var todosLosProductos = JSON.stringify(productos);
            localStorage.setItem("todosLosProductos", todosLosProductos);
        });
        this.http
            .get(this.urlAPI + "/datos")
            .pipe()
            .subscribe(function (datos) {
            var todosLosDatos = JSON.stringify(datos);
            localStorage.setItem("todosLosDatos", todosLosDatos);
        });
        this.http
            .get(this.urlAPI + "/imagenesShop")
            .pipe()
            .subscribe(function (imagenesShop) {
            var todosLasImagenesShop = JSON.stringify(imagenesShop);
            localStorage.setItem("todosLasImagenesShop", todosLasImagenesShop);
        });
        this.http
            .get(this.urlAPI + "/imagenesDetalle")
            .pipe()
            .subscribe(function (imagenesDetalle) {
            var todosLasImagenesDetalle = JSON.stringify(imagenesDetalle);
            localStorage.setItem("todosLasImagenesDetalle", todosLasImagenesDetalle);
        });
        // this.http
        //   .get(`${this.urlAPI}/productos/stock`)
        //   .pipe()
        //   .subscribe(stock => {
        //     const todoElStock = JSON.stringify(stock);
        //     localStorage.setItem("todoElStock", todoElStock);
        //   });
        this.http
            .get(this.urlAPI + "/relcolores")
            .pipe()
            .subscribe(function (relColores) {
            var todasRelColores = JSON.stringify(relColores);
            localStorage.setItem("todasRelColores", todasRelColores);
        });
        if (localStorage.getItem("userId")) {
            if (!localStorage.getItem("favoritosUsuario")) {
                this.http
                    .get(this.urlAPI + "/getProductosFavoritos/" + localStorage.getItem("userId"))
                    .pipe()
                    .subscribe(function (favoritos) {
                    if (favoritos) {
                        var favoritosUsuarioJson_1 = [];
                        if (favoritos.length === 1) {
                            favoritosUsuarioJson_1 = [
                                {
                                    id: favoritos.id,
                                    productId: favoritos.producto_id,
                                    userId: favoritos.userId
                                }
                            ];
                            var favoritosUsuarioString_1 = JSON.stringify(favoritosUsuarioJson_1);
                            localStorage.setItem("favoritosUsuario", favoritosUsuarioString_1);
                        }
                        else {
                            favoritos.forEach(function (fav) {
                                favoritosUsuarioJson_1.push({
                                    id: fav.id,
                                    productId: fav.producto_id,
                                    userId: fav.user_id
                                });
                            });
                        }
                        var favoritosUsuarioString = JSON.stringify(favoritosUsuarioJson_1);
                        localStorage.setItem("favoritosUsuario", favoritosUsuarioString);
                    }
                });
            }
        }
    }
    ProductosService.prototype.editarTitulo = function (titulo) {
        var titleElement = document.getElementsByTagName('title');
        titleElement[0].innerText += titulo;
    };
    ProductosService.prototype.reiniciarTitulo = function (titulo) {
        var titleElement = document.getElementsByTagName('title');
        titleElement[0].innerText = titleElement[0].innerText.replace(titulo, '');
    };
    ProductosService.prototype.productosDestacados = function () {
        if (localStorage.getItem("todosLosProductos")) {
            var todosLosProductosJson = JSON.parse(localStorage.getItem("todosLosProductos"));
            var todosLasImagenesShopJson_1 = JSON.parse(localStorage.getItem("todosLasImagenesShop"));
            var productosPopulares_1 = [];
            todosLosProductosJson.forEach(function (producto) {
                if (producto.popular) {
                    productosPopulares_1.push(producto);
                }
            });
            var productosDestacadosConImagenes_1 = [];
            productosPopulares_1.forEach(function (productoDestacado) {
                var pathImagen = [];
                todosLasImagenesShopJson_1.forEach(function (imagen) {
                    if (productoDestacado.id == imagen.producto_id) {
                        pathImagen.push(imagen.path);
                        productoDestacado.path = pathImagen;
                    }
                });
                pathImagen = [];
                productosDestacadosConImagenes_1.push(productoDestacado);
            });
            return productosDestacadosConImagenes_1;
        }
    };
    ProductosService.prototype.imagenesDetalle = function (idProducto) {
        var todosLasImagenesDetalleJson;
        var path = [];
        if (localStorage.getItem("todosLasImagenesDetalle")) {
            todosLasImagenesDetalleJson = JSON.parse(localStorage.getItem("todosLasImagenesDetalle"));
            todosLasImagenesDetalleJson.forEach(function (imagen) {
                if (imagen.producto_id == idProducto) {
                    path.push(imagen.path);
                }
            });
        }
        return path;
    };
    ProductosService.prototype.stockProducto = function (id) {
        var url = this.urlAPI + "/producto/" + id + "/stock";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (stockProducto) {
            var talles;
            var stock = [];
            if (localStorage.getItem("todosLosDatos")) {
                var todosLosDatosJSon = JSON.parse(localStorage.getItem("todosLosDatos"));
                talles = todosLosDatosJSon.talles;
            }
            stockProducto.forEach(function (stockBD) {
                talles.forEach(function (talle) {
                    if (stockBD.producto_id == id) {
                        if (stockBD.talle_id == talle.id) {
                            stock.push({
                                talle_id: talle.id,
                                talle_nombre: talle.nombre,
                                talle_cantidad: stockBD.cantidad
                            });
                        }
                    }
                });
            });
            console.log(stock);
            return stock;
        }));
        // let todoElStockJson;
        // // let stockProdcuto;
        // let talles;
        // const stock = [];
        // if (localStorage.getItem("todosLosDatos")) {
        //   const todosLosDatosJSon = JSON.parse(
        //     localStorage.getItem("todosLosDatos")
        //   );
        //   talles = todosLosDatosJSon.talles;
        // }
        // if (localStorage.getItem("todoElStock")) {
        //   todoElStockJson = JSON.parse(localStorage.getItem("todoElStock"));
        //   todoElStockJson.forEach(stockProdcuto => {
        //     talles.forEach(talle => {
        //       if (stockProdcuto.producto_id == id) {
        //         if (stockProdcuto.talle_id == talle.id) {
        //           stock.push({
        //             talle_id: talle.id,
        //             talle_nombre: talle.nombre,
        //             talle_cantidad: stockProdcuto.cantidad
        //           });
        //         }
        //       }
        //     });
        //   });
        // }
        // return stock;
    };
    ProductosService.prototype.cargarScript = function (scriptUrl) {
        return new Promise(function (resolve) {
            var scriptElement = document.createElement("script");
            scriptElement.src = scriptUrl;
            scriptElement.type = "text/javascript";
            scriptElement.async = true;
            scriptElement.charset = "utf-8";
            scriptElement.onload = resolve;
            var ultimo = document.body.lastChild;
            document.body.insertBefore(scriptElement, ultimo);
            // document.getElementsByTagName('body')[1].appendChild(scriptElement);
        });
    };
    ProductosService.prototype.cargarScriptHead = function (scriptUrl) {
        return new Promise(function (resolve) {
            var scriptElement = document.createElement("script");
            scriptElement.src = scriptUrl;
            var ultimo = document.head.lastChild;
            document.head.insertBefore(scriptElement, ultimo);
        });
    };
    ProductosService.prototype.editarMetaHead = function (contenido) {
        return new Promise(function (resolve) {
            var metaElement = document.querySelector("[name^=Description]");
            metaElement.content += contenido;
        });
    };
    ProductosService.prototype.borrarScript = function (scriptUrl) {
        var url = "http://localhost:4200/";
        var arreglo = document.body.getElementsByTagName("script");
        for (var i in arreglo) {
            if (arreglo.hasOwnProperty(i)) {
                var element = arreglo[i];
                if (element.src === url + scriptUrl || element.src === scriptUrl) {
                    document.body.removeChild(element);
                }
            }
        }
    };
    ProductosService.prototype.borrarScriptHead = function (scriptUrl) {
        var url = "http://localhost:4200/";
        var arreglo = document.head.getElementsByTagName("script");
        for (var i in arreglo) {
            if (arreglo.hasOwnProperty(i)) {
                var element = arreglo[i];
                if (element.src === url + scriptUrl || element.src === scriptUrl) {
                    document.head.removeChild(element);
                }
            }
        }
    };
    ProductosService.prototype.reiniciarMetaHead = function (contenido) {
        var metaElement = document.querySelector("[name^=Description]");
        metaElement.content = metaElement.content.replace(contenido, '');
    };
    ProductosService.prototype.cargarEstilos = function (styleUrl) {
        return new Promise(function (resolve, reject) {
            var styleElement = document.createElement("link");
            styleElement.href = styleUrl;
            styleElement.rel = "stylesheet";
            styleElement.onload = resolve;
            document.head.appendChild(styleElement);
        });
    };
    ProductosService.prototype.borrarEstilos = function (scriptUrl) {
        var url = "http://localhost:4200/";
        var arreglo = document.head.getElementsByTagName("link");
        for (var i in arreglo) {
            if (arreglo.hasOwnProperty(i)) {
                var element = arreglo[i];
                if (element.href === url + scriptUrl || element.href === scriptUrl) {
                    document.head.removeChild(element);
                }
            }
        }
    };
    // comparto data, sirve para insertarla y ver como va cambiando
    ProductosService.prototype.getData = function () {
        return this.terminoBuscado$;
    };
    ProductosService.prototype.updateData = function (data) {
        this.terminoBuscado$.next(data);
    };
    // hasta aca
    ProductosService.prototype.guardarFavorito = function (prodFavorito) {
        if (localStorage.getItem("favoritosUsuario")) {
            var favoritosUsuarioJson = JSON.parse(localStorage.getItem("favoritosUsuario"));
            favoritosUsuarioJson.push({
                id: prodFavorito.id,
                productId: prodFavorito.productId,
                userId: prodFavorito.userId
            });
            localStorage.removeItem("favoritosUsuario");
            var favoritosUsuarioString = JSON.stringify(favoritosUsuarioJson);
            localStorage.setItem("favoritosUsuario", favoritosUsuarioString);
        }
        else {
            var favoritosUsuarioJson = [
                {
                    id: prodFavorito.id,
                    productId: prodFavorito.productId,
                    userId: prodFavorito.userId
                }
            ];
            var favoritosUsuarioString = JSON.stringify(favoritosUsuarioJson);
            localStorage.setItem("favoritosUsuario", favoritosUsuarioString);
        }
    };
    ProductosService.prototype.guardarFavoritoBD = function (prodFavorito) {
        var url = this.urlAPI + "/guardarProductoFavorito";
        var body = JSON.stringify(prodFavorito);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    ProductosService.prototype.deleteFavoritoBD = function (prodFavoritoId) {
        var url = this.urlAPI + "/deleteFavorito/" + prodFavoritoId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductosService);
    return ProductosService;
}());



/***/ }),

/***/ "./src/app/services/registro.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/registro.service.ts ***!
  \**********************************************/
/*! exports provided: RegistroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroService", function() { return RegistroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



// import { Observable } from 'rxjs/Observable';

var RegistroService = /** @class */ (function () {
    function RegistroService(http) {
        this.http = http;
        // private urlAPI = "http://127.0.0.1:8000/api";
        this.urlAPI = 'https://genovevabe.cf/api';
    }
    RegistroService.prototype.esAdmin = function (id) {
        return this.getUsuario(id).subscribe(function (user) {
            var esAdmin;
            if (user.isAdmin === 1) {
                console.log('entra 1');
                esAdmin = true;
            }
            else {
                console.log('entra no');
                if (localStorage.getItem('esAdmin') !== null) {
                    localStorage.removeItem('esAdmin');
                }
                esAdmin = false;
            }
        });
    };
    RegistroService.prototype.enviarRegistro = function (usuario) {
        var url = this.urlAPI + "/registro";
        var body = JSON.stringify(usuario);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (usuario) {
            localStorage.setItem("email", usuario.email);
            return usuario;
        }));
    };
    RegistroService.prototype.enviarLogin = function (usuario) {
        var url = this.urlAPI + "/login";
        var body = JSON.stringify(usuario);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            return user;
        }));
    };
    RegistroService.prototype.getUsuario = function (id) {
        var url = this.urlAPI + "/usuario/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    RegistroService.prototype.estaLogueado = function () {
        if (localStorage.getItem("userId")) {
            return true;
        }
    };
    RegistroService.prototype.logout = function () {
        var url = this.urlAPI + "/logout";
        return this.http.get(url);
    };
    RegistroService.prototype.getUsuarios = function () {
        var url = this.urlAPI + "/usuarios";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    RegistroService.prototype.cambiarContraseña = function (passYid) {
        var url = this.urlAPI + "/cambiarpass";
        var body = JSON.stringify(passYid);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    RegistroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegistroService);
    return RegistroService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Carina\Desktop\Cristian\genovevaFE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map