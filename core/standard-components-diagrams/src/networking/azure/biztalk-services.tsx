import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIZTALK_SERVICES = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.biztalk_services;',
  _width: 50,
  _height: 50,
}

export function BiztalkServices(props: DiagramNodeProps) {
  return <Shape {...BIZTALK_SERVICES} {...props} />
}
