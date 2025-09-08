import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RUN_COMMAND = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.run_command;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 114,
  _original_height: 82.5,
}

export function RunCommand(props: DiagramNodeProps) {
  return (
    <Shape
      {...RUN_COMMAND}
      {...props}
      _style={extendStyle(RUN_COMMAND, props)}
    />
  )
}
