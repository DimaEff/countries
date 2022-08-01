import React, { useMemo, useState } from "react";

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

function usePaginationData<T>(data?: any[], paginationDataOptions?: UsePaginationDataOptions<T>): UsePaginationData<T> {
    const { pageSize = 10, reformatDataFn } = paginationDataOptions!;

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
