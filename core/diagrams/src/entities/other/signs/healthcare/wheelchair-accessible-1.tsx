import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WHEELCHAIR_ACCESSIBLE_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.wheelchair_accessible_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 87,
  _original_height: 99,
}

export function WheelchairAccessible1(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, WHEELCHAIR_ACCESSIBLE_1)} />
  )
}
