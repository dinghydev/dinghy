import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CROSS = {
  _style: {
    entity: 'shape=cross;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function Cross(props: DiagramNodeProps) {
  return <Shape {...CROSS} {...props} _style={extendStyle(CROSS, props)} />
}
