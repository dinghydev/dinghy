import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LICENSE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.license;',
  _width: 50.8,
  _height: 56.4,
}

export function License(props: DiagramNodeProps) {
  return <Shape {...LICENSE} {...props} _style={extendStyle(LICENSE, props)} />
}
