import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANDROID = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.android;fillColor=#A4CA39;strokeColor=none',
  _width: 67.60000000000001,
  _height: 80,
}

export function Android(props: DiagramNodeProps) {
  return <Shape {...ANDROID} {...props} />
}
