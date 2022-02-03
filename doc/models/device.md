
# Device

## Structure

`Device`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique (within template) device identifier |
| `label` | `string \| undefined` | Optional | Human-friendly label for the device |
| `className` | [`PeripheralClassesEnum \| undefined`](/doc/models/peripheral-classes-enum.md) | Optional | Refers to the class within the code that represents a device |
| `deviceCategory` | [`DeviceCategoryEnum \| undefined`](/doc/models/device-category-enum.md) | Optional | We categorise devices mainly to automate commissioning of "wired"<br>and "multisenseNetwork"s (e.g. create those peripherals<br>without engineers having to manually link them on the native app) |
| `modules` | [`MultisenseModuleEnum[] \| undefined`](/doc/models/multisense-module-enum.md) | Optional | Additional modules that can be connected to the Multisense |
| `channels` | [`PowerMeterTemplate[] \| undefined`](/doc/models/power-meter-template.md) | Optional | - |
| `port` | `string \| undefined` | Optional | The port/slot on the IO board that the device is wired to |
| `normallyClosed` | `boolean \| undefined` | Optional | Whether the contact pair on a wired device is closed when it, or the device operating it, is in a de-energised state.<br>Only applicable to 'relay' devices and not needed for 'input' devices |

## Example (as JSON)

```json
{
  "id": null,
  "label": null,
  "className": null,
  "deviceCategory": null,
  "modules": null,
  "channels": null,
  "port": null,
  "normallyClosed": null
}
```

