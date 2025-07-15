import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOBILE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.mobile;pointerEvents=1;',
  _width: 35,
  _height: 50,
}

export function Mobile(props: DiagramNodeProps) {
  return <Shape {...MOBILE} {...props} />
}
