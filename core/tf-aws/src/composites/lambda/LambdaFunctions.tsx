import { parseLambdaFunctions } from './types.ts'
import {
  getRenderOptions,
  NodeProps,
  Shape,
  toId,
} from '@dinghy/base-components'
import { AwsLambdaFunction } from '@dinghy/tf-aws/serviceLambda'
import { useAwsIamRole } from '../../services/iam/AwsIamRole.tsx'
import { DataArchiveFile, useArchiveFile } from '@dinghy/tf-common'
import { IamRole } from '../iam/IamRole.tsx'

export function LambdaFunctions(
  { _components, children, ...props }: NodeProps,
) {
  const renderOptions = getRenderOptions()
  const lambdas = parseLambdaFunctions(props.lambdas)

  function LambdaFunction({ _lambda, ...props }: any) {
    const createRole = !_lambda.role
    const roleName = createRole
      ? `${renderOptions.stack.name}-${_lambda.function_name}-role`
      : _lambda.role
    _lambda.role ??= useAwsIamRole(toId(roleName)).iamRole.arn
    const sourceFileTitle = `${_lambda.function_name} source file`
    if (_lambda.archiveDir) {
      const { archiveFile } = useArchiveFile(toId(sourceFileTitle))
      _lambda.filename = archiveFile.output_path
      _lambda.code_sha256 = archiveFile.output_base64sha256
    }
    function SourceFile(props: any) {
      return (
        <DataArchiveFile
          _title={sourceFileTitle}
          type='zip'
          output_path={`${_lambda.archiveDir}.zip`}
          source_dir={_lambda.archiveDir}
          {...props}
        />
      )
    }
    const LambdaFunctionComponent =
      _components?.lambdaFunction as typeof AwsLambdaFunction ||
      AwsLambdaFunction
    return (
      <LambdaFunctionComponent
        _display='entity'
        {..._lambda}
        {...props}
      >
        {createRole && (
          <IamRole
            _components={_components}
            name={roleName}
            assume_role_service='lambda.amazonaws.com'
          />
        )}
        {_lambda.archiveDir && <SourceFile />}
      </LambdaFunctionComponent>
    )
  }

  const LambdaFunctionsComponent =
    _components?.lambdaFunctions as typeof Shape || Shape
  return (
    <LambdaFunctionsComponent
      _lambdas={lambdas}
      _direction='vertical'
      {...props}
    >
      {Object.values(lambdas).map((lambda) => (
        <LambdaFunction
          key={lambda.function_name}
          _lambda={lambda}
        />
      ))}
      {children}
    </LambdaFunctionsComponent>
  )
}
