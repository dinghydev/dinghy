import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMALL_KITCHEN_TABLE_3 = {
  _style: 'shape=rect;shadow=0;html=1;',
  _width: 2,
  _height: 120,
}

export function SmallKitchenTable3(props: DiagramNodeProps) {
  return <Shape {...SMALL_KITCHEN_TABLE_3} {...props} />
}
