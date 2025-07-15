import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DESTRUCTION = {
  _style:
    'shape=umlDestroy;whiteSpace=wrap;html=1;strokeWidth=3;targetShapes=umlLifeline;',
  _width: 30,
  _height: 30,
}

export function Destruction(props: DiagramNodeProps) {
  return <Shape {...DESTRUCTION} {...props} />
}
