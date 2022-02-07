
# Access Point

## Structure

`AccessPoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ssid` | `string` | Required | Name of the access point |
| `bssid` | `string` | Required | Unique identifier of this access point |
| `channel` | `number` | Required | What frequency channel this access point is operating on |
| `frequency` | [`WifiFrequencyTypeEnum`](/doc/models/wifi-frequency-type-enum.md) | Required | - |
| `isPublic` | `boolean` | Required | Whether user has to provide a passphrase when connecting to this wifi |
| `signalStrength` | `number` | Required | The current signal quality of the access point, in percent |
| `isKnown` | `boolean` | Required | Whether the network is known. i.e. we've previously connected to it and<br>have it's connection settings stored on smart-manager. |

## Example (as JSON)

```json
{
  "ssid": "ssid2",
  "bssid": "bssid6",
  "channel": 113.84,
  "frequency": "5",
  "isPublic": false,
  "signalStrength": 168.26,
  "isKnown": false
}
```

