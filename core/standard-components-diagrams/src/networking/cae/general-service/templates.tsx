import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPLATES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Templates.svg;strokeColor=none;',
  _width: 44,
  _height: 50,
}

export function Templates(props: DiagramNodeProps) {
  return (
    <Shape {...TEMPLATES} {...props} _style={extendStyle(TEMPLATES, props)} />
  )
}
