import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEREOTYPE_LABEL = {
  _style: {
    entity: 'text;html=1;align=center;',
  },
  _width: 200,
  _height: 25,
}

export function StereotypeLabel(props: NodeProps) {
  return (
    <Shape
      {...STEREOTYPE_LABEL}
      {...props}
      _style={extendStyle(STEREOTYPE_LABEL, props)}
    />
  )
}
