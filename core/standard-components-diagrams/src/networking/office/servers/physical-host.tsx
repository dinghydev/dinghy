import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHYSICAL_HOST = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.physical_host;fillColor=#2072B8;',
  _width: 27,
  _height: 52,
}

export function PhysicalHost(props: DiagramNodeProps) {
  return <Shape {...PHYSICAL_HOST} {...props} />
}
