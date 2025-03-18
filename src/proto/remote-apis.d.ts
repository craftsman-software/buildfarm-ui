import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace build. */
export namespace build {

    /** Namespace bazel. */
    namespace bazel {

        /** Namespace remote. */
        namespace remote {

            /** Namespace execution. */
            namespace execution {

                /** Namespace v2. */
                namespace v2 {

                    /** Represents an Execution */
                    class Execution extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new Execution service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new Execution service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Execution;

                        /**
                         * Calls Execute.
                         * @param request ExecuteRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public execute(request: build.bazel.remote.execution.v2.IExecuteRequest, callback: build.bazel.remote.execution.v2.Execution.ExecuteCallback): void;

                        /**
                         * Calls Execute.
                         * @param request ExecuteRequest message or plain object
                         * @returns Promise
                         */
                        public execute(request: build.bazel.remote.execution.v2.IExecuteRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls WaitExecution.
                         * @param request WaitExecutionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public waitExecution(request: build.bazel.remote.execution.v2.IWaitExecutionRequest, callback: build.bazel.remote.execution.v2.Execution.WaitExecutionCallback): void;

                        /**
                         * Calls WaitExecution.
                         * @param request WaitExecutionRequest message or plain object
                         * @returns Promise
                         */
                        public waitExecution(request: build.bazel.remote.execution.v2.IWaitExecutionRequest): Promise<google.longrunning.Operation>;
                    }

                    namespace Execution {

                        /**
                         * Callback as used by {@link build.bazel.remote.execution.v2.Execution#execute}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type ExecuteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link build.bazel.remote.execution.v2.Execution#waitExecution}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type WaitExecutionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                    }

                    /** Represents an ActionCache */
                    class ActionCache extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ActionCache service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ActionCache service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ActionCache;

                        /**
                         * Calls GetActionResult.
                         * @param request GetActionResultRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ActionResult
                         */
                        public getActionResult(request: build.bazel.remote.execution.v2.IGetActionResultRequest, callback: build.bazel.remote.execution.v2.ActionCache.GetActionResultCallback): void;

                        /**
                         * Calls GetActionResult.
                         * @param request GetActionResultRequest message or plain object
                         * @returns Promise
                         */
                        public getActionResult(request: build.bazel.remote.execution.v2.IGetActionResultRequest): Promise<build.bazel.remote.execution.v2.ActionResult>;

                        /**
                         * Calls UpdateActionResult.
                         * @param request UpdateActionResultRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ActionResult
                         */
                        public updateActionResult(request: build.bazel.remote.execution.v2.IUpdateActionResultRequest, callback: build.bazel.remote.execution.v2.ActionCache.UpdateActionResultCallback): void;

                        /**
                         * Calls UpdateActionResult.
                         * @param request UpdateActionResultRequest message or plain object
                         * @returns Promise
                         */
                        public updateActionResult(request: build.bazel.remote.execution.v2.IUpdateActionResultRequest): Promise<build.bazel.remote.execution.v2.ActionResult>;
                    }

                    namespace ActionCache {

                        /**
                         * Callback as used by {@link build.bazel.remote.execution.v2.ActionCache#getActionResult}.
                         * @param error Error, if any
                         * @param [response] ActionResult
                         */
                        type GetActionResultCallback = (error: (Error|null), response?: build.bazel.remote.execution.v2.ActionResult) => void;

                        /**
                         * Callback as used by {@link build.bazel.remote.execution.v2.ActionCache#updateActionResult}.
                         * @param error Error, if any
                         * @param [response] ActionResult
                         */
                        type UpdateActionResultCallback = (error: (Error|null), response?: build.bazel.remote.execution.v2.ActionResult) => void;
                    }

                    /** Represents a ContentAddressableStorage */
                    class ContentAddressableStorage extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ContentAddressableStorage service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ContentAddressableStorage service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ContentAddressableStorage;

                        /**
                         * Calls FindMissingBlobs.
                         * @param request FindMissingBlobsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and FindMissingBlobsResponse
                         */
                        public findMissingBlobs(request: build.bazel.remote.execution.v2.IFindMissingBlobsRequest, callback: build.bazel.remote.execution.v2.ContentAddressableStorage.FindMissingBlobsCallback): void;

                        /**
                         * Calls FindMissingBlobs.
                         * @param request FindMissingBlobsRequest message or plain object
                         * @returns Promise
                         */
                        public findMissingBlobs(request: build.bazel.remote.execution.v2.IFindMissingBlobsRequest): Promise<build.bazel.remote.execution.v2.FindMissingBlobsResponse>;

                        /**
                         * Calls BatchUpdateBlobs.
                         * @param request BatchUpdateBlobsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BatchUpdateBlobsResponse
                         */
                        public batchUpdateBlobs(request: build.bazel.remote.execution.v2.IBatchUpdateBlobsRequest, callback: build.bazel.remote.execution.v2.ContentAddressableStorage.BatchUpdateBlobsCallback): void;

                        /**
                         * Calls BatchUpdateBlobs.
                         * @param request BatchUpdateBlobsRequest message or plain object
                         * @returns Promise
                         */
                        public batchUpdateBlobs(request: build.bazel.remote.execution.v2.IBatchUpdateBlobsRequest): Promise<build.bazel.remote.execution.v2.BatchUpdateBlobsResponse>;

                        /**
                         * Calls BatchReadBlobs.
                         * @param request BatchReadBlobsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BatchReadBlobsResponse
                         */
                        public batchReadBlobs(request: build.bazel.remote.execution.v2.IBatchReadBlobsRequest, callback: build.bazel.remote.execution.v2.ContentAddressableStorage.BatchReadBlobsCallback): void;

                        /**
                         * Calls BatchReadBlobs.
                         * @param request BatchReadBlobsRequest message or plain object
                         * @returns Promise
                         */
                        public batchReadBlobs(request: build.bazel.remote.execution.v2.IBatchReadBlobsRequest): Promise<build.bazel.remote.execution.v2.BatchReadBlobsResponse>;

                        /**
                         * Calls GetTree.
                         * @param request GetTreeRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetTreeResponse
                         */
                        public getTree(request: build.bazel.remote.execution.v2.IGetTreeRequest, callback: build.bazel.remote.execution.v2.ContentAddressableStorage.GetTreeCallback): void;

                        /**
                         * Calls GetTree.
                         * @param request GetTreeRequest message or plain object
                         * @returns Promise
                         */
                        public getTree(request: build.bazel.remote.execution.v2.IGetTreeRequest): Promise<build.bazel.remote.execution.v2.GetTreeResponse>;
                    }

                    namespace ContentAddressableStorage {

                        /**
                         * Callback as used by {@link build.bazel.remote.execution.v2.ContentAddressableStorage#findMissingBlobs}.
                         * @param error Error, if any
                         * @param [response] FindMissingBlobsResponse
                         */
                        type FindMissingBlobsCallback = (error: (Error|null), response?: build.bazel.remote.execution.v2.FindMissingBlobsResponse) => void;

                        /**
                         * Callback as used by {@link build.bazel.remote.execution.v2.ContentAddressableStorage#batchUpdateBlobs}.
                         * @param error Error, if any
                         * @param [response] BatchUpdateBlobsResponse
                         */
                        type BatchUpdateBlobsCallback = (error: (Error|null), response?: build.bazel.remote.execution.v2.BatchUpdateBlobsResponse) => void;

                        /**
                         * Callback as used by {@link build.bazel.remote.execution.v2.ContentAddressableStorage#batchReadBlobs}.
                         * @param error Error, if any
                         * @param [response] BatchReadBlobsResponse
                         */
                        type BatchReadBlobsCallback = (error: (Error|null), response?: build.bazel.remote.execution.v2.BatchReadBlobsResponse) => void;

                        /**
                         * Callback as used by {@link build.bazel.remote.execution.v2.ContentAddressableStorage#getTree}.
                         * @param error Error, if any
                         * @param [response] GetTreeResponse
                         */
                        type GetTreeCallback = (error: (Error|null), response?: build.bazel.remote.execution.v2.GetTreeResponse) => void;
                    }

                    /** Represents a Capabilities */
                    class Capabilities extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new Capabilities service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new Capabilities service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Capabilities;

                        /**
                         * Calls GetCapabilities.
                         * @param request GetCapabilitiesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ServerCapabilities
                         */
                        public getCapabilities(request: build.bazel.remote.execution.v2.IGetCapabilitiesRequest, callback: build.bazel.remote.execution.v2.Capabilities.GetCapabilitiesCallback): void;

                        /**
                         * Calls GetCapabilities.
                         * @param request GetCapabilitiesRequest message or plain object
                         * @returns Promise
                         */
                        public getCapabilities(request: build.bazel.remote.execution.v2.IGetCapabilitiesRequest): Promise<build.bazel.remote.execution.v2.ServerCapabilities>;
                    }

                    namespace Capabilities {

                        /**
                         * Callback as used by {@link build.bazel.remote.execution.v2.Capabilities#getCapabilities}.
                         * @param error Error, if any
                         * @param [response] ServerCapabilities
                         */
                        type GetCapabilitiesCallback = (error: (Error|null), response?: build.bazel.remote.execution.v2.ServerCapabilities) => void;
                    }

                    /** Properties of an Action. */
                    interface IAction {

                        /** Action commandDigest */
                        commandDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** Action inputRootDigest */
                        inputRootDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** Action timeout */
                        timeout?: (google.protobuf.IDuration|null);

                        /** Action doNotCache */
                        doNotCache?: (boolean|null);

                        /** Action salt */
                        salt?: (Uint8Array|null);

                        /** Action platform */
                        platform?: (build.bazel.remote.execution.v2.IPlatform|null);
                    }

                    /** Represents an Action. */
                    class Action implements IAction {

                        /**
                         * Constructs a new Action.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IAction);

                        /** Action commandDigest. */
                        public commandDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** Action inputRootDigest. */
                        public inputRootDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** Action timeout. */
                        public timeout?: (google.protobuf.IDuration|null);

                        /** Action doNotCache. */
                        public doNotCache: boolean;

                        /** Action salt. */
                        public salt: Uint8Array;

                        /** Action platform. */
                        public platform?: (build.bazel.remote.execution.v2.IPlatform|null);

                        /**
                         * Creates a new Action instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Action instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IAction): build.bazel.remote.execution.v2.Action;

                        /**
                         * Encodes the specified Action message. Does not implicitly {@link build.bazel.remote.execution.v2.Action.verify|verify} messages.
                         * @param message Action message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Action message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.Action.verify|verify} messages.
                         * @param message Action message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Action message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Action
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.Action;

                        /**
                         * Decodes an Action message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Action
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.Action;

                        /**
                         * Verifies an Action message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Action message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Action
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.Action;

                        /**
                         * Creates a plain object from an Action message. Also converts values to other types if specified.
                         * @param message Action
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Action to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Action
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Command. */
                    interface ICommand {

                        /** Command arguments */
                        "arguments"?: (string[]|null);

                        /** Command environmentVariables */
                        environmentVariables?: (build.bazel.remote.execution.v2.Command.IEnvironmentVariable[]|null);

                        /** Command outputFiles */
                        outputFiles?: (string[]|null);

                        /** Command outputDirectories */
                        outputDirectories?: (string[]|null);

                        /** Command outputPaths */
                        outputPaths?: (string[]|null);

                        /** Command platform */
                        platform?: (build.bazel.remote.execution.v2.IPlatform|null);

                        /** Command workingDirectory */
                        workingDirectory?: (string|null);

                        /** Command outputNodeProperties */
                        outputNodeProperties?: (string[]|null);

                        /** Command outputDirectoryFormat */
                        outputDirectoryFormat?: (build.bazel.remote.execution.v2.Command.OutputDirectoryFormat|null);
                    }

                    /** Represents a Command. */
                    class Command implements ICommand {

                        /**
                         * Constructs a new Command.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.ICommand);

                        /** Command arguments. */
                        public arguments: string[];

                        /** Command environmentVariables. */
                        public environmentVariables: build.bazel.remote.execution.v2.Command.IEnvironmentVariable[];

                        /** Command outputFiles. */
                        public outputFiles: string[];

                        /** Command outputDirectories. */
                        public outputDirectories: string[];

                        /** Command outputPaths. */
                        public outputPaths: string[];

                        /** Command platform. */
                        public platform?: (build.bazel.remote.execution.v2.IPlatform|null);

                        /** Command workingDirectory. */
                        public workingDirectory: string;

                        /** Command outputNodeProperties. */
                        public outputNodeProperties: string[];

                        /** Command outputDirectoryFormat. */
                        public outputDirectoryFormat: build.bazel.remote.execution.v2.Command.OutputDirectoryFormat;

                        /**
                         * Creates a new Command instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Command instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.ICommand): build.bazel.remote.execution.v2.Command;

                        /**
                         * Encodes the specified Command message. Does not implicitly {@link build.bazel.remote.execution.v2.Command.verify|verify} messages.
                         * @param message Command message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Command message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.Command.verify|verify} messages.
                         * @param message Command message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Command message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Command
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.Command;

                        /**
                         * Decodes a Command message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Command
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.Command;

                        /**
                         * Verifies a Command message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Command message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Command
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.Command;

                        /**
                         * Creates a plain object from a Command message. Also converts values to other types if specified.
                         * @param message Command
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Command to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Command
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Command {

                        /** Properties of an EnvironmentVariable. */
                        interface IEnvironmentVariable {

                            /** EnvironmentVariable name */
                            name?: (string|null);

                            /** EnvironmentVariable value */
                            value?: (string|null);
                        }

                        /** Represents an EnvironmentVariable. */
                        class EnvironmentVariable implements IEnvironmentVariable {

                            /**
                             * Constructs a new EnvironmentVariable.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: build.bazel.remote.execution.v2.Command.IEnvironmentVariable);

                            /** EnvironmentVariable name. */
                            public name: string;

                            /** EnvironmentVariable value. */
                            public value: string;

                            /**
                             * Creates a new EnvironmentVariable instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EnvironmentVariable instance
                             */
                            public static create(properties?: build.bazel.remote.execution.v2.Command.IEnvironmentVariable): build.bazel.remote.execution.v2.Command.EnvironmentVariable;

                            /**
                             * Encodes the specified EnvironmentVariable message. Does not implicitly {@link build.bazel.remote.execution.v2.Command.EnvironmentVariable.verify|verify} messages.
                             * @param message EnvironmentVariable message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: build.bazel.remote.execution.v2.Command.IEnvironmentVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EnvironmentVariable message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.Command.EnvironmentVariable.verify|verify} messages.
                             * @param message EnvironmentVariable message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: build.bazel.remote.execution.v2.Command.IEnvironmentVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EnvironmentVariable message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EnvironmentVariable
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.Command.EnvironmentVariable;

                            /**
                             * Decodes an EnvironmentVariable message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EnvironmentVariable
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.Command.EnvironmentVariable;

                            /**
                             * Verifies an EnvironmentVariable message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EnvironmentVariable message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EnvironmentVariable
                             */
                            public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.Command.EnvironmentVariable;

                            /**
                             * Creates a plain object from an EnvironmentVariable message. Also converts values to other types if specified.
                             * @param message EnvironmentVariable
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: build.bazel.remote.execution.v2.Command.EnvironmentVariable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EnvironmentVariable to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for EnvironmentVariable
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** OutputDirectoryFormat enum. */
                        enum OutputDirectoryFormat {
                            TREE_ONLY = 0,
                            DIRECTORY_ONLY = 1,
                            TREE_AND_DIRECTORY = 2
                        }
                    }

                    /** Properties of a Platform. */
                    interface IPlatform {

                        /** Platform properties */
                        properties?: (build.bazel.remote.execution.v2.Platform.IProperty[]|null);
                    }

                    /** Represents a Platform. */
                    class Platform implements IPlatform {

                        /**
                         * Constructs a new Platform.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IPlatform);

                        /** Platform properties. */
                        public properties: build.bazel.remote.execution.v2.Platform.IProperty[];

                        /**
                         * Creates a new Platform instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Platform instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IPlatform): build.bazel.remote.execution.v2.Platform;

                        /**
                         * Encodes the specified Platform message. Does not implicitly {@link build.bazel.remote.execution.v2.Platform.verify|verify} messages.
                         * @param message Platform message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IPlatform, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Platform message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.Platform.verify|verify} messages.
                         * @param message Platform message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IPlatform, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Platform message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Platform
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.Platform;

                        /**
                         * Decodes a Platform message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Platform
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.Platform;

                        /**
                         * Verifies a Platform message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Platform message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Platform
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.Platform;

                        /**
                         * Creates a plain object from a Platform message. Also converts values to other types if specified.
                         * @param message Platform
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.Platform, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Platform to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Platform
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Platform {

                        /** Properties of a Property. */
                        interface IProperty {

                            /** Property name */
                            name?: (string|null);

                            /** Property value */
                            value?: (string|null);
                        }

                        /** Represents a Property. */
                        class Property implements IProperty {

                            /**
                             * Constructs a new Property.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: build.bazel.remote.execution.v2.Platform.IProperty);

                            /** Property name. */
                            public name: string;

                            /** Property value. */
                            public value: string;

                            /**
                             * Creates a new Property instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Property instance
                             */
                            public static create(properties?: build.bazel.remote.execution.v2.Platform.IProperty): build.bazel.remote.execution.v2.Platform.Property;

                            /**
                             * Encodes the specified Property message. Does not implicitly {@link build.bazel.remote.execution.v2.Platform.Property.verify|verify} messages.
                             * @param message Property message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: build.bazel.remote.execution.v2.Platform.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Property message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.Platform.Property.verify|verify} messages.
                             * @param message Property message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: build.bazel.remote.execution.v2.Platform.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Property message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Property
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.Platform.Property;

                            /**
                             * Decodes a Property message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Property
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.Platform.Property;

                            /**
                             * Verifies a Property message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Property message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Property
                             */
                            public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.Platform.Property;

