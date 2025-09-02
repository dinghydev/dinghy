import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIALOG = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;shadow=1;fontSize=19;fontColor=#000000;spacingTop=-6;whiteSpace=wrap;spacing=16;align=left;verticalAlign=top;html=1;',
  },
  _original_width: 280,
  _original_height: 273,
}

export function Dialog(props: DiagramNodeProps) {
  return <Shape {...DIALOG} {...props} _style={extendStyle(DIALOG, props)} />
}
