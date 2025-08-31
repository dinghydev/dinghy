import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_PROTECTION = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Content_Protection.svg;strokeColor=none;',
  _width: 45,
  _height: 50,
}

export function ContentProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_PROTECTION}
      {...props}
      _style={extendStyle(CONTENT_PROTECTION, props)}
    />
  )
}
