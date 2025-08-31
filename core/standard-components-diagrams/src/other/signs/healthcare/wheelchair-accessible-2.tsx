import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WHEELCHAIR_ACCESSIBLE_2 = {
  _style:
    'shape=mxgraph.signs.healthcare.wheelchair_accessible_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 87,
  _height: 98,
}

export function WheelchairAccessible2(props: DiagramNodeProps) {
  return (
    <Shape
      {...WHEELCHAIR_ACCESSIBLE_2}
      {...props}
      _style={extendStyle(WHEELCHAIR_ACCESSIBLE_2, props)}
    />
  )
}
