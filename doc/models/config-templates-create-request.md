
# Config Templates Create Request

## Structure

`ConfigTemplatesCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateLabel` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `devices` | [`Device1[]`](/doc/models/device-1.md) | Required | - |

## Example (as JSON)

```json
{
  "templateLabel": "templateLabel6",
  "devices": [
    {
      "className": null,
      "hardwareId": null,
      "modules": null,
      "gatewayId": null
    },
    {
      "className": null,
      "hardwareId": null,
      "modules": null,
      "gatewayId": null
    }
  ]
}
```

