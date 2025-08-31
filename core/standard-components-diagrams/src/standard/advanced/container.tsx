import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER = {
  _style: {
    entity: 'swimlane;',
  },
  _width: 200,
  _height: 200,
}

export function Container(props: DiagramNodeProps) {
  return (
    <Shape {...CONTAINER} {...props} _style={extendStyle(CONTAINER, props)} />
  )
}
