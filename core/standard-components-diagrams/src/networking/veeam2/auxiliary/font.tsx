import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FONT = {
  _style:
    'align=left;verticalAlign=middle;fontFamily=Tahoma;strokeColor=#ECECEC;strokeWidth=2;html=1;whiteSpace=wrap;spacing=6;fontStyle=0',
  _width: 150,
  _height: 110.00000000000001,
}

export function Font(props: DiagramNodeProps) {
  return <Shape {...FONT} {...props} />
}
