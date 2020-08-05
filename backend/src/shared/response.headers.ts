import { ListsFilterOptions , ListsPaginationOptions , ListsSortOptions } from '../api/tasks/constants';

export const setListResponseHeaders = ( headers? : object ) =>
{
  return {
    'X-LIST-OPTIONS'                :
      [
        Object.keys( ListsFilterOptions )
          .map( filterName => 'search_by'.concat( filterName ) ) ,
        Object.keys( ListsPaginationOptions )
          .map( pageOption => 'paginate_'.concat( pageOption ) ) ,
        Object.keys( ListsSortOptions )
          .map( sortName => 'sort_by'.concat( sortName ) ),
      ].join( ',' ) ,
    ...headers,
  };
  
};
