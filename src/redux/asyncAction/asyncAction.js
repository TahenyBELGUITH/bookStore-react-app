const initialState = {
  loading: false,
  books: [],
  error: '',
};

const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';

const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';

const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

const fetchBooksRequest = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

const fetchBooksSuccess = (books) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: books,
});

const fetchBooksFailure = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };

    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
  }
};
