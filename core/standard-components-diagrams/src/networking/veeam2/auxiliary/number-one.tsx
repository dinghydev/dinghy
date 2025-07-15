import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NUMBER_ONE = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;strokeWidth=2;fontFamily=Tahoma;spacingBottom=4;spacingRight=2;strokeColor=#d3d3d3;',
  _width: 20,
  _height: 20,
}

export function NumberOne(props: DiagramNodeProps) {
  return <Shape {...NUMBER_ONE} {...props} />
}
