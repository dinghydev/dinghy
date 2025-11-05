import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VSS = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.vss;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 64,
  _height: 86,
}

export function Vss(props: NodeProps) {
  return <Shape {...VSS} {...props} _style={extendStyle(VSS, props)} />
}
