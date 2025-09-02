import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.ios;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _original_width: 73.60000000000001,
  _original_height: 39.400000000000006,
}

export function Ios(props: DiagramNodeProps) {
  return <Shape {...IOS} {...props} _style={extendStyle(IOS, props)} />
}
