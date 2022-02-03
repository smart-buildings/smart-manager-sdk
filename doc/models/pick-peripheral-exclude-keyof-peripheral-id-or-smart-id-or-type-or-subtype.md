
# Pick Peripheral Exclude Keyof Peripheral Id or Smart Id or Type or Subtype

From T, pick a set of properties whose keys are in the union K

## Structure

`PickPeripheralExcludeKeyofPeripheralIdOrSmartIdOrTypeOrSubtype`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `label` | `string` | Required | - |
| `className` | [`PeripheralClasses3Enum`](/doc/models/peripheral-classes-3-enum.md) | Required | The name of the class that handles this peripheral e.g. enocean_dimmer |
| `hardwareId` | `string` | Required | The id of the end device e.g. aabbccdd as an enocean id for an enocean switch or 123 as a multisense network id for a smart power meter |
| `gatewayId` | `string \| null` | Required | The id of the gateway used to communicate with this device<br>e.g. 543 a multisense network address for the multisense with an enocean addon |
| `commDevice` | `string` | Required, Constant | The gateway used to communicate with this device. Uses gatewayId. e.g. multisense<br>**Default**: `'multisense'` |
| `normallyClosed` | `boolean \| null` | Required | Whether the contact pair on a wired device is closed when it, or the device operating it, is in a deenergised state |
| `templateId` | `string` | Required | A reference to an identifier in the template |
| `modules` | `unknown[] \| null` | Required | List of add-on module/boards on this peripheral |

## Example (as JSON)

```json
{
  "label": null,
  "className": null,
  "hardwareId": null,
  "gatewayId": null,
  "commDevice": "multisense",
  "normallyClosed": null,
  "templateId": null,
  "modules": null
}
```