                            /**
                             * Creates a plain object from a Property message. Also converts values to other types if specified.
                             * @param message Property
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: build.bazel.remote.execution.v2.Platform.Property, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Property to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Property
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a Directory. */
                    interface IDirectory {

                        /** Directory files */
                        files?: (build.bazel.remote.execution.v2.IFileNode[]|null);

                        /** Directory directories */
                        directories?: (build.bazel.remote.execution.v2.IDirectoryNode[]|null);

                        /** Directory symlinks */
                        symlinks?: (build.bazel.remote.execution.v2.ISymlinkNode[]|null);

                        /** Directory nodeProperties */
                        nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);
                    }

                    /** Represents a Directory. */
                    class Directory implements IDirectory {

                        /**
                         * Constructs a new Directory.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IDirectory);

                        /** Directory files. */
                        public files: build.bazel.remote.execution.v2.IFileNode[];

                        /** Directory directories. */
                        public directories: build.bazel.remote.execution.v2.IDirectoryNode[];

                        /** Directory symlinks. */
                        public symlinks: build.bazel.remote.execution.v2.ISymlinkNode[];

                        /** Directory nodeProperties. */
                        public nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);

                        /**
                         * Creates a new Directory instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Directory instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IDirectory): build.bazel.remote.execution.v2.Directory;

                        /**
                         * Encodes the specified Directory message. Does not implicitly {@link build.bazel.remote.execution.v2.Directory.verify|verify} messages.
                         * @param message Directory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Directory message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.Directory.verify|verify} messages.
                         * @param message Directory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Directory message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Directory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.Directory;

                        /**
                         * Decodes a Directory message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Directory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.Directory;

                        /**
                         * Verifies a Directory message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Directory message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Directory
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.Directory;

                        /**
                         * Creates a plain object from a Directory message. Also converts values to other types if specified.
                         * @param message Directory
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.Directory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Directory to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Directory
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NodeProperty. */
                    interface INodeProperty {

                        /** NodeProperty name */
                        name?: (string|null);

                        /** NodeProperty value */
                        value?: (string|null);
                    }

                    /** Represents a NodeProperty. */
                    class NodeProperty implements INodeProperty {

                        /**
                         * Constructs a new NodeProperty.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.INodeProperty);

                        /** NodeProperty name. */
                        public name: string;

                        /** NodeProperty value. */
                        public value: string;

                        /**
                         * Creates a new NodeProperty instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NodeProperty instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.INodeProperty): build.bazel.remote.execution.v2.NodeProperty;

                        /**
                         * Encodes the specified NodeProperty message. Does not implicitly {@link build.bazel.remote.execution.v2.NodeProperty.verify|verify} messages.
                         * @param message NodeProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.INodeProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NodeProperty message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.NodeProperty.verify|verify} messages.
                         * @param message NodeProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.INodeProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NodeProperty message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NodeProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.NodeProperty;

                        /**
                         * Decodes a NodeProperty message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NodeProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.NodeProperty;

                        /**
                         * Verifies a NodeProperty message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NodeProperty message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NodeProperty
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.NodeProperty;

                        /**
                         * Creates a plain object from a NodeProperty message. Also converts values to other types if specified.
                         * @param message NodeProperty
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.NodeProperty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NodeProperty to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NodeProperty
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NodeProperties. */
                    interface INodeProperties {

                        /** NodeProperties properties */
                        properties?: (build.bazel.remote.execution.v2.INodeProperty[]|null);

                        /** NodeProperties mtime */
                        mtime?: (google.protobuf.ITimestamp|null);

                        /** NodeProperties unixMode */
                        unixMode?: (google.protobuf.IUInt32Value|null);
                    }

                    /** Represents a NodeProperties. */
                    class NodeProperties implements INodeProperties {

                        /**
                         * Constructs a new NodeProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.INodeProperties);

                        /** NodeProperties properties. */
                        public properties: build.bazel.remote.execution.v2.INodeProperty[];

                        /** NodeProperties mtime. */
                        public mtime?: (google.protobuf.ITimestamp|null);

                        /** NodeProperties unixMode. */
                        public unixMode?: (google.protobuf.IUInt32Value|null);

                        /**
                         * Creates a new NodeProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NodeProperties instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.INodeProperties): build.bazel.remote.execution.v2.NodeProperties;

                        /**
                         * Encodes the specified NodeProperties message. Does not implicitly {@link build.bazel.remote.execution.v2.NodeProperties.verify|verify} messages.
                         * @param message NodeProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.INodeProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NodeProperties message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.NodeProperties.verify|verify} messages.
                         * @param message NodeProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.INodeProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NodeProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NodeProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.NodeProperties;

                        /**
                         * Decodes a NodeProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NodeProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.NodeProperties;

                        /**
                         * Verifies a NodeProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NodeProperties message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NodeProperties
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.NodeProperties;

                        /**
                         * Creates a plain object from a NodeProperties message. Also converts values to other types if specified.
                         * @param message NodeProperties
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.NodeProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NodeProperties to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NodeProperties
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FileNode. */
                    interface IFileNode {

                        /** FileNode name */
                        name?: (string|null);

                        /** FileNode digest */
                        digest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** FileNode isExecutable */
                        isExecutable?: (boolean|null);

                        /** FileNode nodeProperties */
                        nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);
                    }

                    /** Represents a FileNode. */
                    class FileNode implements IFileNode {

                        /**
                         * Constructs a new FileNode.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IFileNode);

                        /** FileNode name. */
                        public name: string;

                        /** FileNode digest. */
                        public digest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** FileNode isExecutable. */
                        public isExecutable: boolean;

                        /** FileNode nodeProperties. */
                        public nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);

                        /**
                         * Creates a new FileNode instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FileNode instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IFileNode): build.bazel.remote.execution.v2.FileNode;

                        /**
                         * Encodes the specified FileNode message. Does not implicitly {@link build.bazel.remote.execution.v2.FileNode.verify|verify} messages.
                         * @param message FileNode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IFileNode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FileNode message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.FileNode.verify|verify} messages.
                         * @param message FileNode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IFileNode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FileNode message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FileNode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.FileNode;

                        /**
                         * Decodes a FileNode message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FileNode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.FileNode;

                        /**
                         * Verifies a FileNode message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FileNode message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FileNode
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.FileNode;

                        /**
                         * Creates a plain object from a FileNode message. Also converts values to other types if specified.
                         * @param message FileNode
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.FileNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FileNode to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FileNode
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DirectoryNode. */
                    interface IDirectoryNode {

                        /** DirectoryNode name */
                        name?: (string|null);

                        /** DirectoryNode digest */
                        digest?: (build.bazel.remote.execution.v2.IDigest|null);
                    }

                    /** Represents a DirectoryNode. */
                    class DirectoryNode implements IDirectoryNode {

                        /**
                         * Constructs a new DirectoryNode.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IDirectoryNode);

                        /** DirectoryNode name. */
                        public name: string;

                        /** DirectoryNode digest. */
                        public digest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /**
                         * Creates a new DirectoryNode instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DirectoryNode instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IDirectoryNode): build.bazel.remote.execution.v2.DirectoryNode;

                        /**
                         * Encodes the specified DirectoryNode message. Does not implicitly {@link build.bazel.remote.execution.v2.DirectoryNode.verify|verify} messages.
                         * @param message DirectoryNode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IDirectoryNode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DirectoryNode message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.DirectoryNode.verify|verify} messages.
                         * @param message DirectoryNode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IDirectoryNode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DirectoryNode message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DirectoryNode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.DirectoryNode;

                        /**
                         * Decodes a DirectoryNode message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DirectoryNode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.DirectoryNode;

                        /**
                         * Verifies a DirectoryNode message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DirectoryNode message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DirectoryNode
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.DirectoryNode;

                        /**
                         * Creates a plain object from a DirectoryNode message. Also converts values to other types if specified.
                         * @param message DirectoryNode
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.DirectoryNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DirectoryNode to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DirectoryNode
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SymlinkNode. */
                    interface ISymlinkNode {

                        /** SymlinkNode name */
                        name?: (string|null);

                        /** SymlinkNode target */
                        target?: (string|null);

                        /** SymlinkNode nodeProperties */
                        nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);
                    }

                    /** Represents a SymlinkNode. */
                    class SymlinkNode implements ISymlinkNode {

                        /**
                         * Constructs a new SymlinkNode.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.ISymlinkNode);

                        /** SymlinkNode name. */
                        public name: string;

                        /** SymlinkNode target. */
                        public target: string;

                        /** SymlinkNode nodeProperties. */
                        public nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);

                        /**
                         * Creates a new SymlinkNode instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SymlinkNode instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.ISymlinkNode): build.bazel.remote.execution.v2.SymlinkNode;

                        /**
                         * Encodes the specified SymlinkNode message. Does not implicitly {@link build.bazel.remote.execution.v2.SymlinkNode.verify|verify} messages.
                         * @param message SymlinkNode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.ISymlinkNode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SymlinkNode message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.SymlinkNode.verify|verify} messages.
                         * @param message SymlinkNode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.ISymlinkNode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SymlinkNode message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SymlinkNode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.SymlinkNode;

                        /**
                         * Decodes a SymlinkNode message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SymlinkNode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.SymlinkNode;

                        /**
                         * Verifies a SymlinkNode message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SymlinkNode message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SymlinkNode
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.SymlinkNode;

                        /**
                         * Creates a plain object from a SymlinkNode message. Also converts values to other types if specified.
                         * @param message SymlinkNode
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.SymlinkNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SymlinkNode to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SymlinkNode
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Digest. */
                    interface IDigest {

                        /** Digest hash */
                        hash?: (string|null);

                        /** Digest sizeBytes */
                        sizeBytes?: (number|Long|null);
                    }

                    /** Represents a Digest. */
                    class Digest implements IDigest {

                        /**
                         * Constructs a new Digest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IDigest);

                        /** Digest hash. */
                        public hash: string;

                        /** Digest sizeBytes. */
                        public sizeBytes: (number|Long);

                        /**
                         * Creates a new Digest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Digest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IDigest): build.bazel.remote.execution.v2.Digest;

                        /**
                         * Encodes the specified Digest message. Does not implicitly {@link build.bazel.remote.execution.v2.Digest.verify|verify} messages.
                         * @param message Digest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IDigest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Digest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.Digest.verify|verify} messages.
                         * @param message Digest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IDigest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Digest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Digest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.Digest;

                        /**
                         * Decodes a Digest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Digest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.Digest;

                        /**
                         * Verifies a Digest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Digest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Digest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.Digest;

                        /**
                         * Creates a plain object from a Digest message. Also converts values to other types if specified.
                         * @param message Digest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.Digest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Digest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Digest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExecutedActionMetadata. */
                    interface IExecutedActionMetadata {

                        /** ExecutedActionMetadata worker */
                        worker?: (string|null);

                        /** ExecutedActionMetadata queuedTimestamp */
                        queuedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata workerStartTimestamp */
                        workerStartTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata workerCompletedTimestamp */
                        workerCompletedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata inputFetchStartTimestamp */
                        inputFetchStartTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata inputFetchCompletedTimestamp */
                        inputFetchCompletedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata executionStartTimestamp */
                        executionStartTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata executionCompletedTimestamp */
                        executionCompletedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata virtualExecutionDuration */
                        virtualExecutionDuration?: (google.protobuf.IDuration|null);

                        /** ExecutedActionMetadata outputUploadStartTimestamp */
                        outputUploadStartTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata outputUploadCompletedTimestamp */
                        outputUploadCompletedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata auxiliaryMetadata */
                        auxiliaryMetadata?: (google.protobuf.IAny[]|null);
                    }

                    /** Represents an ExecutedActionMetadata. */
                    class ExecutedActionMetadata implements IExecutedActionMetadata {

                        /**
                         * Constructs a new ExecutedActionMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IExecutedActionMetadata);

                        /** ExecutedActionMetadata worker. */
                        public worker: string;

                        /** ExecutedActionMetadata queuedTimestamp. */
                        public queuedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata workerStartTimestamp. */
                        public workerStartTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata workerCompletedTimestamp. */
                        public workerCompletedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata inputFetchStartTimestamp. */
                        public inputFetchStartTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata inputFetchCompletedTimestamp. */
                        public inputFetchCompletedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata executionStartTimestamp. */
                        public executionStartTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata executionCompletedTimestamp. */
                        public executionCompletedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata virtualExecutionDuration. */
                        public virtualExecutionDuration?: (google.protobuf.IDuration|null);

                        /** ExecutedActionMetadata outputUploadStartTimestamp. */
                        public outputUploadStartTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata outputUploadCompletedTimestamp. */
                        public outputUploadCompletedTimestamp?: (google.protobuf.ITimestamp|null);

                        /** ExecutedActionMetadata auxiliaryMetadata. */
                        public auxiliaryMetadata: google.protobuf.IAny[];

                        /**
                         * Creates a new ExecutedActionMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExecutedActionMetadata instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IExecutedActionMetadata): build.bazel.remote.execution.v2.ExecutedActionMetadata;

                        /**
                         * Encodes the specified ExecutedActionMetadata message. Does not implicitly {@link build.bazel.remote.execution.v2.ExecutedActionMetadata.verify|verify} messages.
                         * @param message ExecutedActionMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IExecutedActionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExecutedActionMetadata message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ExecutedActionMetadata.verify|verify} messages.
                         * @param message ExecutedActionMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IExecutedActionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExecutedActionMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExecutedActionMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ExecutedActionMetadata;

                        /**
                         * Decodes an ExecutedActionMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExecutedActionMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ExecutedActionMetadata;

                        /**
                         * Verifies an ExecutedActionMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExecutedActionMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExecutedActionMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ExecutedActionMetadata;

                        /**
                         * Creates a plain object from an ExecutedActionMetadata message. Also converts values to other types if specified.
                         * @param message ExecutedActionMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ExecutedActionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExecutedActionMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExecutedActionMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ActionResult. */
                    interface IActionResult {

                        /** ActionResult outputFiles */
                        outputFiles?: (build.bazel.remote.execution.v2.IOutputFile[]|null);

                        /** ActionResult outputFileSymlinks */
                        outputFileSymlinks?: (build.bazel.remote.execution.v2.IOutputSymlink[]|null);

                        /** ActionResult outputSymlinks */
                        outputSymlinks?: (build.bazel.remote.execution.v2.IOutputSymlink[]|null);

                        /** ActionResult outputDirectories */
                        outputDirectories?: (build.bazel.remote.execution.v2.IOutputDirectory[]|null);

                        /** ActionResult outputDirectorySymlinks */
                        outputDirectorySymlinks?: (build.bazel.remote.execution.v2.IOutputSymlink[]|null);

                        /** ActionResult exitCode */
                        exitCode?: (number|null);

                        /** ActionResult stdoutRaw */
                        stdoutRaw?: (Uint8Array|null);

                        /** ActionResult stdoutDigest */
                        stdoutDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** ActionResult stderrRaw */
                        stderrRaw?: (Uint8Array|null);

                        /** ActionResult stderrDigest */
                        stderrDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** ActionResult executionMetadata */
                        executionMetadata?: (build.bazel.remote.execution.v2.IExecutedActionMetadata|null);
                    }

                    /** Represents an ActionResult. */
                    class ActionResult implements IActionResult {

                        /**
                         * Constructs a new ActionResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IActionResult);

                        /** ActionResult outputFiles. */
                        public outputFiles: build.bazel.remote.execution.v2.IOutputFile[];

                        /** ActionResult outputFileSymlinks. */
                        public outputFileSymlinks: build.bazel.remote.execution.v2.IOutputSymlink[];

                        /** ActionResult outputSymlinks. */
                        public outputSymlinks: build.bazel.remote.execution.v2.IOutputSymlink[];

                        /** ActionResult outputDirectories. */
                        public outputDirectories: build.bazel.remote.execution.v2.IOutputDirectory[];

                        /** ActionResult outputDirectorySymlinks. */
                        public outputDirectorySymlinks: build.bazel.remote.execution.v2.IOutputSymlink[];

                        /** ActionResult exitCode. */
                        public exitCode: number;

                        /** ActionResult stdoutRaw. */
                        public stdoutRaw: Uint8Array;

                        /** ActionResult stdoutDigest. */
                        public stdoutDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** ActionResult stderrRaw. */
                        public stderrRaw: Uint8Array;

                        /** ActionResult stderrDigest. */
                        public stderrDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** ActionResult executionMetadata. */
                        public executionMetadata?: (build.bazel.remote.execution.v2.IExecutedActionMetadata|null);

                        /**
                         * Creates a new ActionResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionResult instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IActionResult): build.bazel.remote.execution.v2.ActionResult;

                        /**
                         * Encodes the specified ActionResult message. Does not implicitly {@link build.bazel.remote.execution.v2.ActionResult.verify|verify} messages.
                         * @param message ActionResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IActionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionResult message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ActionResult.verify|verify} messages.
                         * @param message ActionResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IActionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ActionResult;

                        /**
                         * Decodes an ActionResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ActionResult;

                        /**
                         * Verifies an ActionResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionResult
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ActionResult;

                        /**
                         * Creates a plain object from an ActionResult message. Also converts values to other types if specified.
                         * @param message ActionResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ActionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionResult
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an OutputFile. */
                    interface IOutputFile {

                        /** OutputFile path */
                        path?: (string|null);

                        /** OutputFile digest */
                        digest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** OutputFile isExecutable */
                        isExecutable?: (boolean|null);

                        /** OutputFile contents */
                        contents?: (Uint8Array|null);

