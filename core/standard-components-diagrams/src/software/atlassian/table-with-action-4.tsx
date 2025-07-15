import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE_WITH_ACTION_4 = {
  _style: 'shape=line;strokeWidth=2;html=1;strokeColor=#3384FF;resizeWidth=1',
  _width: 5,
  _height: 30,
}

export function TableWithAction4(props: DiagramNodeProps) {
  return <Shape {...TABLE_WITH_ACTION_4} {...props} />
}
