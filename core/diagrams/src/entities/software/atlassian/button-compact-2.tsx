import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_COMPACT_2 = {
  _style: {
    entity: 'shape=ellipse;fillColor=#596780;strokeColor=none;html=1;sketch=0;',
  },
  _width: 1,
  _height: 33,
}

export function ButtonCompact2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_COMPACT_2)} />
}
