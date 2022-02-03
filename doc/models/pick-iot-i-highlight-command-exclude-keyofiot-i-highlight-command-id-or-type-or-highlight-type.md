
# Pick Iot I Highlight Command Exclude Keyofiot I Highlight Command Id or Type or Highlight Type

From T, pick a set of properties whose keys are in the union K

## Structure

`PickIotIHighlightCommandExcludeKeyofiotIHighlightCommandIdOrTypeOrHighlightType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `off` | `boolean \| undefined` | Optional | Set to true to turn the LED off |
| `colour` | [`IotIColour \| undefined`](/doc/models/iot-i-colour.md) | Optional | Turn on LED light to this colour (RGB format). Ignored if device does not<br>support multi-coloured LEDs, in which case it will just turn the LED on.<br>If device does not support all colours in the RGB range, it will round<br>up/down RGB values. (e.g. rgb(117, 0, 230) --> rgb(0, 0, 255)) |
| `duration` | `number \| undefined` | Optional | Turn LED on for `duration` in seconds, after which LED light is turned off. |

## Example (as JSON)

```json
{
  "off": null,
  "colour": null,
  "duration": null
}
```