                        /** OutputFile nodeProperties */
                        nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);
                    }

                    /** Represents an OutputFile. */
                    class OutputFile implements IOutputFile {

                        /**
                         * Constructs a new OutputFile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IOutputFile);

                        /** OutputFile path. */
                        public path: string;

                        /** OutputFile digest. */
                        public digest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** OutputFile isExecutable. */
                        public isExecutable: boolean;

                        /** OutputFile contents. */
                        public contents: Uint8Array;

                        /** OutputFile nodeProperties. */
                        public nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);

                        /**
                         * Creates a new OutputFile instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OutputFile instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IOutputFile): build.bazel.remote.execution.v2.OutputFile;

                        /**
                         * Encodes the specified OutputFile message. Does not implicitly {@link build.bazel.remote.execution.v2.OutputFile.verify|verify} messages.
                         * @param message OutputFile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IOutputFile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OutputFile message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.OutputFile.verify|verify} messages.
                         * @param message OutputFile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IOutputFile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OutputFile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OutputFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.OutputFile;

                        /**
                         * Decodes an OutputFile message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OutputFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.OutputFile;

                        /**
                         * Verifies an OutputFile message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OutputFile message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OutputFile
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.OutputFile;

                        /**
                         * Creates a plain object from an OutputFile message. Also converts values to other types if specified.
                         * @param message OutputFile
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.OutputFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OutputFile to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OutputFile
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Tree. */
                    interface ITree {

                        /** Tree root */
                        root?: (build.bazel.remote.execution.v2.IDirectory|null);

                        /** Tree children */
                        children?: (build.bazel.remote.execution.v2.IDirectory[]|null);
                    }

                    /** Represents a Tree. */
                    class Tree implements ITree {

                        /**
                         * Constructs a new Tree.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.ITree);

                        /** Tree root. */
                        public root?: (build.bazel.remote.execution.v2.IDirectory|null);

                        /** Tree children. */
                        public children: build.bazel.remote.execution.v2.IDirectory[];

                        /**
                         * Creates a new Tree instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Tree instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.ITree): build.bazel.remote.execution.v2.Tree;

                        /**
                         * Encodes the specified Tree message. Does not implicitly {@link build.bazel.remote.execution.v2.Tree.verify|verify} messages.
                         * @param message Tree message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.ITree, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Tree message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.Tree.verify|verify} messages.
                         * @param message Tree message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.ITree, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Tree message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Tree
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.Tree;

                        /**
                         * Decodes a Tree message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Tree
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.Tree;

                        /**
                         * Verifies a Tree message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Tree message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Tree
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.Tree;

                        /**
                         * Creates a plain object from a Tree message. Also converts values to other types if specified.
                         * @param message Tree
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.Tree, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Tree to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Tree
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an OutputDirectory. */
                    interface IOutputDirectory {

                        /** OutputDirectory path */
                        path?: (string|null);

                        /** OutputDirectory treeDigest */
                        treeDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** OutputDirectory isTopologicallySorted */
                        isTopologicallySorted?: (boolean|null);

                        /** OutputDirectory rootDirectoryDigest */
                        rootDirectoryDigest?: (build.bazel.remote.execution.v2.IDigest|null);
                    }

                    /** Represents an OutputDirectory. */
                    class OutputDirectory implements IOutputDirectory {

                        /**
                         * Constructs a new OutputDirectory.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IOutputDirectory);

                        /** OutputDirectory path. */
                        public path: string;

                        /** OutputDirectory treeDigest. */
                        public treeDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** OutputDirectory isTopologicallySorted. */
                        public isTopologicallySorted: boolean;

                        /** OutputDirectory rootDirectoryDigest. */
                        public rootDirectoryDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /**
                         * Creates a new OutputDirectory instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OutputDirectory instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IOutputDirectory): build.bazel.remote.execution.v2.OutputDirectory;

                        /**
                         * Encodes the specified OutputDirectory message. Does not implicitly {@link build.bazel.remote.execution.v2.OutputDirectory.verify|verify} messages.
                         * @param message OutputDirectory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IOutputDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OutputDirectory message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.OutputDirectory.verify|verify} messages.
                         * @param message OutputDirectory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IOutputDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OutputDirectory message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OutputDirectory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.OutputDirectory;

                        /**
                         * Decodes an OutputDirectory message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OutputDirectory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.OutputDirectory;

                        /**
                         * Verifies an OutputDirectory message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OutputDirectory message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OutputDirectory
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.OutputDirectory;

                        /**
                         * Creates a plain object from an OutputDirectory message. Also converts values to other types if specified.
                         * @param message OutputDirectory
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.OutputDirectory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OutputDirectory to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OutputDirectory
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an OutputSymlink. */
                    interface IOutputSymlink {

                        /** OutputSymlink path */
                        path?: (string|null);

                        /** OutputSymlink target */
                        target?: (string|null);

                        /** OutputSymlink nodeProperties */
                        nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);
                    }

                    /** Represents an OutputSymlink. */
                    class OutputSymlink implements IOutputSymlink {

                        /**
                         * Constructs a new OutputSymlink.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IOutputSymlink);

                        /** OutputSymlink path. */
                        public path: string;

                        /** OutputSymlink target. */
                        public target: string;

                        /** OutputSymlink nodeProperties. */
                        public nodeProperties?: (build.bazel.remote.execution.v2.INodeProperties|null);

                        /**
                         * Creates a new OutputSymlink instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OutputSymlink instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IOutputSymlink): build.bazel.remote.execution.v2.OutputSymlink;

                        /**
                         * Encodes the specified OutputSymlink message. Does not implicitly {@link build.bazel.remote.execution.v2.OutputSymlink.verify|verify} messages.
                         * @param message OutputSymlink message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IOutputSymlink, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OutputSymlink message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.OutputSymlink.verify|verify} messages.
                         * @param message OutputSymlink message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IOutputSymlink, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OutputSymlink message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OutputSymlink
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.OutputSymlink;

                        /**
                         * Decodes an OutputSymlink message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OutputSymlink
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.OutputSymlink;

                        /**
                         * Verifies an OutputSymlink message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OutputSymlink message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OutputSymlink
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.OutputSymlink;

                        /**
                         * Creates a plain object from an OutputSymlink message. Also converts values to other types if specified.
                         * @param message OutputSymlink
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.OutputSymlink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OutputSymlink to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OutputSymlink
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExecutionPolicy. */
                    interface IExecutionPolicy {

                        /** ExecutionPolicy priority */
                        priority?: (number|null);
                    }

                    /** Represents an ExecutionPolicy. */
                    class ExecutionPolicy implements IExecutionPolicy {

                        /**
                         * Constructs a new ExecutionPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IExecutionPolicy);

                        /** ExecutionPolicy priority. */
                        public priority: number;

                        /**
                         * Creates a new ExecutionPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExecutionPolicy instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IExecutionPolicy): build.bazel.remote.execution.v2.ExecutionPolicy;

                        /**
                         * Encodes the specified ExecutionPolicy message. Does not implicitly {@link build.bazel.remote.execution.v2.ExecutionPolicy.verify|verify} messages.
                         * @param message ExecutionPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IExecutionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExecutionPolicy message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ExecutionPolicy.verify|verify} messages.
                         * @param message ExecutionPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IExecutionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExecutionPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExecutionPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ExecutionPolicy;

                        /**
                         * Decodes an ExecutionPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExecutionPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ExecutionPolicy;

                        /**
                         * Verifies an ExecutionPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExecutionPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExecutionPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ExecutionPolicy;

                        /**
                         * Creates a plain object from an ExecutionPolicy message. Also converts values to other types if specified.
                         * @param message ExecutionPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ExecutionPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExecutionPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExecutionPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ResultsCachePolicy. */
                    interface IResultsCachePolicy {

                        /** ResultsCachePolicy priority */
                        priority?: (number|null);
                    }

                    /** Represents a ResultsCachePolicy. */
                    class ResultsCachePolicy implements IResultsCachePolicy {

                        /**
                         * Constructs a new ResultsCachePolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IResultsCachePolicy);

                        /** ResultsCachePolicy priority. */
                        public priority: number;

                        /**
                         * Creates a new ResultsCachePolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResultsCachePolicy instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IResultsCachePolicy): build.bazel.remote.execution.v2.ResultsCachePolicy;

                        /**
                         * Encodes the specified ResultsCachePolicy message. Does not implicitly {@link build.bazel.remote.execution.v2.ResultsCachePolicy.verify|verify} messages.
                         * @param message ResultsCachePolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IResultsCachePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResultsCachePolicy message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ResultsCachePolicy.verify|verify} messages.
                         * @param message ResultsCachePolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IResultsCachePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResultsCachePolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResultsCachePolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ResultsCachePolicy;

                        /**
                         * Decodes a ResultsCachePolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResultsCachePolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ResultsCachePolicy;

                        /**
                         * Verifies a ResultsCachePolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResultsCachePolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResultsCachePolicy
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ResultsCachePolicy;

                        /**
                         * Creates a plain object from a ResultsCachePolicy message. Also converts values to other types if specified.
                         * @param message ResultsCachePolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ResultsCachePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResultsCachePolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResultsCachePolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExecuteRequest. */
                    interface IExecuteRequest {

                        /** ExecuteRequest instanceName */
                        instanceName?: (string|null);

                        /** ExecuteRequest skipCacheLookup */
                        skipCacheLookup?: (boolean|null);

                        /** ExecuteRequest actionDigest */
                        actionDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** ExecuteRequest executionPolicy */
                        executionPolicy?: (build.bazel.remote.execution.v2.IExecutionPolicy|null);

                        /** ExecuteRequest resultsCachePolicy */
                        resultsCachePolicy?: (build.bazel.remote.execution.v2.IResultsCachePolicy|null);

                        /** ExecuteRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);

                        /** ExecuteRequest inlineStdout */
                        inlineStdout?: (boolean|null);

                        /** ExecuteRequest inlineStderr */
                        inlineStderr?: (boolean|null);

                        /** ExecuteRequest inlineOutputFiles */
                        inlineOutputFiles?: (string[]|null);
                    }

                    /** Represents an ExecuteRequest. */
                    class ExecuteRequest implements IExecuteRequest {

                        /**
                         * Constructs a new ExecuteRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IExecuteRequest);

                        /** ExecuteRequest instanceName. */
                        public instanceName: string;

                        /** ExecuteRequest skipCacheLookup. */
                        public skipCacheLookup: boolean;

                        /** ExecuteRequest actionDigest. */
                        public actionDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** ExecuteRequest executionPolicy. */
                        public executionPolicy?: (build.bazel.remote.execution.v2.IExecutionPolicy|null);

                        /** ExecuteRequest resultsCachePolicy. */
                        public resultsCachePolicy?: (build.bazel.remote.execution.v2.IResultsCachePolicy|null);

                        /** ExecuteRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /** ExecuteRequest inlineStdout. */
                        public inlineStdout: boolean;

                        /** ExecuteRequest inlineStderr. */
                        public inlineStderr: boolean;

                        /** ExecuteRequest inlineOutputFiles. */
                        public inlineOutputFiles: string[];

                        /**
                         * Creates a new ExecuteRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExecuteRequest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IExecuteRequest): build.bazel.remote.execution.v2.ExecuteRequest;

                        /**
                         * Encodes the specified ExecuteRequest message. Does not implicitly {@link build.bazel.remote.execution.v2.ExecuteRequest.verify|verify} messages.
                         * @param message ExecuteRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IExecuteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExecuteRequest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ExecuteRequest.verify|verify} messages.
                         * @param message ExecuteRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IExecuteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExecuteRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExecuteRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ExecuteRequest;

                        /**
                         * Decodes an ExecuteRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExecuteRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ExecuteRequest;

                        /**
                         * Verifies an ExecuteRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExecuteRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExecuteRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ExecuteRequest;

                        /**
                         * Creates a plain object from an ExecuteRequest message. Also converts values to other types if specified.
                         * @param message ExecuteRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ExecuteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExecuteRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExecuteRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LogFile. */
                    interface ILogFile {

                        /** LogFile digest */
                        digest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** LogFile humanReadable */
                        humanReadable?: (boolean|null);
                    }

                    /** Represents a LogFile. */
                    class LogFile implements ILogFile {

                        /**
                         * Constructs a new LogFile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.ILogFile);

                        /** LogFile digest. */
                        public digest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** LogFile humanReadable. */
                        public humanReadable: boolean;

                        /**
                         * Creates a new LogFile instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LogFile instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.ILogFile): build.bazel.remote.execution.v2.LogFile;

                        /**
                         * Encodes the specified LogFile message. Does not implicitly {@link build.bazel.remote.execution.v2.LogFile.verify|verify} messages.
                         * @param message LogFile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.ILogFile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LogFile message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.LogFile.verify|verify} messages.
                         * @param message LogFile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.ILogFile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LogFile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LogFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.LogFile;

                        /**
                         * Decodes a LogFile message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LogFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.LogFile;

                        /**
                         * Verifies a LogFile message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LogFile message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LogFile
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.LogFile;

                        /**
                         * Creates a plain object from a LogFile message. Also converts values to other types if specified.
                         * @param message LogFile
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.LogFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LogFile to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LogFile
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExecuteResponse. */
                    interface IExecuteResponse {

                        /** ExecuteResponse result */
                        result?: (build.bazel.remote.execution.v2.IActionResult|null);

                        /** ExecuteResponse cachedResult */
                        cachedResult?: (boolean|null);

                        /** ExecuteResponse status */
                        status?: (google.rpc.IStatus|null);

                        /** ExecuteResponse serverLogs */
                        serverLogs?: ({ [k: string]: build.bazel.remote.execution.v2.ILogFile }|null);

                        /** ExecuteResponse message */
                        message?: (string|null);
                    }

                    /** Represents an ExecuteResponse. */
                    class ExecuteResponse implements IExecuteResponse {

                        /**
                         * Constructs a new ExecuteResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IExecuteResponse);

                        /** ExecuteResponse result. */
                        public result?: (build.bazel.remote.execution.v2.IActionResult|null);

                        /** ExecuteResponse cachedResult. */
                        public cachedResult: boolean;

                        /** ExecuteResponse status. */
                        public status?: (google.rpc.IStatus|null);

                        /** ExecuteResponse serverLogs. */
                        public serverLogs: { [k: string]: build.bazel.remote.execution.v2.ILogFile };

                        /** ExecuteResponse message. */
                        public message: string;

                        /**
                         * Creates a new ExecuteResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExecuteResponse instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IExecuteResponse): build.bazel.remote.execution.v2.ExecuteResponse;

                        /**
                         * Encodes the specified ExecuteResponse message. Does not implicitly {@link build.bazel.remote.execution.v2.ExecuteResponse.verify|verify} messages.
                         * @param message ExecuteResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IExecuteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExecuteResponse message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ExecuteResponse.verify|verify} messages.
                         * @param message ExecuteResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IExecuteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExecuteResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExecuteResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ExecuteResponse;

                        /**
                         * Decodes an ExecuteResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExecuteResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ExecuteResponse;

                        /**
                         * Verifies an ExecuteResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExecuteResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExecuteResponse
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ExecuteResponse;

                        /**
                         * Creates a plain object from an ExecuteResponse message. Also converts values to other types if specified.
                         * @param message ExecuteResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ExecuteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExecuteResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExecuteResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExecutionStage. */
                    interface IExecutionStage {
                    }

                    /** Represents an ExecutionStage. */
                    class ExecutionStage implements IExecutionStage {

                        /**
                         * Constructs a new ExecutionStage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IExecutionStage);

                        /**
                         * Creates a new ExecutionStage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExecutionStage instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IExecutionStage): build.bazel.remote.execution.v2.ExecutionStage;

                        /**
                         * Encodes the specified ExecutionStage message. Does not implicitly {@link build.bazel.remote.execution.v2.ExecutionStage.verify|verify} messages.
                         * @param message ExecutionStage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IExecutionStage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExecutionStage message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ExecutionStage.verify|verify} messages.
                         * @param message ExecutionStage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IExecutionStage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExecutionStage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExecutionStage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ExecutionStage;

                        /**
                         * Decodes an ExecutionStage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExecutionStage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ExecutionStage;

                        /**
                         * Verifies an ExecutionStage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExecutionStage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExecutionStage
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ExecutionStage;

                        /**
                         * Creates a plain object from an ExecutionStage message. Also converts values to other types if specified.
                         * @param message ExecutionStage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ExecutionStage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExecutionStage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExecutionStage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ExecutionStage {

                        /** Value enum. */
                        enum Value {
                            UNKNOWN = 0,
                            CACHE_CHECK = 1,
                            QUEUED = 2,
                            EXECUTING = 3,
                            COMPLETED = 4
                        }
                    }

                    /** Properties of an ExecuteOperationMetadata. */
                    interface IExecuteOperationMetadata {

                        /** ExecuteOperationMetadata stage */
                        stage?: (build.bazel.remote.execution.v2.ExecutionStage.Value|null);

                        /** ExecuteOperationMetadata actionDigest */
                        actionDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** ExecuteOperationMetadata stdoutStreamName */
                        stdoutStreamName?: (string|null);

                        /** ExecuteOperationMetadata stderrStreamName */
                        stderrStreamName?: (string|null);

                        /** ExecuteOperationMetadata partialExecutionMetadata */
                        partialExecutionMetadata?: (build.bazel.remote.execution.v2.IExecutedActionMetadata|null);

                        /** ExecuteOperationMetadata digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents an ExecuteOperationMetadata. */
                    class ExecuteOperationMetadata implements IExecuteOperationMetadata {

