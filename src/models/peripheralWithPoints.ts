/**
 * Smart Manager APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  PeripheralClassesEnum,
  peripheralClassesEnumSchema,
} from './peripheralClassesEnum';
import { Point, pointSchema } from './point';

export interface PeripheralWithPoints {
  /** ID to describe this peripheral on this smart manager */
  id: number;
  /** The ID of this peripheral shown to smart-vue (which is unique per tenant+type) */
  smartId: string;
  type: string;
  subtype: string | null;
  label: string;
  /** Refers to the class within the code that represents a device */
  className: PeripheralClassesEnum;
  /** The id of the end device e.g. aabbccdd as an enocean id for an enocean switch or 123 as a multisense network id for a smart power meter */
  hardwareId: string;
  /**
   * The id of the gateway used to communicate with this device
   * e.g. 543 a multisense network address for the multisense with an enocean addon
   */
  gatewayId: string | null;
  /** The gateway used to communicate with this device. Uses gatewayId. e.g. multisense */
  commDevice: string;
  /** Whether the contact pair on a wired device is closed when it, or the device operating it, is in a deenergised state */
  normallyClosed: boolean | null;
  /** A reference to an identifier in the template */
  templateId: string;
  /** List of add-on module/boards on this peripheral */
  modules: unknown[] | null;
  points: Point[];
  events: string[];
}

export const peripheralWithPointsSchema: Schema<PeripheralWithPoints> = object({
  id: ['id', number()],
  smartId: ['smartId', string()],
  type: ['type', string()],
  subtype: ['subtype', nullable(string())],
  label: ['label', string()],
  className: ['className', peripheralClassesEnumSchema],
  hardwareId: ['hardwareId', string()],
  gatewayId: ['gatewayId', nullable(string())],
  commDevice: ['commDevice', string()],
  normallyClosed: ['normallyClosed', nullable(boolean())],
  templateId: ['templateId', string()],
  modules: ['modules', nullable(array(unknown()))],
  points: ['points', array(lazy(() => pointSchema))],
  events: ['events', array(string())],
});
