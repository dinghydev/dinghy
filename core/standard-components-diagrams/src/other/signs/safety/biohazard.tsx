import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BIOHAZARD = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.biohazard;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 106,
  _height: 97,
}

export function Biohazard(props: DiagramNodeProps) {
  return (
    <Shape {...BIOHAZARD} {...props} _style={extendStyle(BIOHAZARD, props)} />
  )
}
