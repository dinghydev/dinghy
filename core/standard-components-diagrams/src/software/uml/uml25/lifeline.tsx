import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIFELINE = {
  _style: {
    entity: 'rounded=0;dashed=0;container=0;collapsible=0;recursiveResize=0;',
  },
  _width: 0,
  _height: 160,
}

export function Lifeline(props: DiagramNodeProps) {
  return (
    <Shape {...LIFELINE} {...props} _style={extendStyle(LIFELINE, props)} />
  )
}
