import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROBABILITY_7 = {
  _style: {
    entity: 'shape=rect;whiteSpace=wrap;align=center;html=1;',
  },
  _width: 250,
  _height: 60,
}

export function Probability7(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROBABILITY_7}
      {...props}
      _style={extendStyle(PROBABILITY_7, props)}
    />
  )
}
