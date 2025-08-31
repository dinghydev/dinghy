import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_2 = {
  _style: 'swimlane;whiteSpace=wrap;html=1;',
  _width: 200,
  _height: 200,
}

export function Container2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_2}
      {...props}
      _style={extendStyle(CONTAINER_2, props)}
    />
  )
}
