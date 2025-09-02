import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIBRANCH_GENERALIZATION_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=default;fontFamily=Helvetica;fontSize=11;fontColor=default;startSize=14;shape=connector;',
  },
  _original_width: 2,
  _original_height: 50,
}

export function MultibranchGeneralization2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIBRANCH_GENERALIZATION_2}
      {...props}
      _style={extendStyle(MULTIBRANCH_GENERALIZATION_2, props)}
    />
  )
}
