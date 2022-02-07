
# Response Create Template

Response from creating template

## Structure

`ResponseCreateTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Required | - |
| `templateLabel` | `string` | Required | - |
| `devices` | [`Device1[]`](/doc/models/device-1.md) | Required | - |

## Example (as JSON)

```json
{
  "templateId": "templateId0",
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

