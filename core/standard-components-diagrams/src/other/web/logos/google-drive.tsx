import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GOOGLE_DRIVE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_drive',
  _width: 66.4,
  _height: 58,
}

export function GoogleDrive(props: DiagramNodeProps) {
  return <Shape {...GOOGLE_DRIVE} {...props} />
}
