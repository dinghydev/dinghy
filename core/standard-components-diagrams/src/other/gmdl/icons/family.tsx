import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAMILY = {
  _style:
    'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.family;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  _width: 20,
  _height: 20,
}

export function Family(props: DiagramNodeProps) {
  return <Shape {...FAMILY} {...props} />
}