                        /**
                         * Constructs a new ExecuteOperationMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IExecuteOperationMetadata);

                        /** ExecuteOperationMetadata stage. */
                        public stage: build.bazel.remote.execution.v2.ExecutionStage.Value;

                        /** ExecuteOperationMetadata actionDigest. */
                        public actionDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** ExecuteOperationMetadata stdoutStreamName. */
                        public stdoutStreamName: string;

                        /** ExecuteOperationMetadata stderrStreamName. */
                        public stderrStreamName: string;

                        /** ExecuteOperationMetadata partialExecutionMetadata. */
                        public partialExecutionMetadata?: (build.bazel.remote.execution.v2.IExecutedActionMetadata|null);

                        /** ExecuteOperationMetadata digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new ExecuteOperationMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExecuteOperationMetadata instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IExecuteOperationMetadata): build.bazel.remote.execution.v2.ExecuteOperationMetadata;

                        /**
                         * Encodes the specified ExecuteOperationMetadata message. Does not implicitly {@link build.bazel.remote.execution.v2.ExecuteOperationMetadata.verify|verify} messages.
                         * @param message ExecuteOperationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IExecuteOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExecuteOperationMetadata message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ExecuteOperationMetadata.verify|verify} messages.
                         * @param message ExecuteOperationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IExecuteOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExecuteOperationMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExecuteOperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ExecuteOperationMetadata;

                        /**
                         * Decodes an ExecuteOperationMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExecuteOperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ExecuteOperationMetadata;

                        /**
                         * Verifies an ExecuteOperationMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExecuteOperationMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExecuteOperationMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ExecuteOperationMetadata;

                        /**
                         * Creates a plain object from an ExecuteOperationMetadata message. Also converts values to other types if specified.
                         * @param message ExecuteOperationMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ExecuteOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExecuteOperationMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExecuteOperationMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a WaitExecutionRequest. */
                    interface IWaitExecutionRequest {

                        /** WaitExecutionRequest name */
                        name?: (string|null);
                    }

                    /** Represents a WaitExecutionRequest. */
                    class WaitExecutionRequest implements IWaitExecutionRequest {

                        /**
                         * Constructs a new WaitExecutionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IWaitExecutionRequest);

                        /** WaitExecutionRequest name. */
                        public name: string;

                        /**
                         * Creates a new WaitExecutionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WaitExecutionRequest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IWaitExecutionRequest): build.bazel.remote.execution.v2.WaitExecutionRequest;

                        /**
                         * Encodes the specified WaitExecutionRequest message. Does not implicitly {@link build.bazel.remote.execution.v2.WaitExecutionRequest.verify|verify} messages.
                         * @param message WaitExecutionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IWaitExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WaitExecutionRequest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.WaitExecutionRequest.verify|verify} messages.
                         * @param message WaitExecutionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IWaitExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WaitExecutionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WaitExecutionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.WaitExecutionRequest;

                        /**
                         * Decodes a WaitExecutionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WaitExecutionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.WaitExecutionRequest;

                        /**
                         * Verifies a WaitExecutionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WaitExecutionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WaitExecutionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.WaitExecutionRequest;

                        /**
                         * Creates a plain object from a WaitExecutionRequest message. Also converts values to other types if specified.
                         * @param message WaitExecutionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.WaitExecutionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WaitExecutionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WaitExecutionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetActionResultRequest. */
                    interface IGetActionResultRequest {

                        /** GetActionResultRequest instanceName */
                        instanceName?: (string|null);

                        /** GetActionResultRequest actionDigest */
                        actionDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** GetActionResultRequest inlineStdout */
                        inlineStdout?: (boolean|null);

                        /** GetActionResultRequest inlineStderr */
                        inlineStderr?: (boolean|null);

                        /** GetActionResultRequest inlineOutputFiles */
                        inlineOutputFiles?: (string[]|null);

                        /** GetActionResultRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a GetActionResultRequest. */
                    class GetActionResultRequest implements IGetActionResultRequest {

                        /**
                         * Constructs a new GetActionResultRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IGetActionResultRequest);

                        /** GetActionResultRequest instanceName. */
                        public instanceName: string;

                        /** GetActionResultRequest actionDigest. */
                        public actionDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** GetActionResultRequest inlineStdout. */
                        public inlineStdout: boolean;

                        /** GetActionResultRequest inlineStderr. */
                        public inlineStderr: boolean;

                        /** GetActionResultRequest inlineOutputFiles. */
                        public inlineOutputFiles: string[];

                        /** GetActionResultRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new GetActionResultRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetActionResultRequest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IGetActionResultRequest): build.bazel.remote.execution.v2.GetActionResultRequest;

                        /**
                         * Encodes the specified GetActionResultRequest message. Does not implicitly {@link build.bazel.remote.execution.v2.GetActionResultRequest.verify|verify} messages.
                         * @param message GetActionResultRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IGetActionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetActionResultRequest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.GetActionResultRequest.verify|verify} messages.
                         * @param message GetActionResultRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IGetActionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetActionResultRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetActionResultRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.GetActionResultRequest;

                        /**
                         * Decodes a GetActionResultRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetActionResultRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.GetActionResultRequest;

                        /**
                         * Verifies a GetActionResultRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetActionResultRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetActionResultRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.GetActionResultRequest;

                        /**
                         * Creates a plain object from a GetActionResultRequest message. Also converts values to other types if specified.
                         * @param message GetActionResultRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.GetActionResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetActionResultRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetActionResultRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateActionResultRequest. */
                    interface IUpdateActionResultRequest {

                        /** UpdateActionResultRequest instanceName */
                        instanceName?: (string|null);

                        /** UpdateActionResultRequest actionDigest */
                        actionDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** UpdateActionResultRequest actionResult */
                        actionResult?: (build.bazel.remote.execution.v2.IActionResult|null);

                        /** UpdateActionResultRequest resultsCachePolicy */
                        resultsCachePolicy?: (build.bazel.remote.execution.v2.IResultsCachePolicy|null);

                        /** UpdateActionResultRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents an UpdateActionResultRequest. */
                    class UpdateActionResultRequest implements IUpdateActionResultRequest {

                        /**
                         * Constructs a new UpdateActionResultRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IUpdateActionResultRequest);

                        /** UpdateActionResultRequest instanceName. */
                        public instanceName: string;

                        /** UpdateActionResultRequest actionDigest. */
                        public actionDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** UpdateActionResultRequest actionResult. */
                        public actionResult?: (build.bazel.remote.execution.v2.IActionResult|null);

                        /** UpdateActionResultRequest resultsCachePolicy. */
                        public resultsCachePolicy?: (build.bazel.remote.execution.v2.IResultsCachePolicy|null);

                        /** UpdateActionResultRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new UpdateActionResultRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateActionResultRequest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IUpdateActionResultRequest): build.bazel.remote.execution.v2.UpdateActionResultRequest;

                        /**
                         * Encodes the specified UpdateActionResultRequest message. Does not implicitly {@link build.bazel.remote.execution.v2.UpdateActionResultRequest.verify|verify} messages.
                         * @param message UpdateActionResultRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IUpdateActionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateActionResultRequest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.UpdateActionResultRequest.verify|verify} messages.
                         * @param message UpdateActionResultRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IUpdateActionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateActionResultRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateActionResultRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.UpdateActionResultRequest;

                        /**
                         * Decodes an UpdateActionResultRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateActionResultRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.UpdateActionResultRequest;

                        /**
                         * Verifies an UpdateActionResultRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateActionResultRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateActionResultRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.UpdateActionResultRequest;

                        /**
                         * Creates a plain object from an UpdateActionResultRequest message. Also converts values to other types if specified.
                         * @param message UpdateActionResultRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.UpdateActionResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateActionResultRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateActionResultRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FindMissingBlobsRequest. */
                    interface IFindMissingBlobsRequest {

                        /** FindMissingBlobsRequest instanceName */
                        instanceName?: (string|null);

                        /** FindMissingBlobsRequest blobDigests */
                        blobDigests?: (build.bazel.remote.execution.v2.IDigest[]|null);

                        /** FindMissingBlobsRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a FindMissingBlobsRequest. */
                    class FindMissingBlobsRequest implements IFindMissingBlobsRequest {

                        /**
                         * Constructs a new FindMissingBlobsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IFindMissingBlobsRequest);

                        /** FindMissingBlobsRequest instanceName. */
                        public instanceName: string;

                        /** FindMissingBlobsRequest blobDigests. */
                        public blobDigests: build.bazel.remote.execution.v2.IDigest[];

                        /** FindMissingBlobsRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new FindMissingBlobsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FindMissingBlobsRequest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IFindMissingBlobsRequest): build.bazel.remote.execution.v2.FindMissingBlobsRequest;

                        /**
                         * Encodes the specified FindMissingBlobsRequest message. Does not implicitly {@link build.bazel.remote.execution.v2.FindMissingBlobsRequest.verify|verify} messages.
                         * @param message FindMissingBlobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IFindMissingBlobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FindMissingBlobsRequest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.FindMissingBlobsRequest.verify|verify} messages.
                         * @param message FindMissingBlobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IFindMissingBlobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FindMissingBlobsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FindMissingBlobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.FindMissingBlobsRequest;

                        /**
                         * Decodes a FindMissingBlobsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FindMissingBlobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.FindMissingBlobsRequest;

                        /**
                         * Verifies a FindMissingBlobsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FindMissingBlobsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FindMissingBlobsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.FindMissingBlobsRequest;

                        /**
                         * Creates a plain object from a FindMissingBlobsRequest message. Also converts values to other types if specified.
                         * @param message FindMissingBlobsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.FindMissingBlobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FindMissingBlobsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FindMissingBlobsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FindMissingBlobsResponse. */
                    interface IFindMissingBlobsResponse {

                        /** FindMissingBlobsResponse missingBlobDigests */
                        missingBlobDigests?: (build.bazel.remote.execution.v2.IDigest[]|null);
                    }

                    /** Represents a FindMissingBlobsResponse. */
                    class FindMissingBlobsResponse implements IFindMissingBlobsResponse {

                        /**
                         * Constructs a new FindMissingBlobsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IFindMissingBlobsResponse);

                        /** FindMissingBlobsResponse missingBlobDigests. */
                        public missingBlobDigests: build.bazel.remote.execution.v2.IDigest[];

                        /**
                         * Creates a new FindMissingBlobsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FindMissingBlobsResponse instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IFindMissingBlobsResponse): build.bazel.remote.execution.v2.FindMissingBlobsResponse;

                        /**
                         * Encodes the specified FindMissingBlobsResponse message. Does not implicitly {@link build.bazel.remote.execution.v2.FindMissingBlobsResponse.verify|verify} messages.
                         * @param message FindMissingBlobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IFindMissingBlobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FindMissingBlobsResponse message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.FindMissingBlobsResponse.verify|verify} messages.
                         * @param message FindMissingBlobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IFindMissingBlobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FindMissingBlobsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FindMissingBlobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.FindMissingBlobsResponse;

                        /**
                         * Decodes a FindMissingBlobsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FindMissingBlobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.FindMissingBlobsResponse;

                        /**
                         * Verifies a FindMissingBlobsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FindMissingBlobsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FindMissingBlobsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.FindMissingBlobsResponse;

                        /**
                         * Creates a plain object from a FindMissingBlobsResponse message. Also converts values to other types if specified.
                         * @param message FindMissingBlobsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.FindMissingBlobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FindMissingBlobsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FindMissingBlobsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BatchUpdateBlobsRequest. */
                    interface IBatchUpdateBlobsRequest {

                        /** BatchUpdateBlobsRequest instanceName */
                        instanceName?: (string|null);

                        /** BatchUpdateBlobsRequest requests */
                        requests?: (build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.IRequest[]|null);

                        /** BatchUpdateBlobsRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a BatchUpdateBlobsRequest. */
                    class BatchUpdateBlobsRequest implements IBatchUpdateBlobsRequest {

                        /**
                         * Constructs a new BatchUpdateBlobsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IBatchUpdateBlobsRequest);

                        /** BatchUpdateBlobsRequest instanceName. */
                        public instanceName: string;

                        /** BatchUpdateBlobsRequest requests. */
                        public requests: build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.IRequest[];

                        /** BatchUpdateBlobsRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new BatchUpdateBlobsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchUpdateBlobsRequest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IBatchUpdateBlobsRequest): build.bazel.remote.execution.v2.BatchUpdateBlobsRequest;

                        /**
                         * Encodes the specified BatchUpdateBlobsRequest message. Does not implicitly {@link build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.verify|verify} messages.
                         * @param message BatchUpdateBlobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IBatchUpdateBlobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchUpdateBlobsRequest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.verify|verify} messages.
                         * @param message BatchUpdateBlobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IBatchUpdateBlobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchUpdateBlobsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchUpdateBlobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.BatchUpdateBlobsRequest;

                        /**
                         * Decodes a BatchUpdateBlobsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchUpdateBlobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.BatchUpdateBlobsRequest;

                        /**
                         * Verifies a BatchUpdateBlobsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchUpdateBlobsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchUpdateBlobsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.BatchUpdateBlobsRequest;

                        /**
                         * Creates a plain object from a BatchUpdateBlobsRequest message. Also converts values to other types if specified.
                         * @param message BatchUpdateBlobsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.BatchUpdateBlobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchUpdateBlobsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BatchUpdateBlobsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BatchUpdateBlobsRequest {

                        /** Properties of a Request. */
                        interface IRequest {

                            /** Request digest */
                            digest?: (build.bazel.remote.execution.v2.IDigest|null);

                            /** Request data */
                            data?: (Uint8Array|null);

                            /** Request compressor */
                            compressor?: (build.bazel.remote.execution.v2.Compressor.Value|null);
                        }

                        /** Represents a Request. */
                        class Request implements IRequest {

                            /**
                             * Constructs a new Request.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.IRequest);

                            /** Request digest. */
                            public digest?: (build.bazel.remote.execution.v2.IDigest|null);

                            /** Request data. */
                            public data: Uint8Array;

                            /** Request compressor. */
                            public compressor: build.bazel.remote.execution.v2.Compressor.Value;

                            /**
                             * Creates a new Request instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Request instance
                             */
                            public static create(properties?: build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.IRequest): build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request;

                            /**
                             * Encodes the specified Request message. Does not implicitly {@link build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.verify|verify} messages.
                             * @param message Request message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Request message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.verify|verify} messages.
                             * @param message Request message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Request message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Request
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request;

                            /**
                             * Decodes a Request message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Request
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request;

                            /**
                             * Verifies a Request message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Request message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Request
                             */
                            public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request;

                            /**
                             * Creates a plain object from a Request message. Also converts values to other types if specified.
                             * @param message Request
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Request to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Request
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a BatchUpdateBlobsResponse. */
                    interface IBatchUpdateBlobsResponse {

                        /** BatchUpdateBlobsResponse responses */
                        responses?: (build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.IResponse[]|null);
                    }

                    /** Represents a BatchUpdateBlobsResponse. */
                    class BatchUpdateBlobsResponse implements IBatchUpdateBlobsResponse {

                        /**
                         * Constructs a new BatchUpdateBlobsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IBatchUpdateBlobsResponse);

                        /** BatchUpdateBlobsResponse responses. */
                        public responses: build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.IResponse[];

                        /**
                         * Creates a new BatchUpdateBlobsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchUpdateBlobsResponse instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IBatchUpdateBlobsResponse): build.bazel.remote.execution.v2.BatchUpdateBlobsResponse;

                        /**
                         * Encodes the specified BatchUpdateBlobsResponse message. Does not implicitly {@link build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.verify|verify} messages.
                         * @param message BatchUpdateBlobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IBatchUpdateBlobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchUpdateBlobsResponse message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.verify|verify} messages.
                         * @param message BatchUpdateBlobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IBatchUpdateBlobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchUpdateBlobsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchUpdateBlobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.BatchUpdateBlobsResponse;

                        /**
                         * Decodes a BatchUpdateBlobsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchUpdateBlobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.BatchUpdateBlobsResponse;

                        /**
                         * Verifies a BatchUpdateBlobsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchUpdateBlobsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchUpdateBlobsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.BatchUpdateBlobsResponse;

                        /**
                         * Creates a plain object from a BatchUpdateBlobsResponse message. Also converts values to other types if specified.
                         * @param message BatchUpdateBlobsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.BatchUpdateBlobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchUpdateBlobsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BatchUpdateBlobsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BatchUpdateBlobsResponse {

                        /** Properties of a Response. */
                        interface IResponse {

                            /** Response digest */
                            digest?: (build.bazel.remote.execution.v2.IDigest|null);

                            /** Response status */
                            status?: (google.rpc.IStatus|null);
                        }

                        /** Represents a Response. */
                        class Response implements IResponse {

                            /**
                             * Constructs a new Response.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.IResponse);

                            /** Response digest. */
                            public digest?: (build.bazel.remote.execution.v2.IDigest|null);

                            /** Response status. */
                            public status?: (google.rpc.IStatus|null);

                            /**
                             * Creates a new Response instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Response instance
                             */
                            public static create(properties?: build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.IResponse): build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response;

                            /**
                             * Encodes the specified Response message. Does not implicitly {@link build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.verify|verify} messages.
                             * @param message Response message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Response message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.verify|verify} messages.
                             * @param message Response message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Response message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Response
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response;

                            /**
                             * Decodes a Response message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Response
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response;

                            /**
                             * Verifies a Response message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Response message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Response
                             */
                            public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response;

                            /**
                             * Creates a plain object from a Response message. Also converts values to other types if specified.
                             * @param message Response
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Response to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Response
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a BatchReadBlobsRequest. */
                    interface IBatchReadBlobsRequest {

                        /** BatchReadBlobsRequest instanceName */
                        instanceName?: (string|null);

