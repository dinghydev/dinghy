import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KAIZEN_LIGHTENING_BURST = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.kaizen_lightening_burst;',
  },
  _width: 0,
  _height: 40,
}

export function KaizenLighteningBurst(props: DiagramNodeProps) {
  return (
    <Shape
      {...KAIZEN_LIGHTENING_BURST}
      {...props}
      _style={extendStyle(KAIZEN_LIGHTENING_BURST, props)}
    />
  )
}
