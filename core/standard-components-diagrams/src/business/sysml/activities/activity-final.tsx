import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIVITY_FINAL = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.actFinal;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _width: 40,
  _height: 40,
}

export function ActivityFinal(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVITY_FINAL}
      {...props}
      _style={extendStyle(ACTIVITY_FINAL, props)}
    />
  )
}
