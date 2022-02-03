
# Hotspot

## Structure

`Hotspot`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `macAddress` | `string` | Required | - |
| `ipAddresses` | `string[]` | Required | - |
| `state` | [`ActiveConnectionStateEnum \| undefined`](/doc/models/active-connection-state-enum.md) | Optional | State of the connection with the wifi currently associated with () |
| `ssid` | `string` | Required | - |

## Example (as JSON)

```json
{
  "macAddress": "macAddress4",
  "ipAddresses": [
    "ipAddresses4",
    "ipAddresses5"
  ],
  "state": null,
  "ssid": "ssid2"
}
```

