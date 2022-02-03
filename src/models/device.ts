/**
 * Smart Manager APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  DeviceCategoryEnum,
  deviceCategoryEnumSchema,
} from './deviceCategoryEnum';
import {
  MultisenseModuleEnum,
  multisenseModuleEnumSchema,
} from './multisenseModuleEnum';
import {
  PeripheralClassesEnum,
  peripheralClassesEnumSchema,
} from './peripheralClassesEnum';
import {
  PowerMeterTemplate,
  powerMeterTemplateSchema,
} from './powerMeterTemplate';

export interface Device {
  /** Unique (within template) device identifier */
  id?: string;
  /** Human-friendly label for the device */
  label?: string;
  /** Refers to the class within the code that represents a device */
  className?: PeripheralClassesEnum;
  /**
   * We categorise devices mainly to automate commissioning of "wired"
   * and "multisenseNetwork"s (e.g. create those peripherals
   * without engineers having to manually link them on the native app)
   */
  deviceCategory?: DeviceCategoryEnum;
  /** Additional modules that can be connected to the Multisense */
  modules?: MultisenseModuleEnum[];
  channels?: PowerMeterTemplate[];
  /** The port/slot on the IO board that the device is wired to */
  port?: string;
  /**
   * Whether the contact pair on a wired device is closed when it, or the device operating it, is in a de-energised state.
   * Only applicable to 'relay' devices and not needed for 'input' devices
   */
  normallyClosed?: boolean;
}

export const deviceSchema: Schema<Device> = object({
  id: ['id', optional(string())],
  label: ['label', optional(string())],
  className: ['className', optional(peripheralClassesEnumSchema)],
  deviceCategory: ['deviceCategory', optional(deviceCategoryEnumSchema)],
  modules: ['modules', optional(array(multisenseModuleEnumSchema))],
  channels: ['channels', optional(array(lazy(() => powerMeterTemplateSchema)))],
  port: ['port', optional(string())],
  normallyClosed: ['normallyClosed', optional(boolean())],
});
