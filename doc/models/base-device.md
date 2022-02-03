
# Base Device

## Structure

`BaseDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique (within template) device identifier |
| `label` | `string` | Required | Human-friendly label for the device |
| `className` | [`PeripheralClasses1Enum`](/doc/models/peripheral-classes-1-enum.md) | Required | Refers to the class within the code that represents this device |
| `deviceCategory` | [`DeviceCategory1Enum`](/doc/models/device-category-1-enum.md) | Required | Device category |

## Example (as JSON)

```json
{
  "id": "string",
  "label": "string",
  "className": "DigitalInputDoorContact",
  "deviceCategory": "relay"
}
```

