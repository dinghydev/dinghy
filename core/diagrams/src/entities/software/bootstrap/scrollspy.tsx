import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCROLLSPY = {
  _style: {
    entity:
      'fillColor=#F8F9FA;strokeColor=none;align=left;fontSize=14;spacing=10;',
  },
  _width: 0,
  _height: 300,
}

export function Scrollspy(props: NodeProps) {
  return (
    <Shape {...SCROLLSPY} {...props} _style={extendStyle(SCROLLSPY, props)} />
  )
}
