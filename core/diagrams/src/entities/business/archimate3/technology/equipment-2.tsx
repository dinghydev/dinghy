import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EQUIPMENT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.equipment;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Equipment2(props: DiagramNodeProps) {
  return (
    <Shape
      {...EQUIPMENT_2}
      {...props}
      _style={extendStyle(EQUIPMENT_2, props)}
    />
  )
}
