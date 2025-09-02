import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAX = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/fax.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 37.5,
}

export function Fax(props: DiagramNodeProps) {
  return <Shape {...FAX} {...props} _style={extendStyle(FAX, props)} />
}
