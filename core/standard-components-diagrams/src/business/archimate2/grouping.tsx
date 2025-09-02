import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUPING = {
  _style: {
    entity: 'swimlane;html=1;fillColor=#ffffff;whiteSpace=wrap',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Grouping(props: DiagramNodeProps) {
  return (
    <Shape {...GROUPING} {...props} _style={extendStyle(GROUPING, props)} />
  )
}
