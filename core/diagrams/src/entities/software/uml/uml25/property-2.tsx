import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROPERTY_2 = {
  _style: {
    entity: 'fontStyle=0;dashed=1;html=1;whiteSpace=wrap;',
  },
  _width: 140,
  _height: 30,
}

export function Property2(props: DiagramNodeProps) {
  return (
    <Shape {...PROPERTY_2} {...props} _style={extendStyle(PROPERTY_2, props)} />
  )
}
