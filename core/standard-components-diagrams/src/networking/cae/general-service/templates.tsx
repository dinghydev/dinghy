import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPLATES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Templates.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 50,
}

export function Templates(props: DiagramNodeProps) {
  return (
    <Shape {...TEMPLATES} {...props} _style={extendStyle(TEMPLATES, props)} />
  )
}
