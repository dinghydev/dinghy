import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPOT_INSTANCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.instance;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 123,
  _height: 97,
}

export function SpotInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPOT_INSTANCE}
      {...props}
      _style={extendStyle(SPOT_INSTANCE, props)}
    />
  )
}
