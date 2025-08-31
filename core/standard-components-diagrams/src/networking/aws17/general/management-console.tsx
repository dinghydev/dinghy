import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGEMENT_CONSOLE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.management_console;fillColor=#F58534;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ManagementConsole(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGEMENT_CONSOLE}
      {...props}
      _style={extendStyle(MANAGEMENT_CONSOLE, props)}
    />
  )
}
