import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VDA = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.vda;',
  },
  _original_width: 50,
  _original_height: 41.185,
}

export function Vda(props: NodeProps) {
  return <Shape {...VDA} {...props} _style={extendStyle(VDA, props)} />
}
