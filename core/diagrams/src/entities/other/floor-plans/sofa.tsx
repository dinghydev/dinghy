import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOFA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sofa;',
  },
  _original_width: 90,
  _original_height: 80,
}

export function Sofa(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SOFA)} />
}
