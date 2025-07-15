import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ZIPPED = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.zipped;pointerEvents=1;',
  _width: 6.8,
  _height: 57.2,
}

export function Zipped(props: DiagramNodeProps) {
  return <Shape {...ZIPPED} {...props} />
}
