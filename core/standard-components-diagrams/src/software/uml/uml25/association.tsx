import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSOCIATION = {
  _style: {
    entity: 'fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _width: 140,
  _height: 30,
}

export function Association(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASSOCIATION}
      {...props}
      _style={extendStyle(ASSOCIATION, props)}
    />
  )
}
