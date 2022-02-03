
# Network Info

If supervisor is not healthy, some network info will be undefined and unobtainable

## Structure

`NetworkInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hotspot` | [`Hotspot`](/doc/models/hotspot.md) | Required | - |
| `wifi` | [`Wifi`](/doc/models/wifi.md) | Required | - |

## Example (as JSON)

```json
{
  "hotspot": {
    "macAddress": "macAddress4",
    "ipAddresses": [
      "ipAddresses4"
    ],
    "state": null,
    "ssid": "ssid8"
  },
  "wifi": {
    "macAddress": "macAddress6",
    "ipAddresses": [
      "ipAddresses2",
      "ipAddresses3",
      "ipAddresses4"
    ],
    "state": null,
    "ssid": null
  }
}
```

