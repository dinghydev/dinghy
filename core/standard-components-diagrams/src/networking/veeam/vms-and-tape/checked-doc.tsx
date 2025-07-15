import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECKED_DOC = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.checked_doc;',
  _width: 50.8,
  _height: 61.6,
}

export function CheckedDoc(props: DiagramNodeProps) {
  return <Shape {...CHECKED_DOC} {...props} />
}
