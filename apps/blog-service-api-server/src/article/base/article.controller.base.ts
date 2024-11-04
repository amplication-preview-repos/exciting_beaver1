/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ArticleService } from "../article.service";
import { ArticleCreateInput } from "./ArticleCreateInput";
import { Article } from "./Article";
import { ArticleFindManyArgs } from "./ArticleFindManyArgs";
import { ArticleWhereUniqueInput } from "./ArticleWhereUniqueInput";
import { ArticleUpdateInput } from "./ArticleUpdateInput";

export class ArticleControllerBase {
  constructor(protected readonly service: ArticleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Article })
  async createArticle(
    @common.Body() data: ArticleCreateInput
  ): Promise<Article> {
    return await this.service.createArticle({
      data: data,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        publishedOn: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Article] })
  @ApiNestedQuery(ArticleFindManyArgs)
  async articles(@common.Req() request: Request): Promise<Article[]> {
    const args = plainToClass(ArticleFindManyArgs, request.query);
    return this.service.articles({
      ...args,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        publishedOn: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Article })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async article(
    @common.Param() params: ArticleWhereUniqueInput
  ): Promise<Article | null> {
    const result = await this.service.article({
      where: params,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        publishedOn: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Article })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateArticle(
    @common.Param() params: ArticleWhereUniqueInput,
    @common.Body() data: ArticleUpdateInput
  ): Promise<Article | null> {
    try {
      return await this.service.updateArticle({
        where: params,
        data: data,
        select: {
          author: true,
          content: true,
          createdAt: true,
          id: true,
          publishedOn: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Article })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteArticle(
    @common.Param() params: ArticleWhereUniqueInput
  ): Promise<Article | null> {
    try {
      return await this.service.deleteArticle({
        where: params,
        select: {
          author: true,
          content: true,
          createdAt: true,
          id: true,
          publishedOn: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
