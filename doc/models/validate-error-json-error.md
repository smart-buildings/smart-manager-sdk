
# Validate Error JSON Error

## Structure

`ValidateErrorJSONError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string` | Required, Constant | **Default**: `'Validation failed'` |
| `details` | [`Record<string, Details>`](/doc/models/details.md) | Required | - |

## Example (as JSON)

```json
{
  "message": "Validation failed",
  "details": null
}
```

