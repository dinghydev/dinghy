import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POLICY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.policy;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 55.5,
  _height: 90,
}

export function Policy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POLICY)} />
}
