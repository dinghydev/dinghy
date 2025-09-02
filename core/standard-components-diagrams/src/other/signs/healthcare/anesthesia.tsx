import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANESTHESIA = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.anesthesia;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 85,
}

export function Anesthesia(props: DiagramNodeProps) {
  return (
    <Shape {...ANESTHESIA} {...props} _style={extendStyle(ANESTHESIA, props)} />
  )
}
