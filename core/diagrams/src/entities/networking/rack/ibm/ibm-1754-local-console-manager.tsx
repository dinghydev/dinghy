import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IBM_1754_LOCAL_CONSOLE_MANAGER = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_1754_local_console_manager;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function Ibm1754LocalConsoleManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_1754_LOCAL_CONSOLE_MANAGER}
      {...props}
      _style={extendStyle(IBM_1754_LOCAL_CONSOLE_MANAGER, props)}
    />
  )
}
