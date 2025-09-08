import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NORMALLED_JACKS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.normalled_jacks2',
  },
  _original_width: 230,
  _original_height: 65,
}

export function NormalledJacks(props: DiagramNodeProps) {
  return (
    <Shape
      {...NORMALLED_JACKS}
      {...props}
      _style={extendStyle(NORMALLED_JACKS, props)}
    />
  )
}
