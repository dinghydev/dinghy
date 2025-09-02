import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERALIZATION_SET_2 = {
  _style: {
    entity: 'edgeStyle=none;html=1;endArrow=block;endFill=0;endSize=12;',
  },
  _original_width: 150,
  _original_height: 80,
}

export function GeneralizationSet2(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERALIZATION_SET_2}
      {...props}
      _style={extendStyle(GENERALIZATION_SET_2, props)}
    />
  )
}
