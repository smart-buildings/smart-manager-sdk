
# Scan Response

## Structure

`ScanResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scannedPeripherals` | [`ScannedPeripheral[]`](/doc/models/scanned-peripheral.md) | Required | A list of peripherals immediately available from scan. |
| `hasDaliController` | `boolean` | Required | Flag to say if socket events should be expected |

## Example (as JSON)

```json
{
  "scannedPeripherals": {
    "className": "DigitalInputDoorContact",
    "hardwareId": "string",
    "modules": [
      "ble"
    ]
  },
  "hasDaliController": null
}
```

