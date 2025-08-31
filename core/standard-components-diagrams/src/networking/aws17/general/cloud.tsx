import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloud_2;fillColor=#F58534;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Cloud(props: DiagramNodeProps) {
  return <Shape {...CLOUD} {...props} _style={extendStyle(CLOUD, props)} />
}
