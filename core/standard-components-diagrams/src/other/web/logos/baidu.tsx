import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAIDU = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.baidu;fillColor=#3F4D9E',
  },
  _width: 71,
  _height: 77,
}

export function Baidu(props: DiagramNodeProps) {
  return <Shape {...BAIDU} {...props} _style={extendStyle(BAIDU, props)} />
}
