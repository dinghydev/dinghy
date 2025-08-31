import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIRE_TV_STICK = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.firetv_stick;',
  _width: 78,
  _height: 34,
}

export function FireTvStick(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIRE_TV_STICK}
      {...props}
      _style={extendStyle(FIRE_TV_STICK, props)}
    />
  )
}
