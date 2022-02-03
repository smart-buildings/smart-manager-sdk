# Config

```ts
const configController = new ConfigController(client);
```

## Class Name

`ConfigController`

## Methods

* [Get Config](/doc/controllers/config.md#get-config)
* [Update Config](/doc/controllers/config.md#update-config)
* [Get Manager About](/doc/controllers/config.md#get-manager-about)
* [Get Smart Manager Name](/doc/controllers/config.md#get-smart-manager-name)
* [Get Templates](/doc/controllers/config.md#get-templates)
* [Upload Templates](/doc/controllers/config.md#upload-templates)
* [Get Streaming Logs Status](/doc/controllers/config.md#get-streaming-logs-status)
* [Capture Logs](/doc/controllers/config.md#capture-logs)


# Get Config

Get the current config for this Smart Manager

```ts
async getConfig(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SmartManagerConfig>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SmartManagerConfig`](/doc/models/smart-manager-config.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await configController.getConfig();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "templateId": "string"
}
```


# Update Config

Create or replace an existing config for this Smart Manager

```ts
async updateConfig(
  body: SmartManagerConfig,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SmartManagerConfig>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SmartManagerConfig`](/doc/models/smart-manager-config.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SmartManagerConfig`](/doc/models/smart-manager-config.md)

## Example Usage

```ts
const contentType = null;
const body: SmartManagerConfig = {
  templateId: 'templateId6',
};

try {
  const { result, ...httpResponse } = await configController.updateConfig(body);
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


# Get Manager About

Get a summary report for this Smart Manager and the environment it's running in

```ts
async getManagerAbout(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SmartManagerAbout>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SmartManagerAbout`](/doc/models/smart-manager-about.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await configController.getManagerAbout();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Smart Manager Name

Get the Smart Manager network device name

```ts
async getSmartManagerName(
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await configController.getSmartManagerName();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Templates

Get all available room templates for this Smart Manager

```ts
async getTemplates(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Template[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Template[]`](/doc/models/template.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await configController.getTemplates();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
[
  {
    "id": "string",
    "label": "string",
    "devices": [
      {
        "id": "string",
        "label": "string",
        "className": "DigitalInputDoorContact",
        "deviceCategory": "relay",
        "modules": [
          "ble"
        ]
      }
    ]
  }
]
```


# Upload Templates

Route for uploading new templates. This accept any object as input
so validation is not done by tsoa (results in ugly error messages)
and instead we do our own validation

```ts
async uploadTemplates(
  body: unknown[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<Template[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown[]` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Template[]`](/doc/models/template.md)

## Example Usage

```ts
const contentType = null;
const Body: unknown[] = ['{"key1":"val1","key2":"val2"}', '{"key1":"val1","key2":"val2"}'];
try {
  const { result, ...httpResponse } = await configController.uploadTemplates(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Streaming Logs Status

Get log capture status

```ts
async getStreamingLogsStatus(
  requestOptions?: RequestOptions
): Promise<ApiResponse<CaptureLogsStatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CaptureLogsStatus`](/doc/models/capture-logs-status.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await configController.getStreamingLogsStatus();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Capture Logs

Starts or stops streaming logs over websocket

```ts
async captureLogs(
  body: CaptureLogsBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CaptureLogsStatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CaptureLogsBody`](/doc/models/capture-logs-body.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CaptureLogsStatus`](/doc/models/capture-logs-status.md)

## Example Usage

```ts
const contentType = null;
const body: CaptureLogsBody = {
  action: 'start',
};

try {
  const { result, ...httpResponse } = await configController.captureLogs(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

