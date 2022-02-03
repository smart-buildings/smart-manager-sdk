# Issues

```ts
const issuesController = new IssuesController(client);
```

## Class Name

`IssuesController`


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
  const { result, ...httpResponse } = await issuesController.getIssues();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

