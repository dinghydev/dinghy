import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBSERVATORY = {
  _style: {
    entity: 'fillColor=#009271;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Observatory(props: NodeProps) {
  return (
    <Shape
      {...OBSERVATORY}
      {...props}
      _style={extendStyle(OBSERVATORY, props)}
    />
  )
}
