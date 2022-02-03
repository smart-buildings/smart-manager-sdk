
# Smart Manager About

## Structure

`SmartManagerAbout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appName` | `string \| undefined` | Optional | - |
| `release` | `string \| undefined` | Optional | - |
| `services` | [`Service[]`](/doc/models/service.md) | Required | - |
| `id` | `string` | Required | - |
| `name` | `string` | Required | - |
| `tenant` | `string` | Required | - |
| `location` | `string` | Required | - |
| `osVersion` | `string` | Required | - |

## Example (as JSON)

```json
{
  "appName": null,
  "release": null,
  "services": [
    {
      "status": {
        "key1": "val1",
        "key2": "val2"
      },
      "name": "name0"
    },
    {
      "status": {
        "key1": "val1",
        "key2": "val2"
      },
      "name": "name1"
    }
  ],
  "id": "id0",
  "name": "name0",
  "tenant": "tenant4",
  "location": "location4",
  "osVersion": "osVersion0"
}
```

