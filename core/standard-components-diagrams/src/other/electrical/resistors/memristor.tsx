import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEMRISTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.memristor_1;',
  },
  _original_width: 100,
  _original_height: 20,
}

export function Memristor(props: DiagramNodeProps) {
  return (
    <Shape {...MEMRISTOR} {...props} _style={extendStyle(MEMRISTOR, props)} />
  )
}
