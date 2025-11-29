import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE = {
  _style: {
    entity:
      'childLayout=tableLayout;recursiveResize=0;strokeColor=#98bf21;fillColor=#A7C942;shadow=1;',
  },
  _width: 280,
  _height: 160,
}

export function Table(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE)} />
}
