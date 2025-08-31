import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NUMBER_ONE = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;strokeWidth=2;fontFamily=Tahoma;spacingBottom=4;spacingRight=2;strokeColor=#d3d3d3;',
  _width: 20,
  _height: 20,
}

export function NumberOne(props: DiagramNodeProps) {
  return (
    <Shape {...NUMBER_ONE} {...props} _style={extendStyle(NUMBER_ONE, props)} />
  )
}
