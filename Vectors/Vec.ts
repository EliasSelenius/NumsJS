
namespace Nums {
    export abstract class Vec<T extends Vec<T>> {
        private instance!: T;
        

        protected Init(inst: T): void {
            this.instance = inst;
        }

        abstract add(vec: T): T;
        abstract sub(vec: T): T;
        abstract mulByVec(vec: T): T;
        abstract mulByNum(v: number): T;
        abstract divByVec(vec: T): T;
        abstract divByNum(v: number): T;

        Normalize(): T {
            this.Array = this.Normalized.Array
            return this.instance;
        }

        abstract get Array(): number[];
        abstract set Array(v: number[]);


        Dot(vec: T): number {
            return this.instance.mulByVec(vec).AddAggregated;
        }

        get AddAggregated(): number {
            let res: number = 0;
            for (const comp of this.Array) {
                res += comp;
            }
            return res;
        }
        get MulAggregated(): number {
            let res: number = 1;
            for (const comp of this.Array) {
                res *= comp;
            }
            return res;
        }
        

        get Normalized(): T {
            let m: number = this.Magnitude;
            if (m == 0) {
                return this.instance;
            }
            return this.instance.divByNum(m);
        }
        
        get Magnitude(): number {
            return Math.sqrt(this.Dot(this.instance));
        }
        sqMagnitude(): number {
            return this.Dot(this.instance);
        }

        AngleTo(vec: T): number {
            return Math.acos(this.Dot(vec) / (this.Magnitude * vec.Magnitude));
        }

        DistanceTo(vec: T): number {
            return this.sub(vec).Magnitude;
        }

        Lerp(vec: T, time: number) {
            return vec.add(this.sub(vec).mulByNum(time));
        }

    }
}