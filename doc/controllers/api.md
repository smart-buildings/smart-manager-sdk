# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`

## Methods

* [Delete Template Device](/doc/controllers/api.md#delete-template-device)
* [Post Config Template Create](/doc/controllers/api.md#post-config-template-create)
* [Get Peripherals](/doc/controllers/api.md#get-peripherals)
* [Get-Multisense ID-Dali-Scan](/doc/controllers/api.md#get-multisense-id-dali-scan)


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
const templateId = 'template_id0';
const deviceId = 'device_id6';
try {
  const { result, ...httpResponse } = await apiController.deleteTemplateDevice(templateId, deviceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Post Config Template Create

Create a template from scanned peripherals

```ts
async postConfigTemplateCreate(
  body?: ConfigTemplatesCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConfigTemplatesCreateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConfigTemplatesCreateRequest \| undefined`](/doc/models/config-templates-create-request.md) | Body, Optional | Array of scanned peripherals |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConfigTemplatesCreateResponse`](/doc/models/config-templates-create-response.md)

## Example Usage

```ts
const contentType = null;
const bodyDevices: Device1[] = [];

const bodydevices0Modules: unknown[] = ['{"key1":"val1","key2":"val2"}', '{"key1":"val1","key2":"val2"}'];
const bodydevices0: Device1 = {};
bodydevices0.className = 'Multisense';
bodydevices0.hardwareId = '1254';
bodydevices0.modules = bodydevices0Modules;

bodyDevices[0] = bodydevices0;

const bodydevices1Modules: unknown[] = ['{"key1":"val1","key2":"val2"}', '{"key1":"val1","key2":"val2"}', '{"key1":"val1","key2":"val2"}'];
const bodydevices1: Device1 = {};
bodydevices1.className = 'Multisense';
bodydevices1.hardwareId = '1257';
bodydevices1.modules = bodydevices1Modules;

bodyDevices[1] = bodydevices1;

const bodydevices2: Device1 = {};
bodydevices2.className = 'DaliLight';
bodydevices2.hardwareId = '0';
bodydevices2.gatewayId = '1257';

bodyDevices[2] = bodydevices2;

const bodydevices3: Device1 = {};
bodydevices3.className = 'DaliLight';
bodydevices3.hardwareId = '1';
bodydevices3.gatewayId = '1257';

bodyDevices[3] = bodydevices3;

const bodydevices4: Device1 = {};
bodydevices4.className = 'DaliLight';
bodydevices4.hardwareId = '2';
bodydevices4.gatewayId = '1257';

bodyDevices[4] = bodydevices4;

const body: ConfigTemplatesCreateRequest = {
  templateLabel: 'Example room',
  devices: bodyDevices,
};

try {
  const { result, ...httpResponse } = await apiController.postConfigTemplateCreate(body);
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


# Get Peripherals

Starts a scan for peripherals currently linked to the smart manager.

If a dali module is present, the smart manager will check the peripherals table (in the DB) to determine whether dali lights already exist (from being commissioned previously).

The smart manager will send a response that let's the front-end know if there is a dali module in the network and any dali lights it currently has saved.

The front-end will use the results of this request to determine whether it needs to send a seperate request to rescan for dali lights using the `GET /{multisense_ID}/dali-scan` endpoint.

If the network has a dali controller but the `scannedPeripheralsArray` returned from this endpoint doesnt contain any peripherals with a className of `DaliLight`, the rescan should be triggered

```ts
async getPeripherals(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScanResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ScanResponse`](/doc/models/scan-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await apiController.getPeripherals();
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
  "scannedPeripherals": [
    {
      "className": "Multisense",
      "hardwareId": "1257",
      "modules": [
        "ble",
        "zigbee",
        "dali"
      ]
    }
  ],
  "hasDaliController": true,
  "daliScanErrorMessage": "string"
}
```


# Get-Multisense ID-Dali-Scan

Endpoint for manually triggering the re-addressing of dali lights connecting via a particual multisense

Once the smart manager has completed the dali scan, the results will be made available via websockets

```ts
async getMultisenseIDDaliScan(
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
  const { result, ...httpResponse } = await apiController.getMultisenseIDDaliScan(multisenseId);
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

