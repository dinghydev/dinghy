import { type NodeProps, Shape } from '@dinghy/base-components'
import z from 'zod'
import { AwsProvider } from './AwsProvider.tsx'
import { S3Backend } from './S3Backend.tsx'
import { RegionalLogBucket } from './RegionalLogBucket.tsx'
import { GlobalLogBucket } from './GlobalLogBucket.tsx'

export const InputSchema = z.object({
  awsProvider: z.any().optional(),
  s3Backend: z.any().optional(),
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
  function Backend() {
    if (props.s3Backend) return props.s3Backend as any

    const BackendComponent = (_components?.backend ||
      S3Backend) as typeof S3Backend
    return <BackendComponent />
  }

  function RegionalLog() {
    if (!props.regionalLogBucket) return null
    if (typeof props.regionalLogBucket !== 'boolean') {
      return props.regionalLogBucket as any
    }
    const RegionalLogBucketComponent =
      _components?.regionalLogBucket as typeof RegionalLogBucket ||
      RegionalLogBucket
    return <RegionalLogBucketComponent />
  }

  function GlobalLog() {
    if (!props.globalLogBucket) return null
    if (typeof props.globalLogBucket !== 'boolean') {
      return props.globalLogBucket as any
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
        {props.infrastructure as any}
      </InfrastructureComponent>
    )
  }

  function Provider(props: any) {
    const ProviderComponent = (props.awsProvider ||
      _components?.provider ||
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
      {...props}
    >
      <Provider />
    </StackComponent>
  )
}
