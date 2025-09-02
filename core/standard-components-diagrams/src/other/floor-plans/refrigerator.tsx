import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REFRIGERATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.refrigerator;',
  },
  _original_width: 60,
  _original_height: 62,
}

export function Refrigerator(props: DiagramNodeProps) {
  return (
    <Shape
      {...REFRIGERATOR}
      {...props}
      _style={extendStyle(REFRIGERATOR, props)}
    />
  )
}
