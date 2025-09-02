import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIOHAZARD = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.biohazard;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 106,
  _original_height: 97,
}

export function Biohazard(props: DiagramNodeProps) {
  return (
    <Shape {...BIOHAZARD} {...props} _style={extendStyle(BIOHAZARD, props)} />
  )
}
