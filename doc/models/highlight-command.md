
# Highlight Command

## Structure

`HighlightCommand`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `off` | `boolean \| null` | Required | Set to true to turn the LED off |
| `colour` | [`IotIColour \| undefined`](/doc/models/iot-i-colour.md) | Optional | Properties of a Colour. RGB Format |
| `duration` | `number \| undefined` | Optional | Turn LED on for `duration` in seconds, after which LED light is turned off. |
| `id` | `string \| undefined` | Optional | - |
| `deviceType` | [`DeviceTypeEnum \| undefined`](/doc/models/device-type-enum.md) | Optional | - |
| `highlightType` | [`HighlightTypeEnum \| undefined`](/doc/models/highlight-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "off": false,
  "colour": null,
  "duration": null,
  "id": null,
  "deviceType": null,
  "highlightType": null
}
```

