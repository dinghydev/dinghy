import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP = {
  _style:
    'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;',
  _width: 120,
  _height: 80,
}

export function Step(props: DiagramNodeProps) {
  return <Shape {...STEP} {...props} />
}
