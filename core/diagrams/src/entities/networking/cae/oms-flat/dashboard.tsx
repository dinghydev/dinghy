import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DASHBOARD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.dashboard',
  },
  _original_width: 50,
  _original_height: 41,
}

export function Dashboard(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DASHBOARD)} />
}
