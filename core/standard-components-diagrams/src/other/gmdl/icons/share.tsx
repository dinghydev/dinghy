import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARE = {
  _style:
    'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.share2;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  _width: 20,
  _height: 20,
}

export function Share(props: DiagramNodeProps) {
  return <Shape {...SHARE} {...props} />
}
