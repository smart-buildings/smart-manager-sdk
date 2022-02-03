
# Scanned Peripheral

## Structure

`ScannedPeripheral`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `className` | [`PeripheralClasses3Enum`](/doc/models/peripheral-classes-3-enum.md) | Required | The name of the class that handles this peripheral e.g. enocean_dimmer |
| `hardwareId` | `string` | Required | The id of the end device e.g. aabbccdd as an enocean id for an enocean switch or 123 as a multisense network id for a smart power meter |
| `modules` | `unknown[] \| null` | Required | - |

## Example (as JSON)

```json
{
  "className": "DigitalInputDoorContact",
  "hardwareId": "string",
  "modules": [
    "ble"
  ]
}
```