                        /** BatchReadBlobsRequest digests */
                        digests?: (build.bazel.remote.execution.v2.IDigest[]|null);

                        /** BatchReadBlobsRequest acceptableCompressors */
                        acceptableCompressors?: (build.bazel.remote.execution.v2.Compressor.Value[]|null);

                        /** BatchReadBlobsRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a BatchReadBlobsRequest. */
                    class BatchReadBlobsRequest implements IBatchReadBlobsRequest {

                        /**
                         * Constructs a new BatchReadBlobsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IBatchReadBlobsRequest);

                        /** BatchReadBlobsRequest instanceName. */
                        public instanceName: string;

                        /** BatchReadBlobsRequest digests. */
                        public digests: build.bazel.remote.execution.v2.IDigest[];

                        /** BatchReadBlobsRequest acceptableCompressors. */
                        public acceptableCompressors: build.bazel.remote.execution.v2.Compressor.Value[];

                        /** BatchReadBlobsRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new BatchReadBlobsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchReadBlobsRequest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IBatchReadBlobsRequest): build.bazel.remote.execution.v2.BatchReadBlobsRequest;

                        /**
                         * Encodes the specified BatchReadBlobsRequest message. Does not implicitly {@link build.bazel.remote.execution.v2.BatchReadBlobsRequest.verify|verify} messages.
                         * @param message BatchReadBlobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IBatchReadBlobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchReadBlobsRequest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.BatchReadBlobsRequest.verify|verify} messages.
                         * @param message BatchReadBlobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IBatchReadBlobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchReadBlobsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchReadBlobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.BatchReadBlobsRequest;

                        /**
                         * Decodes a BatchReadBlobsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchReadBlobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.BatchReadBlobsRequest;

                        /**
                         * Verifies a BatchReadBlobsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchReadBlobsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchReadBlobsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.BatchReadBlobsRequest;

                        /**
                         * Creates a plain object from a BatchReadBlobsRequest message. Also converts values to other types if specified.
                         * @param message BatchReadBlobsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.BatchReadBlobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchReadBlobsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BatchReadBlobsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BatchReadBlobsResponse. */
                    interface IBatchReadBlobsResponse {

                        /** BatchReadBlobsResponse responses */
                        responses?: (build.bazel.remote.execution.v2.BatchReadBlobsResponse.IResponse[]|null);
                    }

                    /** Represents a BatchReadBlobsResponse. */
                    class BatchReadBlobsResponse implements IBatchReadBlobsResponse {

                        /**
                         * Constructs a new BatchReadBlobsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IBatchReadBlobsResponse);

                        /** BatchReadBlobsResponse responses. */
                        public responses: build.bazel.remote.execution.v2.BatchReadBlobsResponse.IResponse[];

                        /**
                         * Creates a new BatchReadBlobsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchReadBlobsResponse instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IBatchReadBlobsResponse): build.bazel.remote.execution.v2.BatchReadBlobsResponse;

                        /**
                         * Encodes the specified BatchReadBlobsResponse message. Does not implicitly {@link build.bazel.remote.execution.v2.BatchReadBlobsResponse.verify|verify} messages.
                         * @param message BatchReadBlobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IBatchReadBlobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchReadBlobsResponse message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.BatchReadBlobsResponse.verify|verify} messages.
                         * @param message BatchReadBlobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IBatchReadBlobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchReadBlobsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchReadBlobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.BatchReadBlobsResponse;

                        /**
                         * Decodes a BatchReadBlobsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchReadBlobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.BatchReadBlobsResponse;

                        /**
                         * Verifies a BatchReadBlobsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchReadBlobsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchReadBlobsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.BatchReadBlobsResponse;

                        /**
                         * Creates a plain object from a BatchReadBlobsResponse message. Also converts values to other types if specified.
                         * @param message BatchReadBlobsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.BatchReadBlobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchReadBlobsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BatchReadBlobsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BatchReadBlobsResponse {

                        /** Properties of a Response. */
                        interface IResponse {

                            /** Response digest */
                            digest?: (build.bazel.remote.execution.v2.IDigest|null);

                            /** Response data */
                            data?: (Uint8Array|null);

                            /** Response compressor */
                            compressor?: (build.bazel.remote.execution.v2.Compressor.Value|null);

                            /** Response status */
                            status?: (google.rpc.IStatus|null);
                        }

                        /** Represents a Response. */
                        class Response implements IResponse {

                            /**
                             * Constructs a new Response.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: build.bazel.remote.execution.v2.BatchReadBlobsResponse.IResponse);

                            /** Response digest. */
                            public digest?: (build.bazel.remote.execution.v2.IDigest|null);

                            /** Response data. */
                            public data: Uint8Array;

                            /** Response compressor. */
                            public compressor: build.bazel.remote.execution.v2.Compressor.Value;

                            /** Response status. */
                            public status?: (google.rpc.IStatus|null);

                            /**
                             * Creates a new Response instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Response instance
                             */
                            public static create(properties?: build.bazel.remote.execution.v2.BatchReadBlobsResponse.IResponse): build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response;

                            /**
                             * Encodes the specified Response message. Does not implicitly {@link build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.verify|verify} messages.
                             * @param message Response message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: build.bazel.remote.execution.v2.BatchReadBlobsResponse.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Response message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.verify|verify} messages.
                             * @param message Response message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: build.bazel.remote.execution.v2.BatchReadBlobsResponse.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Response message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Response
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response;

                            /**
                             * Decodes a Response message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Response
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response;

                            /**
                             * Verifies a Response message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Response message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Response
                             */
                            public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response;

                            /**
                             * Creates a plain object from a Response message. Also converts values to other types if specified.
                             * @param message Response
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Response to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Response
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a GetTreeRequest. */
                    interface IGetTreeRequest {

                        /** GetTreeRequest instanceName */
                        instanceName?: (string|null);

                        /** GetTreeRequest rootDigest */
                        rootDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** GetTreeRequest pageSize */
                        pageSize?: (number|null);

                        /** GetTreeRequest pageToken */
                        pageToken?: (string|null);

                        /** GetTreeRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a GetTreeRequest. */
                    class GetTreeRequest implements IGetTreeRequest {

                        /**
                         * Constructs a new GetTreeRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IGetTreeRequest);

                        /** GetTreeRequest instanceName. */
                        public instanceName: string;

                        /** GetTreeRequest rootDigest. */
                        public rootDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** GetTreeRequest pageSize. */
                        public pageSize: number;

                        /** GetTreeRequest pageToken. */
                        public pageToken: string;

                        /** GetTreeRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new GetTreeRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetTreeRequest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IGetTreeRequest): build.bazel.remote.execution.v2.GetTreeRequest;

                        /**
                         * Encodes the specified GetTreeRequest message. Does not implicitly {@link build.bazel.remote.execution.v2.GetTreeRequest.verify|verify} messages.
                         * @param message GetTreeRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IGetTreeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetTreeRequest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.GetTreeRequest.verify|verify} messages.
                         * @param message GetTreeRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IGetTreeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetTreeRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetTreeRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.GetTreeRequest;

                        /**
                         * Decodes a GetTreeRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetTreeRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.GetTreeRequest;

                        /**
                         * Verifies a GetTreeRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetTreeRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetTreeRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.GetTreeRequest;

                        /**
                         * Creates a plain object from a GetTreeRequest message. Also converts values to other types if specified.
                         * @param message GetTreeRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.GetTreeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetTreeRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetTreeRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetTreeResponse. */
                    interface IGetTreeResponse {

                        /** GetTreeResponse directories */
                        directories?: (build.bazel.remote.execution.v2.IDirectory[]|null);

                        /** GetTreeResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a GetTreeResponse. */
                    class GetTreeResponse implements IGetTreeResponse {

                        /**
                         * Constructs a new GetTreeResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IGetTreeResponse);

                        /** GetTreeResponse directories. */
                        public directories: build.bazel.remote.execution.v2.IDirectory[];

                        /** GetTreeResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new GetTreeResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetTreeResponse instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IGetTreeResponse): build.bazel.remote.execution.v2.GetTreeResponse;

                        /**
                         * Encodes the specified GetTreeResponse message. Does not implicitly {@link build.bazel.remote.execution.v2.GetTreeResponse.verify|verify} messages.
                         * @param message GetTreeResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IGetTreeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetTreeResponse message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.GetTreeResponse.verify|verify} messages.
                         * @param message GetTreeResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IGetTreeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetTreeResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetTreeResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.GetTreeResponse;

                        /**
                         * Decodes a GetTreeResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetTreeResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.GetTreeResponse;

                        /**
                         * Verifies a GetTreeResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetTreeResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetTreeResponse
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.GetTreeResponse;

                        /**
                         * Creates a plain object from a GetTreeResponse message. Also converts values to other types if specified.
                         * @param message GetTreeResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.GetTreeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetTreeResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetTreeResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetCapabilitiesRequest. */
                    interface IGetCapabilitiesRequest {

                        /** GetCapabilitiesRequest instanceName */
                        instanceName?: (string|null);
                    }

                    /** Represents a GetCapabilitiesRequest. */
                    class GetCapabilitiesRequest implements IGetCapabilitiesRequest {

                        /**
                         * Constructs a new GetCapabilitiesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IGetCapabilitiesRequest);

                        /** GetCapabilitiesRequest instanceName. */
                        public instanceName: string;

                        /**
                         * Creates a new GetCapabilitiesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetCapabilitiesRequest instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IGetCapabilitiesRequest): build.bazel.remote.execution.v2.GetCapabilitiesRequest;

                        /**
                         * Encodes the specified GetCapabilitiesRequest message. Does not implicitly {@link build.bazel.remote.execution.v2.GetCapabilitiesRequest.verify|verify} messages.
                         * @param message GetCapabilitiesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IGetCapabilitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetCapabilitiesRequest message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.GetCapabilitiesRequest.verify|verify} messages.
                         * @param message GetCapabilitiesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IGetCapabilitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetCapabilitiesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetCapabilitiesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.GetCapabilitiesRequest;

                        /**
                         * Decodes a GetCapabilitiesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetCapabilitiesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.GetCapabilitiesRequest;

                        /**
                         * Verifies a GetCapabilitiesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetCapabilitiesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetCapabilitiesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.GetCapabilitiesRequest;

                        /**
                         * Creates a plain object from a GetCapabilitiesRequest message. Also converts values to other types if specified.
                         * @param message GetCapabilitiesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.GetCapabilitiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetCapabilitiesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetCapabilitiesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ServerCapabilities. */
                    interface IServerCapabilities {

                        /** ServerCapabilities cacheCapabilities */
                        cacheCapabilities?: (build.bazel.remote.execution.v2.ICacheCapabilities|null);

                        /** ServerCapabilities executionCapabilities */
                        executionCapabilities?: (build.bazel.remote.execution.v2.IExecutionCapabilities|null);

                        /** ServerCapabilities deprecatedApiVersion */
                        deprecatedApiVersion?: (build.bazel.semver.ISemVer|null);

                        /** ServerCapabilities lowApiVersion */
                        lowApiVersion?: (build.bazel.semver.ISemVer|null);

                        /** ServerCapabilities highApiVersion */
                        highApiVersion?: (build.bazel.semver.ISemVer|null);
                    }

                    /** Represents a ServerCapabilities. */
                    class ServerCapabilities implements IServerCapabilities {

                        /**
                         * Constructs a new ServerCapabilities.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IServerCapabilities);

                        /** ServerCapabilities cacheCapabilities. */
                        public cacheCapabilities?: (build.bazel.remote.execution.v2.ICacheCapabilities|null);

                        /** ServerCapabilities executionCapabilities. */
                        public executionCapabilities?: (build.bazel.remote.execution.v2.IExecutionCapabilities|null);

                        /** ServerCapabilities deprecatedApiVersion. */
                        public deprecatedApiVersion?: (build.bazel.semver.ISemVer|null);

                        /** ServerCapabilities lowApiVersion. */
                        public lowApiVersion?: (build.bazel.semver.ISemVer|null);

                        /** ServerCapabilities highApiVersion. */
                        public highApiVersion?: (build.bazel.semver.ISemVer|null);

                        /**
                         * Creates a new ServerCapabilities instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ServerCapabilities instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IServerCapabilities): build.bazel.remote.execution.v2.ServerCapabilities;

                        /**
                         * Encodes the specified ServerCapabilities message. Does not implicitly {@link build.bazel.remote.execution.v2.ServerCapabilities.verify|verify} messages.
                         * @param message ServerCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IServerCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ServerCapabilities message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ServerCapabilities.verify|verify} messages.
                         * @param message ServerCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IServerCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ServerCapabilities message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ServerCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ServerCapabilities;

                        /**
                         * Decodes a ServerCapabilities message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ServerCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ServerCapabilities;

                        /**
                         * Verifies a ServerCapabilities message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ServerCapabilities message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ServerCapabilities
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ServerCapabilities;

                        /**
                         * Creates a plain object from a ServerCapabilities message. Also converts values to other types if specified.
                         * @param message ServerCapabilities
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ServerCapabilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ServerCapabilities to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ServerCapabilities
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DigestFunction. */
                    interface IDigestFunction {
                    }

                    /** Represents a DigestFunction. */
                    class DigestFunction implements IDigestFunction {

                        /**
                         * Constructs a new DigestFunction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IDigestFunction);

                        /**
                         * Creates a new DigestFunction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DigestFunction instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IDigestFunction): build.bazel.remote.execution.v2.DigestFunction;

                        /**
                         * Encodes the specified DigestFunction message. Does not implicitly {@link build.bazel.remote.execution.v2.DigestFunction.verify|verify} messages.
                         * @param message DigestFunction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IDigestFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DigestFunction message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.DigestFunction.verify|verify} messages.
                         * @param message DigestFunction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IDigestFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DigestFunction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DigestFunction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.DigestFunction;

                        /**
                         * Decodes a DigestFunction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DigestFunction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.DigestFunction;

                        /**
                         * Verifies a DigestFunction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DigestFunction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DigestFunction
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.DigestFunction;

                        /**
                         * Creates a plain object from a DigestFunction message. Also converts values to other types if specified.
                         * @param message DigestFunction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.DigestFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DigestFunction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DigestFunction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace DigestFunction {

                        /** Value enum. */
                        enum Value {
                            UNKNOWN = 0,
                            SHA256 = 1,
                            SHA1 = 2,
                            MD5 = 3,
                            VSO = 4,
                            SHA384 = 5,
                            SHA512 = 6,
                            MURMUR3 = 7,
                            SHA256TREE = 8,
                            BLAKE3 = 9
                        }
                    }

                    /** Properties of an ActionCacheUpdateCapabilities. */
                    interface IActionCacheUpdateCapabilities {

                        /** ActionCacheUpdateCapabilities updateEnabled */
                        updateEnabled?: (boolean|null);
                    }

                    /** Represents an ActionCacheUpdateCapabilities. */
                    class ActionCacheUpdateCapabilities implements IActionCacheUpdateCapabilities {

                        /**
                         * Constructs a new ActionCacheUpdateCapabilities.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IActionCacheUpdateCapabilities);

                        /** ActionCacheUpdateCapabilities updateEnabled. */
                        public updateEnabled: boolean;

                        /**
                         * Creates a new ActionCacheUpdateCapabilities instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionCacheUpdateCapabilities instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IActionCacheUpdateCapabilities): build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities;

                        /**
                         * Encodes the specified ActionCacheUpdateCapabilities message. Does not implicitly {@link build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.verify|verify} messages.
                         * @param message ActionCacheUpdateCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IActionCacheUpdateCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionCacheUpdateCapabilities message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.verify|verify} messages.
                         * @param message ActionCacheUpdateCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IActionCacheUpdateCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionCacheUpdateCapabilities message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionCacheUpdateCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities;

                        /**
                         * Decodes an ActionCacheUpdateCapabilities message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionCacheUpdateCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities;

                        /**
                         * Verifies an ActionCacheUpdateCapabilities message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionCacheUpdateCapabilities message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionCacheUpdateCapabilities
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities;

                        /**
                         * Creates a plain object from an ActionCacheUpdateCapabilities message. Also converts values to other types if specified.
                         * @param message ActionCacheUpdateCapabilities
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionCacheUpdateCapabilities to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionCacheUpdateCapabilities
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PriorityCapabilities. */
                    interface IPriorityCapabilities {

                        /** PriorityCapabilities priorities */
                        priorities?: (build.bazel.remote.execution.v2.PriorityCapabilities.IPriorityRange[]|null);
                    }

                    /** Represents a PriorityCapabilities. */
                    class PriorityCapabilities implements IPriorityCapabilities {

                        /**
                         * Constructs a new PriorityCapabilities.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IPriorityCapabilities);

                        /** PriorityCapabilities priorities. */
                        public priorities: build.bazel.remote.execution.v2.PriorityCapabilities.IPriorityRange[];

                        /**
                         * Creates a new PriorityCapabilities instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriorityCapabilities instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IPriorityCapabilities): build.bazel.remote.execution.v2.PriorityCapabilities;

                        /**
                         * Encodes the specified PriorityCapabilities message. Does not implicitly {@link build.bazel.remote.execution.v2.PriorityCapabilities.verify|verify} messages.
                         * @param message PriorityCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IPriorityCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriorityCapabilities message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.PriorityCapabilities.verify|verify} messages.
                         * @param message PriorityCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IPriorityCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriorityCapabilities message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriorityCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.PriorityCapabilities;

                        /**
                         * Decodes a PriorityCapabilities message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriorityCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.PriorityCapabilities;

                        /**
                         * Verifies a PriorityCapabilities message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriorityCapabilities message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriorityCapabilities
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.PriorityCapabilities;

                        /**
                         * Creates a plain object from a PriorityCapabilities message. Also converts values to other types if specified.
                         * @param message PriorityCapabilities
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.PriorityCapabilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriorityCapabilities to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PriorityCapabilities
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PriorityCapabilities {

                        /** Properties of a PriorityRange. */
                        interface IPriorityRange {

