import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE_WITH_ACTION_2 = {
  _style:
    'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#596780;fontStyle=1;whiteSpace=wrap',
  _width: 1,
  _height: 30,
}

export function TableWithAction2(props: DiagramNodeProps) {
  return <Shape {...TABLE_WITH_ACTION_2} {...props} />
}
