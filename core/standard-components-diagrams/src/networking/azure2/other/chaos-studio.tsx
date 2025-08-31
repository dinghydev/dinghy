import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHAOS_STUDIO = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Chaos_Studio.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
