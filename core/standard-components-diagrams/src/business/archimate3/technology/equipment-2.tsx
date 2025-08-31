import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EQUIPMENT_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.equipment;',
  _width: 60,
  _height: 60,
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
