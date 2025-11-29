import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AWS_CLOUD = {
  _style: {
    container:
      'dashed=0;html=1;shape=mxgraph.aws3.cloud;fillColor=#F58536;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#F58536',
    },
  },
}

export function AwsCloud(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AWS_CLOUD)} />
}
