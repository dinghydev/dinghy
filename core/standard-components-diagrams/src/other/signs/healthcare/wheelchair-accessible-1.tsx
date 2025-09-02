import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WHEELCHAIR_ACCESSIBLE_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.wheelchair_accessible_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 87,
  _original_height: 99,
}

export function WheelchairAccessible1(props: DiagramNodeProps) {
  return (
    <Shape
      {...WHEELCHAIR_ACCESSIBLE_1}
      {...props}
      _style={extendStyle(WHEELCHAIR_ACCESSIBLE_1, props)}
    />
  )
}
