import {
  deepMerge,
  getRenderOptions,
  type NodeProps,
  Shape,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsProvider } from './AwsProvider.tsx'
import { S3Backend } from './S3Backend.tsx'
import { RegionalLogBucket } from './RegionalLogBucket.tsx'
import { GlobalLogBucket } from './GlobalLogBucket.tsx'
import { LocalBackend, LocalBackendOutputs } from '@dinghy/tf-common'
import { S3BackendOutputs } from './S3BackendOutputs.tsx'

export const InputSchema = z.object({
  awsProvider: z.any().optional(),
  s3Backend: z.any().optional(),
  backendOutputs: z.any().optional(),
  infrastructure: z.any().optional(),
  regionalLogBucket: z.any().optional(),
  globalLogBucket: z.any().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function AwsStack(
  { _components, children, ...props }: Partial<InputProps>,
) {
  const renderOptions = getRenderOptions()
  const inputProps = deepMerge({}, renderOptions.awsStack)
  deepMerge(inputProps, props)
  const awsStackConfig = InputSchema.loose().parse(inputProps)
  if (renderOptions.s3Backend) {
    awsStackConfig.s3Backend ??= true
  }

  function BackendOutput() {
    if (awsStackConfig.backendOutputs === false) return null

    if (
      awsStackConfig.backendOutputs &&
      typeof awsStackConfig.backendOutputs !== 'boolean'
    ) {
      return awsStackConfig.backendOutputs as any
    }

    const BackendOutputsComponent = (_components?.backendOutputs ||
        awsStackConfig.s3Backend
      ? S3BackendOutputs
      : LocalBackendOutputs) as typeof LocalBackendOutputs
    return <BackendOutputsComponent />
  }

  function Backend(_: any) {
    if (
      awsStackConfig.s3Backend !== undefined &&
      typeof awsStackConfig.s3Backend !== 'boolean'
    ) {
      return awsStackConfig.s3Backend as any
    }

    const BackendComponent =
      (_components?.backend || awsStackConfig.s3Backend
        ? S3Backend
        : LocalBackend) as typeof Backend
    return (
      <BackendComponent>
        <BackendOutput />
      </BackendComponent>
    )
  }

  function RegionalLog() {
    if (!awsStackConfig.regionalLogBucket) return null
    if (typeof awsStackConfig.regionalLogBucket !== 'boolean') {
      return awsStackConfig.regionalLogBucket as any
    }
    const RegionalLogBucketComponent =
      _components?.regionalLogBucket as typeof RegionalLogBucket ||
      RegionalLogBucket
    return <RegionalLogBucketComponent />
  }

  function GlobalLog() {
    if (!awsStackConfig.globalLogBucket) return null
    if (typeof awsStackConfig.globalLogBucket !== 'boolean') {
      return awsStackConfig.globalLogBucket as any
    }
    const GlobalLogBucketComponent =
      _components?.globalLogBucket as typeof GlobalLogBucket ||
      GlobalLogBucket
    return <GlobalLogBucketComponent />
  }

  function Infrastructure() {
    const InfrastructureComponent = (_components?.infrastructure ||
      Shape) as typeof Shape
    return (
      <InfrastructureComponent _distributed>
        <Backend />
        <RegionalLog />
        <GlobalLog />
        {awsStackConfig.infrastructure as any}
      </InfrastructureComponent>
    )
  }

  function Provider(props: any) {
    if (
      awsStackConfig.awsProvider !== undefined &&
      typeof awsStackConfig.awsProvider !== 'boolean'
    ) {
      return awsStackConfig.awsProvider as any
    }
    const ProviderComponent = (_components?.provider ||
      AwsProvider) as typeof AwsProvider
    return (
      <ProviderComponent {...props}>
        {children}
        <Infrastructure />
      </ProviderComponent>
    )
  }

  const StackComponent: any = _components?.stack as typeof Shape ||
    Shape
  return (
    <StackComponent
      {...awsStackConfig}
    >
      <Provider />
    </StackComponent>
  )
}
