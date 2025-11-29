import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETRANGER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.netranger;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 75,
  _height: 51,
}

export function Netranger(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETRANGER)} />
}
