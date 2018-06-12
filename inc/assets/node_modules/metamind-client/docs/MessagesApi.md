# MetamindClient.MessagesApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessage**](MessagesApi.md#createMessage) | **POST** /messages | Posts new message


<a name="createMessage"></a>
# **createMessage**
> Message createMessage(body)

Posts new message

Posts new message

### Example
```javascript
var MetamindClient = require('metamind-client');
var defaultClient = MetamindClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MetamindClient.MessagesApi();

var body = new MetamindClient.Message(); // Message | Payload

apiInstance.createMessage(body).then(function(data) {
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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

