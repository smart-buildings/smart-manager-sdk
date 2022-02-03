
# Power Meter Group Template

A physical power-meter board has 3 channels (i.e can meter 3 different things).
We treat each channel as an independent peripheral even though all 3 of them
are part of the same physical power-meter.

## Structure

`PowerMeterGroupTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique (within template) device identifier |
| `label` | `string` | Required | Human-friendly label for the device |
| `className` | [`PeripheralClassesEnum`](/doc/models/peripheral-classes-enum.md) | Required | Refers to the class within the code that represents a device |
| `deviceCategory` | [`DeviceCategoryEnum`](/doc/models/device-category-enum.md) | Required | We categorise devices mainly to automate commissioning of "wired"<br>and "multisenseNetwork"s (e.g. create those peripherals<br>without engineers having to manually link them on the native app) |
| `channels` | [`PowerMeterTemplate[]`](/doc/models/power-meter-template.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "label": "label0",
  "className": "RelayHob",
  "deviceCategory": "wireless",
  "channels": [
    {
      "id": "id5",
      "label": "label5",
      "className": "ExtractorFan",
      "deviceCategory": "input",
      "channelId": "channelId1"
    },
    {
      "id": "id6",
      "label": "label6",
      "className": "IlluminatedMirror",
      "deviceCategory": "wireless",
      "channelId": "channelId2"
    }
  ]
}
```

