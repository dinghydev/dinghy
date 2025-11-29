import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WHEELCHAIR_ACCESSIBLE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.wheelchair_accessible_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 87,
  _original_height: 98,
}

export function WheelchairAccessible2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, WHEELCHAIR_ACCESSIBLE_2)} />
  )
}
