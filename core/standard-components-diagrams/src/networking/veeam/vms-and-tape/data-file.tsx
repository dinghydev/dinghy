import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_FILE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.data_file;',
  _width: 47.2,
  _height: 60.8,
}

export function DataFile(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_FILE} {...props} _style={extendStyle(DATA_FILE, props)} />
  )
}
