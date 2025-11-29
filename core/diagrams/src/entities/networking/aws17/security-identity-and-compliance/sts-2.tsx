import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STS_2 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sts_2;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 46.5,
  _original_height: 60,
}

export function Sts2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STS_2)} />
}
