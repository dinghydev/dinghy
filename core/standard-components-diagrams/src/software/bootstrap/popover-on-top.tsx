import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POPOVER_ON_TOP = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.popover;fillColor=#ffffff;strokeColor=#CCCCCC;dx=100;dy=5;rSize=5;whiteSpace=wrap;verticalAlign=top;spacing=10;fontSize=10;spacingLeft=0;align=left;spacingTop=-5;',
  _width: 0,
  _height: 80,
}

export function PopoverOnTop(props: DiagramNodeProps) {
  return <Shape {...POPOVER_ON_TOP} {...props} />
}
