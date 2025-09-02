import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WADING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.wading;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 98,
}

export function Wading(props: DiagramNodeProps) {
  return <Shape {...WADING} {...props} _style={extendStyle(WADING, props)} />
}
