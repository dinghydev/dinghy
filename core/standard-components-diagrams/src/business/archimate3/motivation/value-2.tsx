import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VALUE_2 = {
  _style: {
    entity: 'shape=ellipse;html=1;whiteSpace=wrap;fillColor=#CCCCFF;',
  },
  _original_width: 70,
  _original_height: 35,
}

export function Value2(props: DiagramNodeProps) {
  return <Shape {...VALUE_2} {...props} _style={extendStyle(VALUE_2, props)} />
}
