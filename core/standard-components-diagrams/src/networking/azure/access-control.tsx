import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACCESS_CONTROL = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.access_control;',
  _width: 50,
  _height: 50,
}

export function AccessControl(props: DiagramNodeProps) {
  return <Shape {...ACCESS_CONTROL} {...props} />
}
