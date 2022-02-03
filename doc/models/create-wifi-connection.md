
# Create Wifi Connection

## Structure

`CreateWifiConnection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ssid` | `string` | Required | Identifier of the network we want to connect to |
| `passphrase` | `string \| undefined` | Optional | Applicable only if access point is not public |
| `dryRun` | `boolean` | Required | If true, it does everything needed to create a wifi connection, except actually creating the wifi connection |

## Example (as JSON)

```json
{
  "ssid": "ssid2",
  "passphrase": null,
  "dryRun": false
}
```

