import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHAOS_STUDIO = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Chaos_Studio.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ChaosStudio(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHAOS_STUDIO}
      {...props}
      _style={extendStyle(CHAOS_STUDIO, props)}
    />
  )
}
