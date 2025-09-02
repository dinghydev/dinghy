import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHAIR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;',
  },
  _original_width: 41,
  _original_height: 52,
}

export function Chair(props: DiagramNodeProps) {
  return <Shape {...CHAIR} {...props} _style={extendStyle(CHAIR, props)} />
}
