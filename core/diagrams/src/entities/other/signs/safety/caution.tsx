import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAUTION = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.caution;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function Caution(props: DiagramNodeProps) {
  return <Shape {...CAUTION} {...props} _style={extendStyle(CAUTION, props)} />
}
