import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMPORT_EXPORT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.import_export;fillColor=#E05243;gradientColor=none;',
  _width: 64.5,
  _height: 63,
}

export function ImportExport(props: DiagramNodeProps) {
  return <Shape {...IMPORT_EXPORT} {...props} />
}
