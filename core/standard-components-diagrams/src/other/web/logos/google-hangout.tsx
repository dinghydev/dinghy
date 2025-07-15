import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GOOGLE_HANGOUT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_hangout;fillColor=#4BA139;strokeColor=none',
  _width: 64.8,
  _height: 75.4,
}

export function GoogleHangout(props: DiagramNodeProps) {
  return <Shape {...GOOGLE_HANGOUT} {...props} />
}
