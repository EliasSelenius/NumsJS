"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Nums;
(function (Nums) {
    var Vec = /** @class */ (function () {
        function Vec() {
        }
        Vec.prototype.addeq = function (vec) {
            this.instance = this.add(vec);
            return this.instance;
        };
        Vec.prototype.subeq = function (vec) {
            this.instance = this.sub(vec);
            return this.instance;
        };
        Vec.prototype.Normalize = function () {
            this.instance = this.Normalized;
            return this.instance;
        };
        Vec.prototype.Dot = function (vec) {
            return this.mulByVec(vec).AddAggregated();
        };
        Vec.prototype.AddAggregated = function () {
            var res = 0;
            for (var _i = 0, _a = this.ToArray(); _i < _a.length; _i++) {
                var comp = _a[_i];
                res += comp;
            }
            return res;
        };
        Vec.prototype.MulAggregated = function () {
            var res = 1;
            for (var _i = 0, _a = this.ToArray(); _i < _a.length; _i++) {
                var comp = _a[_i];
                res *= comp;
            }
            return res;
        };
        Object.defineProperty(Vec.prototype, "Normalized", {
            get: function () {
                var m = this.Magnitude;
                if (m == 0) {
                    return this.instance;
                }
                return this.instance.divByNum(m);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vec.prototype, "Magnitude", {
            get: function () {
                return Math.sqrt(this.Dot(this.instance));
            },
            enumerable: true,
            configurable: true
        });
        Vec.prototype.sqMagnitude = function () {
            return this.Dot(this.instance);
        };
        Vec.prototype.AngleTo = function (vec) {
            return Math.acos(this.Dot(vec) / (this.Magnitude * vec.Magnitude));
        };
        Vec.prototype.DistanceTo = function (vec) {
            return this.sub(vec).Magnitude;
        };
        Vec.prototype.Lerp = function (vec, time) {
            return vec.add(this.sub(vec).mulByNum(time));
        };
        return Vec;
    }());
    Nums.Vec = Vec;
})(Nums || (Nums = {}));
/// <reference path="Vec.ts"/>
var Nums;
(function (Nums) {
    var Vec2 = /** @class */ (function (_super) {
        __extends(Vec2, _super);
        function Vec2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = x; }
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Vec2.prototype.ToArray = function () {
            return [this.x, this.y];
        };
        Object.defineProperty(Vec2.prototype, "instance", {
            get: function () {
                return this;
            },
            set: function (vec) {
                this.x = vec.x;
                this.y = vec.y;
            },
            enumerable: true,
            configurable: true
        });
        Vec2.prototype.add = function (vec) {
            return new Vec2(this.x + vec.x, this.y + vec.y);
        };
        Vec2.prototype.sub = function (vec) {
            return new Vec2(this.x - vec.x, this.y - vec.y);
        };
        Vec2.prototype.mulByVec = function (vec) {
            return new Vec2(this.x * vec.x, this.y * vec.y);
        };
        Vec2.prototype.mulByNum = function (v) {
            return new Vec2(this.x * v, this.y * v);
        };
        Vec2.prototype.divByVec = function (vec) {
            return new Vec2(this.x / vec.x, this.y / vec.y);
        };
        Vec2.prototype.divByNum = function (v) {
            return new Vec2(this.x / v, this.y / v);
        };
        return Vec2;
    }(Nums.Vec));
    Nums.Vec2 = Vec2;
})(Nums || (Nums = {}));
var Nums;
(function (Nums) {
    var Vec3 = /** @class */ (function (_super) {
        __extends(Vec3, _super);
        function Vec3(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = x; }
            if (z === void 0) { z = x; }
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            _this.z = z;
            return _this;
        }
        Vec3.prototype.ToArray = function () {
            return [this.x, this.y, this.z];
        };
        Object.defineProperty(Vec3.prototype, "instance", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Vec3.prototype.add = function (vec) {
            return new Vec3(this.x + vec.x, this.y + vec.y, this.z + vec.z);
        };
        Vec3.prototype.sub = function (vec) {
            return new Vec3(this.x - vec.x, this.y - vec.y, this.z - vec.z);
        };
        Vec3.prototype.mulByVec = function (vec) {
            return new Vec3(this.x * vec.x, this.y * vec.y, this.z * vec.z);
        };
        Vec3.prototype.mulByNum = function (v) {
            return new Vec3(this.x * v, this.y * v, this.z * v);
        };
        Vec3.prototype.divByVec = function (vec) {
            return new Vec3(this.x / vec.x, this.y / vec.y, this.z / vec.z);
        };
        Vec3.prototype.divByNum = function (v) {
            return new Vec3(this.x / v, this.y / v, this.z / v);
        };
        return Vec3;
    }(Nums.Vec));
    Nums.Vec3 = Vec3;
})(Nums || (Nums = {}));
var Nums;
(function (Nums) {
    var Vec4 = /** @class */ (function (_super) {
        __extends(Vec4, _super);
        function Vec4(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = x; }
            if (z === void 0) { z = x; }
            if (w === void 0) { w = x; }
            var _this = _super.call(this) || this;
            _this.x = 0;
            _this.y = 0;
            _this.z = 0;
            _this.w = 0;
            _this.x = x;
            _this.y = y;
            _this.z = z;
            _this.w = w;
            return _this;
        }
        Vec4.prototype.ToArray = function () {
            return [this.x, this.y, this.z, this.w];
        };
        Object.defineProperty(Vec4.prototype, "instance", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Vec4.prototype.add = function (vec) {
            return new Vec4(this.x + vec.x, this.y + vec.y, this.z + vec.z, this.w + vec.w);
        };
        Vec4.prototype.sub = function (vec) {
            return new Vec4(this.x - vec.x, this.y - vec.y, this.z - vec.z, this.w - vec.w);
        };
        Vec4.prototype.mulByVec = function (vec) {
            return new Vec4(this.x * vec.x, this.y * vec.y, this.z * vec.z, this.w * vec.w);
        };
        Vec4.prototype.mulByNum = function (v) {
            throw new Error("Method not implemented.");
        };
        Vec4.prototype.divByVec = function (vec) {
            return new Vec4(this.x / vec.x, this.y / vec.y, this.z / vec.z, this.w / vec.w);
        };
        Vec4.prototype.divByNum = function (v) {
            throw new Error("Method not implemented.");
        };
        return Vec4;
    }(Nums.Vec));
    Nums.Vec4 = Vec4;
})(Nums || (Nums = {}));
