import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDUCATION = {
  _style:
    'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.education;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  _width: 20,
  _height: 20,
}

export function Education(props: DiagramNodeProps) {
  return <Shape {...EDUCATION} {...props} />
}
