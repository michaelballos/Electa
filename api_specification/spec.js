export const electaSpec = {
  openapi: '3.0.2',
  info: { title: 'Electa API', version: '1.0' },
  servers: [
    { url: 'http://localhost:3000/api' },
  ],
  paths:
  {
    '/possibleDelegations': {
      post: {
        summary: 'Get possible delegations for a candidate',
        description: 'Returns all roles for the given candidate where the roles qualifications are a subset of the candidate\'s qualifications',
        parameters: [
          {
            name: 'id',
            in: 'body',
            description: 'The id of the candidate',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    '$ref': '#/components/schemas/Role',
                  },
                },
              },
            },
          },
          404: {
            description: 'Candidate not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
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
    
    '/login':
    {
      post:
      {
        summary: 'Login',
        description: 'Login requires username and password and returns a token to be used in bearer auth',
        operationId: 'login',
        parameters:
          [{
            name: 'username',
            in: 'query',
            description: 'Username',
            required: true,
            schema: { type: 'string' }
          },
          {
            name: 'password',
            in: 'query',
            description: 'Password',
            required: true,
            schema: { type: 'string' }
          }],
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { type: 'object', properties: { token: { type: 'string' } } } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    },
    '/candidates':
    {
      get:
      {
        summary: 'Get all candidates',
        description: 'Returns all candidates',
        operationId: 'getCandidates',
        responses:
        {
          '200':
          {
            description: 'OK',
            content:
            {
              'application/json':
              {
                schema:
                {
                  type: 'array',
                  items: { '$ref': '#/components/schemas/Candidate' }
                }
              }
            }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    },
    '/candidate':
    {
      post:
      {
        summary: 'Create a candidate',
        description: 'Creates a candidate',
        operationId: 'createCandidate',
        requestBody:
        {
          description: 'Candidate',
          required: true,
          content: { 'application/json': { schema: { '$ref': '#/components/schemas/Candidate' } } }
        },
        responses:
        {
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    },
    '/candidate/{id}':
    {
      get:
      {
        summary: 'Get a candidate',
        description: 'Returns a candidate',
        operationId: 'getCandidate',
        parameters:
          [{
            name: 'id',
            in: 'path',
            description: 'Candidate ID',
            required: true,
            schema: { type: 'string' }
          }],
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { '$ref': '#/components/schemas/Candidate' } } }
          },
          '201':
          {
            description: 'Created',
            content: { 'application/json': { schema: { '$ref': '#/components/schemas/Candidate' } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      },
      put:
      {
        summary: 'Update a candidate',
        description: 'Updates a candidate',
        operationId: 'updateCandidate',
        parameters:
          [{
            name: 'id',
            in: 'path',
            description: 'Candidate ID',
            required: true,
            schema: { type: 'string' }
          }],
        requestBody:
        {
          description: 'Candidate',
          required: true,
          content: { 'application/json': { schema: { '$ref': '#/components/schemas/Candidate' } } }
        },
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { '$ref': '#/components/schemas/Candidate' } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      },
      delete:
      {
        summary: 'Delete a candidate',
        description: 'Deletes a candidate',
        operationId: 'deleteCandidate',
        parameters:
          [{
            name: 'id',
            in: 'path',
            description: 'Candidate ID',
            required: true,
            schema: { type: 'string' }
          }],
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { type: 'object', properties: { message: { type: 'string' } } } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    },
    '/roles':
    {
      get:
      {
        summary: 'Get all roles',
        description: 'Returns all roles',
        operationId: 'getRoles',
        responses:
        {
          '200':
          {
            description: 'OK',
            content:
            {
              'application/json':
              {
                schema:
                {
                  type: 'array',
                  items: { '$ref': '#/components/schemas/Role' }
                }
              }
            }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    },
    '/role':
    {
      post:
      {
        summary: 'Create a role',
        description: 'Creates a role',
        operationId: 'createRole',
        requestBody:
        {
          description: 'Role',
          required: true,
          content: { 'application/json': { schema: { '$ref': '#/components/schemas/Role' } } }
        },
        responses:
        {
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    },
    '/role/{id}':
    {
      get:
      {
        summary: 'Get a role',
        description: 'Returns a role',
        operationId: 'getRole',
        parameters:
          [{
            name: 'id',
            in: 'path',
            description: 'Role ID',
            required: true,
            schema: { type: 'string' }
          }],
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { '$ref': '#/components/schemas/Role' } } }
          },
          '201':
          {
            description: 'Created',
            content: { 'application/json': { schema: { '$ref': '#/components/schemas/Role' } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      },
      put:
      {
        summary: 'Update a role',
        description: 'Updates a role',
        operationId: 'updateRole',
        parameters:
          [{
            name: 'id',
            in: 'path',
            description: 'Role ID',
            required: true,
            schema: { type: 'string' }
          }],
        requestBody:
        {
          description: 'Role',
          required: true,
          content: { 'application/json': { schema: { '$ref': '#/components/schemas/Role' } } }
        },
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { '$ref': '#/components/schemas/Role' } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object' } } }
          }
        }
      },
      delete:
      {
        summary: 'Delete a role',
        description: 'Deletes a role',
        operationId: 'deleteRole',
        parameters:
          [{
            name: 'id',
            in: 'path',
            description: 'Role ID',
            required: true,
            schema: { type: 'string' }
          }],
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { type: 'object', properties: { message: { type: 'string' } } } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    },
    '/qualifications':
    {
      get:
      {
        summary: 'Get all qualifications',
        description: 'Returns all qualifications',
        operationId: 'getQualifications',
        responses:
        {
          '200':
          {
            description: 'OK',
            content:
            {
              'application/json':
              {
                schema:
                {
                  type: 'array',
                  items: { '$ref': '#/components/schemas/Qualification' }
                }
              }
            }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    },
    '/qualification':
    {
      post:
      {
        summary: 'Create a qualification',
        description: 'Creates a qualification',
        operationId: 'createQualification',
        requestBody:
        {
          description: 'Qualification',
          required: true,
          content: { 'application/json': { schema: { '$ref': '#/components/schemas/Qualification' } } }
        },
        responses:
        {
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    },
    '/qualification/{id}':
    {
      get:
      {
        summary: 'Get a qualification',
        description: 'Returns a qualification',
        operationId: 'getQualification',
        parameters:
          [{
            name: 'id',
            in: 'path',
            description: 'Qualification ID',
            required: true,
            schema: { type: 'string' }
          }],
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { '$ref': '#/components/schemas/Qualification' } } }
          },
          '201':
          {
            description: 'Created',
            content: { 'application/json': { schema: { '$ref': '#/components/schemas/Qualification' } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      },
      put:
      {
        summary: 'Update a qualification',
        description: 'Updates a qualification',
        operationId: 'updateQualification',
        parameters:
          [{
            name: 'id',
            in: 'path',
            description: 'Qualification ID',
            required: true,
            schema: { type: 'string' }
          }],
        requestBody:
        {
          description: 'Qualification',
          required: true,
          content: { 'application/json': { schema: { '$ref': '#/components/schemas/Qualification' } } }
        },
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { '$ref': '#/components/schemas/Qualification' } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      },
      delete:
      {
        summary: 'Delete a qualification',
        description: 'Deletes a qualification',
        operationId: 'deleteQualification',
        parameters:
          [{
            name: 'id',
            in: 'path',
            description: 'Qualification ID',
            required: true,
            schema: { type: 'string' }
          }],
        responses:
        {
          '200':
          {
            description: 'OK',
            content: { 'application/json': { schema: { type: 'object', properties: { message: { type: 'string' } } } } }
          },
          '400':
          {
            description: 'Bad Request',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '401':
          {
            description: 'Unauthorized',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          },
          '500':
          {
            description: 'Internal Server Error',
            content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
          }
        }
      }
    }
  },
  components:
  {
    securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } },
    responses: { UnauthorizedError: { description: 'Access token is missing or invalid' } },
    schemas:
    {
      Candidate:
      {
        type: 'object',
        required:
          ['id',
            'name',
            'description',
            'createdAt',
            'updatedAt',
            'deletedAt',
            'roles',
            'qualifications'],
        properties:
        {
          id: { type: 'string' },
          name: { type: 'string', description: 'The name of the candidate' },
          description:
          {
            type: 'string',
            description: 'The description of the candidate'
          },
          createdAt:
          {
            type: 'string',
            format: 'date-time',
            description: 'The date and time when the candidate was created'
          },
          updatedAt:
          {
            type: 'string',
            format: 'date-time',
            description: 'The date and time when the candidate was updated'
          },
          deletedAt:
          {
            type: 'string',
            format: 'date-time',
            description: 'The date and time when the candidate was deleted'
          },
          roles:
          {
            description: 'The roles of the candidate',
            type: 'array',
            items: { '$ref': '#/components/schemas/Role' }
          },
          qualifications:
          {
            description: 'The qualifications of the candidate',
            type: 'array',
            items: { '$ref': '#/components/schemas/Qualification' }
          }
        }
      },
      Role:
      {
        type: 'object',
        required:
          ['id',
            'name',
            'description',
            'createdAt',
            'updatedAt',
            'deletedAt'],
        properties:
        {
          id: { type: 'string' },
          name: { type: 'string', description: 'The name of the role' },
          description: { type: 'string', description: 'The description of the role' },
          createdAt:
          {
            type: 'string',
            format: 'date-time',
            description: 'The date and time when the role was created'
          },
          updatedAt:
          {
            type: 'string',
            format: 'date-time',
            description: 'The date and time when the role was updated'
          },
          deletedAt:
          {
            type: 'string',
            format: 'date-time',
            description: 'The date and time when the role was deleted'
          },
          elected:
          {
            type: 'boolean',
            description: 'Whether a candidate has been elected to the role'
          },
          desired_qualifications:
          {
            description: 'The desired qualifications of the role',
            type: 'array',
            items: { '$ref': '#/components/schemas/Qualification' }
          }
        }
      },
      Qualification:
      {
        type: 'object',
        required:
          ['id',
            'name',
            'description',
            'createdAt',
            'updatedAt',
            'deletedAt'],
        properties:
        {
          id: { type: 'string' },
          name: { type: 'string', description: 'The name of the qualification' },
          description:
          {
            type: 'string',
            description: 'The description of the qualification'
          },
          createdAt:
          {
            type: 'string',
            format: 'date-time',
            description: 'The date and time when the qualification was created'
          },
          updatedAt:
          {
            type: 'string',
            format: 'date-time',
            description: 'The date and time when the qualification was updated'
          },
          deletedAt:
          {
            type: 'string',
            format: 'date-time',
            description: 'The date and time when the qualification was deleted'
          }
        }
      }
    }
  },
  security: [{ bearerAuth: [] }]
}