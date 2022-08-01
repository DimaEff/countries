import React, { useMemo, useState } from "react";

export const DEFAULT_PAGE_SIZE = 10;

interface UsePaginationData<T> {
    paginationData: T[];
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

// eslint-disable-next-line no-unused-vars
type ReformatDataFn<T> = (data: any) => T;

interface UsePaginationDataOptions<T> {
    reformatDataFn?: ReformatDataFn<T>;
    pageSize?: number;
}
// should not use big(> 30) pageSize
function usePaginationData<T>(data?: any[], paginationDataOptions?: UsePaginationDataOptions<T>): UsePaginationData<T> {
    const { pageSize = DEFAULT_PAGE_SIZE, reformatDataFn } = paginationDataOptions!;

    const [page, setPage] = useState(0);
    const startIndex = useMemo(() => page * pageSize, [page, pageSize]);
    const endIndex = useMemo(() => (page + 1) * pageSize, [page, pageSize]);

    const splicedData = useMemo(() => (data ? data.slice(startIndex, endIndex) : []), [data, endIndex, startIndex]);
    const paginationData: T[] = useMemo(
        () => (reformatDataFn ? splicedData.map(reformatDataFn) : (splicedData as T[])),
        [reformatDataFn, splicedData]
    );

    console.log(page, paginationData);
    return { paginationData, page, setPage };
}

export default usePaginationData;
