import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_BASELINES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Security_Baselines.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function SecurityBaselines(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_BASELINES}
      {...props}
      _style={extendStyle(SECURITY_BASELINES, props)}
    />
  )
}
