import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FONT = {
  _style: {
    entity:
      'align=left;verticalAlign=middle;fontFamily=Tahoma;strokeColor=#ECECEC;strokeWidth=2;html=1;whiteSpace=wrap;spacing=6;fontStyle=0',
  },
  _width: 150,
  _height: 110.00000000000001,
}

export function Font(props: DiagramNodeProps) {
  return <Shape {...FONT} {...props} _style={extendStyle(FONT, props)} />
}
