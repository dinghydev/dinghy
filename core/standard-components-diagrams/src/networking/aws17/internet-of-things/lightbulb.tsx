import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIGHTBULB = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.lightbulb;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Lightbulb(props: DiagramNodeProps) {
  return (
    <Shape {...LIGHTBULB} {...props} _style={extendStyle(LIGHTBULB, props)} />
  )
}
