import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_STORE_3 = {
  _style:
    'shape=cylinder;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;',
  _width: 60,
  _height: 80,
}

export function DataStore3(props: DiagramNodeProps) {
  return <Shape {...DATA_STORE_3} {...props} />
}
