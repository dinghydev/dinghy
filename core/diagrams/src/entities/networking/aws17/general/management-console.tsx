import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGEMENT_CONSOLE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.management_console;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 63,
}

export function ManagementConsole(props: NodeProps) {
  return (
    <Shape
      {...MANAGEMENT_CONSOLE}
      {...props}
      _style={extendStyle(MANAGEMENT_CONSOLE, props)}
    />
  )
}
