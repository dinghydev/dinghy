import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTANCES = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.instances;fillColor=#F58534;gradientColor=none;',
  },
  _width: 60,
  _height: 63,
}

export function Instances(props: DiagramNodeProps) {
  return (
    <Shape {...INSTANCES} {...props} _style={extendStyle(INSTANCES, props)} />
  )
}
