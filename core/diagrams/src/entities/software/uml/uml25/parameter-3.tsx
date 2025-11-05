import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARAMETER_3 = {
  _style: {
    entity: 'triangle;html=1;direction=north;',
  },
  _width: 2,
  _height: 40,
}

export function Parameter3(props: NodeProps) {
  return (
    <Shape
      {...PARAMETER_3}
      {...props}
      _style={extendStyle(PARAMETER_3, props)}
    />
  )
}
