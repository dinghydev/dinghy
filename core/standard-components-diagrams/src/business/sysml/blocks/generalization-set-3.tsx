import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERALIZATION_SET_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=none;dashed=1;labelPosition=right;align=left;',
  },
  _original_width: 3,
  _original_height: 80,
}

export function GeneralizationSet3(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERALIZATION_SET_3}
      {...props}
      _style={extendStyle(GENERALIZATION_SET_3, props)}
    />
  )
}
