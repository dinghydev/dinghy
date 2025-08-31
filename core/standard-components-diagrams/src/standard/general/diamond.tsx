import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAMOND = {
  _style: {
    entity: 'rhombus;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function Diamond(props: DiagramNodeProps) {
  return <Shape {...DIAMOND} {...props} _style={extendStyle(DIAMOND, props)} />
}
