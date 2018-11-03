"use strict";
window.onload = function () {
    alert('test');
};
var Nums;
(function (Nums) {
    var Vec2 = /** @class */ (function () {
        function Vec2() {
            this.x = 0;
            this.y = 0;
        }
        return Vec2;
    }());
    Nums.Vec2 = Vec2;
    var Vec3 = /** @class */ (function () {
        function Vec3() {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        return Vec3;
    }());
    Nums.Vec3 = Vec3;
    var Vec4 = /** @class */ (function () {
        function Vec4() {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;
        }
        return Vec4;
    }());
    Nums.Vec4 = Vec4;
})(Nums || (Nums = {}));
