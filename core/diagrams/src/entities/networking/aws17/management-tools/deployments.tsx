import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEPLOYMENTS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.deployments;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 81,
  _original_height: 76.5,
}

export function Deployments(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEPLOYMENTS)} />
}
