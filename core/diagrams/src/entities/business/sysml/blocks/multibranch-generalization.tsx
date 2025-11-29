import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIBRANCH_GENERALIZATION = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;endSize=12;endArrow=block;endFill=0;elbow=horizontal;rounded=0;labelBackgroundColor=default;fontFamily=Helvetica;fontSize=11;fontColor=default;shape=connector;',
  },
  _width: 1,
  _height: 50,
}

export function MultibranchGeneralization(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, MULTIBRANCH_GENERALIZATION)} />
  )
}
