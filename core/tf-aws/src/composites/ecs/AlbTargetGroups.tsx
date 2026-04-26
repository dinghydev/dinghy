import { toId } from '@dinghy/base-components'
import { AwsLbTargetGroup } from '../../services/elbv2/AwsLbTargetGroup.tsx'
import { AwsLbTargetGroupAttachment } from '../../services/elbv2/AwsLbTargetGroupAttachment.tsx'
import { AwsLambdaPermission } from '../../services/lambda/AwsLambdaPermission.tsx'
import { DataAwsLambdaFunction } from '../../services/lambda/DataAwsLambdaFunction.tsx'
import { useAwsSubnet } from '../../services/vpc/AwsSubnet.tsx'
import type { EcsClusterType } from './types.ts'

// Renders one `aws_lb_target_group` per opted-in service or named
// `alb.target_groups` entry. When `tg.lambda` is set the entry expands
// into the Lambda-backed flavour (TG + data lookup + permission +
// attachment). vpc_id falls back to a tree-walked subnet's vpc_id.
export function AlbTargetGroups({ cluster }: { cluster: EcsClusterType }) {
  const alb = cluster.alb!
  const { awsSubnet } = useAwsSubnet()
  const vpcIdRef = awsSubnet.vpc_id

  const services = Object.values(cluster.services).filter((s) => s.target_group)

  return (
    <>
      {services.map((service) => (
        <TargetGroup
          key={service.name}
          cluster={cluster}
          titlePrefix={service.name as string}
          tgKey={service.name as string}
          tg={service.target_group as any}
          vpcIdRef={vpcIdRef}
        />
      ))}
      {Object.entries(alb.target_groups ?? {}).map(([tgKey, tg]) => (
        <TargetGroup
          key={tgKey}
          cluster={cluster}
          titlePrefix={tgKey}
          tgKey={tgKey}
          tg={tg as any}
          vpcIdRef={vpcIdRef}
        />
      ))}
    </>
  )
}

// One rendered `aws_lb_target_group`. Lambda-backed entries take the
// LambdaTargetGroup branch which adds the data lookup, permission and
// attachment resources. Regular entries spread their pass-through fields
// onto the TG (deregistration_delay, health_check, tags, …).
function TargetGroup(
  { cluster, titlePrefix, tgKey, tg, vpcIdRef }: {
    cluster: EcsClusterType
    titlePrefix: string
    tgKey: string
    tg: any
    vpcIdRef: any
  },
) {
  if (tg?.lambda) {
    return (
      <LambdaTargetGroup
        cluster={cluster}
        titlePrefix={titlePrefix}
        tgKey={tgKey}
        tg={tg}
      />
    )
  }
  const {
    rule: _rule,
    rules: _rules,
    arn: _arn,
    lambda: _lambda,
    vpc_id: tgVpcId,
    ...tgProps
  } = tg
  return (
    <AwsLbTargetGroup
      _title={`${titlePrefix} target group`}
      vpc_id={tgVpcId ?? vpcIdRef}
      {...tgProps}
    />
  )
}

// Lambda-backed target group:
//   - the TG's `name` is forced to `${cluster.name}-${tgKey}` so the
//     resource is uniquely owned by this stack/ALB (existing TGs can't
//     be reused across ALBs, but the Lambda behind them can).
//   - DataAwsLambdaFunction looks up the function ARN; AwsLambdaPermission
//     authorises ELB to invoke it; AwsLbTargetGroupAttachment binds them.
//   - port / protocol / vpc_id / health_check are stripped — Lambda TGs
//     don't accept the IP-target defaults the standard schema produces.
function LambdaTargetGroup(
  { cluster, titlePrefix, tgKey, tg }: {
    cluster: EcsClusterType
    titlePrefix: string
    tgKey: string
    tg: any
  },
) {
  const tgName = `${cluster.name}-${tgKey}`
  // Every Lambda-backed sub-resource includes the cluster name so two
  // clusters in the same stack can each own a `target_groups.<key>`
  // entry without colliding (Terraform IDs are stack-global).
  const fnDataId = toId(`dataawslambdafunction_${cluster.name}_${tgKey}`)
  const tgTfId = toId(`awslbtargetgroup_${tgName}`)
  const permTfId = toId(
    `awslambdapermission_${cluster.name}_${tgKey}_elb`,
  )
  const attachTfId = toId(
    `awslbtargetgroupattachment_${cluster.name}_${tgKey}`,
  )
  const {
    rule: _rule,
    rules: _rules,
    lambda: _lambda,
    vpc_id: _vpc,
    port: _port,
    protocol: _protocol,
    target_type: _targetType,
    name: _name,
    health_check: _healthCheck,
    ...tgProps
  } = tg
  return (
    <>
      <DataAwsLambdaFunction
        _id={fnDataId}
        _title={`${titlePrefix} lambda`}
        _display='none'
        function_name={tg.lambda}
      />
      <AwsLbTargetGroup
        _id={tgTfId}
        _title={`${titlePrefix} target group`}
        name={tgName}
        target_type='lambda'
        {...tgProps}
      />
      <AwsLambdaPermission
        _id={permTfId}
        _title={`${titlePrefix} ELB invoke`}
        statement_id={`AllowExecutionFromELB-${cluster.name}-${tgKey}`}
        action='lambda:InvokeFunction'
        function_name={tg.lambda}
        principal='elasticloadbalancing.amazonaws.com'
        source_arn={`\${aws_lb_target_group.${tgTfId}.arn}`}
      />
      <AwsLbTargetGroupAttachment
        _id={attachTfId}
        _title={`${titlePrefix} attachment`}
        target_group_arn={`\${aws_lb_target_group.${tgTfId}.arn}`}
        target_id={`\${data.aws_lambda_function.${fnDataId}.arn}`}
        depends_on={[`aws_lambda_permission.${permTfId}`]}
      />
    </>
  )
}
