/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { createValidatedOpenApiRouter } from '@backstage/backend-openapi-utils';

export const spec = {
  openapi: '3.0.3',
  info: {
    title: 'todo',
    version: '1',
    description:
      'The Backstage backend plugin that provides source code todo comment browsing.',
    license: {
      name: 'Apache-2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
    contact: {},
  },
  servers: [
    {
      url: '/',
    },
  ],
  components: {
    examples: {},
    headers: {},
    parameters: {},
    requestBodies: {},
    responses: {},
    schemas: {
      TodoItem: {
        type: 'object',
        properties: {
          text: {
            type: 'string',
            description: 'The contents of the TODO comment',
          },
          tag: {
            type: 'string',
            description: 'The tag used, e.g. TODO, FIXME',
          },
          author: {
            type: 'string',
            description: 'References author, if any',
          },
          viewUrl: {
            type: 'string',
            description: 'URL used to view the file',
          },
          lineNumber: {
            type: 'integer',
            description: 'The line number of the file that the TODO occurs at',
          },
          repoFilePath: {
            type: 'string',
            description:
              'The path of the file containing the TODO within the repo',
          },
        },
        required: ['text', 'tag'],
        additionalProperties: false,
      },
    },
    securitySchemes: {
      JWT: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  paths: {
    '/v1/todos': {
      get: {
        operationId: 'ListTodos',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    items: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/TodoItem',
                      },
                    },
                    totalCount: {
                      type: 'integer',
                    },
                    offset: {
                      type: 'integer',
                    },
                    limit: {
                      type: 'integer',
                    },
                  },
                  required: ['items', 'totalCount', 'offset', 'limit'],
                  additionalProperties: false,
                },
              },
            },
          },
          '400': {
            description: 'Bad request',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'object',
                      properties: {
                        message: {
                          type: 'string',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            name: 'entity',
            in: 'query',
            required: false,
            allowReserved: true,
            schema: {
              type: 'string',
              minLength: 1,
              description: 'A reference to the entity to list TODO items for',
            },
          },
          {
            name: 'orderBy',
            in: 'query',
            required: false,
            allowReserved: true,
            schema: {
              type: 'string',
              pattern: '^(text|tag|author|viewUrl|repoFilePath)=(asc|desc)$',
              description:
                'The field and direction used to sort the listed TODO items',
            },
          },
          {
            name: 'filter',
            in: 'query',
            required: false,
            allowReserved: true,
            schema: {
              type: 'array',
              description:
                'A list of filters used to narrow down the listed TODO items',
              items: {
                type: 'string',
                pattern: '^(text|tag|author|viewUrl|repoFilePath)=.+$',
              },
            },
          },
          {
            name: 'offset',
            in: 'query',
            required: false,
            allowReserved: true,
            schema: {
              type: 'integer',
              minimum: 0,
              description: 'The offset at which to start listing TODO items',
            },
          },
          {
            name: 'limit',
            in: 'query',
            required: false,
            allowReserved: true,
            schema: {
              type: 'integer',
              minimum: 1,
              description: 'The number of TODO items to list',
            },
          },
        ],
      },
    },
  },
} as const;
export const createOpenApiRouter = async (
  options?: Parameters<typeof createValidatedOpenApiRouter>['1'],
) => createValidatedOpenApiRouter<typeof spec>(spec, options);
