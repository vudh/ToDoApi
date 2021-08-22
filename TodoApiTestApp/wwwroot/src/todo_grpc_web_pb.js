/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.todo = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.Empty,
 *   !proto.todo.TodoList>}
 */
const methodDescriptor_TodoService_GetAll = new grpc.web.MethodDescriptor(
  '/todo.TodoService/GetAll',
  grpc.web.MethodType.UNARY,
  proto.todo.Empty,
  proto.todo.TodoList,
  /**
   * @param {!proto.todo.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.Empty,
 *   !proto.todo.TodoList>}
 */
const methodInfo_TodoService_GetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.TodoList,
  /**
   * @param {!proto.todo.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoList.deserializeBinary
);


/**
 * @param {!proto.todo.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.TodoList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/GetAll',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetAll,
      callback);
};


/**
 * @param {!proto.todo.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoList>}
 *     Promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/GetAll',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.TodoId,
 *   !proto.todo.Todo>}
 */
const methodDescriptor_TodoService_Get = new grpc.web.MethodDescriptor(
  '/todo.TodoService/Get',
  grpc.web.MethodType.UNARY,
  proto.todo.TodoId,
  proto.todo.Todo,
  /**
   * @param {!proto.todo.TodoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Todo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.TodoId,
 *   !proto.todo.Todo>}
 */
const methodInfo_TodoService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.Todo,
  /**
   * @param {!proto.todo.TodoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Todo.deserializeBinary
);


/**
 * @param {!proto.todo.TodoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.Todo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.Todo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/Get',
      request,
      metadata || {},
      methodDescriptor_TodoService_Get,
      callback);
};


/**
 * @param {!proto.todo.TodoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.Todo>}
 *     Promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/Get',
      request,
      metadata || {},
      methodDescriptor_TodoService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.Todo,
 *   !proto.todo.Todo>}
 */
const methodDescriptor_TodoService_Insert = new grpc.web.MethodDescriptor(
  '/todo.TodoService/Insert',
  grpc.web.MethodType.UNARY,
  proto.todo.Todo,
  proto.todo.Todo,
  /**
   * @param {!proto.todo.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Todo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.Todo,
 *   !proto.todo.Todo>}
 */
const methodInfo_TodoService_Insert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.Todo,
  /**
   * @param {!proto.todo.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Todo.deserializeBinary
);


/**
 * @param {!proto.todo.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.Todo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.Todo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/Insert',
      request,
      metadata || {},
      methodDescriptor_TodoService_Insert,
      callback);
};


/**
 * @param {!proto.todo.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.Todo>}
 *     Promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.insert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/Insert',
      request,
      metadata || {},
      methodDescriptor_TodoService_Insert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.Todo,
 *   !proto.todo.Todo>}
 */
const methodDescriptor_TodoService_Update = new grpc.web.MethodDescriptor(
  '/todo.TodoService/Update',
  grpc.web.MethodType.UNARY,
  proto.todo.Todo,
  proto.todo.Todo,
  /**
   * @param {!proto.todo.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Todo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.Todo,
 *   !proto.todo.Todo>}
 */
const methodInfo_TodoService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.Todo,
  /**
   * @param {!proto.todo.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Todo.deserializeBinary
);


/**
 * @param {!proto.todo.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.Todo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.Todo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/Update',
      request,
      metadata || {},
      methodDescriptor_TodoService_Update,
      callback);
};


/**
 * @param {!proto.todo.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.Todo>}
 *     Promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/Update',
      request,
      metadata || {},
      methodDescriptor_TodoService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.TodoId,
 *   !proto.todo.Empty>}
 */
const methodDescriptor_TodoService_Delete = new grpc.web.MethodDescriptor(
  '/todo.TodoService/Delete',
  grpc.web.MethodType.UNARY,
  proto.todo.TodoId,
  proto.todo.Empty,
  /**
   * @param {!proto.todo.TodoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.TodoId,
 *   !proto.todo.Empty>}
 */
const methodInfo_TodoService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.Empty,
  /**
   * @param {!proto.todo.TodoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Empty.deserializeBinary
);


/**
 * @param {!proto.todo.TodoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/Delete',
      request,
      metadata || {},
      methodDescriptor_TodoService_Delete,
      callback);
};


/**
 * @param {!proto.todo.TodoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.Empty>}
 *     Promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/Delete',
      request,
      metadata || {},
      methodDescriptor_TodoService_Delete);
};


module.exports = proto.todo;