                            /** PriorityRange minPriority */
                            minPriority?: (number|null);

                            /** PriorityRange maxPriority */
                            maxPriority?: (number|null);
                        }

                        /** Represents a PriorityRange. */
                        class PriorityRange implements IPriorityRange {

                            /**
                             * Constructs a new PriorityRange.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: build.bazel.remote.execution.v2.PriorityCapabilities.IPriorityRange);

                            /** PriorityRange minPriority. */
                            public minPriority: number;

                            /** PriorityRange maxPriority. */
                            public maxPriority: number;

                            /**
                             * Creates a new PriorityRange instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PriorityRange instance
                             */
                            public static create(properties?: build.bazel.remote.execution.v2.PriorityCapabilities.IPriorityRange): build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange;

                            /**
                             * Encodes the specified PriorityRange message. Does not implicitly {@link build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.verify|verify} messages.
                             * @param message PriorityRange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: build.bazel.remote.execution.v2.PriorityCapabilities.IPriorityRange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PriorityRange message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.verify|verify} messages.
                             * @param message PriorityRange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: build.bazel.remote.execution.v2.PriorityCapabilities.IPriorityRange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PriorityRange message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PriorityRange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange;

                            /**
                             * Decodes a PriorityRange message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PriorityRange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange;

                            /**
                             * Verifies a PriorityRange message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PriorityRange message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PriorityRange
                             */
                            public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange;

                            /**
                             * Creates a plain object from a PriorityRange message. Also converts values to other types if specified.
                             * @param message PriorityRange
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PriorityRange to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for PriorityRange
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a SymlinkAbsolutePathStrategy. */
                    interface ISymlinkAbsolutePathStrategy {
                    }

                    /** Represents a SymlinkAbsolutePathStrategy. */
                    class SymlinkAbsolutePathStrategy implements ISymlinkAbsolutePathStrategy {

                        /**
                         * Constructs a new SymlinkAbsolutePathStrategy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.ISymlinkAbsolutePathStrategy);

                        /**
                         * Creates a new SymlinkAbsolutePathStrategy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SymlinkAbsolutePathStrategy instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.ISymlinkAbsolutePathStrategy): build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy;

                        /**
                         * Encodes the specified SymlinkAbsolutePathStrategy message. Does not implicitly {@link build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.verify|verify} messages.
                         * @param message SymlinkAbsolutePathStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.ISymlinkAbsolutePathStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SymlinkAbsolutePathStrategy message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.verify|verify} messages.
                         * @param message SymlinkAbsolutePathStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.ISymlinkAbsolutePathStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SymlinkAbsolutePathStrategy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SymlinkAbsolutePathStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy;

                        /**
                         * Decodes a SymlinkAbsolutePathStrategy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SymlinkAbsolutePathStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy;

                        /**
                         * Verifies a SymlinkAbsolutePathStrategy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SymlinkAbsolutePathStrategy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SymlinkAbsolutePathStrategy
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy;

                        /**
                         * Creates a plain object from a SymlinkAbsolutePathStrategy message. Also converts values to other types if specified.
                         * @param message SymlinkAbsolutePathStrategy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SymlinkAbsolutePathStrategy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SymlinkAbsolutePathStrategy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SymlinkAbsolutePathStrategy {

                        /** Value enum. */
                        enum Value {
                            UNKNOWN = 0,
                            DISALLOWED = 1,
                            ALLOWED = 2
                        }
                    }

                    /** Properties of a Compressor. */
                    interface ICompressor {
                    }

                    /** Represents a Compressor. */
                    class Compressor implements ICompressor {

                        /**
                         * Constructs a new Compressor.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.ICompressor);

                        /**
                         * Creates a new Compressor instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Compressor instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.ICompressor): build.bazel.remote.execution.v2.Compressor;

                        /**
                         * Encodes the specified Compressor message. Does not implicitly {@link build.bazel.remote.execution.v2.Compressor.verify|verify} messages.
                         * @param message Compressor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.ICompressor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Compressor message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.Compressor.verify|verify} messages.
                         * @param message Compressor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.ICompressor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Compressor message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Compressor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.Compressor;

                        /**
                         * Decodes a Compressor message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Compressor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.Compressor;

                        /**
                         * Verifies a Compressor message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Compressor message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Compressor
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.Compressor;

                        /**
                         * Creates a plain object from a Compressor message. Also converts values to other types if specified.
                         * @param message Compressor
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.Compressor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Compressor to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Compressor
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Compressor {

                        /** Value enum. */
                        enum Value {
                            IDENTITY = 0,
                            ZSTD = 1,
                            DEFLATE = 2,
                            BROTLI = 3
                        }
                    }

                    /** Properties of a CacheCapabilities. */
                    interface ICacheCapabilities {

                        /** CacheCapabilities digestFunctions */
                        digestFunctions?: (build.bazel.remote.execution.v2.DigestFunction.Value[]|null);

                        /** CacheCapabilities actionCacheUpdateCapabilities */
                        actionCacheUpdateCapabilities?: (build.bazel.remote.execution.v2.IActionCacheUpdateCapabilities|null);

                        /** CacheCapabilities cachePriorityCapabilities */
                        cachePriorityCapabilities?: (build.bazel.remote.execution.v2.IPriorityCapabilities|null);

                        /** CacheCapabilities maxBatchTotalSizeBytes */
                        maxBatchTotalSizeBytes?: (number|Long|null);

                        /** CacheCapabilities symlinkAbsolutePathStrategy */
                        symlinkAbsolutePathStrategy?: (build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.Value|null);

                        /** CacheCapabilities supportedCompressors */
                        supportedCompressors?: (build.bazel.remote.execution.v2.Compressor.Value[]|null);

                        /** CacheCapabilities supportedBatchUpdateCompressors */
                        supportedBatchUpdateCompressors?: (build.bazel.remote.execution.v2.Compressor.Value[]|null);
                    }

                    /** Represents a CacheCapabilities. */
                    class CacheCapabilities implements ICacheCapabilities {

                        /**
                         * Constructs a new CacheCapabilities.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.ICacheCapabilities);

                        /** CacheCapabilities digestFunctions. */
                        public digestFunctions: build.bazel.remote.execution.v2.DigestFunction.Value[];

                        /** CacheCapabilities actionCacheUpdateCapabilities. */
                        public actionCacheUpdateCapabilities?: (build.bazel.remote.execution.v2.IActionCacheUpdateCapabilities|null);

                        /** CacheCapabilities cachePriorityCapabilities. */
                        public cachePriorityCapabilities?: (build.bazel.remote.execution.v2.IPriorityCapabilities|null);

                        /** CacheCapabilities maxBatchTotalSizeBytes. */
                        public maxBatchTotalSizeBytes: (number|Long);

                        /** CacheCapabilities symlinkAbsolutePathStrategy. */
                        public symlinkAbsolutePathStrategy: build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.Value;

                        /** CacheCapabilities supportedCompressors. */
                        public supportedCompressors: build.bazel.remote.execution.v2.Compressor.Value[];

                        /** CacheCapabilities supportedBatchUpdateCompressors. */
                        public supportedBatchUpdateCompressors: build.bazel.remote.execution.v2.Compressor.Value[];

                        /**
                         * Creates a new CacheCapabilities instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CacheCapabilities instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.ICacheCapabilities): build.bazel.remote.execution.v2.CacheCapabilities;

                        /**
                         * Encodes the specified CacheCapabilities message. Does not implicitly {@link build.bazel.remote.execution.v2.CacheCapabilities.verify|verify} messages.
                         * @param message CacheCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.ICacheCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CacheCapabilities message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.CacheCapabilities.verify|verify} messages.
                         * @param message CacheCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.ICacheCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CacheCapabilities message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CacheCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.CacheCapabilities;

                        /**
                         * Decodes a CacheCapabilities message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CacheCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.CacheCapabilities;

                        /**
                         * Verifies a CacheCapabilities message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CacheCapabilities message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CacheCapabilities
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.CacheCapabilities;

                        /**
                         * Creates a plain object from a CacheCapabilities message. Also converts values to other types if specified.
                         * @param message CacheCapabilities
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.CacheCapabilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CacheCapabilities to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CacheCapabilities
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExecutionCapabilities. */
                    interface IExecutionCapabilities {

                        /** ExecutionCapabilities digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);

                        /** ExecutionCapabilities execEnabled */
                        execEnabled?: (boolean|null);

                        /** ExecutionCapabilities executionPriorityCapabilities */
                        executionPriorityCapabilities?: (build.bazel.remote.execution.v2.IPriorityCapabilities|null);

                        /** ExecutionCapabilities supportedNodeProperties */
                        supportedNodeProperties?: (string[]|null);

                        /** ExecutionCapabilities digestFunctions */
                        digestFunctions?: (build.bazel.remote.execution.v2.DigestFunction.Value[]|null);
                    }

                    /** Represents an ExecutionCapabilities. */
                    class ExecutionCapabilities implements IExecutionCapabilities {

                        /**
                         * Constructs a new ExecutionCapabilities.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IExecutionCapabilities);

                        /** ExecutionCapabilities digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /** ExecutionCapabilities execEnabled. */
                        public execEnabled: boolean;

                        /** ExecutionCapabilities executionPriorityCapabilities. */
                        public executionPriorityCapabilities?: (build.bazel.remote.execution.v2.IPriorityCapabilities|null);

                        /** ExecutionCapabilities supportedNodeProperties. */
                        public supportedNodeProperties: string[];

                        /** ExecutionCapabilities digestFunctions. */
                        public digestFunctions: build.bazel.remote.execution.v2.DigestFunction.Value[];

                        /**
                         * Creates a new ExecutionCapabilities instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExecutionCapabilities instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IExecutionCapabilities): build.bazel.remote.execution.v2.ExecutionCapabilities;

                        /**
                         * Encodes the specified ExecutionCapabilities message. Does not implicitly {@link build.bazel.remote.execution.v2.ExecutionCapabilities.verify|verify} messages.
                         * @param message ExecutionCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IExecutionCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExecutionCapabilities message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ExecutionCapabilities.verify|verify} messages.
                         * @param message ExecutionCapabilities message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IExecutionCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExecutionCapabilities message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExecutionCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ExecutionCapabilities;

                        /**
                         * Decodes an ExecutionCapabilities message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExecutionCapabilities
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ExecutionCapabilities;

                        /**
                         * Verifies an ExecutionCapabilities message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExecutionCapabilities message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExecutionCapabilities
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ExecutionCapabilities;

                        /**
                         * Creates a plain object from an ExecutionCapabilities message. Also converts values to other types if specified.
                         * @param message ExecutionCapabilities
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ExecutionCapabilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExecutionCapabilities to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExecutionCapabilities
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ToolDetails. */
                    interface IToolDetails {

                        /** ToolDetails toolName */
                        toolName?: (string|null);

                        /** ToolDetails toolVersion */
                        toolVersion?: (string|null);
                    }

                    /** Represents a ToolDetails. */
                    class ToolDetails implements IToolDetails {

                        /**
                         * Constructs a new ToolDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IToolDetails);

                        /** ToolDetails toolName. */
                        public toolName: string;

                        /** ToolDetails toolVersion. */
                        public toolVersion: string;

                        /**
                         * Creates a new ToolDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ToolDetails instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IToolDetails): build.bazel.remote.execution.v2.ToolDetails;

                        /**
                         * Encodes the specified ToolDetails message. Does not implicitly {@link build.bazel.remote.execution.v2.ToolDetails.verify|verify} messages.
                         * @param message ToolDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IToolDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ToolDetails message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.ToolDetails.verify|verify} messages.
                         * @param message ToolDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IToolDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ToolDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ToolDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.ToolDetails;

                        /**
                         * Decodes a ToolDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ToolDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.ToolDetails;

                        /**
                         * Verifies a ToolDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ToolDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ToolDetails
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.ToolDetails;

                        /**
                         * Creates a plain object from a ToolDetails message. Also converts values to other types if specified.
                         * @param message ToolDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.ToolDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ToolDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ToolDetails
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RequestMetadata. */
                    interface IRequestMetadata {

                        /** RequestMetadata toolDetails */
                        toolDetails?: (build.bazel.remote.execution.v2.IToolDetails|null);

                        /** RequestMetadata actionId */
                        actionId?: (string|null);

                        /** RequestMetadata toolInvocationId */
                        toolInvocationId?: (string|null);

                        /** RequestMetadata correlatedInvocationsId */
                        correlatedInvocationsId?: (string|null);

                        /** RequestMetadata actionMnemonic */
                        actionMnemonic?: (string|null);

                        /** RequestMetadata targetId */
                        targetId?: (string|null);

                        /** RequestMetadata configurationId */
                        configurationId?: (string|null);
                    }

                    /** Represents a RequestMetadata. */
                    class RequestMetadata implements IRequestMetadata {

                        /**
                         * Constructs a new RequestMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.execution.v2.IRequestMetadata);

                        /** RequestMetadata toolDetails. */
                        public toolDetails?: (build.bazel.remote.execution.v2.IToolDetails|null);

                        /** RequestMetadata actionId. */
                        public actionId: string;

                        /** RequestMetadata toolInvocationId. */
                        public toolInvocationId: string;

                        /** RequestMetadata correlatedInvocationsId. */
                        public correlatedInvocationsId: string;

                        /** RequestMetadata actionMnemonic. */
                        public actionMnemonic: string;

                        /** RequestMetadata targetId. */
                        public targetId: string;

                        /** RequestMetadata configurationId. */
                        public configurationId: string;

                        /**
                         * Creates a new RequestMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RequestMetadata instance
                         */
                        public static create(properties?: build.bazel.remote.execution.v2.IRequestMetadata): build.bazel.remote.execution.v2.RequestMetadata;

                        /**
                         * Encodes the specified RequestMetadata message. Does not implicitly {@link build.bazel.remote.execution.v2.RequestMetadata.verify|verify} messages.
                         * @param message RequestMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.execution.v2.IRequestMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RequestMetadata message, length delimited. Does not implicitly {@link build.bazel.remote.execution.v2.RequestMetadata.verify|verify} messages.
                         * @param message RequestMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.execution.v2.IRequestMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RequestMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RequestMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.execution.v2.RequestMetadata;

                        /**
                         * Decodes a RequestMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RequestMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.execution.v2.RequestMetadata;

                        /**
                         * Verifies a RequestMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RequestMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RequestMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.execution.v2.RequestMetadata;

                        /**
                         * Creates a plain object from a RequestMetadata message. Also converts values to other types if specified.
                         * @param message RequestMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.execution.v2.RequestMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RequestMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RequestMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace asset. */
            namespace asset {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a Qualifier. */
                    interface IQualifier {

                        /** Qualifier name */
                        name?: (string|null);

                        /** Qualifier value */
                        value?: (string|null);
                    }

                    /** Represents a Qualifier. */
                    class Qualifier implements IQualifier {

                        /**
                         * Constructs a new Qualifier.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.asset.v1.IQualifier);

                        /** Qualifier name. */
                        public name: string;

                        /** Qualifier value. */
                        public value: string;

                        /**
                         * Creates a new Qualifier instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Qualifier instance
                         */
                        public static create(properties?: build.bazel.remote.asset.v1.IQualifier): build.bazel.remote.asset.v1.Qualifier;

                        /**
                         * Encodes the specified Qualifier message. Does not implicitly {@link build.bazel.remote.asset.v1.Qualifier.verify|verify} messages.
                         * @param message Qualifier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.asset.v1.IQualifier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Qualifier message, length delimited. Does not implicitly {@link build.bazel.remote.asset.v1.Qualifier.verify|verify} messages.
                         * @param message Qualifier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.asset.v1.IQualifier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Qualifier message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Qualifier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.asset.v1.Qualifier;

                        /**
                         * Decodes a Qualifier message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Qualifier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.asset.v1.Qualifier;

                        /**
                         * Verifies a Qualifier message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Qualifier message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Qualifier
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.asset.v1.Qualifier;

                        /**
                         * Creates a plain object from a Qualifier message. Also converts values to other types if specified.
                         * @param message Qualifier
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.asset.v1.Qualifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Qualifier to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Qualifier
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Represents a Fetch */
                    class Fetch extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new Fetch service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new Fetch service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Fetch;

                        /**
                         * Calls FetchBlob.
                         * @param request FetchBlobRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and FetchBlobResponse
                         */
                        public fetchBlob(request: build.bazel.remote.asset.v1.IFetchBlobRequest, callback: build.bazel.remote.asset.v1.Fetch.FetchBlobCallback): void;

                        /**
                         * Calls FetchBlob.
                         * @param request FetchBlobRequest message or plain object
                         * @returns Promise
                         */
                        public fetchBlob(request: build.bazel.remote.asset.v1.IFetchBlobRequest): Promise<build.bazel.remote.asset.v1.FetchBlobResponse>;

                        /**
                         * Calls FetchDirectory.
                         * @param request FetchDirectoryRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and FetchDirectoryResponse
                         */
                        public fetchDirectory(request: build.bazel.remote.asset.v1.IFetchDirectoryRequest, callback: build.bazel.remote.asset.v1.Fetch.FetchDirectoryCallback): void;

                        /**
                         * Calls FetchDirectory.
                         * @param request FetchDirectoryRequest message or plain object
                         * @returns Promise
                         */
                        public fetchDirectory(request: build.bazel.remote.asset.v1.IFetchDirectoryRequest): Promise<build.bazel.remote.asset.v1.FetchDirectoryResponse>;
                    }

