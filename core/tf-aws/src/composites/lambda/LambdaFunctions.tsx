import { parseLambdaFunctions } from './types.ts'
import {
  getRenderOptions,
  NodeProps,
  Shape,
  toId,
} from '@dinghy/base-components'
import {
  AwsLambdaFunction,
  AwsLambdaFunctionUrl,
  useAwsLambdaFunction,
  useAwsLambdaFunctionUrl,
} from '@dinghy/tf-aws/serviceLambda'
import { useAwsIamRole } from '../../services/iam/AwsIamRole.tsx'
import { DataArchiveFile, Output, useArchiveFile } from '@dinghy/tf-common'
import { IamRole } from '../iam/IamRole.tsx'
import { extendStyle } from '@dinghy/base-components'
import { LAMBDA_FUNCTION } from '@dinghy/diagrams/entitiesAws18Compute'
import { LogGroups } from '../cloudwatch/LogGroups.tsx'

export function LambdaFunctions(
  { _components, children, ...props }: NodeProps,
) {
  const renderOptions = getRenderOptions()
  const lambdas = parseLambdaFunctions(props.lambdas)

  function LambdaFunction({ _lambda, ...props }: any) {
    const isRoleRef = typeof _lambda.role === 'string' &&
      (_lambda.role.includes('.') || _lambda.role.includes(':'))
    const createRole = !isRoleRef
    const roleName = isRoleRef ? _lambda.role : _lambda.role ??
      `${renderOptions.stack.name}-${_lambda.function_name}-role`
    if (!isRoleRef) {
      _lambda.role = useAwsIamRole(toId(roleName)).iamRole.arn
    }
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
        _style={extendStyle(props, LAMBDA_FUNCTION)}
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
        {_lambda.functionUrl && <FunctionUrl />}
        {_lambda.log && (
          <LogGroups logGroups={{ [_lambda.log.name]: _lambda.log }} />
        )}
      </LambdaFunctionComponent>
    )

    function FunctionUrl() {
      const urlId = toId(`${_lambda.function_name}_function_url`)
      const { lambdaFunction } = useAwsLambdaFunction(
        toId(_lambda.function_name),
      )
      const { functionUrl } = useAwsLambdaFunctionUrl(urlId)
      return (
        <>
          <AwsLambdaFunctionUrl
            _id={urlId}
            _title={`${_lambda.function_name} URL`}
            {..._lambda.functionUrl}
            function_name={_lambda.function_name}
            depends_on={() => [(lambdaFunction._terraformId as any)()]}
          />
          {_lambda.outputRecord && (
            <Output
              _id={`${urlId}_output`}
              value={() => functionUrl.function_url}
            />
          )}
        </>
      )
    }
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
