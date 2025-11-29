import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sts;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 61.5,
  _height: 34.5,
}

export function Sts(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STS)} />
}
