import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HYDRAULIC = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.hydraulic;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Hydraulic(props: DiagramNodeProps) {
  return (
    <Shape {...HYDRAULIC} {...props} _style={extendStyle(HYDRAULIC, props)} />
  )
}
