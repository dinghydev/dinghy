import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STABLE = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.stable;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function Stable(props: DiagramNodeProps) {
  return <Shape {...STABLE} {...props} _style={extendStyle(STABLE, props)} />
}
