"use strict";
var Nums;
(function (Nums) {
    var Vec2 = /** @class */ (function () {
        function Vec2(x, y) {
            if (y === void 0) { y = x; }
            this.x = 0;
            this.y = 0;
            this.x = x;
            this.y = y;
        }
        Vec2.prototype.add = function (vec) {
            return new Vec2(this.x + vec.x, this.y + vec.y);
        };
        Vec2.prototype.sub = function (vec) {
            return new Vec2(this.x - vec.x, this.y - vec.y);
        };
        Vec2.prototype.mul = function (vec) {
            return new Vec2(this.x * vec.x, this.y * vec.y);
        };
        Vec2.prototype.div = function (vec) {
            return new Vec2(this.x / vec.x, this.y / vec.y);
        };
        Vec2.prototype.Normalize = function () {
            throw new Error("Method not implemented.");
        };
        Vec2.prototype.Normalized = function () {
            throw new Error("Method not implemented.");
        };
        Vec2.prototype.Magnitude = function () {
            throw new Error("Method not implemented.");
        };
        return Vec2;
    }());
    Nums.Vec2 = Vec2;
})(Nums || (Nums = {}));
var Nums;
(function (Nums) {
    var Vec3 = /** @class */ (function () {
        function Vec3(x, y, z) {
            if (y === void 0) { y = x; }
            if (z === void 0) { z = x; }
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Vec3.prototype.add = function (vec) {
            return new Vec3(this.x + vec.x, this.y + vec.y, this.z + vec.z);
        };
        Vec3.prototype.sub = function (vec) {
            return new Vec3(this.x - vec.x, this.y - vec.y, this.z - vec.z);
        };
        Vec3.prototype.mul = function (vec) {
            return new Vec3(this.x * vec.x, this.y * vec.y, this.z * vec.z);
        };
        Vec3.prototype.div = function (vec) {
            return new Vec3(this.x / vec.x, this.y / vec.y, this.z / vec.z);
        };
        Vec3.prototype.Normalize = function () {
            throw new Error("Method not implemented.");
        };
        Vec3.prototype.Normalized = function () {
            throw new Error("Method not implemented.");
        };
        Vec3.prototype.Magnitude = function () {
            throw new Error("Method not implemented.");
        };
        return Vec3;
    }());
    Nums.Vec3 = Vec3;
})(Nums || (Nums = {}));
var Nums;
(function (Nums) {
    var Vec4 = /** @class */ (function () {
        function Vec4(x, y, z, w) {
            if (y === void 0) { y = x; }
            if (z === void 0) { z = x; }
            if (w === void 0) { w = x; }
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        Vec4.prototype.add = function (vec) {
            return new Vec4(this.x + vec.x, this.y + vec.y, this.z + vec.z, this.w + vec.w);
        };
        Vec4.prototype.sub = function (vec) {
            return new Vec4(this.x - vec.x, this.y - vec.y, this.z - vec.z, this.w - vec.w);
        };
        Vec4.prototype.mul = function (vec) {
            return new Vec4(this.x * vec.x, this.y * vec.y, this.z * vec.z, this.w * vec.w);
        };
        Vec4.prototype.div = function (vec) {
            return new Vec4(this.x / vec.x, this.y / vec.y, this.z / vec.z, this.w / vec.w);
        };
        Vec4.prototype.Normalize = function () {
            throw new Error("Method not implemented.");
        };
        Vec4.prototype.Normalized = function () {
            throw new Error("Method not implemented.");
        };
        Vec4.prototype.Magnitude = function () {
            throw new Error("Method not implemented.");
        };
        return Vec4;
    }());
    Nums.Vec4 = Vec4;
})(Nums || (Nums = {}));
