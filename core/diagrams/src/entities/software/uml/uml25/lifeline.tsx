import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIFELINE = {
  _style: {
    entity: 'rounded=0;dashed=0;container=0;collapsible=0;recursiveResize=0;',
  },
  _width: 0,
  _height: 160,
}

export function Lifeline(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIFELINE)} />
}
