import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTERPRISE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.enterprise;pointerEvents=1;',
  _width: 30,
  _height: 50,
}

export function Enterprise(props: DiagramNodeProps) {
  return <Shape {...ENTERPRISE} {...props} />
}
