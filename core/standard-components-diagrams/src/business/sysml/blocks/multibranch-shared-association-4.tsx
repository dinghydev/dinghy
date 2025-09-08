import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTIBRANCH_SHARED_ASSOCIATION_4 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=left;verticalAlign=bottom;endArrow=diamondThin;rounded=0;endFill=0;endSize=12;labelBackgroundColor=none;',
  },
  _original_width: 3,
  _original_height: 50,
}

export function MultibranchSharedAssociation4(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIBRANCH_SHARED_ASSOCIATION_4}
      {...props}
      _style={extendStyle(MULTIBRANCH_SHARED_ASSOCIATION_4, props)}
    />
  )
}
