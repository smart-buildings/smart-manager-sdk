
# Device 1

## Structure

`Device1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `className` | [`PeripheralClasses3Enum \| undefined`](/doc/models/peripheral-classes-3-enum.md) | Optional | The name of the class that handles this peripheral e.g. enocean_dimmer |
| `hardwareId` | `string \| undefined` | Optional | The id of the end device e.g. aabbccdd as an enocean id for an enocean switch or 123 as a multisense network id for a smart power meter |
| `modules` | `unknown[] \| undefined` | Optional | - |
| `gatewayId` | `string \| undefined` | Optional | The id of the multisense that this peripheral is linked to. |

## Example (as JSON)

```json
{
  "className": null,
  "hardwareId": null,
  "modules": null,
  "gatewayId": null
}
```

