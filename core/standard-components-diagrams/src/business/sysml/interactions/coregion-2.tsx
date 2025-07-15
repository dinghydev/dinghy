import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COREGION_2 = {
  _style: 'shape=ellipse;html=1;fillColor=strokeColor;',
  _width: 2,
  _height: 220,
}

export function Coregion2(props: DiagramNodeProps) {
  return <Shape {...COREGION_2} {...props} />
}
