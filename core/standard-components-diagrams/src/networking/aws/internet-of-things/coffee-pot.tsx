import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COFFEE_POT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.coffee_pot;',
  },
  _width: 60,
  _height: 60,
}

export function CoffeePot(props: DiagramNodeProps) {
  return (
    <Shape {...COFFEE_POT} {...props} _style={extendStyle(COFFEE_POT, props)} />
  )
}
