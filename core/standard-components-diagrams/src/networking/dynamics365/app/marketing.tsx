import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MARKETING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Marketing.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Marketing(props: DiagramNodeProps) {
  return (
    <Shape {...MARKETING} {...props} _style={extendStyle(MARKETING, props)} />
  )
}
