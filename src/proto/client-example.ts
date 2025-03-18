import * as $protobuf from "protobufjs";
import * as remoteApis from "./remote-apis";

/**
 * Remote Execution API クライアントの例
 */
export class RemoteExecutionClient {
  private readonly client: remoteApis.build.bazel.remote.execution.v2.Capabilities;

  /**
   * コンストラクタ
   * @param address サーバーアドレス (例: "localhost:8980")
   */
  constructor(address: string) {
    // gRPC クライアントの作成
    const rpcImpl: $protobuf.RPCImpl = (method, requestData, callback) => {
      // 実際の実装では、ここで gRPC リクエストを送信します
      // 例えば、grpc-web や grpc-js などのライブラリを使用します
      console.log(`Method called: ${method.name}`);
      console.log(`Request data: ${requestData.length} bytes`);
      
      // このサンプルでは、常にエラーを返します
      callback(new Error("Not implemented"), null);
    };

    // Capabilities サービスのクライアントを作成
    this.client = remoteApis.build.bazel.remote.execution.v2.Capabilities.create(rpcImpl);
  }

  /**
   * サーバーの機能を取得します
   * @param instanceName インスタンス名
   * @returns サーバーの機能情報の Promise
   */
  async getCapabilities(
    instanceName: string
  ): Promise<remoteApis.build.bazel.remote.execution.v2.IServerCapabilities> {
    const request: remoteApis.build.bazel.remote.execution.v2.IGetCapabilitiesRequest = {
      instanceName: instanceName
    };

    try {
      const response = await this.client.getCapabilities(request);
      return response;
    } catch (error) {
      console.error("GetCapabilities failed:", error);
      throw error;
    }
  }
}

/**
 * 使用例
 */
async function example(): Promise<void> {
  // Remote Execution クライアントの作成
  const client = new RemoteExecutionClient("localhost:8080");
  
  // サーバーの機能を取得
  try {
    const capabilities = await client.getCapabilities("default");
    
    console.log("Server capabilities:");
    console.log(`- Cache capabilities: ${JSON.stringify(capabilities.cacheCapabilities)}`);
    console.log(`- Execution capabilities: ${JSON.stringify(capabilities.executionCapabilities)}`);
    console.log(`- API version: ${JSON.stringify(capabilities.lowApiVersion)} - ${JSON.stringify(capabilities.highApiVersion)}`);
    
    if (capabilities.deprecatedApiVersion) {
      console.log(`- Deprecated API version: ${JSON.stringify(capabilities.deprecatedApiVersion)}`);
    }
    
    // Note: supportedNodeProperties は現在の型定義には存在しません
    // 実際のAPIでは利用可能かもしれませんが、生成された型定義には含まれていません
  } catch (error) {
    console.error("Failed to get capabilities:", error);
  }
}

// 実行例
example().catch(console.error);
