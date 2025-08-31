import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIMITED_SPRUCE = {
  _style: {
    entity: 'fillColor=#36424A;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function LimitedSpruce(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIMITED_SPRUCE}
      {...props}
      _style={extendStyle(LIMITED_SPRUCE, props)}
    />
  )
}
