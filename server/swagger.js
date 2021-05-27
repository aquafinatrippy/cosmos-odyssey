export default { 
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "My Cosmos Odyssey Project CRUD",
      "description": "My Cosmos Odyssey Project Application API",
      "license": {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
      }
    },
    "host": "localhost:8000",
    "basePath": "/api",
    "tags": [
      {
        "name": "Prices",
        "description": "API for prices in the system"
      }
    ],
    "paths": {
      "/prices": {
        "get": {
          "tags": ["Prices"],
          "summary": "Finds prices in the system",
          "description": "Returns full price list from system",
          "operationId": "findPrices",
          "produces": ["application/xml", "application/json"],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "type": "array"
              }
            },
            "400": {
              "description": "Invalid status value"
            }
          }
        }
      }
    },
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"]
}