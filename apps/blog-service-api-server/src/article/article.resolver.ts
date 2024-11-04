import * as graphql from "@nestjs/graphql";
import { ArticleResolverBase } from "./base/article.resolver.base";
import { Article } from "./base/Article";
import { ArticleService } from "./article.service";

@graphql.Resolver(() => Article)
export class ArticleResolver extends ArticleResolverBase {
  constructor(protected readonly service: ArticleService) {
    super(service);
  }
}
