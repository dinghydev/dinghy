import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLIPBOARD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.clipboard;',
  _width: 40,
  _height: 52,
}

export function Clipboard(props: DiagramNodeProps) {
  return <Shape {...CLIPBOARD} {...props} />
}
