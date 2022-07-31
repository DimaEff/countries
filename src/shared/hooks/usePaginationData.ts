import { Dispatch, useMemo, useState } from "react";

interface UsePaginationData<T> {
    paginationData: T[];
    page: number;
    setPage: Dispatch<number>;
}

// eslint-disable-next-line no-unused-vars
type ReformatDataFn<T> = (data: any) => T;

interface UsePaginationDataOptions<T> {
    reformatDataFn?: ReformatDataFn<T>;
    pageSize?: number;
}

function usePaginationData<T>(data?: any[], paginationDataOptions?: UsePaginationDataOptions<T>): UsePaginationData<T> {
    const { pageSize = 10, reformatDataFn } = paginationDataOptions!;

    const [page, setPage] = useState(0);
    const startIndex = useMemo(() => page * pageSize, [page, pageSize]);
    const endIndex = useMemo(() => (page + 1) * pageSize, [page, pageSize]);

    const splicedData = useMemo(() => (data ? data.splice(startIndex, endIndex) : []), [data, startIndex, endIndex]);
    const paginationData: T[] = useMemo(
        () => (reformatDataFn ? splicedData.map(reformatDataFn) : (splicedData as T[])),
        [splicedData, reformatDataFn]
    );

    return { paginationData, page, setPage };
}

export default usePaginationData;
