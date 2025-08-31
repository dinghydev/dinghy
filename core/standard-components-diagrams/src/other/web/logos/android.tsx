import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANDROID = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.android;fillColor=#A4CA39;strokeColor=none',
  },
  _width: 67.60000000000001,
  _height: 80,
}

export function Android(props: DiagramNodeProps) {
  return <Shape {...ANDROID} {...props} _style={extendStyle(ANDROID, props)} />
}
