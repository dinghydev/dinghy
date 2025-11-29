import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EYE_WASH = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.eye_wash;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 93,
  _original_height: 99,
}

export function EyeWash(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EYE_WASH)} />
}
