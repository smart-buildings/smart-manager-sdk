# Scan

```ts
const scanController = new ScanController(client);
```

## Class Name

`ScanController`

## Methods

* [Handle Identify](/doc/controllers/scan.md#handle-identify)
* [Open Zigbee Network](/doc/controllers/scan.md#open-zigbee-network)


# Handle Identify

Blinks an LED to identify a peripheral

```ts
async handleIdentify(
  body: HighlightCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`HighlightCommand`](/doc/models/highlight-command.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
const bodyColour: IotIColour = {
  red: 247.88,
  blue: 219.94,
  green: 124.4,
};

const body: HighlightCommand = {
  off: true,
};
body.colour = bodyColour;
body.duration = 108.72;
body.id = 'string';
body.deviceType = 'UNKNOWN';
body.highlightType = 'STEADY';

try {
  const { result, ...httpResponse } = await scanController.handleIdentify(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Validation Failed | [`ValidateErrorJSONError`](/doc/models/validate-error-json-error.md) |


# Open Zigbee Network

Scan for Zigbee peripherals

```ts
async openZigbeeNetwork(
  body: OpenZigbeeNetworkOptions,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`OpenZigbeeNetworkOptions`](/doc/models/open-zigbee-network-options.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
const body: OpenZigbeeNetworkOptions = {
  id: 'string',
  timeout: 82.32,
};

try {
  const { result, ...httpResponse } = await scanController.openZigbeeNetwork(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

