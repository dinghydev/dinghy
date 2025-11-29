import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.sun',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Sun(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUN)} />
}
