import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOOGLE_DRIVE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_drive',
  },
  _original_width: 66.4,
  _original_height: 58,
}

export function GoogleDrive(props: DiagramNodeProps) {
  return (
    <Shape
      {...GOOGLE_DRIVE}
      {...props}
      _style={extendStyle(GOOGLE_DRIVE, props)}
    />
  )
}
