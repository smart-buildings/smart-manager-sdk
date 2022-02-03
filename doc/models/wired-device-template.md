
# Wired Device Template

## Structure

`WiredDeviceTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique (within template) device identifier |
| `label` | `string` | Required | Human-friendly label for the device |
| `className` | [`PeripheralClassesEnum`](/doc/models/peripheral-classes-enum.md) | Required | Refers to the class within the code that represents a device |
| `deviceCategory` | [`DeviceCategoryEnum`](/doc/models/device-category-enum.md) | Required | We categorise devices mainly to automate commissioning of "wired"<br>and "multisenseNetwork"s (e.g. create those peripherals<br>without engineers having to manually link them on the native app) |
| `port` | `string` | Required | The port/slot on the IO board that the device is wired to |
| `normallyClosed` | `boolean \| undefined` | Optional | Whether the contact pair on a wired device is closed when it, or the device operating it, is in a de-energised state.<br>Only applicable to 'relay' devices and not needed for 'input' devices |

## Example (as JSON)

```json
{
  "id": "id0",
  "label": "label0",
  "className": "RelayHob",
  "deviceCategory": "wireless",
  "port": "port0",
  "normallyClosed": null
}
```

