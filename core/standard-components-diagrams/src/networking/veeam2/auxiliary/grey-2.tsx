import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GREY_2 = {
  _style:
    'align=left;verticalAlign=middle;fontFamily=Tahoma;fillColor=#d9d9d9;strokeColor=none;fontColor=#ffffff;strokeWidth=2;html=1;whiteSpace=wrap;spacing=6;fontStyle=0',
  _width: 150,
  _height: 110.00000000000001,
}

export function Grey2(props: DiagramNodeProps) {
  return <Shape {...GREY_2} {...props} />
}
