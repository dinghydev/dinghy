import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KINESIS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.kinesis;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function Kinesis(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, KINESIS)} />
}
