import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDIT = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.edit;',
  _width: 29.4,
  _height: 29.4,
}

export function Edit(props: DiagramNodeProps) {
  return <Shape {...EDIT} {...props} />
}
