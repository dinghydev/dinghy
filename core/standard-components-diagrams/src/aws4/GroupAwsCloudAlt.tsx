import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROUP_AWS_CLOUD_ALT = {
  _icon: 'mxgraph.aws4.group_aws_cloud_alt',
}

export function GroupAwsCloudAlt(props: DiagramNodeProps) {
  return <Shape {...GROUP_AWS_CLOUD_ALT} {...props} />
}
