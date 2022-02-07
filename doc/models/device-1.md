
# Device 1

## Structure

`Device1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `className` | [`PeripheralClassesEnum \| undefined`](/doc/models/peripheral-classes-enum.md) | Optional | Refers to the class within the code that represents a device |
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

