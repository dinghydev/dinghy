import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USE_CASE = {
  _style: {
    entity:
      'swimlane;fontStyle=1;align=center;horizontal=1;startSize=30;collapsible=0;html=1;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 140,
}

export function UseCase(props: DiagramNodeProps) {
  return (
    <Shape {...USE_CASE} {...props} _style={extendStyle(USE_CASE, props)} />
  )
}
