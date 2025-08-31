import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#CFCFCF;gradientColor=none;',
  },
  _width: 73.5,
  _height: 84,
}

export function Ios(props: DiagramNodeProps) {
  return <Shape {...IOS} {...props} _style={extendStyle(IOS, props)} />
}
