import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TOAST = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFE0E0;html=1;whiteSpace=wrap;fillColor=#FEFEFE;fontColor=#212529;align=left;spacing=15;verticalAlign=bottom;',
  _width: 0,
  _height: 80,
}

export function Toast(props: DiagramNodeProps) {
  return <Shape {...TOAST} {...props} />
}
