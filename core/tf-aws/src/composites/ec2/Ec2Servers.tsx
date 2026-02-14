import { Ec2ServerType, parseEc2Servers } from './types.ts'
import {
  deepResolve,
  getRenderOptions,
  NodeProps,
  Shape,
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
  useAwsIamInstanceProfile,
} from '../../services/iam/AwsIamInstanceProfile.tsx'
import { Output } from '@dinghy/tf-common'
import { useAwsSecurityGroup } from '../../services/vpc/AwsSecurityGroup.tsx'
import { IamInstanceRole } from '../iam/IamInstanceRole.tsx'
import { IamRolePolicyAttachment } from '../iam/IamRolePolicyAttachment.tsx'

export function Ec2Servers(
  { _components, children, ...props }: Ec2ServerType & NodeProps,
) {
  const renderOptions = getRenderOptions()
  const servers = parseEc2Servers(props.servers)

  const createVpc = Object.values(servers).some((server) => !server.subnet_id)
  const referenceAmi = Object.values(servers).some((server) => !server.ami)
  const createInstanceProfile = Object.values(servers).some((server) =>
    !server.iam_instance_profile
  )
  const enableSsm = Object.values(servers).some((server) => server.enableSsm)

  function InstanceRole() {
    const profileName = () => `${renderOptions.stack.name}-instance-profile`
    return (
      <IamInstanceRole
        _display='entity'
        _components={_components}
        name={profileName}
      >
        {enableSsm &&
          (
            <IamRolePolicyAttachment
              _components={_components}
              policy_arn='arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore'
            />
          )}
      </IamInstanceRole>
    )
  }

  function Ami(props: any) {
    const ami: any = renderOptions.ami || {}
    const server = Object.values(servers).find((server) => !server.ami) as any
    ami.most_recent = true
    ami.owners ??= [
      server.linuxFlavor === 'ubuntu' ? '099720109477' : 'amazon',
    ]
    if (!ami.name_regex && !ami.filter) {
      ami.name_regex = server.linuxFlavor === 'ubuntu'
        ? '^ubuntu/images/.*-server-.*'
        : `^${server.linuxFlavor}-ami-\\d{4}.*`

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
        {createInstanceProfile && <InstanceRole />}
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
    if (
      !_server.vpc_security_group_ids && _server.associate_public_ip_address
    ) {
      const { securityGroup } = useAwsSecurityGroup('public')
      _server.vpc_security_group_ids = () => [securityGroup.id]
    }
    const { instanceProfile } = useAwsIamInstanceProfile()
    function InstanceOutput(props: any) {
      const { awsInstance } = useAwsInstance()
      const title = () => `Output of ${deepResolve(_server.name)}`
      const instanceInfo = () => {
        const terraformId = deepResolve(awsInstance._terraformId)
        return {
          Name: deepResolve(_server.name),
          InstanceId: `\${${terraformId}.id}`,
          PublicIp: `\${${terraformId}.public_ip}`,
          Region: `\${${terraformId}.region}`,
        }
      }
      return (
        <Output
          _title={title}
          _id={() => `${deepResolve(awsInstance._id)}_output`}
          description={title}
          value={() => JSON.stringify(instanceInfo())}
          {...props}
        />
      )
    }
    const lifecycle = referenceAmi
      ? {
        ignore_changes: [
          'ami',
        ],
      }
      : {}

    return (
      <Ec2ServerComponent
        ami={awsAmi.id}
        subnet_id={awsSubnet.id}
        iam_instance_profile={instanceProfile.name}
        _display='entity'
        lifecycle={lifecycle}
        {..._server}
        {...props}
      >
        <InstanceOutput />
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
