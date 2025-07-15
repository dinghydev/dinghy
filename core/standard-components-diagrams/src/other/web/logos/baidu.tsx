import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAIDU = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.baidu;fillColor=#3F4D9E',
  _width: 71,
  _height: 77,
}

export function Baidu(props: DiagramNodeProps) {
  return <Shape {...BAIDU} {...props} />
}
