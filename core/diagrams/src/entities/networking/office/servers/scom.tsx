import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCOM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.scom;',
  },
  _original_width: 56,
  _original_height: 53,
}

export function Scom(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCOM)} />
}
