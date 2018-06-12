# MetamindClient.SessionsApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSession**](SessionsApi.md#createSession) | **POST** /sessions | Creates new session


<a name="createSession"></a>
# **createSession**
> Session createSession(body)

Creates new session

Creates new chat session

### Example
```javascript
var MetamindClient = require('metamind-client');
var defaultClient = MetamindClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MetamindClient.SessionsApi();

var body = new MetamindClient.Session(); // Session | Payload

apiInstance.createSession(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Session**](Session.md)| Payload | 

### Return type

[**Session**](Session.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

