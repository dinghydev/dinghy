import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BATHTUB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bathtub2;',
  },
  _original_width: 180,
  _original_height: 60,
}

export function Bathtub(props: DiagramNodeProps) {
  return <Shape {...BATHTUB} {...props} _style={extendStyle(BATHTUB, props)} />
}
