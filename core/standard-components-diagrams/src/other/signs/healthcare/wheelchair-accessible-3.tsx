import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WHEELCHAIR_ACCESSIBLE_3 = {
  _style:
    'shape=mxgraph.signs.healthcare.wheelchair_accessible_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 76,
  _height: 99,
}

export function WheelchairAccessible3(props: DiagramNodeProps) {
  return (
    <Shape
      {...WHEELCHAIR_ACCESSIBLE_3}
      {...props}
      _style={extendStyle(WHEELCHAIR_ACCESSIBLE_3, props)}
    />
  )
}
