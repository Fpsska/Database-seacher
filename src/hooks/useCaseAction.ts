import { useAppDispatch } from '../app/hooks';

import { sortData } from '../app/slices/tableSlice';

export function useCaseAction() {

    const dispatch = useAppDispatch();

    const defineCaseAction = (id: string, filterConditionOpt: string): void => {
        switch (id) {
            case 'name':
                dispatch(sortData({ filterColumnOpt: id, filterConditionOpt }));
                break;
            case 'count':
                dispatch(sortData({ filterColumnOpt: id, filterConditionOpt }));
                break;
            case 'distance':
                dispatch(sortData({ filterColumnOpt: id, filterConditionOpt }));
                break;
        }
    };

    return defineCaseAction;

};