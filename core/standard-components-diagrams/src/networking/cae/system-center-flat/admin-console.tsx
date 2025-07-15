import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ADMIN_CONSOLE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.admin_console',
  _width: 50,
  _height: 36,
}

export function AdminConsole(props: DiagramNodeProps) {
  return <Shape {...ADMIN_CONSOLE} {...props} />
}
