import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_RIGHT = {
  _style: {
    entity: 'shape=singleArrow;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 60,
}

export function ArrowRight(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARROW_RIGHT)} />
}
