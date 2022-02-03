
# Wifi

## Structure

`Wifi`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `macAddress` | `string` | Required | - |
| `ipAddresses` | `string[]` | Required | - |
| `state` | [`ActiveConnectionStateEnum \| undefined`](/doc/models/active-connection-state-enum.md) | Optional | State of the connection with the wifi currently associated with () |
| `ssid` | `string \| undefined` | Optional | SSID of the wifi network we're currently connected to (if any) |

## Example (as JSON)

```json
{
  "macAddress": "macAddress4",
  "ipAddresses": [
    "ipAddresses4",
    "ipAddresses5"
  ],
  "state": null,
  "ssid": null
}
```

