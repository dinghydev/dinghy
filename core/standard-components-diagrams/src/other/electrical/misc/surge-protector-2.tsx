import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SURGE_PROTECTOR_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.surge_protector_2;',
  },
  _width: 70,
  _height: 24,
}

export function SurgeProtector2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SURGE_PROTECTOR_2}
      {...props}
      _style={extendStyle(SURGE_PROTECTOR_2, props)}
    />
  )
}
