# Network

```ts
const networkController = new NetworkController(client);
```

## Class Name

`NetworkController`

## Methods

* [Get Network Info](/doc/controllers/network.md#get-network-info)
* [Get Access Points](/doc/controllers/network.md#get-access-points)
* [Create Wifi Connection](/doc/controllers/network.md#create-wifi-connection)
* [Delete Wifi Connection](/doc/controllers/network.md#delete-wifi-connection)
* [Disconnect Wifi Connection](/doc/controllers/network.md#disconnect-wifi-connection)


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
  const { result, ...httpResponse } = await networkController.getNetworkInfo();
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
  const { result, ...httpResponse } = await networkController.getAccessPoints();
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
  const { result, ...httpResponse } = await networkController.createWifiConnection(body);
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
  const { result, ...httpResponse } = await networkController.deleteWifiConnection(body);
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
  const { result, ...httpResponse } = await networkController.disconnectWifiConnection();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

