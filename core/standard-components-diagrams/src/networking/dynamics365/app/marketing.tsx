import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MARKETING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Marketing.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Marketing(props: DiagramNodeProps) {
  return (
    <Shape {...MARKETING} {...props} _style={extendStyle(MARKETING, props)} />
  )
}
