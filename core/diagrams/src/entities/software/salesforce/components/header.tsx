import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEADER = {
  _style: {
    entity: 'strokeColor=none;fillColor=#d9d9d9;',
  },
  _width: 0,
  _height: 160,
}

export function Header(props: NodeProps) {
  return <Shape {...HEADER} {...props} _style={extendStyle(HEADER, props)} />
}
