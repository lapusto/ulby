import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from 'entities/Article/model/types/article';
import {
    getArticlesPageLimit, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    page?: number;
    replace?: true
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (props, thunkApi) => {
        const {
            extra, rejectWithValue, getState,
        } = thunkApi;
        const { page = 1 } = props;
        const limit = getArticlesPageLimit(getState());
        const order = getArticlesPageOrder(getState());
        const sort = getArticlesPageSort(getState());
        const search = getArticlesPageSearch(getState());
        const type = getArticlesPageType(getState());
        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    q: search,
                    _order: order,
                    _type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
