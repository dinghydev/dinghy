import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VSAN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vsan;',
  },
  _original_width: 43.5,
  _original_height: 50,
}

export function Vsan(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VSAN)} />
}
