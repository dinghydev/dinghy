import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA_ON_DEMAND = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Media_On_Demand.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function MediaOnDemand(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIA_ON_DEMAND}
      {...props}
      _style={extendStyle(MEDIA_ON_DEMAND, props)}
    />
  )
}
