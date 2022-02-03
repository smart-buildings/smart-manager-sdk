
# Scanned Dali Peripheral

Peripheral returned from scanning a DALI controller

## Structure

`ScannedDaliPeripheral`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `className` | [`PeripheralClassesEnum`](/doc/models/peripheral-classes-enum.md) | Required | Refers to the class within the code that represents a device |
| `hardwareId` | `string` | Required | The id of the end device e.g. aabbccdd as an enocean id for an enocean switch or 123 as a multisense network id for a smart power meter |
| `gatewayId` | `string` | Required | The id of the multisense that this peripheral is linked to. |

## Example (as JSON)

```json
{
  "className": "RelayHob",
  "hardwareId": "hardwareId4",
  "gatewayId": "gatewayId4"
}
```

