/**
 * Smart Manager APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DeviceCategory1Enum
 */
export enum DeviceCategory1Enum {
  Relay = 'relay',
  Input = 'input',
  Wireless = 'wireless',
  MultisenseNetwork = 'multisenseNetwork',
}

/**
 * Schema for DeviceCategory1Enum
 */
export const deviceCategory1EnumSchema: Schema<DeviceCategory1Enum> = stringEnum(DeviceCategory1Enum);
