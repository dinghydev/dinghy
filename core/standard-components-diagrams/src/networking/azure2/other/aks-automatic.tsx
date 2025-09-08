import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AKS_AUTOMATIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AKS_Automatic.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AksAutomatic(props: DiagramNodeProps) {
  return (
    <Shape
      {...AKS_AUTOMATIC}
      {...props}
      _style={extendStyle(AKS_AUTOMATIC, props)}
    />
  )
}
