import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAB = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.lab;',
  },
  _width: 47,
  _height: 50,
}

export function Lab(props: DiagramNodeProps) {
  return <Shape {...LAB} {...props} _style={extendStyle(LAB, props)} />
}
