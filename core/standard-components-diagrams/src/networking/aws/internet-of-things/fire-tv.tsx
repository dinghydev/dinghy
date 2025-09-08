import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIRE_TV = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.firetv;',
  },
  _original_width: 78,
  _original_height: 55,
}

export function FireTv(props: DiagramNodeProps) {
  return <Shape {...FIRE_TV} {...props} _style={extendStyle(FIRE_TV, props)} />
}
