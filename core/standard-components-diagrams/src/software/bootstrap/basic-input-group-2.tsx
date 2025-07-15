import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BASIC_INPUT_GROUP_2 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;html=1;whiteSpace=wrap;fillColor=none;fontColor=#212529;align=left;spacingLeft=0;fontSize=14;',
  _width: 2,
  _height: 330,
}

export function BasicInputGroup2(props: DiagramNodeProps) {
  return <Shape {...BASIC_INPUT_GROUP_2} {...props} />
}
