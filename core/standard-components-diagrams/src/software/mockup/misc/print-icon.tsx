import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRINT_ICON = {
  _style:
    'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.printIcon;',
  _width: 50,
  _height: 50,
}

export function PrintIcon(props: DiagramNodeProps) {
  return <Shape {...PRINT_ICON} {...props} />
}
