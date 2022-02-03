/**
 * Smart Manager APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema, string, unknown } from '../schema';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface Point {
  name: string;
  type: TypeEnum;
  value?: unknown;
  writable: boolean;
}

export const pointSchema: Schema<Point> = object({
  name: ['name', string()],
  type: ['type', typeEnumSchema],
  value: ['value', unknown()],
  writable: ['writable', boolean()],
});
