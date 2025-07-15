import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHANGE_SET = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.change_set;fillColor=#759C3E;gradientColor=none;',
  _width: 55.5,
  _height: 64.5,
}

export function ChangeSet(props: DiagramNodeProps) {
  return <Shape {...CHANGE_SET} {...props} />
}
