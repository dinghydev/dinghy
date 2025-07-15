import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIEW_LIST = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.view_list',
  _width: 81,
  _height: 100,
}

export function ViewList(props: DiagramNodeProps) {
  return <Shape {...VIEW_LIST} {...props} />
}
