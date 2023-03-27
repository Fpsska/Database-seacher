import { useAppDispatch } from 'app/hooks';

import { sortData } from 'app/slices/tableSlice';

// /. imports

export function useCaseAction() {
    const dispatch = useAppDispatch();

    const defineCaseAction = (id: string, filterConditionOpt: string): void => {
        switch (id) {
            case id:
                dispatch(sortData({ filterColumnOpt: id, filterConditionOpt }));
                break;
            default:
                dispatch(
                    sortData({
                        filterColumnOpt: 'name',
                        filterConditionOpt: 'less'
                    })
                );
        }
    };

    return { defineCaseAction };
}
