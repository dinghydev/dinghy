import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESOURCE_GUARD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Resource_Guard.svg;strokeColor=none;',
  },
  _original_width: 56.64,
  _original_height: 68,
}

export function ResourceGuard(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCE_GUARD}
      {...props}
      _style={extendStyle(RESOURCE_GUARD, props)}
    />
  )
}
