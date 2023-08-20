/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/breeds": {
    /**
     * Get a list of breeds
     * @description Returns a a list of breeds
     */
    get: operations["getBreeds"];
  };
  "/fact": {
    /**
     * Get Random Fact
     * @description Returns a random fact
     */
    get: operations["getRandomFact"];
  };
  "/facts": {
    /**
     * Get a list of facts
     * @description Returns a a list of facts
     */
    get: operations["getFacts"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * Breed model
     * @description Breed
     */
    Breed: {
      /**
       * Breed
       * Format: string
       * @description Breed
       */
      breed?: string;
      /**
       * Country
       * Format: string
       * @description Country
       */
      country?: string;
      /**
       * Origin
       * Format: string
       * @description Origin
       */
      origin?: string;
      /**
       * Coat
       * Format: string
       * @description Coat
       */
      coat?: string;
      /**
       * Pattern
       * Format: string
       * @description Pattern
       */
      pattern?: string;
    };
    /**
     * CatFact model
     * @description CatFact
     */
    CatFact: {
      /**
       * Fact
       * Format: string
       * @description Fact
       */
      fact?: string;
      /**
       * Length
       * Format: int32
       * @description Length
       */
      length?: number;
    };
    Error: {
      code: number;
      message: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /**
   * Get a list of breeds
   * @description Returns a a list of breeds
   */
  getBreeds: {
    parameters: {
      query?: {
        /** @description limit the amount of results returned */
        limit?: number;
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["Breed"][];
        };
      };
      /** @description error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /**
   * Get Random Fact
   * @description Returns a random fact
   */
  getRandomFact: {
    parameters: {
      query?: {
        /** @description maximum length of returned fact */
        max_length?: number;
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["CatFact"];
        };
      };
      /** @description not found */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** @description error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /**
   * Get a list of facts
   * @description Returns a a list of facts
   */
  getFacts: {
    parameters: {
      query?: {
        /** @description maximum length of returned fact */
        max_length?: number;
        /** @description limit the amount of results returned */
        limit?: number;
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["CatFact"][];
        };
      };
      /** @description error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
}