                    namespace Fetch {

                        /**
                         * Callback as used by {@link build.bazel.remote.asset.v1.Fetch#fetchBlob}.
                         * @param error Error, if any
                         * @param [response] FetchBlobResponse
                         */
                        type FetchBlobCallback = (error: (Error|null), response?: build.bazel.remote.asset.v1.FetchBlobResponse) => void;

                        /**
                         * Callback as used by {@link build.bazel.remote.asset.v1.Fetch#fetchDirectory}.
                         * @param error Error, if any
                         * @param [response] FetchDirectoryResponse
                         */
                        type FetchDirectoryCallback = (error: (Error|null), response?: build.bazel.remote.asset.v1.FetchDirectoryResponse) => void;
                    }

                    /** Properties of a FetchBlobRequest. */
                    interface IFetchBlobRequest {

                        /** FetchBlobRequest instanceName */
                        instanceName?: (string|null);

                        /** FetchBlobRequest timeout */
                        timeout?: (google.protobuf.IDuration|null);

                        /** FetchBlobRequest oldestContentAccepted */
                        oldestContentAccepted?: (google.protobuf.ITimestamp|null);

                        /** FetchBlobRequest uris */
                        uris?: (string[]|null);

                        /** FetchBlobRequest qualifiers */
                        qualifiers?: (build.bazel.remote.asset.v1.IQualifier[]|null);

                        /** FetchBlobRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a FetchBlobRequest. */
                    class FetchBlobRequest implements IFetchBlobRequest {

                        /**
                         * Constructs a new FetchBlobRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.asset.v1.IFetchBlobRequest);

                        /** FetchBlobRequest instanceName. */
                        public instanceName: string;

                        /** FetchBlobRequest timeout. */
                        public timeout?: (google.protobuf.IDuration|null);

                        /** FetchBlobRequest oldestContentAccepted. */
                        public oldestContentAccepted?: (google.protobuf.ITimestamp|null);

                        /** FetchBlobRequest uris. */
                        public uris: string[];

                        /** FetchBlobRequest qualifiers. */
                        public qualifiers: build.bazel.remote.asset.v1.IQualifier[];

                        /** FetchBlobRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new FetchBlobRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FetchBlobRequest instance
                         */
                        public static create(properties?: build.bazel.remote.asset.v1.IFetchBlobRequest): build.bazel.remote.asset.v1.FetchBlobRequest;

                        /**
                         * Encodes the specified FetchBlobRequest message. Does not implicitly {@link build.bazel.remote.asset.v1.FetchBlobRequest.verify|verify} messages.
                         * @param message FetchBlobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.asset.v1.IFetchBlobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FetchBlobRequest message, length delimited. Does not implicitly {@link build.bazel.remote.asset.v1.FetchBlobRequest.verify|verify} messages.
                         * @param message FetchBlobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.asset.v1.IFetchBlobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FetchBlobRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FetchBlobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.asset.v1.FetchBlobRequest;

                        /**
                         * Decodes a FetchBlobRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FetchBlobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.asset.v1.FetchBlobRequest;

                        /**
                         * Verifies a FetchBlobRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FetchBlobRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FetchBlobRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.asset.v1.FetchBlobRequest;

                        /**
                         * Creates a plain object from a FetchBlobRequest message. Also converts values to other types if specified.
                         * @param message FetchBlobRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.asset.v1.FetchBlobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FetchBlobRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FetchBlobRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FetchBlobResponse. */
                    interface IFetchBlobResponse {

                        /** FetchBlobResponse status */
                        status?: (google.rpc.IStatus|null);

                        /** FetchBlobResponse uri */
                        uri?: (string|null);

                        /** FetchBlobResponse qualifiers */
                        qualifiers?: (build.bazel.remote.asset.v1.IQualifier[]|null);

                        /** FetchBlobResponse expiresAt */
                        expiresAt?: (google.protobuf.ITimestamp|null);

                        /** FetchBlobResponse blobDigest */
                        blobDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** FetchBlobResponse digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a FetchBlobResponse. */
                    class FetchBlobResponse implements IFetchBlobResponse {

                        /**
                         * Constructs a new FetchBlobResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.asset.v1.IFetchBlobResponse);

                        /** FetchBlobResponse status. */
                        public status?: (google.rpc.IStatus|null);

                        /** FetchBlobResponse uri. */
                        public uri: string;

                        /** FetchBlobResponse qualifiers. */
                        public qualifiers: build.bazel.remote.asset.v1.IQualifier[];

                        /** FetchBlobResponse expiresAt. */
                        public expiresAt?: (google.protobuf.ITimestamp|null);

                        /** FetchBlobResponse blobDigest. */
                        public blobDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** FetchBlobResponse digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new FetchBlobResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FetchBlobResponse instance
                         */
                        public static create(properties?: build.bazel.remote.asset.v1.IFetchBlobResponse): build.bazel.remote.asset.v1.FetchBlobResponse;

                        /**
                         * Encodes the specified FetchBlobResponse message. Does not implicitly {@link build.bazel.remote.asset.v1.FetchBlobResponse.verify|verify} messages.
                         * @param message FetchBlobResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.asset.v1.IFetchBlobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FetchBlobResponse message, length delimited. Does not implicitly {@link build.bazel.remote.asset.v1.FetchBlobResponse.verify|verify} messages.
                         * @param message FetchBlobResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.asset.v1.IFetchBlobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FetchBlobResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FetchBlobResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.asset.v1.FetchBlobResponse;

                        /**
                         * Decodes a FetchBlobResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FetchBlobResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.asset.v1.FetchBlobResponse;

                        /**
                         * Verifies a FetchBlobResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FetchBlobResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FetchBlobResponse
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.asset.v1.FetchBlobResponse;

                        /**
                         * Creates a plain object from a FetchBlobResponse message. Also converts values to other types if specified.
                         * @param message FetchBlobResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.asset.v1.FetchBlobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FetchBlobResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FetchBlobResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FetchDirectoryRequest. */
                    interface IFetchDirectoryRequest {

                        /** FetchDirectoryRequest instanceName */
                        instanceName?: (string|null);

                        /** FetchDirectoryRequest timeout */
                        timeout?: (google.protobuf.IDuration|null);

                        /** FetchDirectoryRequest oldestContentAccepted */
                        oldestContentAccepted?: (google.protobuf.ITimestamp|null);

                        /** FetchDirectoryRequest uris */
                        uris?: (string[]|null);

                        /** FetchDirectoryRequest qualifiers */
                        qualifiers?: (build.bazel.remote.asset.v1.IQualifier[]|null);

                        /** FetchDirectoryRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a FetchDirectoryRequest. */
                    class FetchDirectoryRequest implements IFetchDirectoryRequest {

                        /**
                         * Constructs a new FetchDirectoryRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.asset.v1.IFetchDirectoryRequest);

                        /** FetchDirectoryRequest instanceName. */
                        public instanceName: string;

                        /** FetchDirectoryRequest timeout. */
                        public timeout?: (google.protobuf.IDuration|null);

                        /** FetchDirectoryRequest oldestContentAccepted. */
                        public oldestContentAccepted?: (google.protobuf.ITimestamp|null);

                        /** FetchDirectoryRequest uris. */
                        public uris: string[];

                        /** FetchDirectoryRequest qualifiers. */
                        public qualifiers: build.bazel.remote.asset.v1.IQualifier[];

                        /** FetchDirectoryRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new FetchDirectoryRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FetchDirectoryRequest instance
                         */
                        public static create(properties?: build.bazel.remote.asset.v1.IFetchDirectoryRequest): build.bazel.remote.asset.v1.FetchDirectoryRequest;

                        /**
                         * Encodes the specified FetchDirectoryRequest message. Does not implicitly {@link build.bazel.remote.asset.v1.FetchDirectoryRequest.verify|verify} messages.
                         * @param message FetchDirectoryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.asset.v1.IFetchDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FetchDirectoryRequest message, length delimited. Does not implicitly {@link build.bazel.remote.asset.v1.FetchDirectoryRequest.verify|verify} messages.
                         * @param message FetchDirectoryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.asset.v1.IFetchDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FetchDirectoryRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FetchDirectoryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.asset.v1.FetchDirectoryRequest;

                        /**
                         * Decodes a FetchDirectoryRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FetchDirectoryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.asset.v1.FetchDirectoryRequest;

                        /**
                         * Verifies a FetchDirectoryRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FetchDirectoryRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FetchDirectoryRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.asset.v1.FetchDirectoryRequest;

                        /**
                         * Creates a plain object from a FetchDirectoryRequest message. Also converts values to other types if specified.
                         * @param message FetchDirectoryRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.asset.v1.FetchDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FetchDirectoryRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FetchDirectoryRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FetchDirectoryResponse. */
                    interface IFetchDirectoryResponse {

                        /** FetchDirectoryResponse status */
                        status?: (google.rpc.IStatus|null);

                        /** FetchDirectoryResponse uri */
                        uri?: (string|null);

                        /** FetchDirectoryResponse qualifiers */
                        qualifiers?: (build.bazel.remote.asset.v1.IQualifier[]|null);

                        /** FetchDirectoryResponse expiresAt */
                        expiresAt?: (google.protobuf.ITimestamp|null);

                        /** FetchDirectoryResponse rootDirectoryDigest */
                        rootDirectoryDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** FetchDirectoryResponse digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a FetchDirectoryResponse. */
                    class FetchDirectoryResponse implements IFetchDirectoryResponse {

                        /**
                         * Constructs a new FetchDirectoryResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.asset.v1.IFetchDirectoryResponse);

                        /** FetchDirectoryResponse status. */
                        public status?: (google.rpc.IStatus|null);

                        /** FetchDirectoryResponse uri. */
                        public uri: string;

                        /** FetchDirectoryResponse qualifiers. */
                        public qualifiers: build.bazel.remote.asset.v1.IQualifier[];

                        /** FetchDirectoryResponse expiresAt. */
                        public expiresAt?: (google.protobuf.ITimestamp|null);

                        /** FetchDirectoryResponse rootDirectoryDigest. */
                        public rootDirectoryDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** FetchDirectoryResponse digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new FetchDirectoryResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FetchDirectoryResponse instance
                         */
                        public static create(properties?: build.bazel.remote.asset.v1.IFetchDirectoryResponse): build.bazel.remote.asset.v1.FetchDirectoryResponse;

                        /**
                         * Encodes the specified FetchDirectoryResponse message. Does not implicitly {@link build.bazel.remote.asset.v1.FetchDirectoryResponse.verify|verify} messages.
                         * @param message FetchDirectoryResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.asset.v1.IFetchDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FetchDirectoryResponse message, length delimited. Does not implicitly {@link build.bazel.remote.asset.v1.FetchDirectoryResponse.verify|verify} messages.
                         * @param message FetchDirectoryResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.asset.v1.IFetchDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FetchDirectoryResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FetchDirectoryResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.asset.v1.FetchDirectoryResponse;

                        /**
                         * Decodes a FetchDirectoryResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FetchDirectoryResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.asset.v1.FetchDirectoryResponse;

                        /**
                         * Verifies a FetchDirectoryResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FetchDirectoryResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FetchDirectoryResponse
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.asset.v1.FetchDirectoryResponse;

                        /**
                         * Creates a plain object from a FetchDirectoryResponse message. Also converts values to other types if specified.
                         * @param message FetchDirectoryResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.asset.v1.FetchDirectoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FetchDirectoryResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FetchDirectoryResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Represents a Push */
                    class Push extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new Push service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new Push service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Push;

                        /**
                         * Calls PushBlob.
                         * @param request PushBlobRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and PushBlobResponse
                         */
                        public pushBlob(request: build.bazel.remote.asset.v1.IPushBlobRequest, callback: build.bazel.remote.asset.v1.Push.PushBlobCallback): void;

                        /**
                         * Calls PushBlob.
                         * @param request PushBlobRequest message or plain object
                         * @returns Promise
                         */
                        public pushBlob(request: build.bazel.remote.asset.v1.IPushBlobRequest): Promise<build.bazel.remote.asset.v1.PushBlobResponse>;

                        /**
                         * Calls PushDirectory.
                         * @param request PushDirectoryRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and PushDirectoryResponse
                         */
                        public pushDirectory(request: build.bazel.remote.asset.v1.IPushDirectoryRequest, callback: build.bazel.remote.asset.v1.Push.PushDirectoryCallback): void;

                        /**
                         * Calls PushDirectory.
                         * @param request PushDirectoryRequest message or plain object
                         * @returns Promise
                         */
                        public pushDirectory(request: build.bazel.remote.asset.v1.IPushDirectoryRequest): Promise<build.bazel.remote.asset.v1.PushDirectoryResponse>;
                    }

                    namespace Push {

                        /**
                         * Callback as used by {@link build.bazel.remote.asset.v1.Push#pushBlob}.
                         * @param error Error, if any
                         * @param [response] PushBlobResponse
                         */
                        type PushBlobCallback = (error: (Error|null), response?: build.bazel.remote.asset.v1.PushBlobResponse) => void;

                        /**
                         * Callback as used by {@link build.bazel.remote.asset.v1.Push#pushDirectory}.
                         * @param error Error, if any
                         * @param [response] PushDirectoryResponse
                         */
                        type PushDirectoryCallback = (error: (Error|null), response?: build.bazel.remote.asset.v1.PushDirectoryResponse) => void;
                    }

                    /** Properties of a PushBlobRequest. */
                    interface IPushBlobRequest {

                        /** PushBlobRequest instanceName */
                        instanceName?: (string|null);

                        /** PushBlobRequest uris */
                        uris?: (string[]|null);

                        /** PushBlobRequest qualifiers */
                        qualifiers?: (build.bazel.remote.asset.v1.IQualifier[]|null);

                        /** PushBlobRequest expireAt */
                        expireAt?: (google.protobuf.ITimestamp|null);

                        /** PushBlobRequest blobDigest */
                        blobDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** PushBlobRequest referencesBlobs */
                        referencesBlobs?: (build.bazel.remote.execution.v2.IDigest[]|null);

                        /** PushBlobRequest referencesDirectories */
                        referencesDirectories?: (build.bazel.remote.execution.v2.IDigest[]|null);

                        /** PushBlobRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a PushBlobRequest. */
                    class PushBlobRequest implements IPushBlobRequest {

                        /**
                         * Constructs a new PushBlobRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.asset.v1.IPushBlobRequest);

                        /** PushBlobRequest instanceName. */
                        public instanceName: string;

                        /** PushBlobRequest uris. */
                        public uris: string[];

                        /** PushBlobRequest qualifiers. */
                        public qualifiers: build.bazel.remote.asset.v1.IQualifier[];

                        /** PushBlobRequest expireAt. */
                        public expireAt?: (google.protobuf.ITimestamp|null);

                        /** PushBlobRequest blobDigest. */
                        public blobDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** PushBlobRequest referencesBlobs. */
                        public referencesBlobs: build.bazel.remote.execution.v2.IDigest[];

                        /** PushBlobRequest referencesDirectories. */
                        public referencesDirectories: build.bazel.remote.execution.v2.IDigest[];

                        /** PushBlobRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new PushBlobRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PushBlobRequest instance
                         */
                        public static create(properties?: build.bazel.remote.asset.v1.IPushBlobRequest): build.bazel.remote.asset.v1.PushBlobRequest;

                        /**
                         * Encodes the specified PushBlobRequest message. Does not implicitly {@link build.bazel.remote.asset.v1.PushBlobRequest.verify|verify} messages.
                         * @param message PushBlobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.asset.v1.IPushBlobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PushBlobRequest message, length delimited. Does not implicitly {@link build.bazel.remote.asset.v1.PushBlobRequest.verify|verify} messages.
                         * @param message PushBlobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.asset.v1.IPushBlobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PushBlobRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PushBlobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.asset.v1.PushBlobRequest;

                        /**
                         * Decodes a PushBlobRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PushBlobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.asset.v1.PushBlobRequest;

                        /**
                         * Verifies a PushBlobRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PushBlobRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PushBlobRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.asset.v1.PushBlobRequest;

                        /**
                         * Creates a plain object from a PushBlobRequest message. Also converts values to other types if specified.
                         * @param message PushBlobRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.asset.v1.PushBlobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PushBlobRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PushBlobRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PushBlobResponse. */
                    interface IPushBlobResponse {
                    }

                    /** Represents a PushBlobResponse. */
                    class PushBlobResponse implements IPushBlobResponse {

                        /**
                         * Constructs a new PushBlobResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.asset.v1.IPushBlobResponse);

                        /**
                         * Creates a new PushBlobResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PushBlobResponse instance
                         */
                        public static create(properties?: build.bazel.remote.asset.v1.IPushBlobResponse): build.bazel.remote.asset.v1.PushBlobResponse;

                        /**
                         * Encodes the specified PushBlobResponse message. Does not implicitly {@link build.bazel.remote.asset.v1.PushBlobResponse.verify|verify} messages.
                         * @param message PushBlobResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.asset.v1.IPushBlobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PushBlobResponse message, length delimited. Does not implicitly {@link build.bazel.remote.asset.v1.PushBlobResponse.verify|verify} messages.
                         * @param message PushBlobResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.asset.v1.IPushBlobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PushBlobResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PushBlobResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.asset.v1.PushBlobResponse;

                        /**
                         * Decodes a PushBlobResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PushBlobResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.asset.v1.PushBlobResponse;

                        /**
                         * Verifies a PushBlobResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PushBlobResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PushBlobResponse
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.asset.v1.PushBlobResponse;

                        /**
                         * Creates a plain object from a PushBlobResponse message. Also converts values to other types if specified.
                         * @param message PushBlobResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.asset.v1.PushBlobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PushBlobResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PushBlobResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PushDirectoryRequest. */
                    interface IPushDirectoryRequest {

