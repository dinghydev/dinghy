import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOADING_ARM = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.loading_arm;pointerEvents=1;',
  _width: 120,
  _height: 80,
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
