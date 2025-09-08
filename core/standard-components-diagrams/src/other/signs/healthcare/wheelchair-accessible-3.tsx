import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WHEELCHAIR_ACCESSIBLE_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.wheelchair_accessible_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 76,
  _original_height: 99,
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
