
namespace Nums {
    export abstract class Vec<T extends Vec<T>> implements IValueSet<number> {
    
        
        protected abstract get instance(): T;
        protected abstract set instance(vec: T);
        
        abstract add(vec: T): T;
        abstract sub(vec: T): T;
        abstract mulByVec(vec: T): T;
        abstract mulByNum(v: number): T;
        abstract divByVec(vec: T): T;
        abstract divByNum(v: number): T;


        abstract ToArray(): number[];




        addeq(vec: T): T {
            this.instance = this.add(vec);
            return this.instance;
        }
        subeq(vec: T): T {
            this.instance = this.sub(vec);
            return this.instance;
        }

        Normalize(): T {
            this.instance = this.Normalized;
            return this.instance;
        }

        Dot(vec: T): number {
            return this.mulByVec(vec).AddAggregated();
        }

        AddAggregated(): number {
            let res: number = 0;
            for (const comp of this.ToArray()) {
                res += comp;
            }
            return res;
        }
        MulAggregated(): number {
            let res: number = 1;
            for (const comp of this.ToArray()) {
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