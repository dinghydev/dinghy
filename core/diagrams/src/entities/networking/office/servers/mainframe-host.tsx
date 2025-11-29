import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAINFRAME_HOST = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.mainframe_host;',
  },
  _original_width: 44,
  _original_height: 42,
}

export function MainframeHost(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MAINFRAME_HOST)} />
}
