import {
  getRenderOptions,
  hostAppHome,
  Shape,
  toId,
} from '@dinghy/base-components'
import {
  AwsLambdaFunction,
  useAwsLambdaFunction,
} from '@dinghy/tf-aws/serviceLambda'
import { useAwsIamRole } from '@dinghy/tf-aws/serviceIam'
import { DataArchiveFile, useArchiveFile } from '@dinghy/tf-common'
import { IamRole } from '../iam/IamRole.tsx'
import { prepareLambdaSource } from '../lambda/types.ts'

const sourcesFolder = `${hostAppHome}/src/lambda-edge`

export function lambdaEdgeRoleId(siteTitle: string) {
  return toId(`${siteTitle}_lambdaedge_role`)
}

export function lambdaEdgeFunctionId(siteTitle: string, name: string) {
  return toId(`${siteTitle}_${name}_lambdaedge`)
}

export function LambdaEdge(
  { siteTitle, names }: { siteTitle: string; names: string[] },
) {
  const renderOptions = getRenderOptions()
  const roleName = lambdaEdgeRoleId(siteTitle)

  return (
    <Shape _display='none' _direction='vertical'>
      <IamRole
        name={roleName}
        assume_role_service={[
          'lambda.amazonaws.com',
          'edgelambda.amazonaws.com',
        ]}
        policies={{
          managed: [{
            name:
              'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
          }],
        }}
      />
      {names.map((name) => {
        const fnId = lambdaEdgeFunctionId(siteTitle, name)
        const fnConfig: any = {
          function_name: fnId,
          runtime: 'nodejs24.x',
          handler: 'index.handler',
          timeout: 5,
          memory_size: 128,
          architectures: ['x86_64'], // Lambda@Edge does not support arm64
        }
        prepareLambdaSource(
          sourcesFolder,
          name,
          fnConfig,
          renderOptions,
          'lambda-edge',
        )
        const archiveId = toId(`${fnId}_archive`)
        const { archiveFile } = useArchiveFile(archiveId)
        const { iamRole } = useAwsIamRole(roleName)
        return (
          <AwsLambdaFunction
            key={name}
            _id={fnId}
            function_name={fnId}
            role={() => iamRole.arn}
            runtime={fnConfig.runtime}
            handler={fnConfig.handler}
            timeout={fnConfig.timeout}
            memory_size={fnConfig.memory_size}
            architectures={fnConfig.architectures}
            region='us-east-1'
            publish
            filename={() => archiveFile.output_path}
            source_code_hash={() => archiveFile.output_base64sha256}
          >
            <DataArchiveFile
              _id={archiveId}
              _title={`${fnId} archive`}
              type='zip'
              output_path={`${fnConfig.archiveDir}.zip`}
              source_dir={fnConfig.archiveDir}
            />
          </AwsLambdaFunction>
        )
      })}
    </Shape>
  )
}

export const useLambdaEdgeByName = (siteTitle: string, name: string) =>
  useAwsLambdaFunction(lambdaEdgeFunctionId(siteTitle, name))
