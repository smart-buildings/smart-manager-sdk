# Default

```ts
const defaultController = new DefaultController(client);
```

## Class Name

`DefaultController`

## Methods

* [Get Config](/doc/controllers/default.md#get-config)
* [Update Config](/doc/controllers/default.md#update-config)
* [Get Manager About](/doc/controllers/default.md#get-manager-about)
* [Get Smart Manager Name](/doc/controllers/default.md#get-smart-manager-name)
* [Get Templates](/doc/controllers/default.md#get-templates)
* [Upload Templates](/doc/controllers/default.md#upload-templates)
* [Delete Template Device](/doc/controllers/default.md#delete-template-device)
* [Config Template Create](/doc/controllers/default.md#config-template-create)
* [Get Scan Peripherals](/doc/controllers/default.md#get-scan-peripherals)
* [Get Streaming Logs Status](/doc/controllers/default.md#get-streaming-logs-status)
* [Capture Logs](/doc/controllers/default.md#capture-logs)
* [Send Dimmable Light Instruction](/doc/controllers/default.md#send-dimmable-light-instruction)
* [Get Issues](/doc/controllers/default.md#get-issues)
* [Get Network Info](/doc/controllers/default.md#get-network-info)
* [Get Access Points](/doc/controllers/default.md#get-access-points)
* [Create Wifi Connection](/doc/controllers/default.md#create-wifi-connection)
* [Delete Wifi Connection](/doc/controllers/default.md#delete-wifi-connection)
* [Disconnect Wifi Connection](/doc/controllers/default.md#disconnect-wifi-connection)
* [Get Peripherals](/doc/controllers/default.md#get-peripherals)
* [Create Peripheral](/doc/controllers/default.md#create-peripheral)
* [Get Peripheral](/doc/controllers/default.md#get-peripheral)
* [Update Peripheral](/doc/controllers/default.md#update-peripheral)
* [Delete Peripheral](/doc/controllers/default.md#delete-peripheral)
* [Set Point Value](/doc/controllers/default.md#set-point-value)
* [Handle Identify](/doc/controllers/default.md#handle-identify)
* [Open Zigbee Network](/doc/controllers/default.md#open-zigbee-network)
* [Stop](/doc/controllers/default.md#stop)
* [Ping](/doc/controllers/default.md#ping)
* [Specific DALI Scan](/doc/controllers/default.md#specific-dali-scan)


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
  const { result, ...httpResponse } = await defaultController.getConfig();
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
  const { result, ...httpResponse } = await defaultController.updateConfig(body);
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
  const { result, ...httpResponse } = await defaultController.getManagerAbout();
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
  const { result, ...httpResponse } = await defaultController.getSmartManagerName();
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
  const { result, ...httpResponse } = await defaultController.getTemplates();
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
  const { result, ...httpResponse } = await defaultController.uploadTemplates(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Template Device

Deletes a particular device from a template

```ts
async deleteTemplateDevice(
  templateId: string,
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | - |
| `deviceId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const templateId = 'templateId0';
const deviceId = 'deviceId0';
try {
  const { result, ...httpResponse } = await defaultController.deleteTemplateDevice(templateId, deviceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Config Template Create

Create a template from scanned peripherals

```ts
async configTemplateCreate(
  body?: CreateTemplate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseCreateTemplate>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTemplate \| undefined`](/doc/models/create-template.md) | Body, Optional | Array of scanned peripherals |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseCreateTemplate`](/doc/models/response-create-template.md)

## Example Usage

```ts
const contentType = null;
const bodyDevices: CreatePeripheral[] = [];

const bodydevices0Modules: unknown[] = ['{"key1":"val1","key2":"val2"}', '{"key1":"val1","key2":"val2"}'];
const bodydevices0: CreatePeripheral = {
  label: 'label2',
  className: 'PowerMeter',
  hardwareId: 'hardwareId8',
  gatewayId: 'gatewayId6',
  commDevice: null,
  normallyClosed: false,
  templateId: 'templateId2',
  modules: bodydevices0Modules,
};

bodyDevices[0] = bodydevices0;

const bodydevices1Modules: unknown[] = ['{"key1":"val1","key2":"val2"}', '{"key1":"val1","key2":"val2"}', '{"key1":"val1","key2":"val2"}'];
const bodydevices1: CreatePeripheral = {
  label: 'label3',
  className: 'DaliLight',
  hardwareId: 'hardwareId9',
  gatewayId: 'gatewayId7',
  commDevice: null,
  normallyClosed: true,
  templateId: 'templateId3',
  modules: bodydevices1Modules,
};

bodyDevices[1] = bodydevices1;

const bodydevices2Modules: unknown[] = ['{"key1":"val1","key2":"val2"}'];
const bodydevices2: CreatePeripheral = {
  label: 'label4',
  className: 'DigitalInputDoorContact',
  hardwareId: 'hardwareId0',
  gatewayId: 'gatewayId8',
  commDevice: null,
  normallyClosed: false,
  templateId: 'templateId4',
  modules: bodydevices2Modules,
};

bodyDevices[2] = bodydevices2;

const body: CreateTemplate = {
  templateLabel: 'templateLabel2',
  devices: bodyDevices,
};

try {
  const { result, ...httpResponse } = await defaultController.configTemplateCreate(body);
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
  "templateId": "example-room",
  "templateLabel": "Example room",
  "devices": [
    {
      "className": "Multisense",
      "hardwareId": "1254",
      "modules": [
        "ble",
        "zigbee"
      ]
    },
    {
      "className": "Multisense",
      "hardwareId": "1257",
      "modules": [
        "ble",
        "zigbee",
        "dali"
      ]
    },
    {
      "className": "DaliLight",
      "hardwareId": "0",
      "gatewayId": "1257"
    },
    {
      "className": "DaliLight",
      "hardwareId": "1",
      "gatewayId": "1257"
    },
    {
      "className": "DaliLight",
      "hardwareId": "2",
      "gatewayId": "1257"
    }
  ]
}
```


# Get Scan Peripherals

Starts a scan for peripherals currently linked to the smart manager.

If a dali module is present, the smart manager will check the peripherals table (in the DB) to determine whether dali lights already exist (from being commissioned previously).

The smart manager will send a response that let's the front-end know if there is a dali module in the network and any dali lights it currently has saved.

The front-end will use the results of this request to determine whether it needs to send a seperate request to rescan for dali lights using the `POST /dali/scan/{multisenseId}` endpoint.

If the network has a dali controller but the `scannedPeripheralsArray` returned from this endpoint doesnt contain any peripherals with a className of `DaliLight`, the rescan should be triggered

```ts
async getScanPeripherals(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScanResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ScanResponse[]`](/doc/models/scan-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await defaultController.getScanPeripherals();
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
  const { result, ...httpResponse } = await defaultController.getStreamingLogsStatus();
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
  const { result, ...httpResponse } = await defaultController.captureLogs(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Dimmable Light Instruction

Send EnoceanDimmableLight instructions for testing/commissioning.

```ts
async sendDimmableLightInstruction(
  gatewayId: number,
  instruction: EnoceanDimmableLightInstructionsEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gatewayId` | `number` | Template, Required | - |
| `instruction` | [`EnoceanDimmableLightInstructionsEnum`](/doc/models/enocean-dimmable-light-instructions-enum.md) | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const gatewayId = 181.14;
const instruction = 'on';
try {
  const { result, ...httpResponse } = await defaultController.sendDimmableLightInstruction(gatewayId, instruction);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Issues

Get issues

```ts
async getIssues(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SmartManagerIssue[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SmartManagerIssue[]`](/doc/models/smart-manager-issue.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await defaultController.getIssues();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Network Info

Get the Smart Manager network info

```ts
async getNetworkInfo(
  requestOptions?: RequestOptions
): Promise<ApiResponse<NetworkInfo>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NetworkInfo`](/doc/models/network-info.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await defaultController.getNetworkInfo();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Access Points

Get a list of access points (i.e. wifi networks) that are visible to this Smart Manager

```ts
async getAccessPoints(
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccessPoint[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccessPoint[]`](/doc/models/access-point.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await defaultController.getAccessPoints();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Wifi Connection

Add an access point connection, and consequently connect to it

If a network is known (i.e. smart-manager has previously connected to it),
you can omit `passphrase` even if it's a private network

```ts
async createWifiConnection(
  body: CreateWifiConnection,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateWifiConnectionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateWifiConnection`](/doc/models/create-wifi-connection.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateWifiConnectionResponse`](/doc/models/create-wifi-connection-response.md)

## Example Usage

```ts
const contentType = null;
const body: CreateWifiConnection = {
  ssid: 'ssid6',
  dryRun: false,
};

try {
  const { result, ...httpResponse } = await defaultController.createWifiConnection(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Wifi Connection

Delete an access point connection, and consequently disconnect from it (if we're currently connected to it)

```ts
async deleteWifiConnection(
  body: DeleteWifiConnection,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeleteWifiConnection`](/doc/models/delete-wifi-connection.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
const body: DeleteWifiConnection = {
  ssid: 'ssid6',
};

try {
  const { result, ...httpResponse } = await defaultController.deleteWifiConnection(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Disconnect Wifi Connection

Disconnect from currently connected wifi network (if any)

```ts
async disconnectWifiConnection(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await defaultController.disconnectWifiConnection();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Peripherals

Get all peripherals on this smart manager

```ts
async getPeripherals(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PeripheralWithPoints[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PeripheralWithPoints[]`](/doc/models/peripheral-with-points.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await defaultController.getPeripherals();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Peripheral

Create Peripheral

```ts
async createPeripheral(
  body: CreatePeripheral,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PeripheralWithPoints>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePeripheral`](/doc/models/create-peripheral.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PeripheralWithPoints`](/doc/models/peripheral-with-points.md)

## Example Usage

```ts
const contentType = null;
const bodyModules: unknown[] = ['{"key1":"val1","key2":"val2"}'];
const body: CreatePeripheral = {
  label: 'string',
  className: 'DigitalInputDoorContact',
  hardwareId: 'string',
  gatewayId: 'string',
  commDevice: null,
  normallyClosed: true,
  templateId: 'string',
  modules: bodyModules,
};
body.addToCurrentTemplate = true;

try {
  const { result, ...httpResponse } = await defaultController.createPeripheral(body);
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


# Get Peripheral

Get Single Peripheral

```ts
async getPeripheral(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PeripheralWithPoints>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PeripheralWithPoints`](/doc/models/peripheral-with-points.md)

## Example Usage

```ts
const id = 60;
try {
  const { result, ...httpResponse } = await defaultController.getPeripheral(id);
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
| 404 | Not Found | [`Peripherals404Error`](/doc/models/peripherals-404-error.md) |


# Update Peripheral

Update Peripheral

```ts
async updatePeripheral(
  id: number,
  body: UpdatePeripheral,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PeripheralWithPoints>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`UpdatePeripheral`](/doc/models/update-peripheral.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PeripheralWithPoints`](/doc/models/peripheral-with-points.md)

## Example Usage

```ts
const id = 60;
const contentType = null;
const body: UpdatePeripheral = {};

try {
  const { result, ...httpResponse } = await defaultController.updatePeripheral(id, body);
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
| 404 | Not Found | [`Peripherals404Error`](/doc/models/peripherals-404-error.md) |
| 422 | Validation Failed | [`ValidateErrorJSONError`](/doc/models/validate-error-json-error.md) |


# Delete Peripheral

Delete Peripheral

```ts
async deletePeripheral(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 60;
try {
  const { result, ...httpResponse } = await defaultController.deletePeripheral(id);
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
| 404 | Not Found | [`Peripherals404Error`](/doc/models/peripherals-404-error.md) |


# Set Point Value

Create point data

```ts
async setPointValue(
  id: number,
  pointName: string,
  body: PeripheralsPointsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `pointName` | `string` | Template, Required | - |
| `body` | [`PeripheralsPointsRequest`](/doc/models/peripherals-points-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 60;
const pointName = 'pointName4';
const contentType = null;
const body: PeripheralsPointsRequest = {
  value: '{"key1":"val1","key2":"val2"}',
};

try {
  const { result, ...httpResponse } = await defaultController.setPointValue(id, pointName, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


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
  const { result, ...httpResponse } = await defaultController.handleIdentify(body);
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
  const { result, ...httpResponse } = await defaultController.openZigbeeNetwork(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Stop

Stop the webserver and the access point

```ts
async stop(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await defaultController.stop();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Ping

Healthcheck endpoint

```ts
async ping(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await defaultController.ping();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Specific DALI Scan

Endpoint for manually triggering the re-addressing of dali lights connecting via a particual multisense

Once the smart manager has completed the dali scan, the results will be made available via websockets

```ts
async specificDALIScan(
  multisenseId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `multisenseId` | `string` | Template, Required | id of the multisense that has the dali module |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const multisenseId = 'multisenseId4';
try {
  const { result, ...httpResponse } = await defaultController.specificDALIScan(multisenseId);
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
| 400 | Bad Request | [`DaliScan400Error`](/doc/models/dali-scan-400-error.md) |
| 503 | Service Unavailable | [`DaliScan503Error`](/doc/models/dali-scan-503-error.md) |

