import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUP_EC2_INSTANCE_GROUPS = {
  _color: '#D86613',
  _icon: 'mxgraph.aws4.group_ec2_instance_contents',
}

export function GroupEc2InstanceContents(props: DiagramNodeProps) {
  return <Shape {...GROUP_EC2_INSTANCE_GROUPS} {...props} />
}
