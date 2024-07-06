import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { itemActions } from '../store/itemSlice'
import { FetchActions } from '../store/FetchStatusSlice'

const FetchItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus)
    console.log(fetchStatus.fetchDone)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (!fetchStatus.fetchDone) {
            const controller = new AbortController();
            const signal = controller.signal;
            dispatch(FetchActions.markFetchStart())
            fetch('http://localhost:8080/items', { signal })
                .then((res) => res.json())
                .then(({items}) => {
                   
                    dispatch(FetchActions.markFetchDone())
                    dispatch(FetchActions.markFetchEnd())
                    dispatch(itemActions.AddInitialItems(items[0]))
                    // You might want to dispatch an action here to update the store
                })
                .catch((error) => {
                    if (error.name === 'AbortError') {
                        console.log('Fetch aborted');
                    } else {
                        console.error('Fetch error:', error);
                    }
                });
            return () => {
                controller.abort()
            };
        }
    }, [fetchStatus, dispatch]);

    return (
       <>
       <div>
       </div>
       </>
    )
}

export default FetchItems