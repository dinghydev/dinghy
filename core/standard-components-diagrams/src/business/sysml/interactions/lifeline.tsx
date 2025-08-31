import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIFELINE = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 150,
}

export function Lifeline(props: DiagramNodeProps) {
  return (
    <Shape {...LIFELINE} {...props} _style={extendStyle(LIFELINE, props)} />
  )
}
