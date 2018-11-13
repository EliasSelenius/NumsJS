

namespace Nums {
    export interface IValueSet<T> {
        ToArray(): T[];
        AddAggregated(): T;
        MulAggregated(): T;
    }
}