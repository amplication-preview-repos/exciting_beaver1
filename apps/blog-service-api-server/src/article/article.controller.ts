import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArticleService } from "./article.service";
import { ArticleControllerBase } from "./base/article.controller.base";

@swagger.ApiTags("articles")
@common.Controller("articles")
export class ArticleController extends ArticleControllerBase {
  constructor(protected readonly service: ArticleService) {
    super(service);
  }
}
