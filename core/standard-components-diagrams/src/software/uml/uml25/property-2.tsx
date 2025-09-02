import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROPERTY_2 = {
  _style: {
    entity: 'fontStyle=0;dashed=1;html=1;whiteSpace=wrap;',
  },
  _original_width: 140,
  _original_height: 30,
}

export function Property2(props: DiagramNodeProps) {
  return (
    <Shape {...PROPERTY_2} {...props} _style={extendStyle(PROPERTY_2, props)} />
  )
}
