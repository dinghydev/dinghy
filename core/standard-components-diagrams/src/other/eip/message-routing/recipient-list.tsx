import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RECIPIENT_LIST = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.recipient_list;',
  _width: 150,
  _height: 90,
}

export function RecipientList(props: DiagramNodeProps) {
  return <Shape {...RECIPIENT_LIST} {...props} />
}
