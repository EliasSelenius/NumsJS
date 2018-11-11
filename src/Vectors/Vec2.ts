
/// <reference path="Vec.ts"/>

namespace Nums {
    export class Vec2 extends Vec<Vec2> {

        protected get instance(): Vec2 {
            return this;
        }

        public x: number;
        public y: number;

        get Array(): number[] {
            return [ this.x, this.y ];
        }
        set Array(v: number[]) {
            this.x = v[0];
            this.y = v[1];
        }

        constructor(x: number = 0, y: number = x) {
            super();
            this.x = x; this.y = y;
        }

        add(vec: Vec2): Vec2 {
            return new Vec2(this.x + vec.x, this.y + vec.y);
        }
        sub(vec: Vec2): Vec2 {
            return new Vec2(this.x - vec.x, this.y - vec.y);
        }
        mulByVec(vec: Vec2): Vec2 {
            return new Vec2(this.x * vec.x, this.y * vec.y);
        }
        mulByNum(v: number): Vec2 {
            return new Vec2(this.x * v, this.y * v);
        }
        divByVec(vec: Vec2): Vec2 {
            return new Vec2(this.x / vec.x, this.y / vec.y);
        }
        divByNum(v: number): Vec2 {
            return new Vec2(this.x / v, this.y / v);
        }
    }
}