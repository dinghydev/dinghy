import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSLATE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.translate',
  _width: 68.4,
  _height: 67,
}

export function Translate(props: DiagramNodeProps) {
  return <Shape {...TRANSLATE} {...props} />
}
