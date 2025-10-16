import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CSV_FILE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.csv_file;',
  },
  _original_width: 59,
  _original_height: 43,
}

export function CsvFile(props: DiagramNodeProps) {
  return (
    <Shape {...CSV_FILE} {...props} _style={extendStyle(CSV_FILE, props)} />
  )
}
