import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIFELINE = {
  _style: {
    entity: 'rounded=0;dashed=0;container=0;collapsible=0;recursiveResize=0;',
  },
  _original_width: 0,
  _original_height: 160,
}

export function Lifeline(props: DiagramNodeProps) {
  return (
    <Shape {...LIFELINE} {...props} _style={extendStyle(LIFELINE, props)} />
  )
}
