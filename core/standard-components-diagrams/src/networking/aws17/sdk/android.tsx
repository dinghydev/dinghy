import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANDROID = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#96BF3D;gradientColor=none;',
  },
  _width: 73.5,
  _height: 84,
}

export function Android(props: DiagramNodeProps) {
  return <Shape {...ANDROID} {...props} _style={extendStyle(ANDROID, props)} />
}
