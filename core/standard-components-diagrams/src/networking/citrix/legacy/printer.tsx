import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRINTER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.printer;',
  _width: 70,
  _height: 70,
}

export function Printer(props: DiagramNodeProps) {
  return <Shape {...PRINTER} {...props} />
}
