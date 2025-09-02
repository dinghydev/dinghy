import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA = {
  _style: {
    entity:
      'shape=parallelogram;html=1;strokeWidth=2;perimeter=parallelogramPerimeter;whiteSpace=wrap;rounded=1;arcSize=12;size=0.23;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Data(props: DiagramNodeProps) {
  return <Shape {...DATA} {...props} _style={extendStyle(DATA, props)} />
}
