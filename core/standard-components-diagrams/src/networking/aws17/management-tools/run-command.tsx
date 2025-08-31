import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RUN_COMMAND = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.run_command;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 114,
  _height: 82.5,
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
