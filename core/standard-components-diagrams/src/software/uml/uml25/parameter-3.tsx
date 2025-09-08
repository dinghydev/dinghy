import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARAMETER_3 = {
  _style: {
    entity: 'triangle;html=1;direction=north;',
  },
  _original_width: 2,
  _original_height: 40,
}

export function Parameter3(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARAMETER_3}
      {...props}
      _style={extendStyle(PARAMETER_3, props)}
    />
  )
}
