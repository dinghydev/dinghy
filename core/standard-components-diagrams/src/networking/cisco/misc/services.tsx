import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICES = {
  _style:
    'shape=mxgraph.cisco.misc.services;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 56,
  _height: 54,
}

export function Services(props: DiagramNodeProps) {
  return (
    <Shape {...SERVICES} {...props} _style={extendStyle(SERVICES, props)} />
  )
}
