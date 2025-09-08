import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOADING_ARM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.loading_arm;pointerEvents=1;',
  },
  _original_width: 120,
  _original_height: 80,
}

export function LoadingArm(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOADING_ARM}
      {...props}
      _style={extendStyle(LOADING_ARM, props)}
    />
  )
}
