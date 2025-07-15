import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CRT_TV = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.crt_tv;',
  _width: 60,
  _height: 40,
}

export function CrtTv(props: DiagramNodeProps) {
  return <Shape {...CRT_TV} {...props} />
}
