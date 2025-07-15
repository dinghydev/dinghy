import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCUMENTS = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.documents;',
  _width: 22.5,
  _height: 30,
}

export function Documents(props: DiagramNodeProps) {
  return <Shape {...DOCUMENTS} {...props} />
}
