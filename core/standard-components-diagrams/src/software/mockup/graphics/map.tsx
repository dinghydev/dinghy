import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAP = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.map;',
  _width: 250,
  _height: 250,
}

export function Map(props: DiagramNodeProps) {
  return <Shape {...MAP} {...props} />
}
