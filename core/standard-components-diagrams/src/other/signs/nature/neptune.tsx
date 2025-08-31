import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEPTUNE = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.neptune;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 87,
  _height: 98,
}

export function Neptune(props: DiagramNodeProps) {
  return <Shape {...NEPTUNE} {...props} _style={extendStyle(NEPTUNE, props)} />
}
