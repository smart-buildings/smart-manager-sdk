/**
 * Smart Manager APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';
import {
  ActiveConnectionStateEnum,
  activeConnectionStateEnumSchema,
} from './activeConnectionStateEnum';

export interface Hotspot {
  macAddress: string;
  ipAddresses: string[];
  /** State of the connection with the wifi currently associated with () */
  state?: ActiveConnectionStateEnum;
  ssid: string;
}

export const hotspotSchema: Schema<Hotspot> = object({
  macAddress: ['macAddress', string()],
  ipAddresses: ['ipAddresses', array(string())],
  state: ['state', optional(activeConnectionStateEnumSchema)],
  ssid: ['ssid', string()],
});
