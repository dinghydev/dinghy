import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKERS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.users;fillColor=#ACACAC;gradientColor=none;',
  _width: 66,
  _height: 63,
}

export function Workers(props: DiagramNodeProps) {
  return <Shape {...WORKERS} {...props} />
}
