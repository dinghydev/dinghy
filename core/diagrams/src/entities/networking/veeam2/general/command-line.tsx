import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMAND_LINE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.command_line;',
  },
  _original_width: 28.000000000000004,
  _original_height: 28.000000000000004,
}

export function CommandLine(props: NodeProps) {
  return (
    <Shape
      {...COMMAND_LINE}
      {...props}
      _style={extendStyle(COMMAND_LINE, props)}
    />
  )
}
