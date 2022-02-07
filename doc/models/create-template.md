
# Create Template

Create template body

## Structure

`CreateTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateLabel` | `string` | Required | - |
| `devices` | [`CreatePeripheral[]`](/doc/models/create-peripheral.md) | Required | - |

## Example (as JSON)

```json
{
  "templateLabel": null,
  "devices": {
    "label": null,
    "className": null,
    "hardwareId": null,
    "gatewayId": null,
    "commDevice": "multisense",
    "normallyClosed": null,
    "templateId": null,
    "modules": null
  }
}
```

