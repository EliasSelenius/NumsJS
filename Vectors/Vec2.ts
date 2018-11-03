
namespace Nums {
    export class Vec2 implements IVec<Vec2> {
        add(vec: Vec2): Vec2 {
            return new Vec2(this.x + vec.x, this.y + vec.y);
        }
        sub(vec: Vec2): Vec2 {
            return new Vec2(this.x - vec.x, this.y - vec.y);
        }
        mul(vec: Vec2): Vec2 {
            return new Vec2(this.x * vec.x, this.y * vec.y);
        }
        div(vec: Vec2): Vec2 {
            return new Vec2(this.x / vec.x, this.y / vec.y);
        }
        Normalize(): Vec2 {
            throw new Error("Method not implemented.");
        }
        Normalized(): Vec2 {
            throw new Error("Method not implemented.");
        }
        Magnitude(): number {
            throw new Error("Method not implemented.");
        }

        public x: number = 0;
        public y: number = 0;

        constructor(x: number, y: number = x) {
            this.x = x; this.y = y;
        }


    }
}