import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GUIDE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Guide.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Guide(props: DiagramNodeProps) {
  return <Shape {...GUIDE} {...props} _style={extendStyle(GUIDE, props)} />
}
