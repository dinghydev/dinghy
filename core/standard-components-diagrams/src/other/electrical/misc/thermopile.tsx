import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THERMOPILE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.thermopile',
  },
  _original_width: 80,
  _original_height: 82,
}

export function Thermopile(props: DiagramNodeProps) {
  return (
    <Shape {...THERMOPILE} {...props} _style={extendStyle(THERMOPILE, props)} />
  )
}
