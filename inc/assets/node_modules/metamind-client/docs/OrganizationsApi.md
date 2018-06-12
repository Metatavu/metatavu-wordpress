# MetamindClient.OrganizationsApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postMessage**](OrganizationsApi.md#postMessage) | **POST** /messages/ | Posts new message


<a name="postMessage"></a>
# **postMessage**
> Message postMessage(body)

Posts new message

Posts new message

### Example
```javascript
var MetamindClient = require('metamind-client');

var apiInstance = new MetamindClient.OrganizationsApi();

var body = new MetamindClient.Message(); // Message | Payload

apiInstance.postMessage(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Message**](Message.md)| Payload | 

### Return type

[**Message**](Message.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

