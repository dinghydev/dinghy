import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VSB_FILE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vsb_file;',
  },
  _width: 36.8,
  _height: 50.8,
}

export function VsbFile(props: DiagramNodeProps) {
  return (
    <Shape {...VSB_FILE} {...props} _style={extendStyle(VSB_FILE, props)} />
  )
}
