import { ListsFilterOptions , ListsPaginationOptions , ListsSortOptions } from '../constants';

export  const setListResponseHeaders = (headers?: object) => {
  return {
    'x-list-options' :
        [
          Object.keys( ListsFilterOptions )
              .map(filterName => 'search_by'.concat(filterName)),
          Object.keys( ListsPaginationOptions )
              .map(pageOption => 'paginate_'.concat(pageOption)) ,
          Object.keys( ListsSortOptions )
              .map(sortName => 'sort_by'.concat(sortName))
        ].join( ',' ),
      ...headers
  }
}
