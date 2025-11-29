import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGEMENT_CONSOLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.management_console;',
  },
  _original_width: 58,
  _original_height: 48,
}

export function ManagementConsole(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MANAGEMENT_CONSOLE)} />
}
