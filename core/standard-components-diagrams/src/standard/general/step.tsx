import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEP = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;',
  },
  _original_width: 120,
  _original_height: 80,
}

export function Step(props: DiagramNodeProps) {
  return <Shape {...STEP} {...props} _style={extendStyle(STEP, props)} />
}
