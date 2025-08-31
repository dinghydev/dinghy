import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.apps;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 81,
  _height: 79.5,
}

export function Apps(props: DiagramNodeProps) {
  return <Shape {...APPS} {...props} _style={extendStyle(APPS, props)} />
}
