import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRAVEL = {
  _style:
    'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.travel;strokeColor=none;fillColor=#737373;shadow=0;direction=south;sketch=0;',
  _width: 20,
  _height: 20,
}

export function Travel(props: DiagramNodeProps) {
  return <Shape {...TRAVEL} {...props} />
}
