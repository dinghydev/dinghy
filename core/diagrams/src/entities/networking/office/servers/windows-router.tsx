import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOWS_ROUTER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.windows_router;',
  },
  _original_width: 52,
  _original_height: 59,
}

export function WindowsRouter(props: NodeProps) {
  return (
    <Shape
      {...WINDOWS_ROUTER}
      {...props}
      _style={extendStyle(WINDOWS_ROUTER, props)}
    />
  )
}
