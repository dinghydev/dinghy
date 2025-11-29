import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORKLIFT_MANUAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.forklift_(manual);',
  },
  _width: 140,
  _height: 100,
}

export function ForkliftManual(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FORKLIFT_MANUAL)} />
}
