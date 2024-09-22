declare module 'react-table' {
    import { ComponentType, ReactNode } from 'react';

    export interface Column<T extends object = {}> {
        Header: string | ReactNode;
        accessor: keyof T | ((row: T) => any);
    }

    export interface UseTableOptions<T extends object = {}> {
        columns: Array<Column<T>>;
        data: T[];
    }

    export interface TableInstance<T extends object = {}> {
        getTableProps: () => any;
        getTableBodyProps: () => any;
        headerGroups: Array<HeaderGroup<T>>;
        rows: Array<Row<T>>;
        prepareRow: (row: Row<T>) => void;
    }

    export interface HeaderGroup<T extends object = {}> {
        getHeaderGroupProps: () => any;
        headers: Array<Column<T>>;
    }

    export interface Row<T extends object = {}> {
        getRowProps: () => any;
        cells: Array<Cell<T>>;
    }

    export interface Cell<T extends object = {}> {
        getCellProps: () => any;
        render: (type: 'Cell' | string) => ReactNode;
    }

    export function useTable<T extends object = {}>(options: UseTableOptions<T>): TableInstance<T>;
}
