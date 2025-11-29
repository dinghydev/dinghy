import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HYDRAULIC = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.hydraulic;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Hydraulic(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HYDRAULIC)} />
}
