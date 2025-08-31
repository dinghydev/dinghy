import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.file;',
  _width: 36.8,
  _height: 50.8,
}

export function File(props: DiagramNodeProps) {
  return <Shape {...FILE} {...props} _style={extendStyle(FILE, props)} />
}
