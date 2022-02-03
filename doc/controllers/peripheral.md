# Peripheral

```ts
const peripheralController = new PeripheralController(client);
```

## Class Name

`PeripheralController`

## Methods

* [Send Dimmable Light Instruction](/doc/controllers/peripheral.md#send-dimmable-light-instruction)
* [Get Peripherals](/doc/controllers/peripheral.md#get-peripherals)
* [Create Peripheral](/doc/controllers/peripheral.md#create-peripheral)
* [Get Peripheral](/doc/controllers/peripheral.md#get-peripheral)
* [Update Peripheral](/doc/controllers/peripheral.md#update-peripheral)
* [Delete Peripheral](/doc/controllers/peripheral.md#delete-peripheral)
* [Set Point Value](/doc/controllers/peripheral.md#set-point-value)


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
  const { result, ...httpResponse } = await peripheralController.sendDimmableLightInstruction(gatewayId, instruction);
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
  const { result, ...httpResponse } = await peripheralController.getPeripherals();
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
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PeripheralWithPoints>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PeripheralWithPoints`](/doc/models/peripheral-with-points.md)

## Example Usage

```ts
const contentType = null;
const body = '{"label":"Multisense 1","className":"Multisense","hardwareId":"772","templateId":"","gatewayId":null,"commDevice":"multisense","modules":null,"normallyClosed":null}';
try {
  const { result, ...httpResponse } = await peripheralController.createPeripheral(body);
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
  const { result, ...httpResponse } = await peripheralController.getPeripheral(id);
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
  const { result, ...httpResponse } = await peripheralController.updatePeripheral(id, body);
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
  const { result, ...httpResponse } = await peripheralController.deletePeripheral(id);
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
  const { result, ...httpResponse } = await peripheralController.setPointValue(id, pointName, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

