import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTAPAPER = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.instapaper',
  _width: 27.6,
  _height: 70.2,
}

export function Instapaper(props: DiagramNodeProps) {
  return <Shape {...INSTAPAPER} {...props} />
}
