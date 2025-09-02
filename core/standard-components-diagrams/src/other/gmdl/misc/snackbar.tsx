import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNACKBAR = {
  _style: {
    entity:
      'shape=rect;strokeColor=none;fillColor=#333333;fontColor=#FFFFFF;align=left;spacing=16;fontSize=13;spacingLeft=8;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 48,
}

export function Snackbar(props: DiagramNodeProps) {
  return (
    <Shape {...SNACKBAR} {...props} _style={extendStyle(SNACKBAR, props)} />
  )
}
