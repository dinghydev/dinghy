import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CROSS = {
  _style: {
    entity: 'shape=cross;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Cross(props: DiagramNodeProps) {
  return <Shape {...CROSS} {...props} _style={extendStyle(CROSS, props)} />
}