                        /** PushDirectoryRequest instanceName */
                        instanceName?: (string|null);

                        /** PushDirectoryRequest uris */
                        uris?: (string[]|null);

                        /** PushDirectoryRequest qualifiers */
                        qualifiers?: (build.bazel.remote.asset.v1.IQualifier[]|null);

                        /** PushDirectoryRequest expireAt */
                        expireAt?: (google.protobuf.ITimestamp|null);

                        /** PushDirectoryRequest rootDirectoryDigest */
                        rootDirectoryDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** PushDirectoryRequest referencesBlobs */
                        referencesBlobs?: (build.bazel.remote.execution.v2.IDigest[]|null);

                        /** PushDirectoryRequest referencesDirectories */
                        referencesDirectories?: (build.bazel.remote.execution.v2.IDigest[]|null);

                        /** PushDirectoryRequest digestFunction */
                        digestFunction?: (build.bazel.remote.execution.v2.DigestFunction.Value|null);
                    }

                    /** Represents a PushDirectoryRequest. */
                    class PushDirectoryRequest implements IPushDirectoryRequest {

                        /**
                         * Constructs a new PushDirectoryRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.asset.v1.IPushDirectoryRequest);

                        /** PushDirectoryRequest instanceName. */
                        public instanceName: string;

                        /** PushDirectoryRequest uris. */
                        public uris: string[];

                        /** PushDirectoryRequest qualifiers. */
                        public qualifiers: build.bazel.remote.asset.v1.IQualifier[];

                        /** PushDirectoryRequest expireAt. */
                        public expireAt?: (google.protobuf.ITimestamp|null);

                        /** PushDirectoryRequest rootDirectoryDigest. */
                        public rootDirectoryDigest?: (build.bazel.remote.execution.v2.IDigest|null);

                        /** PushDirectoryRequest referencesBlobs. */
                        public referencesBlobs: build.bazel.remote.execution.v2.IDigest[];

                        /** PushDirectoryRequest referencesDirectories. */
                        public referencesDirectories: build.bazel.remote.execution.v2.IDigest[];

                        /** PushDirectoryRequest digestFunction. */
                        public digestFunction: build.bazel.remote.execution.v2.DigestFunction.Value;

                        /**
                         * Creates a new PushDirectoryRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PushDirectoryRequest instance
                         */
                        public static create(properties?: build.bazel.remote.asset.v1.IPushDirectoryRequest): build.bazel.remote.asset.v1.PushDirectoryRequest;

                        /**
                         * Encodes the specified PushDirectoryRequest message. Does not implicitly {@link build.bazel.remote.asset.v1.PushDirectoryRequest.verify|verify} messages.
                         * @param message PushDirectoryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.asset.v1.IPushDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PushDirectoryRequest message, length delimited. Does not implicitly {@link build.bazel.remote.asset.v1.PushDirectoryRequest.verify|verify} messages.
                         * @param message PushDirectoryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.asset.v1.IPushDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PushDirectoryRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PushDirectoryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.asset.v1.PushDirectoryRequest;

                        /**
                         * Decodes a PushDirectoryRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PushDirectoryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.asset.v1.PushDirectoryRequest;

                        /**
                         * Verifies a PushDirectoryRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PushDirectoryRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PushDirectoryRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.asset.v1.PushDirectoryRequest;

                        /**
                         * Creates a plain object from a PushDirectoryRequest message. Also converts values to other types if specified.
                         * @param message PushDirectoryRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.asset.v1.PushDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PushDirectoryRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PushDirectoryRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PushDirectoryResponse. */
                    interface IPushDirectoryResponse {
                    }

                    /** Represents a PushDirectoryResponse. */
                    class PushDirectoryResponse implements IPushDirectoryResponse {

                        /**
                         * Constructs a new PushDirectoryResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.asset.v1.IPushDirectoryResponse);

                        /**
                         * Creates a new PushDirectoryResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PushDirectoryResponse instance
                         */
                        public static create(properties?: build.bazel.remote.asset.v1.IPushDirectoryResponse): build.bazel.remote.asset.v1.PushDirectoryResponse;

                        /**
                         * Encodes the specified PushDirectoryResponse message. Does not implicitly {@link build.bazel.remote.asset.v1.PushDirectoryResponse.verify|verify} messages.
                         * @param message PushDirectoryResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.asset.v1.IPushDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PushDirectoryResponse message, length delimited. Does not implicitly {@link build.bazel.remote.asset.v1.PushDirectoryResponse.verify|verify} messages.
                         * @param message PushDirectoryResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.asset.v1.IPushDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PushDirectoryResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PushDirectoryResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.asset.v1.PushDirectoryResponse;

                        /**
                         * Decodes a PushDirectoryResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PushDirectoryResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.asset.v1.PushDirectoryResponse;

                        /**
                         * Verifies a PushDirectoryResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PushDirectoryResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PushDirectoryResponse
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.asset.v1.PushDirectoryResponse;

                        /**
                         * Creates a plain object from a PushDirectoryResponse message. Also converts values to other types if specified.
                         * @param message PushDirectoryResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.asset.v1.PushDirectoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PushDirectoryResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PushDirectoryResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace logstream. */
            namespace logstream {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a LogStreamService */
                    class LogStreamService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new LogStreamService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new LogStreamService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LogStreamService;

                        /**
                         * Calls CreateLogStream.
                         * @param request CreateLogStreamRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and LogStream
                         */
                        public createLogStream(request: build.bazel.remote.logstream.v1.ICreateLogStreamRequest, callback: build.bazel.remote.logstream.v1.LogStreamService.CreateLogStreamCallback): void;

                        /**
                         * Calls CreateLogStream.
                         * @param request CreateLogStreamRequest message or plain object
                         * @returns Promise
                         */
                        public createLogStream(request: build.bazel.remote.logstream.v1.ICreateLogStreamRequest): Promise<build.bazel.remote.logstream.v1.LogStream>;
                    }

                    namespace LogStreamService {

                        /**
                         * Callback as used by {@link build.bazel.remote.logstream.v1.LogStreamService#createLogStream}.
                         * @param error Error, if any
                         * @param [response] LogStream
                         */
                        type CreateLogStreamCallback = (error: (Error|null), response?: build.bazel.remote.logstream.v1.LogStream) => void;
                    }

                    /** Properties of a CreateLogStreamRequest. */
                    interface ICreateLogStreamRequest {

                        /** CreateLogStreamRequest parent */
                        parent?: (string|null);
                    }

                    /** Represents a CreateLogStreamRequest. */
                    class CreateLogStreamRequest implements ICreateLogStreamRequest {

                        /**
                         * Constructs a new CreateLogStreamRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.logstream.v1.ICreateLogStreamRequest);

                        /** CreateLogStreamRequest parent. */
                        public parent: string;

                        /**
                         * Creates a new CreateLogStreamRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateLogStreamRequest instance
                         */
                        public static create(properties?: build.bazel.remote.logstream.v1.ICreateLogStreamRequest): build.bazel.remote.logstream.v1.CreateLogStreamRequest;

                        /**
                         * Encodes the specified CreateLogStreamRequest message. Does not implicitly {@link build.bazel.remote.logstream.v1.CreateLogStreamRequest.verify|verify} messages.
                         * @param message CreateLogStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.logstream.v1.ICreateLogStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateLogStreamRequest message, length delimited. Does not implicitly {@link build.bazel.remote.logstream.v1.CreateLogStreamRequest.verify|verify} messages.
                         * @param message CreateLogStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.logstream.v1.ICreateLogStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateLogStreamRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateLogStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.logstream.v1.CreateLogStreamRequest;

                        /**
                         * Decodes a CreateLogStreamRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateLogStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.logstream.v1.CreateLogStreamRequest;

                        /**
                         * Verifies a CreateLogStreamRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateLogStreamRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateLogStreamRequest
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.logstream.v1.CreateLogStreamRequest;

                        /**
                         * Creates a plain object from a CreateLogStreamRequest message. Also converts values to other types if specified.
                         * @param message CreateLogStreamRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.logstream.v1.CreateLogStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateLogStreamRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateLogStreamRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LogStream. */
                    interface ILogStream {

                        /** LogStream name */
                        name?: (string|null);

                        /** LogStream writeResourceName */
                        writeResourceName?: (string|null);
                    }

                    /** Represents a LogStream. */
                    class LogStream implements ILogStream {

                        /**
                         * Constructs a new LogStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: build.bazel.remote.logstream.v1.ILogStream);

                        /** LogStream name. */
                        public name: string;

                        /** LogStream writeResourceName. */
                        public writeResourceName: string;

                        /**
                         * Creates a new LogStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LogStream instance
                         */
                        public static create(properties?: build.bazel.remote.logstream.v1.ILogStream): build.bazel.remote.logstream.v1.LogStream;

                        /**
                         * Encodes the specified LogStream message. Does not implicitly {@link build.bazel.remote.logstream.v1.LogStream.verify|verify} messages.
                         * @param message LogStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: build.bazel.remote.logstream.v1.ILogStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LogStream message, length delimited. Does not implicitly {@link build.bazel.remote.logstream.v1.LogStream.verify|verify} messages.
                         * @param message LogStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: build.bazel.remote.logstream.v1.ILogStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LogStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LogStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.remote.logstream.v1.LogStream;

                        /**
                         * Decodes a LogStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LogStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.remote.logstream.v1.LogStream;

                        /**
                         * Verifies a LogStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LogStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LogStream
                         */
                        public static fromObject(object: { [k: string]: any }): build.bazel.remote.logstream.v1.LogStream;

                        /**
                         * Creates a plain object from a LogStream message. Also converts values to other types if specified.
                         * @param message LogStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: build.bazel.remote.logstream.v1.LogStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LogStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LogStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }

        /** Namespace semver. */
        namespace semver {

            /** Properties of a SemVer. */
            interface ISemVer {

                /** SemVer major */
                major?: (number|null);

                /** SemVer minor */
                minor?: (number|null);

                /** SemVer patch */
                patch?: (number|null);

                /** SemVer prerelease */
                prerelease?: (string|null);
            }

            /** Represents a SemVer. */
            class SemVer implements ISemVer {

                /**
                 * Constructs a new SemVer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: build.bazel.semver.ISemVer);

                /** SemVer major. */
                public major: number;

                /** SemVer minor. */
                public minor: number;

                /** SemVer patch. */
                public patch: number;

                /** SemVer prerelease. */
                public prerelease: string;

                /**
                 * Creates a new SemVer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SemVer instance
                 */
                public static create(properties?: build.bazel.semver.ISemVer): build.bazel.semver.SemVer;

                /**
                 * Encodes the specified SemVer message. Does not implicitly {@link build.bazel.semver.SemVer.verify|verify} messages.
                 * @param message SemVer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: build.bazel.semver.ISemVer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SemVer message, length delimited. Does not implicitly {@link build.bazel.semver.SemVer.verify|verify} messages.
                 * @param message SemVer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: build.bazel.semver.ISemVer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SemVer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SemVer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): build.bazel.semver.SemVer;

                /**
                 * Decodes a SemVer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SemVer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): build.bazel.semver.SemVer;

                /**
                 * Verifies a SemVer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SemVer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SemVer
                 */
                public static fromObject(object: { [k: string]: any }): build.bazel.semver.SemVer;

                /**
                 * Creates a plain object from a SemVer message. Also converts values to other types if specified.
                 * @param message SemVer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: build.bazel.semver.SemVer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SemVer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SemVer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);

            /** CommonLanguageSettings selectiveGapicGeneration */
            selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /** CommonLanguageSettings selectiveGapicGeneration. */
            public selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: google.api.LaunchStage;

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);

            /** Publishing restReferenceDocumentationUri */
            restReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: google.api.ClientLibraryOrganization;

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /** Publishing restReferenceDocumentationUri. */
            public restReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** PythonSettings experimentalFeatures */
            experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** PythonSettings experimentalFeatures. */
            public experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PythonSettings {

            /** Properties of an ExperimentalFeatures. */
            interface IExperimentalFeatures {

                /** ExperimentalFeatures restAsyncIoEnabled */
                restAsyncIoEnabled?: (boolean|null);

                /** ExperimentalFeatures protobufPythonicTypesEnabled */
                protobufPythonicTypesEnabled?: (boolean|null);

                /** ExperimentalFeatures unversionedPackageDisabled */
                unversionedPackageDisabled?: (boolean|null);
            }

            /** Represents an ExperimentalFeatures. */
            class ExperimentalFeatures implements IExperimentalFeatures {

                /**
                 * Constructs a new ExperimentalFeatures.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.PythonSettings.IExperimentalFeatures);

                /** ExperimentalFeatures restAsyncIoEnabled. */
                public restAsyncIoEnabled: boolean;

                /** ExperimentalFeatures protobufPythonicTypesEnabled. */
                public protobufPythonicTypesEnabled: boolean;

                /** ExperimentalFeatures unversionedPackageDisabled. */
                public unversionedPackageDisabled: boolean;

                /**
                 * Creates a new ExperimentalFeatures instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExperimentalFeatures instance
                 */
                public static create(properties?: google.api.PythonSettings.IExperimentalFeatures): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Encodes the specified ExperimentalFeatures message. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExperimentalFeatures message, length delimited. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Verifies an ExperimentalFeatures message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExperimentalFeatures message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExperimentalFeatures
                 */
                public static fromObject(object: { [k: string]: any }): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Creates a plain object from an ExperimentalFeatures message. Also converts values to other types if specified.
                 * @param message ExperimentalFeatures
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.PythonSettings.ExperimentalFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExperimentalFeatures to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExperimentalFeatures
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** GoSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** GoSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** Properties of a SelectiveGapicGeneration. */
        interface ISelectiveGapicGeneration {

            /** SelectiveGapicGeneration methods */
            methods?: (string[]|null);

            /** SelectiveGapicGeneration generateOmittedAsInternal */
            generateOmittedAsInternal?: (boolean|null);
        }

        /** Represents a SelectiveGapicGeneration. */
        class SelectiveGapicGeneration implements ISelectiveGapicGeneration {

            /**
             * Constructs a new SelectiveGapicGeneration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISelectiveGapicGeneration);

            /** SelectiveGapicGeneration methods. */
            public methods: string[];

            /** SelectiveGapicGeneration generateOmittedAsInternal. */
            public generateOmittedAsInternal: boolean;

            /**
             * Creates a new SelectiveGapicGeneration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectiveGapicGeneration instance
             */
            public static create(properties?: google.api.ISelectiveGapicGeneration): google.api.SelectiveGapicGeneration;

            /**
             * Encodes the specified SelectiveGapicGeneration message. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectiveGapicGeneration message, length delimited. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SelectiveGapicGeneration;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SelectiveGapicGeneration;

            /**
             * Verifies a SelectiveGapicGeneration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectiveGapicGeneration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectiveGapicGeneration
             */
            public static fromObject(object: { [k: string]: any }): google.api.SelectiveGapicGeneration;

            /**
             * Creates a plain object from a SelectiveGapicGeneration message. Also converts values to other types if specified.
             * @param message SelectiveGapicGeneration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SelectiveGapicGeneration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectiveGapicGeneration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectiveGapicGeneration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_LEGACY = 900,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: google.protobuf.Edition;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: google.protobuf.ExtensionRangeOptions.VerificationState;

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: google.protobuf.FieldOptions.OptionRetention;

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: google.protobuf.Edition;

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport editionIntroduced */
                editionIntroduced?: (google.protobuf.Edition|null);

                /** FeatureSupport editionDeprecated */
                editionDeprecated?: (google.protobuf.Edition|null);

                /** FeatureSupport deprecationWarning */
                deprecationWarning?: (string|null);

                /** FeatureSupport editionRemoved */
                editionRemoved?: (google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport editionIntroduced. */
                public editionIntroduced: google.protobuf.Edition;

                /** FeatureSupport editionDeprecated. */
                public editionDeprecated: google.protobuf.Edition;

                /** FeatureSupport deprecationWarning. */
                public deprecationWarning: string;

                /** FeatureSupport editionRemoved. */
                public editionRemoved: google.protobuf.Edition;

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);

            /** ServiceOptions .google.api.apiVersion */
            ".google.api.apiVersion"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|null);

            /** FeatureSet enforceNamingStyle */
            enforceNamingStyle?: (google.protobuf.FeatureSet.EnforceNamingStyle|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: google.protobuf.FeatureSet.FieldPresence;

            /** FeatureSet enumType. */
            public enumType: google.protobuf.FeatureSet.EnumType;

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: google.protobuf.FeatureSet.RepeatedFieldEncoding;

            /** FeatureSet utf8Validation. */
            public utf8Validation: google.protobuf.FeatureSet.Utf8Validation;

            /** FeatureSet messageEncoding. */
            public messageEncoding: google.protobuf.FeatureSet.MessageEncoding;

            /** FeatureSet jsonFormat. */
            public jsonFormat: google.protobuf.FeatureSet.JsonFormat;

            /** FeatureSet enforceNamingStyle. */
            public enforceNamingStyle: google.protobuf.FeatureSet.EnforceNamingStyle;

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: google.protobuf.Edition;

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: google.protobuf.Edition;

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|null);

                /** FeatureSetEditionDefault overridableFeatures */
                overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures */
                fixedFeatures?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: google.protobuf.Edition;

                /** FeatureSetEditionDefault overridableFeatures. */
                public overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures. */
                public fixedFeatures?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: google.protobuf.GeneratedCodeInfo.Annotation.Semantic;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CancelOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WaitOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OperationInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
