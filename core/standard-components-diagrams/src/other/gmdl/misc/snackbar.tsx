import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SNACKBAR = {
  _style:
    'shape=rect;strokeColor=none;fillColor=#333333;fontColor=#FFFFFF;align=left;spacing=16;fontSize=13;spacingLeft=8;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 48,
}

export function Snackbar(props: DiagramNodeProps) {
  return <Shape {...SNACKBAR} {...props} />
}
