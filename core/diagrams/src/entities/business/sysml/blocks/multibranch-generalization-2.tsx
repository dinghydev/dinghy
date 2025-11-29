import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIBRANCH_GENERALIZATION_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=default;fontFamily=Helvetica;fontSize=11;fontColor=default;startSize=14;shape=connector;',
  },
  _width: 2,
  _height: 50,
}

export function MultibranchGeneralization2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MULTIBRANCH_GENERALIZATION_2)}
    />
  )
}
