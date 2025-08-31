import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HYBRID_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_ecosystem/Azure_Hybrid_Center.svg;strokeColor=none;',
  _width: 68,
  _height: 48,
}

export function HybridCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...HYBRID_CENTER}
      {...props}
      _style={extendStyle(HYBRID_CENTER, props)}
    />
  )
}
