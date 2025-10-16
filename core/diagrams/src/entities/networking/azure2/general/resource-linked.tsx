import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESOURCE_LINKED = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Resource_Linked.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 72,
}

export function ResourceLinked(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCE_LINKED}
      {...props}
      _style={extendStyle(RESOURCE_LINKED, props)}
    />
  )
}
