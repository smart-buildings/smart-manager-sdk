
# Scanned Peripheral

## Structure

`ScannedPeripheral`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `className` | [`PeripheralClassesEnum`](/doc/models/peripheral-classes-enum.md) | Required | Refers to the class within the code that represents a device |
| `hardwareId` | `string` | Required | The id of the end device e.g. aabbccdd as an enocean id for an enocean switch or 123 as a multisense network id for a smart power meter |
| `modules` | `unknown[] \| null` | Required | - |

## Example (as JSON)

```json
{
  "className": "RelayHob",
  "hardwareId": "hardwareId4",
  "modules": [
    {
      "key1": "val1",
      "key2": "val2"
    }
  ]
}
```

