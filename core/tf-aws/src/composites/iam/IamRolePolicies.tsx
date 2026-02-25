import { loadFilesData, NodeProps, Shape } from '@dinghy/base-components'
import { deepMerge, getRenderOptions } from '@dinghy/base-components'
import { IamRolePolicyAttachment } from './IamRolePolicyAttachment.tsx'
import { IamRolePolicy } from './IamRolePolicy.tsx'
const S3_ACTIONS = {
  admin: [
    's3:*',
  ],
  readwrite: [
    's3:Get*',
    's3:Put*',
    's3:DeleteObject',
  ],
  readonly: [
    's3:Get*',
  ],
}

function uniqueServices(actions: string[]) {
  return [...new Set(actions.map((action) => action.split(':')[0]))]
}

const parsePolicies = (policies: any) => {
  const namedPolicies: any[] = []
  const servicePolicies: any = {}

  const handleNamedPolicy = (policy: any) => {
    const isArn = policy.name.includes('/')
    const title = isArn ? policy.name.split('/').pop() : policy.name
    const policy_arn = isArn
      ? policy.name
      : `arn:aws:iam::aws:policy/${policy.name}`
    namedPolicies.push({
      title,
      policy_arn,
    })
  }

  const addPolicy = (
    action: string | undefined,
    actions: string[] | undefined,
    resource: string | undefined,
    resources: string[] | undefined,
    Effect: 'Allow' | 'Deny' = 'Allow',
  ) => {
    const actionsArray = actions || [action!]
    const resourcesArray = resources || (resource ? [resource] : ['*'])
    uniqueServices(actionsArray).map((service) => {
      servicePolicies[service] ??= []
      const Resource = resourcesArray.filter((resource) =>
        typeof resource === 'function' ||
        resource.includes(`:${service}:`) || resource === '*' ||
        resource.includes('$')
      )
      let Action = actionsArray.filter((action) => action.startsWith(service))
      if (Action.includes(`${service}:*`)) {
        Action = [`${service}:*`]
      }
      if (Resource.length > 0) {
        servicePolicies[service].push({
          Effect,
          Action,
          Resource,
        })
      }
    })
  }

  const handleNormalisedPolicy = (policy: any) => {
    const service = policy.Action[0].split(':')[0]
    servicePolicies[service] ??= []
    servicePolicies[service].push(service)
  }

  const handleS3BucketPolicy = (policy: any) => {
    const buckets = policy.buckets || [policy.bucket]
    const actions =
      S3_ACTIONS[policy.permission as keyof typeof S3_ACTIONS || 'readwrite']

    if (policy.key) {
      addPolicy(
        undefined,
        actions,
        undefined,
        buckets.map((bucket: string) => `arn:aws:s3:::${bucket}/${policy.key}`),
      )
    } else {
      if (policy.permission !== 'bucket') {
        addPolicy(
          undefined,
          actions,
          undefined,
          buckets.map((bucket: string) => `arn:aws:s3:::${bucket}/*`),
        )
      }
      addPolicy(
        undefined,
        S3_ACTIONS.admin,
        undefined,
        buckets.map((bucket: string) => `arn:aws:s3:::${bucket}`),
      )
    }
  }

  const handleStatementPolicy = (policy: any) => {
    addPolicy(
      policy.action,
      policy.actions,
      policy.resource,
      policy.resources,
      policy.effect,
    )
  }

  for (const values of Object.values(policies)) {
    for (const policy of values as any[]) {
      if ('name' in policy) {
        handleNamedPolicy(policy)
      } else {
        if ('bucket' in policy || 'buckets' in policy) {
          handleS3BucketPolicy(policy)
        } else if ('action' in policy || 'actions' in policy) {
          handleStatementPolicy(policy)
        } else if ('Action' in policy) {
          handleNormalisedPolicy(policy)
        } else {
          throw new Error(`Unknown policy: ${JSON.stringify(policy)}`)
        }
      }
    }
  }
  const inlinePolicies: any[] = []
  Object.keys(servicePolicies).sort().map((service) => {
    const servicePolicy: any = {}
    servicePolicies[service].map((policy: any) => {
      const { Resource, ...keyAttributes } = policy
      const key = JSON.stringify(keyAttributes)
      servicePolicy[key] ??= { ...policy, Resource: [] }
      servicePolicy[key].Resource.push(...Resource)
      if (servicePolicy[key].Resource.includes('*')) {
        servicePolicy[key].Resource = ['*']
      } else {
        servicePolicy[key].Resource = servicePolicy[key].Resource.sort()
      }
    })
    const statements = Object.values(servicePolicy)
    if (statements.length > 0) {
      inlinePolicies.push({
        name: service,
        statements,
      })
    }
  })
  namedPolicies.sort((a, b) => a.title.localeCompare(b.title))
  return {
    namedPolicies,
    inlinePolicies,
  }
}

function loadPolicies(
  props: any,
) {
  const renderOptions = getRenderOptions()
  const policies = loadFilesData(
    renderOptions,
    'config/iam-role-policies',
    props.roleName as string,
  ) || {}
  if (props.policies) {
    deepMerge(policies, props.policies)
  }
  if (Object.keys(policies).length === 0) {
    return null
  }
  return parsePolicies(policies)
}

export function IamRolePolicies(props: NodeProps) {
  const policies = loadPolicies(props)
  if (!policies) {
    return
  }
  const { namedPolicies, inlinePolicies } = policies

  const NamedPolicies = () => {
    if (namedPolicies.length === 0) {
      return
    }
    const IamRolePolicyAttachmentComponent = props._components
      ?.rolePolicyAttachment as typeof IamRolePolicyAttachment ||
      IamRolePolicyAttachment
    return (
      <>
        {namedPolicies.map((policy: any) => (
          <IamRolePolicyAttachmentComponent
            key={policy.title}
            policy_arn={policy.policy_arn}
          />
        ))}
      </>
    )
  }
  const InlinePolicies = () => {
    if (inlinePolicies.length == 0) {
      return null
    }

    const IamRolePolicyComponent =
      props._components?.iamRolePolicy as typeof IamRolePolicy ||
      IamRolePolicy
    return (
      <>
        {inlinePolicies.map((policy: any) => (
          <IamRolePolicyComponent
            key={policy.name}
            policy={policy}
          />
        ))}
      </>
    )
  }

  const PoliciesComponent = props._components?.policies as typeof Shape || Shape
  return (
    <PoliciesComponent
      _namedPolicies={namedPolicies}
      _inlinePolicies={inlinePolicies}
      _direction='vertical'
      {...props}
    >
      <NamedPolicies />
      <InlinePolicies />
    </PoliciesComponent>
  )
}
