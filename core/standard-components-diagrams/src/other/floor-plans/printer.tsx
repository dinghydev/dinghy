import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRINTER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.printer;',
  _width: 40,
  _height: 47,
}

export function Printer(props: DiagramNodeProps) {
  return <Shape {...PRINTER} {...props} />
}
