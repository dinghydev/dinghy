import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIANGLE = {
  _style: {
    entity: 'triangle;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 80,
}

export function Triangle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRIANGLE)} />
}
