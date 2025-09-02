import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OR = {
  _style: {
    entity: 'shape=xor;whiteSpace=wrap;html=1;',
  },
  _original_width: 60,
  _original_height: 80,
}

export function Or(props: DiagramNodeProps) {
  return <Shape {...OR} {...props} _style={extendStyle(OR, props)} />
}
