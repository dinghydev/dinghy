import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_4 = {
  _style: {
    entity:
      'childLayout=tableLayout;recursiveResize=0;shadow=0;fillColor=none;',
  },
  _width: 180,
  _height: 140,
}

export function Table4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_4)} />
}
