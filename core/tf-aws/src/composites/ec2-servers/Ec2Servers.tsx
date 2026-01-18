import { parseEc2Servers } from './types.ts'
import {
  deepResolve,
  getRenderOptions,
  NodeProps,
  Shape,
  toId,
} from '@dinghy/base-components'
import {
  AwsInstance,
  DataAwsAmi,
  useAwsAmi,
  useAwsInstance,
} from '@dinghy/tf-aws/serviceEc2'
import { Vpc } from '../vpc/Vpc.tsx'
import { useAwsSubnet } from '../../services/vpc/AwsSubnet.tsx'
import {
  AwsIamInstanceProfile,
  useAwsIamInstanceProfile,
} from '../../services/iam/AwsIamInstanceProfile.tsx'
import { AwsIamRole, useAwsIamRole } from '../../services/iam/AwsIamRole.tsx'
import { AwsIamRolePolicyAttachment } from '../../services/iam/AwsIamRolePolicyAttachment.tsx'
import { Output } from '@dinghy/tf-common'
import { S3BackendOutput } from '../../foundation/S3BackendOutput.tsx'

export function Ec2Servers(
  { _components, children, ...props }: NodeProps,
) {
  const renderOptions = getRenderOptions()
  const servers = parseEc2Servers(props.servers)

  const createVpc = Object.values(servers).some((server) => !server.subnet_id)
  const referenceAmi = Object.values(servers).some((server) => !server.ami)
  const createInstanceProfile = Object.values(servers).some((server) =>
    !server.iam_instance_profile
  )

  function InstanceProfile(props: any) {
    const instanceProfile: any = renderOptions.instanceProfile || {}
    const roleName = () => `${renderOptions.stack.name}-instance-role`

    function Role(props: any) {
      const RoleComponent = _components?.role as typeof AwsIamRole || AwsIamRole
      return (
        <RoleComponent
          _title={roleName}
          name={roleName}
          assume_role_policy={JSON.stringify({
            'Version': '2012-10-17',
            'Statement': [
              {
                'Effect': 'Allow',
                'Principal': {
                  'Service': 'ec2.amazonaws.com',
                },
                'Action': 'sts:AssumeRole',
              },
            ],
          })}
          {...props}
        />
      )
    }
    function Profile(props: any) {
      const InstanceProfileComponent =
        _components?.instanceProfile as typeof AwsIamInstanceProfile ||
        AwsIamInstanceProfile
      const profileName = () => `${renderOptions.stack.name}-instance-profile`
      return (
        <InstanceProfileComponent
          _title={profileName}
          name={profileName}
          role={roleName}
          {...instanceProfile}
          {...props}
        />
      )
    }
    const { iamRole } = useAwsIamRole()
    return (
      <Role
        _display='entity'
        _title='Instance Role'
        tags={() => ({ Name: roleName })}
        {...props}
      >
        <Profile />
        <AwsIamRolePolicyAttachment
          role={roleName}
          policy_arn='arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore'
          depends_on={() => [iamRole._terraformId]}
        />
      </Role>
    )
  }

  function Ami(props: any) {
    const ami: any = renderOptions.ami || {}
    ami.most_recent = true
    ami.owners ??= ['amazon']
    if (!ami.name_regex && !ami.filter) {
      ami.name_regex = '^al\\d{4}-ami-\\d{4}.*'

      const basedOnServer = Object.values(servers).find((server) =>
        !server.ami
      )!
      const instanceType = basedOnServer.instance_type as unknown as string
      const architecture = instanceType.match(/^(a1|[a-z]+[1-9]g).+$/)
        ? 'arm64'
        : 'x86_64'
      ami.filter = [{ name: 'architecture', values: [architecture] }]
    }
    const AmiComponent = _components?.ami as typeof DataAwsAmi || DataAwsAmi
    return (
      <AmiComponent
        _title='AMI'
        {...ami}
        {...props}
      />
    )
  }

  function OnDemandResources(props: any) {
    if (!createVpc && !referenceAmi && !createInstanceProfile) {
      return null
    }
    const OnDemandResourcesComponent =
      _components?.onDemandResources as typeof Shape || Shape
    return (
      <OnDemandResourcesComponent
        {...props}
      >
        {createVpc && <Vpc _display='entity' _title='VPC' />}
        {referenceAmi && <Ami />}
        {createInstanceProfile && <InstanceProfile />}
        <S3BackendOutput _title='Stack Output' />
      </OnDemandResourcesComponent>
    )
  }

  function Ec2Server({ _server, ...props }: any) {
    const Ec2ServerComponent = _components?.ec2Server as typeof AwsInstance ||
      AwsInstance
    const { awsAmi } = useAwsAmi()
    const { awsSubnet } = useAwsSubnet(
      _server.associate_public_ip_address ? 'public' : 'private',
    )
    const { instanceProfile } = useAwsIamInstanceProfile()
    function PublicIp(props: any) {
      const { awsInstance } = useAwsInstance()
      const title = () => `Public IP of ${deepResolve(_server.name)}`
      return (
        <Output
          _title={title}
          _id={() => `${toId(deepResolve(_server.name))}_publicip`}
          description={title}
          value={() => `\${${deepResolve(awsInstance._terraformId)}.public_ip}`}
          {...props}
        />
      )
    }
    function InstanceId(props: any) {
      const { awsInstance } = useAwsInstance()
      const title = () => `Instance ID of ${deepResolve(_server.name)}`
      return (
        <Output
          _title={title}
          _id={() => `${toId(deepResolve(_server.name))}_instanceid`}
          description={title}
          value={() => `\${${deepResolve(awsInstance._terraformId)}.id}`}
          {...props}
        />
      )
    }

    return (
      <Ec2ServerComponent
        ami={awsAmi.id}
        subnet_id={awsSubnet.id}
        iam_instance_profile={instanceProfile.name}
        _display='entity'
        {..._server}
        {...props}
      >
        <PublicIp />
        <InstanceId />
      </Ec2ServerComponent>
    )
  }

  const ServersComponent = _components?.servers as typeof Shape || Shape
  return (
    <ServersComponent
      _servers={servers}
      _direction='vertical'
      {...props}
    >
      {Object.values(servers).map((server) => (
        <Ec2Server
          key={server.name}
          _server={server}
        />
      ))}
      {children}
      <OnDemandResources />
    </ServersComponent>
  )
}
