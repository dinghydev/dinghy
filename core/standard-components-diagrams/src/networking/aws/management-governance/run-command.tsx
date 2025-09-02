import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RUN_COMMAND = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.run_command;',
  },
  _original_width: 78,
  _original_height: 55,
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
