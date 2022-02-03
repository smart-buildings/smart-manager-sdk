/**
 * Smart Manager APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, nullable, object, Schema, string, unknown } from '../schema';
import {
  PeripheralClasses3Enum,
  peripheralClasses3EnumSchema,
} from './peripheralClasses3Enum';

export interface ScannedPeripheral {
  /** The name of the class that handles this peripheral e.g. enocean_dimmer */
  className: PeripheralClasses3Enum;
  /** The id of the end device e.g. aabbccdd as an enocean id for an enocean switch or 123 as a multisense network id for a smart power meter */
  hardwareId: string;
  modules: unknown[] | null;
}

export const scannedPeripheralSchema: Schema<ScannedPeripheral> = object({
  className: ['className', peripheralClasses3EnumSchema],
  hardwareId: ['hardwareId', string()],
  modules: ['modules', nullable(array(unknown()))],
});
