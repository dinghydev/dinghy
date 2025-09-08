import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MANAGED_MS_AD = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.managed_ms_ad;',
  },
  _original_width: 78,
  _original_height: 77,
}

export function ManagedMsAd(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_MS_AD}
      {...props}
      _style={extendStyle(MANAGED_MS_AD, props)}
    />
  )
}
