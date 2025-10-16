import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STABLE = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.stable;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Stable(props: DiagramNodeProps) {
  return <Shape {...STABLE} {...props} _style={extendStyle(STABLE, props)} />
}
