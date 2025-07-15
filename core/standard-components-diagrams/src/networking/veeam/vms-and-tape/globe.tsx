import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GLOBE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.globe;',
  _width: 44.8,
  _height: 44.8,
}

export function Globe(props: DiagramNodeProps) {
  return <Shape {...GLOBE} {...props} />
}
