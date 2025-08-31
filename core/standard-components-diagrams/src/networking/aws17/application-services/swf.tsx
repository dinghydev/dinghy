import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWF = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.swf;fillColor=#D9A741;gradientColor=none;',
  },
  _width: 76.5,
  _height: 93,
}

export function Swf(props: DiagramNodeProps) {
  return <Shape {...SWF} {...props} _style={extendStyle(SWF, props)} />
}
