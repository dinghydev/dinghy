import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAINFRAME = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.mainframe;',
  _width: 58,
  _height: 42,
}

export function Mainframe(props: DiagramNodeProps) {
  return <Shape {...MAINFRAME} {...props} />
}
