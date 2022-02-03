/**
 * Smart Manager APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for HighlightTypeEnum
 */
export enum HighlightTypeEnum {
  STEADY = 'STEADY',
  BLINK = 'BLINK',
}

/**
 * Schema for HighlightTypeEnum
 */
export const highlightTypeEnumSchema: Schema<HighlightTypeEnum> = stringEnum(HighlightTypeEnum);
