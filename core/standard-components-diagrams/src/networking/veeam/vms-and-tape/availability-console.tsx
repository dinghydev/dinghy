import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVAILABILITY_CONSOLE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.availability_console;',
  _width: 44.8,
  _height: 44.8,
}

export function AvailabilityConsole(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVAILABILITY_CONSOLE}
      {...props}
      _style={extendStyle(AVAILABILITY_CONSOLE, props)}
    />
  )
}
