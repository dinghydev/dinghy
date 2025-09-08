import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WHEELCHAIR_ACCESSIBLE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.wheelchair_accessible_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 87,
  _original_height: 98,
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
