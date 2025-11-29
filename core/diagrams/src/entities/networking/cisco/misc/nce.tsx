import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NCE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.nce;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 90,
  _height: 64,
}

export function Nce(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NCE)} />
}
