import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPAQUE_ACTION = {
  _style: {
    entity: 'text;align=center;verticalAlign=middle;dashed=0;whiteSpace=wrap;',
  },
  _width: 140,
  _height: 40,
}

export function OpaqueAction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OPAQUE_ACTION)} />
}
