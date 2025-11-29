import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IAM = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.iam;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 42,
  _height: 81,
}

export function Iam(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IAM)} />
}
