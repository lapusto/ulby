import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType, ArticleView } from '../../../../entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean
}
