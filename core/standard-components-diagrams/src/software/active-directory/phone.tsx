import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHONE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/phone.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 39.5,
}

export function Phone(props: DiagramNodeProps) {
  return <Shape {...PHONE} {...props} _style={extendStyle(PHONE, props)} />
}
