import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUPING = {
  _style: 'swimlane;html=1;fillColor=#ffffff;whiteSpace=wrap',
  _width: 100,
  _height: 75,
}

export function Grouping(props: DiagramNodeProps) {
  return (
    <Shape {...GROUPING} {...props} _style={extendStyle(GROUPING, props)} />
  )
}
