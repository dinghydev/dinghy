import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.icm;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 37,
  _height: 77,
}

export function Icm(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICM)} />
}
