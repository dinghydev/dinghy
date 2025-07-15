import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGEMENT_CONSOLE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.management_console;fillColor=#F58534;gradientColor=none;',
  _width: 63,
  _height: 63,
}

export function ManagementConsole(props: DiagramNodeProps) {
  return <Shape {...MANAGEMENT_CONSOLE} {...props} />
}
