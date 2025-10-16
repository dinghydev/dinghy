import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESOURCE_EXPLORER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Resource_Explorer.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 56.00000000000001,
}

export function ResourceExplorer(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCE_EXPLORER}
      {...props}
      _style={extendStyle(RESOURCE_EXPLORER, props)}
    />
  )
}
