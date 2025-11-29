import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DELAY_ELEMENT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.delay_element',
  },
  _original_width: 100,
  _original_height: 100,
}

export function DelayElement(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DELAY_ELEMENT)} />
}
