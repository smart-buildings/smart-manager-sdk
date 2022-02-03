
# Air Smart Template

## Structure

`AirSmartTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique (within template) device identifier |
| `label` | `string` | Required | Human-friendly label for the device |
| `className` | [`PeripheralClassesEnum`](/doc/models/peripheral-classes-enum.md) | Required | Refers to the class within the code that represents a device |
| `deviceCategory` | [`DeviceCategoryEnum`](/doc/models/device-category-enum.md) | Required | We categorise devices mainly to automate commissioning of "wired"<br>and "multisenseNetwork"s (e.g. create those peripherals<br>without engineers having to manually link them on the native app) |
| `modules` | [`AirSmartSensorModuleEnum[]`](/doc/models/air-smart-sensor-module-enum.md) | Required | Additional modules that can be connected to the Air Smart |

## Example (as JSON)

```json
{
  "id": "id0",
  "label": "label0",
  "className": "RelayHob",
  "deviceCategory": "wireless",
  "modules": [
    "tempHumidity"
  ]
}
```

